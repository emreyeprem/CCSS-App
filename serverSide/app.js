const express = require('express')
const fileUpload = require('express-fileupload');
const SERVER_CONFIGS = require('./constants/server');

const configureServer = require('./server');
const configureRoutes = require('./routes');

const app = express();

configureServer(app);
configureRoutes(app);

//var bodyParser = require('body-parser')
const PORT = 3001

const bcrypt = require('bcrypt');
//var cors = require('cors')
//app.use(cors())
const pgp= require('pg-promise')()
//const fileUpload = require('express-fileupload');
const connectionString= {
    "host": "localhost",
    "port": 5432,
    "database": "ccss",
    "user": "postgres"
  };

const db = pgp(connectionString)
const jwt = require('jsonwebtoken')

//app.use(bodyParser.json())
//const dotEnv = require('dotenv').config()
app.use('/pdfFiles',express.static('pdfFiles'))
app.use(fileUpload());
// app.use(function(req, res, next) {
//   //
//   // res.header("Access-Control-Allow-Headers: Authorization")
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, Authorization,X-Requested-With, Content-Type, Accept");
//   next();
// });

app.listen(PORT, function(){
  console.log('Server is running...')
})



//---------------------------------------------------------------
app.post('/api/register',function(req,res){
  let username = req.body.username
  let email = req.body.email
  let password = req.body.password
  let userType = 'regular'
  let cartcount = 0
  db.one('SELECT userid,username,email,password,usertype FROM users WHERE email = $1',[email]).then((user)=>{

 res.json('This email is already taken. Please try with different credential!')

 }).catch((error)=>{
 console.log(error)
 if(error.code == 42703 || error.received == 0){
   bcrypt.hash(password, 10, function(err, hash) {

         if(hash) {
             db.none('INSERT INTO users (username,email,password,usertype,cartcount) VALUES ($1,$2,$3,$4,$5)',[username,email,hash,userType,cartcount]).then(()=>{
               res.json({success: true})
             })

         }

     })
   }
})
})



app.post('/api/login',function(req,res){
  let email = req.body.email
  let password = req.body.password

  db.one('SELECT userid,email,password,username,usertype,cartcount FROM users WHERE email = $1',[email]).then((response)=>{

    bcrypt.compare(password,response.password,function(error,result){
      if(result) {
        const token = jwt.sign({ id : response.userid },"somesecretkey")
        res.json({token: token, user: response})
      } else {
        res.json('The password you entered is incorrect!')
      }
    })
}).catch((error)=>{
  console.log(error)
if(error.received == 0){
   res.json('The email you entered is invalid!')
  }
})

})


app.post('/api/sellerregister',function(req,res){
 let nickname = req.body.nickname
 let paypalEmail = req.body.paypalEmail
 let usertype = req.body.usertype
 let userid = req.body.userid

 db.none('UPDATE users SET nickname=$1,paypalemail=$2,usertype=$3 WHERE userid = $4',[nickname,paypalEmail,usertype,userid]).then(()=>{
 console.log('update is successful')
 res.json({success:true})
 })

})


app.post('/api/listproduct',function(req,res){
  let rating = 'No rating yet'
  let description = req.body.description
  let grade=req.body.grade
  let subject=req.body.subject
  let standard=req.body.standard
  let keywords=req.body.keywords
  let title=req.body.title
  let resourcetype=req.body.resourcetype
  let price=req.body.price
  let userid = req.body.userid
  let fileurl = req.body.fileurl

db.one('insert into sellerproducts (rating,description,grade,subject,standard,keywords,title,resourcetype,price,userid,fileurl) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) returning productid',[rating,description,grade,subject,standard,keywords,title,resourcetype,price,userid,fileurl]).then((response)=>{
  // db.one('select productid from sellerproducts where fileurl=$1',[fileurl]).then((response)=>{
    res.json({success:true,productid:response.productid})
  //})

}).catch((error)=>{
  console.log(error)
  res.json(error)
})


})

