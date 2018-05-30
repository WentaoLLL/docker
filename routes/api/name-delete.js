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
