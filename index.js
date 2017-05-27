const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const connection = require("express-myconnection");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(
  session({
    secret: "&$77a%-aam8nshxiab$&&",
    resave: false,
    saveUninitialized: true
  })
);
app.use(
  connection(mysql, {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "forfun"
  }, "request")
);

// #
app.post("/login", function(req, res) {

  if(req.session.user) {
    return res.json({status: "logged"});
  }
  
  const name  = req.body.name;
  const pass  = req.body.pass;
  const query = "SELECT * FROM users WHERE name='"+name+"' AND pass='"+pass+"';";
  /*
  if(!req.session.user && name && pass) {
    return res.json({status: "empty"});
  }*/
  
  req.getConnection(function(err, conn) {
    conn.query(query, function(err, results) {
    
      if(err) { res.json(err); }
      
      if(results && results.length) {  
        req.session.user = results[0]
        
        app.use(["/user"], function(req2, res2, next) {
          req2.session = req.session;
          next();
        });
        
        res.json({status: "logged"});
      }
      else {
        res.json({status: "none"});
      }
    });
  });
  
});

// #
app.post("/exit", function(req, res) {
  req.session.destroy(function(err) {
    if(err) return res.json({status: "ERROR"});
    res.json({status: "OK"});
  });
});

// #
app.post("/register", function(req, res) {
  const b = req.body;
      
  const query = ""
    + "INSERT INTO users "
    + "(name, pass, age, sex, country, state, birthday)"
    + "VALUES ('"+b.name+"','"+b.pass+"',"+b.age+",'"+b.sex+"','"+b.country+"','"+b.state+"','"+b.birthday+"');";

  req.getConnection(function(err, conn) {
    if(err) console.log(err);
    conn.query(query, function(err, results) {
      if(err) { res.json(err); }
      res.json({status: "OK"});
    });
  });
  
});

// #
const query = function(p) {
  return(
    "INSERT INTO posts "
  + "(userid, body) "
  + "VALUES ("+p.user+", '"+p.body+"');"
  );
}

app.post("/post", function(req, res) {
 
  const q = query({
    user: req.session.user.name,
    body: req.body.body
  });
  
  return res.json({query: query});
  
  req.getConnection(function(err, conn) {
    conn.query(q, function(err, results) {
      res.json({status: "OK"});
    });
  });
  
});

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, "public", "index.html"))
});

app.listen(port)
console.log("server started on port " + port);




