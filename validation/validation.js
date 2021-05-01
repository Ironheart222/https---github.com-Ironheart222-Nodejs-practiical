const { json } = require('express');
const { dbCon } = require('../dbservices')
function validateDto(schema) {
    return async (req, res, next) => {
        try {
            const validateBody = await schema.validate(req.body);
            req.body = validateBody;
            next();
            
        } catch (ValidationError){
            return res.json(({ "status": false, "message": ValidationError.toString() }));
        }
    }
}
module.exports = validateDto;