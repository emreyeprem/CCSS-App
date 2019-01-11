const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const PORT = 3001
const bcrypt = require('bcrypt');
var cors = require('cors')
const pgp= require('pg-promise')()
const fileUpload = require('express-fileupload');
const connectionString= {
    "host": "localhost",
    "port": 5432,
    "database": "ccss",
    "user": "postgres"
  };

const db = pgp(connectionString)
const jwt = require('jsonwebtoken')
app.use(cors())
// parse application/json
app.use(bodyParser.json())
app.use(fileUpload());
app.use(function(req, res, next) {
  //
  // res.header("Access-Control-Allow-Headers: Authorization")
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Authorization,X-Requested-With, Content-Type, Accept");
  next();
});

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
 console.log(user)
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
  console.log(email)
  console.log(password)
  db.one('SELECT userid,email,password,username,usertype,cartcount FROM users WHERE email = $1',[email]).then((response)=>{
    console.log(response)
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
  console.log(fileurl)
db.none('insert into sellerproducts (rating,description,grade,subject,standard,keywords,title,resourcetype,price,userid,fileurl) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',[rating,description,grade,subject,standard,keywords,title,resourcetype,price,userid,fileurl]).then(()=>{
  res.json({success:true})
})


})
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

  console.log(pdfFile)
  pdfFile.mv(`${__dirname}/pdfFiles/${uniqueid}.pdf`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }

      res.json({file: `pdfFiles/${uniqueid}.pdf`});
    });

})
