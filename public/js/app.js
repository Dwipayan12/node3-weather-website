const weatherform=document.querySelector('form')
const search=document.querySelector('input')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const loc=search.value
   console.log(loc)
   if(loc!=null){
   fetch('https://localhost:3000/weather?address=' + loc)
   }
})