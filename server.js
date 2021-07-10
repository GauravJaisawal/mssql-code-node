


const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();


const PORT  = process.env.PORT || 3000;
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/api/v1',require('./route'))

//check the health status
app.get('/status', (req,res)=>{
    res.send({sucess : true});
})


const server = app.listen(PORT, function(err){
    if(err){
        console.error(err);
        process.exit(1);
    }else {
        process.send =  process.send ||  function() {};
        process.send('ready');
        console.log(`server started at http:\\localhost:${PORT}`)
    }
})

process.on('SIGINT', () => {
    server.close(()=>{
        console.log('server closed for incomming connection.')
        setTimeout(()=>{
            process.exit(0);
        },15000)
    })
});


module.exports = server;
