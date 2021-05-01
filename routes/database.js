const express = require('express');
const router = express.Router();

const tblEMP = require('../controllers/tblEMP')

const validation = require('../validation/schema');
const validateDto = require('../validation/validation');


router.post('/interview/addusers', validateDto(validation), tblEMP.addtblEMP);
router.get('/interview/getusers', tblEMP.gettblEMP);
router.get('/interview/getusersbyid', tblEMP.gettblEMPbyid);
router.put('/interview/updateusers', tblEMP.updatetblEMP);
router.delete('/interview/deleteusers', tblEMP.deletetblEMP);



module.exports = router