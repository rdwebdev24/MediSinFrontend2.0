
let btn = document.getElementById('submitBtn');
let inputVal = document.getElementById('inputVal');
let result = document.getElementById('result');


btn.addEventListener('click',(e)=>{
     console.log("Maa chuda")
     e.preventDefault()
     let val = inputVal.value
     console.log("val",val)
     let url = `https://rdwebdev.herokuapp.com/run?q=`+val
     
     fetch(url, {
        method : "GET",
        mode: 'cors'
     })
     .then((response) => response.json())
     .then((data) => result.innerText = data.res)
     .catch((error)=>result.innerText = error)
})