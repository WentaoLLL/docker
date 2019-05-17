var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'DockerTest' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
	res.render('helloworld', { title: 'Hello, World!' })
});

/* GET Userlist page. */
router.get('/namelist', function(req, res) {
    var db = req.db;
    var collection = db.get('newcollection');
    collection.find({},{},function(e,docs){
        res.render('namelist', {
            "namelist" : docs
        });
    });
});

/* GET New User page. */
router.get('/newname', function(req, res) {
    res.render('newname', { title: 'Add New Name' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var idNummer = req.body.idNummer;
    var userName = req.body.username;
    var userNachname = req.body.usernachname;
    var userEmail = req.body.useremail;
    var userRaum = req.body.userraum;
	
    // Set our collection
    var collection = db.get('newcollection');

    // Submit to the DB
    collection.insert({
   	"idNummer" : idNummer,
        "username" : userName,
        "usernachname" : userNachname,
        "email" : userEmail,
	"raum" : userRaum
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            //res.location("userlist");
            // And forward to success page
            res.redirect("namelist");
        }
    });
});


/* POST to Search User Service */
router.post('/searchperson', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userNachname = req.body.usernachname;
	
    // Set our collection
    var collection = db.get('newcollection');

    // Submit to the DB
    collection.find({
        "username" : userName;
        "usernachname" : userNachname
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            //res.location("userlist");
            // And forward to success page
            res.redirect("searchresult");
        }
    });
});


router.post('/removeuser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var idNummer = req.body.idNummer;

    // Set our collection
    var collection = db.get('newcollection');

    // Submit to the DB

    collection.remove({
        "idNummer" : idNummer
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem removing the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            //res.location("userlist");
            // And forward to success page
            res.redirect("namelist");
        }
    });
});

module.exports = router;
