let h2 = document.querySelector(".h2")
let text = document.querySelector(".text")
let in_inf = document.querySelector(".in_inf")
let btn = document.querySelector(".btn")
btn.style.display="none"
h2.style.display="block"
text.style.display="none"
let answer = document.querySelector("#answer")
let level = document.querySelector(".level")
let timer = document.querySelector(".timer")
let restart = document.querySelector(".restart")
let timer_name = document.querySelector(".timer_name")
let number_question = document.querySelector(".number_question")
let but_st = document.querySelector(".but_st")
let str
let res

level.innerHTML="1"
let gamewords = ['index', 'home', 'about', 'services', 'skills', 'teams', 'contact', 'category']
gamewords = gamewords.sort(() => 0.4 - Math.random())
let f_index = 0
let hashiv = {
    succses: 0,
    worning: 0

}
number_question.innerHTML=gamewords.length

function start() {

    res = gamewords[f_index]
    btn.style.display="block"
    h2.style.display="block"
    text.style.display="block"
    if (!res) {

        text.innerHTML = `
       <h6>sucsses:${hashiv.succses} </h6>
       <h6>worning:${hashiv.worning} </h6>
       `
        btn.style.display = "none"
        answer.style.display = "none"
        restart.style.display = "block"
        timer.style.display = "none"
        timer_name.style.display="none"
        but_st.style.display="none"
        clearInterval(str)
        return
    }
    let arr = res.split("")
    arr = arr.sort(() => 0.3 - Math.random()).join("")
    text.innerHTML = arr
timer.innerHTML="5"
    tim()
    if(timer.innerHTML ==="0"){
        timer.innerHTML="5"
        tim()
    }

}

// start()


function Next() {

    if (in_inf.value === gamewords[f_index]) {
        hashiv.succses++
        in_inf.value = ""
    } else {
        hashiv.worning++
        in_inf.value = ''
    }
    f_index++
    start()
    level.innerHTML++
    if(level.innerHTML==="9"){
        level.innerHTML="8"
    }

}


function Ageins() {
    level.innerHTML = "1"
    f_index = -1
    hashiv = {
        succses: 0,
        worning: 0

    }

    res = gamewords[f_index]
    f_index++

    btn.style.display = "block"
    answer.style.display = "block"
    restart.style.display = "none"
    timer.style.display = "block"
    timer_name.style.display="block"
    but_st.style.display="block"
    btn.style.display="none"
    h2.style.display="block"
    text.innerHTML = res



}

function tim(){
if(str){
    clearInterval(str)
}
     str = setInterval(function (){
        timer.innerHTML--
        if(timer.innerHTML==='0'){
            Next()

        }

    },1000)

}


function exit(){
    btn.style.display="none"
    text.style.display="none"
    clearInterval(str)
    timer.innerHTML="5"

    Ageins()

}