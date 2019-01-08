
const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const PORT = 3001
const bcrypt = require('bcrypt');
var cors = require('cors')
const pgp= require('pg-promise')()
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
  db.one('SELECT userid,username,email,password,usertype FROM users WHERE email = $1',[email]).then((user)=>{
 console.log(user)
 res.json('This email is already taken. Please try with different credential!')

 }).catch((error)=>{
 console.log(error)
 if(error.code == 42703 || error.received == 0){
   bcrypt.hash(password, 10, function(err, hash) {

         if(hash) {
             db.none('INSERT INTO users (username,email,password,usertype) VALUES ($1,$2,$3,$4)',[username,email,hash,userType]).then(()=>{
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
  db.one('SELECT userid,email,password,username,usertype FROM users WHERE email = $1',[email]).then((response)=>{
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
