let div = document.createElement('div');
let body = document.querySelector('body');
let button = document.querySelector('button');

button.addEventListener("click", function(){

    fetch('https://api.chucknorris.io/jokes/random')
    .then(function (response){
       // console.log(response)
    return response.json();
   
})

.then(randomChuck => {
    div.innerHTML = randomChuck.value;
    body.appendChild(div);
    

    })
})

    
