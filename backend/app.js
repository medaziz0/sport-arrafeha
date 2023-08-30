const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const session = require("express-session"); 
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
app.use('/images', express.static(path.join('backend/images')))

const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
 }
 const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
  const isValid = MIME_TYPE[file.mimetype];
  let error = new Error("Mime type is invalid");
  if (isValid) {
  error = null;
  }
  cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
  const name = file.originalname.toLowerCase().split(' ').join('-');
  const extension = MIME_TYPE[file.mimetype];
  const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
 extension;
  cb(null, imgName);
  }
 });
 const secretKey = 'Croc2023Venus';
 app.use(session({
 secret: secretKey,
 }))

//models Importation
const MatchModel = require("./models/match");
const PlayerModel = require("./models/player");
const TeamModel = require("./models/team");
const IMCModel = require("./models/imc");
const { match } = require("assert");
const imc = require("./models/imc");
const User = require("./models/user");


// DB simulation
let matchesTab = [
  { id: 1, scoreOne: 3, scoreTwo: 0, teamOne: "FCB", teamTwo: "RMD" },
  { id: 2, scoreOne: 0, scoreTwo: 2, teamOne: "JUV", teamTwo: "ROM" },
  { id: 3, scoreOne: 1, scoreTwo: 1, teamOne: "ATM", teamTwo: "SEV" },
  { id: 4, scoreOne: 2, scoreTwo: 3, teamOne: "LIV", teamTwo: "INT" },
  { id: 5, scoreOne: 4, scoreTwo: 5, teamOne: "CA", teamTwo: "EST" },
];
let teamTab = [
  {id: 1, name: "FCB", owner: 0, stadium: "CampNou"},
  {id: 2, name: "FBC", owner: 2, stadium: "AliensArena"}, 
  {id: 3, name: "RMD", owner: 1, stadium: "SantiagoBernabio"}, 
  {id: 4, name: "INT", owner: 5, stadium: "sansero"}, 
];
let playersTab = [
  { id: 1, name: "cristiano", age: 0, position: "Butteur" },
  { id: 2, name: "messi", age: 2, position: "Aillier" },
  { id: 3, name: "mbappe", age: 1, position: "Aillier" },
  { id: 4, name: "neymar", age: 100, position: "goal" },
];

function generateId(t) {
  if (t.length == 0) {
    return 1;
  } else {
    var max = t[0].id;
    for (let i = 1; i < t.length; i++) {
      if (t[i].id > max) {
        max = t[i].id;
      }
    }
    return max+1;
  }
}

app.get("/matches", (req, res) => {
  console.log("here into BL : Get ALL Matches");
  MatchModel.find().then((data)=>{
    res.json({ matches: data });
  })
});
app.get("/matches/:id", (req, res) => {
  console.log("here into BL : Get Matches By Id");
  let id = req.params.id;
  MatchModel.findOne({_id: id}).then((data)=>{
    res.json({match :data})
  })
});
app.delete("/matches/:id", (req, res) => {
  let id = req.params.id;
  MatchModel.deleteOne({_id:id}).then((data)=>{
    console.log("here data after delete", data);
    data.deletedCount == 1 ?
      res.json({msg :"delete with success"}):
      res.json({msg: "Not Deleted"});
    })
  })
app.post("/matches", (req, res) => {
  console.log("here ino BL: Add Match", req.body);
  let matchObj = new MatchModel (req.body);
  matchObj.save((err,doc)=>{
    console.log("here err",err );
    console.log("here doc",doc );
    err ? res.json({msg:"Error"}) :  res.json({ msg: "Added with Success" });
  });
});
app.put("/matches/", (req, res) => {
  console.log("here into BL: Edit Match");
  let newMatch = req.body;
  MatchModel.updateOne({_id:newMatch._id}, newMatch).then((data)=>{
    console.log("here data after update",data);
    data.nModified == 1 ?
    res.json({ msg: "Edited with Success" }):
    res.json ({msg:"not edited"});
  });
});
app.post("/matches/search", (req, res) => {
  let obj = req.body;
  let findedMatches = matchesTab.filter((elt) => {
    return elt.scoreOne == obj.scoreOne || elt.scoreTwo == obj.scoreTwo;
  });
  res.json({ tab: findedMatches });
});



app.get("/players", (req, res) => {
  console.log("here into BL : Get ALL players");
  PlayerModel.find().then((data)=>{
    res.json({ players: data });
  })
});
app.get("/players/:id", (req, res) => {
  console.log("here into BL : Get players By Id");
  let id = req.params.id;
  PlayerModel.findOne({_id:id}).then((data)=>{
    res.json({player:data});
  });
  // if (findedMatch) {
  //   res.json({match:findedMatch});
  // } else {
  //   res.json({msg: "Not Found", match:findedMatch})
  // }
});
app.delete("/players/:id", (req, res) => {
  let id = req.params.id;
  PlayerModel.deleteOne({_id:id}).then((data)=>{
    res.json({msg:"deleted with success"})
  })
});
app.post("/players", (req, res) => {
  console.log("here ino BL: Add Match", req.body);
  let playerObj = new PlayerModel(req.body);
  playerObj.save();
  res.json({ msg: "Added with Success" });
});
app.put("/players/", (req, res) => {
  console.log("here into BL: Edit Match");
  let newPlayers = req.body;
  PlayerModel.updateOne({_id:newPlayers._id}, newPlayers).then((data)=>{
    res.json({ msg: "Edited with Success" });
  })
});



