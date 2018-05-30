let express = require('express');
let router = express.Router();


/**
 * @api {get} /api/user/name-list List all names
 * @apiGroup User
 * @apiSuccess {string} idNummer idNummer
 * @apiSuccess {string} Vorname Vorname
 * @apiSuccess {string} Nachname Nachname
 * @apiSuccess {string} Email Email
 * @apiSuccess {Boolean} names.done Task is done?
 * @apiSuccess {Date} names.updated_at Update's date
 * @apiSuccess {Date} names.created_at Register's date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "idNummer" : "idNummer",
 *      "Vorname" : "Vorname",
 *      "Nachname" : "Nachname",
 *      "Email" : "Email",
 *      "done": false
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 * @apiSampleRequest http://localhost:3000/namelist
 * @apiVersion 1.0.0
 */
router.post('/user/list', function (req, res, next) {

});


module.exports = router;
