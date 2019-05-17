let express = require('express');
let router = express.Router();
/**
 * @api {delete} /api/user/user-delete Remove a task
 * @apiGroup User
 * @apiParam {string} idNummer idNummer
 * @apiParam {string} Vorname Vorname
 * @apiParam {string} Nachname Nachname
 * @apiParam {string} Email Email
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response
 *    HTTP/1.1 204 No Content
 * @apiErrorExample {json} Delete error
 *    HTTP/1.1 500 Internal Server Error
 * @apiSampleRequest http://localhost:3000/removeuser
 * @apiVersion 1.0.0
 */


router.post('/searchperson', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userNachname = req.body.usernachname;
	
    // Set our collection
    var collection = db.get('newcollection');

    // Submit to the DB
    collection.findOne({
        "username" : userName,
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
	const jade = require('jade');

        var str = jade.renderFile('./views/searchresult.jade',{pretty:true,doc});

        console.log(str);
    });
});


module.exports = router;
