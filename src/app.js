const path=require('path')
const express=require('express')
const exphbs = require('express-handlebars')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const { json } = require('express')
const address=process.argv
console.log(__dirname)

const mainPath=path.join(__dirname,'../public')
const app=express()
const port= process.env.PORT
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultLayout: false
  })
);
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static(mainPath))

//app.use(express,json())
app.get('',(req, res)=>{
   res.render('index')
})

app.get('/help', (req,res) =>{
    res.render('help', {
        name:'Dwipayan'
    })
})
// app.get('**',(req,res)=>{
//        res.render('404')
// })

app.get('/weather',(req, res)=>{
const address=req.query.address
if(!address){
    res.render('index',{
      error: 'Please provide a address'
    })
}else{
    geocode(address, (error, data)=>{
        if(error){
            res.render('index',{
              error: error
            })
        }else{
               forecast(data.latitude,data.longitude,function(x){
                res.render('index',{
                  temp:x,
                   location:data.location
                  
                })
               })
                }
            })
        }
    })


app.listen(port, ()=>{
    console.log('Server is up on port 3000...')
})