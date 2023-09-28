let input1 = document.getElementById("input1")

let btn1 = document.getElementById("btn1")

let btn2 = document.getElementById("btn2")

let text = document.getElementById("text")

let newA = document.getElementById("new")

let h3 = document.getElementById("h3")

function add () {
    if(input1.value == ""){
        alert("plzz type something")
    }
    else{
        var li = document.createElement("li")
        li.innerHTML = `${input1.value}`
        text.appendChild(li)
        
        var span  = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)

        h3.style.display = "none"
        
        input1.value = ""
        saveData()
    }
    
    span.addEventListener('click',()=>{
        li.remove(0, -1)
        saveData();
    })

    li.addEventListener('click',()=>{
        li.classList.toggle('checked')
        saveData();
    })
}

btn2.addEventListener('click',()=>{
    text.innerHTML =  ""
    saveData();
})

function saveData () {
    localStorage.setItem("data",text.innerHTML) 
}

function getData () {
    text.innerHTML = localStorage.getItem("data")
}

getData()