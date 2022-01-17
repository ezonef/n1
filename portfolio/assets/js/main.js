
let mainHeading = document.querySelector('h1')
let changeBTN = document.querySelector('button') 
let bgc = document.querySelector('body') 

mainHeading.style.color = 'green'




function changeColor () {
    let red = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let red1 = Math.floor(Math.random()*255)
    let blue2 = Math.floor(Math.random()*255)
    let green3 = Math.floor(Math.random()*255)
  bgc.style.background = `rgb(${red1},${green3},${blue2})`
  mainHeading.style.color = `rgb(${red},${green},${blue})`
changeBTN.innerHTML

}

        // var age = prompt('Сторона ровна',16);
        // alert(`Периметр квадрата ${age*4}`);


        // //2 zadacha
        // alert(`Площадь квадрата ${age**2}`);  
        // //3 zadacha
        // var a = prompt('Сторона ровна',10);
        // var b = prompt('Сторона ровна',3);
        // alert(`Периметр прямоугольника ${2*a+2*b}`);
        // alert(`Площадь прямоугольника ${a*b}`);
        // //4 
        // let p = 3.14
        // var d = prompt('diagonal',16);
        // alert(`l ravno ${d*p}`);
        // //5

        // var k = prompt('rebro kyba',10);

        // alert(`obem V = ${k**3}`);
        // alert(`Площадь poverhnosti ${6*k**2}`);

        // //6
        // var x = prompt('diagonal',16);
        // var y = prompt('diagonal',16);
        // var z = prompt('diagonal',16);
        // alert(`V =  ${x*y*z}`);
        // alert(`s =  ${2*(x*y+y*z+x*z)}`);
        // //7
        // var r = prompt('radius',16);
        // alert(`l =  ${2*p*r}`);
        // alert(`s =  ${p*r**2}`);

        // //8
        // var j = prompt('chislo',16);
        // var k = prompt('chislo',16);
        // alert(`sr =  ${(j+k)/2}`);
        // //9
        // //Math.sqrt(9)
        // var jk = prompt('chislo',16);
        // var kk = prompt('chislo',16);
        // alert(`sr kor =  ${Math.sqrt(a*b)}`);
        // //10
        // var jkk = prompt('chislo',16);
        // var kkk = prompt('chislo',16);
        // alert(`sum =  ${jkk+kkk}`);
        // alert(`sr kor =  ${jkk-kkk}`);
        // alert(`sr kor =  ${jkk**2+kkk*2}`);
        // alert(`sr kor =  ${jkk**2-kkk*2}`);
//25
// var xx = prompt('chislo',16);
// alert(`y =  ${3*xx**6-6*xx**2-7}`);
//31
// var ff = prompt('farengate',16);
// alert(`T =  ${((ff-32)*5)/9}`);
//26
     var xx = prompt('chislo',16);
     alert(`y =  ${4*(xx-3)**6-7*(xx-3)**3+2}`);