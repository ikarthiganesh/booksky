// selecting box,overlay,button
var o=document.querySelector(".overlay")
var b=document.querySelector(".box")
var btn=document.getElementById("add-popup-button")

btn.addEventListener("click",function(){
    o.style.display="block"
    b.style.display="block"
})

//selecting cancel button
var c=document.getElementById("cancel")

c.addEventListener("click",function(event){
    event.preventDefault()
    o.style.display="none"
    b.style.display="none"
})

//selecting container,book,title,author,description
var cont=document.querySelector(".container")
var add_book=document.getElementById("add")
var tit=document.getElementById("title")
var au=document.getElementById("author")
var des=document.getElementById("description")

add_book.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${tit.value}</h2>
    <h5>${au.title}</h5>
    <p>${des.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    cont.append(div)
    o.style.display="none"
    b.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}