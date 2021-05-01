const mysql = require('mysql');
let dbConnection = null;



async function dbInitializtion() {

    try {
        dbConnection = mysql.createConnection({
            host: "localhost",
            user: "interview",
            password: "Hmpatel@123",
            database: "interview",
            multipleStatements: true
        });

        await dbConnection.connect()
    } catch (error) {
        console.log("ERROR: ", error)
    }
}

function dbCon() {
    return dbConnection
}



module.exports = { dbInitializtion, dbConnection, dbCon }
