////////////////// 1st interval//////////

let res = document.querySelector('#counter')
let count = 0;


function counterUp(){
    res.innerHTML = count++;

    if(count == 1000){
        clearInterval(interval)
    }
}
let interval = setInterval(function(){
    counterUp()
},10);







////////////////// 2nd interval//////////


let point = document.querySelector('#counter-two')
let countPoint = 0;


function counterUpTwo(){
    point.innerHTML = countPoint++;

    if(countPoint == 1000){
        clearInterval(intervals)
    }
}
let intervals = setInterval(function(){
    counterUpTwo()
},10);

////////////////// 3rd interval//////////

let respointer = document.querySelector('#Counter-three')
let Pointer = 0;


function counterUpThree(){
    respointer.innerHTML = Pointer++;

    if(Pointer == 1000){
        clearInterval(intervales)
    }
}
let intervales = setInterval(function(){
    counterUpThree()
},10);


////////////////////////////////Run & Stop intervels//////////////////////////////////
