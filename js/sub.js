const commonBtnn = document.querySelectorAll('.common-btn');
for(let i = 0; i<commonBtnn.length ; i++){
    const commonButton = commonBtnn[i]
    commonButton.addEventListener('click',function(event){

        const subBalencer = document.getElementById('sub-balence').innerText
        let convertSubBalencer = parseInt(subBalencer)
        if(convertSubBalencer > 0){
        convertSubBalencer  --
        document.getElementById('sub-balence').innerText = convertSubBalencer;
        
       }
       let disabb = commonButton.disabled = true;
       if(disabb === true){
         event.target.classList.add("bg-gray-300")
       }

         let addNumber = document.getElementById('Added').innerText
         let ConvertAddNumber = parseInt(addNumber)
         ConvertAddNumber ++   
         document.getElementById('Added').innerText = ConvertAddNumber;
        alert('Board Updated successfully')
        
        if(convertSubBalencer === 0){
            alert('congrates!!!You have complete all the current task')
        }
        
       

        
    })

   
}




function myfun(){
    
    const currentDate = new Date();
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let prepand = (hour >= 12) ? "PM" : "AM"
    hour = hour % 12 || 12;
    minutes = minutes.toString().padStart(2,"0")
    seconds = seconds.toString().padStart(2,"0")
    let timeri = ` ${hour}:${minutes}:${seconds} ${prepand }`
    const contain = document.getElementById('aside-container')

    const p = document.createElement("p");
    p.classList.add("h-16", "p-6","bg-[#F4F7FF]","mt-6","rounded-2xl", "flex","items-center")
    p.innerText = `${"You have complted the task "}${document.querySelector('.sola').innerText}${timeri}`
    contain.appendChild(p)
}
function myfun1(){
    const currentDate = new Date();
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let prepand = (hour >= 12) ? "PM" : "AM"
    hour = hour % 12 || 12;
    minutes = minutes.toString().padStart(2,"0")
    seconds = seconds.toString().padStart(2,"0")
    let timeri = ` ${hour}:${minutes}:${seconds} ${prepand }`
    const contain = document.getElementById('aside-container')
    const p = document.createElement("p");
     p.classList.add("h-16", "p-6","bg-[#F4F7FF]","mt-6","rounded-2xl", "flex","items-center")
    p.innerText = `${"You have complted the task "}${document.querySelector('.first-h2').innerText}${timeri}`
    contain.appendChild(p)

}
function myfun2(){

    const currentDate = new Date();
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let prepand = (hour >= 12) ? "PM" : "AM"
    hour = hour % 12 || 12;
    minutes = minutes.toString().padStart(2,"0")
    seconds = seconds.toString().padStart(2,"0")
    let timeri = ` ${hour}:${minutes}:${seconds} ${prepand }`
    const contain = document.getElementById('aside-container')
    const p = document.createElement("p");
    p.classList.add("h-16", "p-6","bg-[#F4F7FF]","mt-6","rounded-2xl", "flex","items-center")
    p.innerText = `${"You have complted the task "}${document.querySelector('.sec-h2').innerText}${timeri}`
    contain.appendChild(p)

    // p.innerText = `${"You have complted the task "}${document.querySelector('.sec-h2').innerText}`
    // contain.appendChild(p)
}
function myfun3(){
    const contain = document.getElementById('aside-container')
    const p = document.createElement("p");
    p.innerText = `${"You have complted the task "}${document.querySelector('.kola').innerText}`
    contain.appendChild(p)
}


document.getElementById('aside-container').style.display = "block"
document.getElementById('clear-btn').addEventListener('click',function(event){
    document.getElementById('aside-container').style.display = "none"
})


document.getElementById('change-color').addEventListener('click',function(event){
   event.preventDefault();
   const rendom = Math.floor(Math.random() * 16777215);
   const rendomCol = "#" + rendom.toString(16)
   document.getElementById('body-id').style.backgroundColor = rendomCol;

})
const updater = new Date();
const dayName= ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
const day = dayName[updater.getDay()]

const monthName = ["Janu","Feb","Mar","Apr","May","Jun","July","Aug","Sept","Oct","Nov","Dec"]
const month = monthName[updater.getMonth()]

const date =updater.getDate()
const year = updater.getFullYear()
document.getElementById("bar").innerText = `${day} ${","}`
document.getElementById("DMY").innerText = `${month} ${date} ${year}`

document.getElementById("div-btn").addEventListener('click',function(event){
   window.location.href = "../main.html"

})







