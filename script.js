window.addEventListener('DOMContentLoaded', function () {
    let plus = document.querySelectorAll('.plus'),
        minus = document.querySelectorAll('.minus'),
        number = document.querySelectorAll('.main__product-num'),
        summa = document.querySelectorAll('.main__product-price'),
        calors = document.querySelectorAll('.main__product-kcall'),
        addCart = document.querySelector('.addCart'),
        closeBtn = document.querySelector('.receipt__window-btn'),
        divCart = document.querySelector('.active');



    

    let number1 = 0;
    let summa1 = 0;
    let calor1 = 0;


    let number2 = 0;
    let summa2 = 0;
    let calor2 = 0;


    let number3 = 0;
    let summa3 = 0;
    let calor3 = 0;

    console.log(plus[0]);


    plus[0].addEventListener('click', function () {
        if (number[0] == 0) {
            number1 = 0
        }
        else {
            number1++
        }
        number[0].textContent = `${number1}`

        if (number[0] == 0) {
            summa1 = 0
        }
        else {
            summa1 += 10000
        }
        summa[0].textContent = `${summa1} sum`

        if (number[0] == 0) {
            calor1 = 0
        }
        else {
            calor1 += 400
        }

        calors[0].textContent = `${calor1} calories`

    })
    minus[0].addEventListener('click', function () {
        if (number1 == 0) {
            number1 = 0
        }
        else {
            number1--
        }

        number[0].textContent = `${number1}`

        if (number1 == 0) {
            summa1 = 0
        }
        else {
            summa1 -= 10000
        }
        summa[0].textContent = `${summa1} sum`

        if (number1 == 0) {
            calor1 = 0
        }
        else{
            calor1 -= 400
        }
        calors[0].textContent = `${calor1} calories`
    })

    plus[1].addEventListener(`click`, function () {
        if (number[1] == 0) {
            number2 = 0
        }
        else {
            number2++
        }
        number[1].textContent = `${number2}`

        if (number[1] == 0) {
            summa2 = 0
        }
        else {
            summa2 += 20500
        }
        summa[1].textContent = `${summa2} sum`

        if (number[1] == 0) {
            calor2 = 0
        }
        else {
            calor2 += 800
        }

        calors[1].textContent = `${calor2} calories`
    })


    minus[1].addEventListener(`click`, function () {
        if (number2 == 0) {
            number2 = 0
        }
        else {
            number2--
        }


        number[1].textContent = `${number2}`


        if (number2 == 0) {
            summa2 = 0
        }
        else {
            summa2 -= 20500
        }
        summa[1].textContent = `${summa2} sum`



        if (number2 == 0) {
            calor2 = 0
        }
        else {
            calor2 -= 800
        }
        calors[1].textContent = `${calor2} calories`

    })

    plus[2].addEventListener(`click`, function () {
        if (number[2] == 0) {
            number3 = 0
        }
        else {
            number3++
        }
        number[2].textContent = `${number3}`

        if (number[2] == 0) {
            summa3 = 0
        }
        else {
            summa3 += 31900
        }
        summa[2].textContent = `${summa3} sum`

        if (number[2] == 0) {
            calor3 = 0
        }
        else {
            calor3 += 1300
        }

        calors[2].textContent = `${calor3} calories`
    })



    minus[2].addEventListener(`click`, function () {
        if (number3 == 0) {
            number3 = 0
        }
        else {
            number3--
        }
        number[2].textContent = `${number3}`

        if (number3 == 0) {
            summa3 = 0
        }
        else {
            summa3 -= 31900
        }
        summa[2].textContent = `${summa3} sum`





        if (number3 == 0) {
            calor3 = 0
        }
        else {
            calor3 -= 1300
        }
        calors[2].textContent = `${calor3} calories`

    })

    let burger1 = document.querySelector(`.burger1`),
        burger2 = document.querySelector(`.burger2`),
        burger3 = document.querySelector(`.burger3`),
        summma = document.querySelector(`.summma`),

        calorss = document.querySelector(`.calorss`);


    let summa4 = 0;
    let calor4 = 0;



    addCart.addEventListener('click', function () {
        divCart.style.display = 'block'


        summa4 = summa1 + summa2 + summa3;
        summma.textContent = `${summa4} sum`


        calor4 = calor1 + calor2 + calor3;
        calorss.textContent = `${calor4} calories`

        burger1.textContent = `Gamburger :  ${number1}x`
        burger2.textContent = `Gamburger Fresh : ${number2}x`
        burger3.textContent = `Fresh Combo : ${number3}x`
    })

    closeBtn.addEventListener('click', function () {
        divCart.style.display = 'none'
    })



})












