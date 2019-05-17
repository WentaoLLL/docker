let express = require('express');
let router = express.Router();

/**
 * @api {post} /api/user/input Input a User
 * @apiDescription Input a User
 * @apiName input
 * @apiGroup User
 * @apiParam {string} idNummer idNummer
 * @apiParam {string} Vorname Vorname
 * @apiParam {string} Nachname Nachname
 * @apiParam {string} Email Email
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *          "idNummer" : "idNummer"
 *          "Vorname" : "Vorname",
 *          "Nachname" : "Nachname",
 *          "Email" : "Email"
 *      }
 *  }
 * @apiSampleRequest http://localhost:3000/adduser
 * @apiVersion 1.0.0
 */
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



module.exports = router;

