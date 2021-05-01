const { dbCon } = require('../dbservices')

// POST
const addtblEMP = (req, res) => {



    let json_data = req.body;
   


    var sql1 = "SET @ID = ?;SET @FirstName = ?;SET @LastName = ?;SET @Email = ?;SET @MobileNo = ?;SET @Hobbies = ?;SET @Gender = ?;SET @RegistrationDate = ?;SET @CountryID = ?;SET @StateID = ?;SET @CityID = ?;\
             CALL addtblEMP(@ID,@FirstName,@LastName,@Email,@MobileNo,@Hobbies,@Gender,@RegistrationDate,@CountryID,@StateID,@CityID);";



    dbCon().query(sql1, [json_data.ID, json_data.FirstName, json_data.LastName, json_data.Email, json_data.MobileNo, json_data.Hobbies, json_data.Gender, json_data.RegistrationDate, json_data.CountryID, json_data.StateID, json_data.CityID], (err, rows) => {
        if (err) throw err;


    });
    res.status(200).json({ "message": "successfull", "status": true, "data": req.body })
}



//GET

//Get all 
const gettblEMP = (req, res) => {
    dbCon().query('CALL gettblEMP', (err, rows) => {
        if (!err)
            res.status(200).json({ "message": "successfull", "status": "true", "data": rows })
        else
            console.log(err);
    })
};

// Get by ID



const gettblEMPbyid = (req, res) => {
    let json_data = req.body;
    var sql2 = "SET @ID = ?;CALL gettblEMPbyid(@ID);";
    dbCon().query(sql2,[json_data.ID], (err, rows) => {
        if (!err)
            res.status(200).json({ "message": "successfull", "status": "true", "data": rows });
        else
            console.log(err);
    })
};


// Update an user
const updatetblEMP = async (req, res) => {
    let tblEMP = req.body;

    var sql3 = "SET @ID= ?,@FirstName= ?,@LastName= ?,@Email= ?,@MobileNo= ?,@Hobbies= ?,@Gender= ?,@RegistrationDate= ?,@CountryID= ?,@StateID= ?,@CityID= ?;\
                CALL updatetblEMP(@ID,@FirstName,@LastName,@Email,@MobileNo,@Hobbies,@Gender,@RegistrationDate,@CountryID,@StateID,@CityID);";
    dbCon().query(sql3, [tblEMP.ID, tblEMP.FirstName, tblEMP.LastName, tblEMP.Email, tblEMP.MobileNo, tblEMP.Hobbies, tblEMP.Gender, tblEMP.RegistrationDate, tblEMP.CountryID, tblEMP.StateID, tblEMP.CityID], (err, rows, fields) => {
        if (!err)
            res.status(200).json({ "message": "successfull", "status": true, "data": tblEMP });
        else
            console.log(err);
    })
};

// delete an user
const deletetblEMP = (req, res) => {

    let json_data = req.body;
    var sql4 = "SET @ID = ?;CALL deletetblEMP(@ID);";
    dbCon().query(sql4, [json_data.ID], (err, result) => {
        if (result.affectedRows == 0)
            return res.json({ "message": "user not found", "status": false });

        else (!err)
        res.json({ "message": "Delete successfull", "status": true, "data": [] });

    })



};



module.exports = {
    addtblEMP,
    gettblEMP,
    gettblEMPbyid,
    updatetblEMP,
    deletetblEMP
}