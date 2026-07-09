document.getElementById("c").addEventListener("click",function(){
    document.getElementById("calculator").value=""
})
document.getElementById("one").addEventListener("click",function(){
    document.getElementById("calculator").value += "1"
})
document.getElementById("two").addEventListener("click",function(){
    document.getElementById("calculator").value += "2"
})
document.getElementById("three").addEventListener("click",function(){
    document.getElementById("calculator").value += "3"
})
document.getElementById("four").addEventListener("click",function(){
    document.getElementById("calculator").value += "4"
})
document.getElementById("five").addEventListener("click",function(){
    document.getElementById("calculator").value += "5"
})
document.getElementById("six").addEventListener("click",function(){
    document.getElementById("calculator").value += "6"
})
document.getElementById("seven").addEventListener("click",function(){
    document.getElementById("calculator").value += "7"
})
document.getElementById("eight").addEventListener("click",function(){
    document.getElementById("calculator").value += "8"
})
document.getElementById("nine").addEventListener("click",function(){
    document.getElementById("calculator").value += "9"

})
document.getElementById("n").addEventListener("click",function(){
    document.getElementById("calculator").value += "0"
    
})
document.getElementById("plus").addEventListener("click",function(){
    document.getElementById("calculator").value += "+"
})
document.getElementById("multi").addEventListener("click",function(){
    document.getElementById("calculator").value += "*"

})
document.getElementById("divide").addEventListener("click",function(){
    document.getElementById("calculator").value += "/"
})

document.getElementById("percent").addEventListener("click",function(){
    document.getElementById("calculator").value += "%"
})
document.getElementById("minus").addEventListener("click",function(){
    document.getElementById("calculator").value += "-"

})


document.getElementById("equal").addEventListener("click",function(){

var value = document.getElementById("calculator").value

if(value != "")
{
document.getElementById("calculator").value = eval(value)
}

})
    document.getElementById("cancil").addEventListener("click",function(){
    var value = document.getElementById("calculator").value
    document.getElementById("calculator").value = value.slice(0,-1)
})