//
//--------to generate random unique id for pdf files--------------
function guid() {
  return "ss-s-s-s-sss".replace(/s/g, s4);
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

//-------------to send pdf file to 'pdfFiles folder' inside server side------------------------------
app.post('/upload', (req, res, next) => {
let uniqueid = guid()
  let pdfFile = req.files.file;

  pdfFile.mv(`${__dirname}/pdfFiles/${uniqueid}.pdf`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }

      res.json({file: `pdfFiles/${uniqueid}.pdf#scrollbar=0&toolbar=0&pagemode=thumbs&zoom=50&view=FitH&navpanes=0`});
    });

})


app.get('/api/products/:productid',function(req,res){
  let productid = req.params.productid
  db.one('select * from sellerproducts where productid=$1',[productid]).then((response)=>{
    res.json(response)
  })
})
app.post('/api/getallreviews',function(req,res){
  let productid=req.body.productid
  db.any('select * from buyerproducts b left join users u on u.userid=b.userid where productid=$1 and status=$2',[productid,'sold']).then((response)=>{
    res.json(response)
  })
})
app.post('/api/getmyproducts',function(req,res){
  let userid= req.body.userid
  db.any('select * from sellerproducts where userid=$1',[userid]).then((response)=>{
    res.json(response)
  })
})

app.post('/api/sendtomycart',function(req,res){
  let userid = req.body.userid
  let productid = req.body.productid
  let cartcount = req.body.cartcount
  let count = parseInt(cartcount)+1
 console.log('Artirilmis count'+count)
  let status='await'
  db.none('insert into buyerproducts (userid,productid,status) values ($1,$2,$3)',[userid,productid,status]).then(()=>{
    db.one('update users set cartcount=$1 where userid=$2 returning cartcount',[count,userid]).then((count)=>{
       console.log('db den gelen count'+count.cartcount)
      res.json({success:true,cartcount:count})
    })
  })

})
app.post('/api/getcartitems',function(req,res){
  let userid=req.body.userid

  db.any('select * from buyerproducts b left join sellerproducts s on b.productid=s.productid left join users u on u.userid=s.userid where b.userid=$1 and status=$2',[userid,'await']).then((response)=>{
    let prices = response.map((each)=>{

      return parseFloat(each.price)
    })
    let total = prices.reduce((a,b)=>a+b,0).toFixed(2)

    res.json({response:response,total:total})
  })
})
app.post('/api/updatecartitems',function(req,res){
  let userid = req.body.userid
  let status = 'sold'
  db.none('update buyerproducts set status = $1 where userid=$2',[status,userid]).then(()=>{
    res.json({success:true})
  })
})
app.post('/api/deleteitem',function(req,res){
  let id=req.body.id
  let cartcount= req.body.cartcount
  let userid= req.body.userid
  db.none('delete from buyerproducts where id=$1',[id]).then(()=>{
    let count1 = parseInt(cartcount)-1
    db.one('update users set cartcount=$1 where userid=$2 returning cartcount',[count1,userid]).then((count2)=>{

      res.json({success:true,cartcount:count2.cartcount})
    })
  })
})
app.post('/api/searchby',function(req,res){
  let searchValue= req.body.searchValue.toLowerCase()

  db.any('select * from sellerproducts').then((response)=>{



    let searchArr= response.filter((each)=>{

return each.title.toLowerCase().includes(searchValue)==true || each.standard.toLowerCase().includes(searchValue)==true || each.keywords.toLowerCase().includes(searchValue)==true

    })
      console.log(searchArr)
      res.json(searchArr)
    })

})