app.get("/teams", (req, res) => {
  console.log("here into BL : Get ALL teams");
  TeamModel.find().then((data)=>{
    res.json({ teams: data });
  })
});
app.get("/teams/:id", (req, res) => {
  console.log("here into BL : Get teams By Id");
  let id = req.params.id;
  TeamModel.findOne({_id:id}).then((data)=>{
    res.json({team:data});
  });
  // if (findedMatch) {
  //   res.json({match:findedMatch});
  // } else {
  //   res.json({msg: "Not Found", match:findedMatch})
  // }
});
app.delete("/teams/:id", (req, res) => {
  let id = req.params.id;
  TeamModel.deleteOne({_id:id}).then((data)=>{
    res.json({msg:"deleted with success"})
  })
});
app.post("/teams", (req, res) => {
  console.log("here ino BL: Add teams", req.body);
  let teamObj = new TeamModel(req.body);
  teamObj.save();
  res.json({ msg: "Added with Success" });
});
app.put("/teams", (req, res) => {
  console.log("here into BL: Edit Match");
  let newTeam = req.body;
  TeamModel.updateOne({_id:newTeam._id}, newTeam).then((data)=>{
    res.json({ msg: "Edited with Success" });
  })
});


app.post("/players/searchPlayer", (req, res) => {
  console.log("here into BL : Get search-player By Id");
  let p = req.body;
  let findedPlayers = playersTab.filter((obj)=>{
    return obj.name==p.name || obj.age==p.age;
  })
  res.json({players:findedPlayers})
});
app.post("/imc", (req, res) => {
  console.log("here into BL ",req.body);
  let imc = req.body.poidFE/(req.body.taille* req.body.taille*0.0001);
  const obj = new IMCModel({
    name: req.body.nameFE,
    taile: req.body.tailleFE,
    poid: req.body.poidFE,
    imcValue: imc
  })
  let msg ="";
  if (imc <=18.5) {
    msg="Insuffisance pondérale (maigreur)"
  } else if(imc>18.5 && imc <=25) {
    msg="Corpulence normale"
  } else if (imc > 25 && imc<=30){
    msg="Surpoids"
  }else {
    msg="take care!"
  }
  obj.save((err,doc)=>{
    if(doc){
      res.json({msg :msg});
    }else {
      res.json({msg :err});
    }
  })
});
app.post("/weather",(req,res)=>{
  console.log("here into BL:" ,req.body.city);
  const key = "d5d3ddec4113781ddd2a40f206ca75d5"
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`
  axios.get(weatherURL).then((apiResponse)=>{
    let data = apiResponse.data;
    let result={
      temperature:data.main.temp,
      humidity:data.main.humidity,
      pressure:data.main.pressure,
      windSpeed:data.wind.speed,
      icon:`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    }
    console.log("here result",result);
    res.json({"result":result})
  });
});
app.post("/users/signup", multer({ storage: storage }).single('img'),(req,res)=>{
  bcrypt.hash(req.body.pwd,10).then((cryptedPwd)=>{
    console.log("here crypted pwd",cryptedPwd);
    req.body.pwd = cryptedPwd;
    req.body.avatar = "http://localhost:3000/images/"+req.file.filename;
    console.log("file name",req.file.filename);
    let user = new User(req.body);
    user.save((err,doc)=>{
      console.log("here error",err)
      console.log("here doc",doc)
    if(err){
      if(err.errors.email){
        res.json({msg:"0"})
      }
    }else{
        res.json({msg:"success"})
    }
  });
});
});
app.post("/users/login",(req,res)=>{
  let user;
  console.log("here into BL:login",req.body);
  User.findOne({email:req.body.email})
  .then((doc)=>{
    console.log("here doc after searching By email",doc);
    if (!doc) {
      res.json({msg:"please check your email"})
    } else {
      user = doc;
      return bcrypt.compare(req.body.pwd, doc.pwd);
    }
  })
  .then((pwdResult)=>{
    console.log("here pwdResult", pwdResult);
    if (!pwdResult) {
      res.json({msg:"Please check your PWD"});
    } else {
      let userToSend = {
        id:user._id,
        fName: user.firstName,
        lName:user.lastName,
        role:user.role,
      };
      const token = jwt.sign(userToSend, secretKey, { expiresIn:
        '1h' })
      res.json({result:token, msg:"success"});
    }
  });
});
module.exports = app;
