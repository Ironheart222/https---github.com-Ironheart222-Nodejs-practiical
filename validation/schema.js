const yup = require('yup');
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
module.exports = yup.object().shape({
    FirstName: yup.string().required(),
    LastName: yup.string().required(),
    Email: yup.string().required().email(),
    MobileNo: yup.string().required().matches(phoneRegExp, 'Phone number is not valid'),
    RegistrationDate: yup.date().required(),
    CountryID: yup.string().required().min(3),
    StateID: yup.string().required(),
    CityID: yup.string().required()
});