app.post('/api/filterby',function(req,res){
    let filtereditem = req.body.filtereditem
    console.log(filtereditem)
db.any('select * from sellerproducts').then((response)=>{
      if(filtereditem=='Free'){
        let freeItems= response.filter((each)=>{
          return parseInt(each.price)== 0
        })
      res.json(freeItems)
    } else if(filtereditem == 'Under $5'){
        let lessThanFiveDollarItems= response.filter((each)=>{
          return parseInt(each.price) < 4.99
        })
        console.log(lessThanFiveDollarItems)
        res.json(lessThanFiveDollarItems)
    } else if(filtereditem == '$5 - $10'){
        let fiveToTenDollarItems= response.filter((each)=>{
          return parseInt(each.price) > 4.99 && parseInt(each.price) < 9.99
        })
        res.json(fiveToTenDollarItems)
    } else if(filtereditem == '$10 - $20'){
        let tenToTwentyDollarItems= response.filter((each)=>{
          return parseInt(each.price) > 9.99 && parseInt(each.price) < 19.99
        })
        res.json(tenToTwentyDollarItems)
    } else if(filtereditem == '$20 and up'){
        let moreThanTwentyDollarItems= response.filter((each)=>{
          return parseInt(each.price) > 19.99
        })
        res.json(moreThanTwentyDollarItems)
    } else if(filtereditem=='Assessment'){
      let assessment= response.filter((each)=>{
        return each.resourcetype=='Assessment'
      })
      res.json(assessment)
    } else if(filtereditem=='Activity'){
      let activity= response.filter((each)=>{
        return each.resourcetype=='Activity'
      })
      res.json(activity)
    } else if(filtereditem=='Worksheet'){
      let worksheet= response.filter((each)=>{
        return each.resourcetype=='Worksheet'
      })
      res.json(worksheet)
    } else if(filtereditem=='Project'){
      let project= response.filter((each)=>{
        return each.resourcetype=='Project'
      })
      res.json(project)
    } else if(filtereditem=='Poster'){
      let poster= response.filter((each)=>{
        return each.resourcetype=='Poster'
      })
      res.json(poster)
    }else{
    db.any('select u.nickname,u.userid,s.productid,s.rating,s.description,s.grade,s.resourcetype,s.subject,s.title,s.price,s.fileurl,s.standard from users u LEFT JOIN sellerproducts s on u.userid = s.userid where s.standard = $1',[filtereditem]).then((response)=>{
          res.json(response)
      }).catch((error)=>{
          console.log(error)
          res.json(error)
    })
  }
})
})
app.post('/api/updatestatus',function(req,res){
  let userid = req.body.userid
  db.none('update buyerproducts set status=$1 where userid=$2',['sold',userid]).then(()=>{

    res.json({success:true})
  })
})
app.post('/api/updatecartcount',function(req,res){
  let userid = req.body.userid
  let cartcount = req.body.cartcount
  console.log('userid: '+ userid)
  console.log('cartcount :' +cartcount)
  db.none('update users set cartcount=$1 where userid=$2',[0,userid]).then(()=>{
    res.json({success:true})
  })
})
app.post('/api/getmypurchases',function(req,res){
  let userid = req.body.userid
  db.any('select * from buyerproducts b left join sellerproducts s on s.productid=b.productid where status=$1 and b.userid=$2',['sold',userid]).then((response)=>{
    res.json(response)
  })
})
app.post('/api/sendFeedback',function(req,res){
  console.log('hey')
  let productreviewid = req.body.productreviewid
  let rating=req.body.rating
  let textvalue = req.body.textvalue
  let userid = req.body.userid
  let finalrating;
  db.one('select * from sellerproducts where productid=$1',[productreviewid]).then((response)=>{
    if(response.rating == 'No rating yet'){
      finalrating = rating
    }else{
      finalrating = (parseFloat(response.rating) + parseFloat(rating))/2
    }
        db.none('update sellerproducts set rating=$1 where productid=$2',[finalrating.toFixed(1),productreviewid])
        db.none('update buyerproducts set review=$1,rating=$2 where userid=$3 and productid=$4',[textvalue,finalrating,userid,productreviewid]).then(()=>{
          res.json({success:true})
        })
  })
})


app.get('/api/getpopularitems',function(req,res){
  db.any("select productid from buyerproducts where status=$1",['sold']).then((response)=>{
    console.log(response)
    res.json(response)
  }).catch((error)=>{
    res.json(error)
  })
})
