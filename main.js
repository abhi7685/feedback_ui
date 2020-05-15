const imgs = document.querySelectorAll(".i")
const btn = document.querySelector('#btn')
const msg= document.querySelector('#msg')
const container = document.querySelector('.container')
imgs.forEach(img =>{
    img.addEventListener('click',handleClick)
})

function handleClick(e){
    msg.innerHTML=""
    imgs.forEach(img =>{
        img.id="unselect"
    })
    if(e.target.parentElement.classList.contains("i")){
        e.target.parentElement.id="select"
    }
}

btn.addEventListener('click',()=>{
    let count=0
    imgs.forEach(img =>{
        if(img.id==="select"){
           count++ 
        }
        })
    if(count===0){
       msg.innerHTML="Select a feedback"
       msg.style.color ="red"
    }
    else if(count===1){
        container.innerHTML=
         `
         <div id="aftersubmit">
         <p> Thank you</p>
         <p> We'll use your feedback to improve our customer support performance.</p>
         </div>
         `
         
        
    }
})