const sql = require('../config/ms-sql')
class UsersQuery {
    static getUserByUserID(id){
        const query = `select * from tblUsers where pkUserID=\'${id}\'`;
        return query;
    }
    
    static getUserByUserNamePassord(id,password){
        const query = `select * from tblUsers where Username=\'${id}\' and Password = \'${password}\'`;
        return query;
    } 
}

module.exports = UsersQuery;
