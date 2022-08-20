
let btn = document.getElementById('submitBtn');
let inputVal = document.getElementById('inputVal');


btn.addEventListener('click',(e)=>{
     console.log("Maa chuda")
     e.preventDefault()
     let val = inputVal.value
     console.log("val",val)
     let url = `https://rdwebdev.herokuapp.com/run?q=`+val
     fetch(url, {
        method : "GET",
        mode: 'no-cors'
     })
     .then((response) => response.json())
     .then((data) => console.log(data))
})