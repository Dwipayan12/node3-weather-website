const axios = require("axios").default
const request=require("request")

const forecast=(latitude,longitude, callback)=>{
    const axis=latitude+","+longitude
    
    //console.log(axis)
    var options = {
        method: 'GET',
        json:true,
        url: 'https://weatherapi-com.p.rapidapi.com/current.json?q='+axis,
        headers: {
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
          'x-rapidapi-key': 'b52e594d1fmsh83a5320f718498cp170aadjsnd04b3ac2cb1e'
        }
      };

 axios.request(options).then( function (response) {
     //console.log(response.data.current.temp_c)
     callback(JSON.stringify(response.data.current.temp_c))
      
  }).catch(function (error) {
  console.log('unable to connect with weather service')
  })
 // axios.request(options).then((response)=>console.log(response.data.current.temp_c))
   //console.log(Promise.resolve(rsp))
  
  //  request(options, function(err,res){
  //    if(err){
  //      return err
  //    }else{
  //      return JSON.stringify(res.body.current.temp_c)
  //    }
  //  })


}

module.exports=forecast