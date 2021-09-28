const request=require('request')
const geocode=(address,callback) =>{
      const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZHdpcGF5YW4xMiIsImEiOiJja3RzZGhtYzgxZmJ0MnlwbjZmMjlpMDYyIn0.b79n1TkcP_7wkNlkMQoUNA'
      request({url: url,json: true},(error, response)=>{
      if(error){
           callback('There is a error...', undefined)
      }else if(response.body.features.length===0){
           callback('No City available', undefined)
      }else{
      
     callback(undefined,{
            latitude:response.body.features[0].center[1],
            longitude:response.body.features[0].center[0],
            location:response.body.features[0].place_name
      })
      }
})
}
module.exports=geocode