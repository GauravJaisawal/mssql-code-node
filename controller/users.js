"use strict";

const { UsersQuery } = require('../model');
const sql = require('../config/ms-sql')

exports.getUser = async (req, res) => {
    try {
        const id = req.query.id;
        const query = UsersQuery.getUserByUserID(id);
        sql.query(query,(err,data)=>{
            if(err)
                throw err;
            res.status(200).send({ success: true, data : data });
        });
    }catch(ex){
        console.log(ex)
        res.status(500).send({ success: false, msg: "Something went wrong in Get User data ", err: ex });
    }
}

exports.valiDateUser = async (req, res) => {
    //const userService = model.users
    try {
        const  { userName , password } = req.body;
        const query = UsersQuery.getUserByUserNamePassord( userName , password);
        sql.query(query,(err,data)=>{
            if(err)
                throw err;
            if(data && data.length)
                res.status(200).send({ success: true, messege :'Sucess' }); 
            else 
             res.status(200).send({ success: false, message : 'Please check Username or Password' }); 
        });
    }catch(ex){
        console.log(ex)
        res.status(500).send({ success: false, msg: "Something went wrong to Validate User", err: ex });
    }
}



