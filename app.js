
const path = require('path')
const express = require('express');
const app = express();

app.set('view engine','pug')
app.set('views','views');

const adminData = require('./routes/admin') 
const shopRoutes = require('./routes/shop')
// const bodyParser = require(body-parser)
//app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminData.routes);
app.use(shopRoutes);


app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'Page Not Found'})
})



app.listen(4000,function(){
    console.log("NodeJs project has started in 4000")
});

//batti aye pachi "npm install --save body-parser" garnu