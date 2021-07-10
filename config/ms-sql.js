const sql = require("msnodesqlv8");
const connectionString = "server=DESKTOP-FPOGD80;Database=Master;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

const conn = sql.open(connectionString, function(err,conn){
    if(err) {
        console.log("Error while connecting to DB :: "+err);
        return null;
    } 
    console.log('MS SQL Connected...')
   return conn;     
});

module.exports = conn;