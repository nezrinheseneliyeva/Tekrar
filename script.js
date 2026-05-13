// let obyekt={
  
// ad:"Nezrin",
// soyad:"Heseneliyeva",
  
// }
// console.log(obyekt)

// let meyveler =["alma","armud", "banan"];

// console.log( "arraydaki deyer sayi:" ,meyveler.length);
// console.log( "ilk element :", meyveler[0]);
// console.log("son element :",meyveler [meyveler.length - 1]);
// meyveler.push("alca")
// console.log("alca elave olundu:" ,meyveler);
// meyveler.splice(-2,2 );
// console.log("son iki deyer silindi:",meyveler);

// let obyekt={

// ad:"Murad",
// soyad:"Heseneliyev",
// tehsil:"orta mekteb",

//  obyekt2 : {
//   ad:"Nezrin",
//   soyad:"Heseneliyeva",
//   tehsil:"Univeristet",
// },
// bacarıqlar:{
//   kolasdirma:["html","css","js"]
// }
// }
// console.log("obyekt yaradildi:",obyekt);
// console.log("obyekt daxilinde obyekt :", obyekt.obyekt2);
// console.log("obyekt daxilinde array :", obyekt.bacarıqlar);


// let istifadeciler=[
// {
//   id:"Nezrin",
//   ixtisas:"frontend"
// },
// {
//   id:"Murad",
//   ixtisas:"UI/UX"
// }
// ]
// console.log("array icinde obyekt:",istifadeciler);

// array yaratmaq

// let telebeler=["Sevda","Nezrin","Sebine","Aysel"];
// console.log(telebeler);
// console.log(telebeler[0]);
// telebeler.push("Murad");
// console.log(telebeler);

// // array icinde array
// let matris=[

// ["Nezrin","Aysel","Fidan"],

// ["Ayla","Bekir","Elnur"]
  
// ]
// console.log(matris);
// console.log(matris[1][2]);
// console.log(matris.join(","));
// console.log(matris[0].join("-"));
// donguler

// let list=[1,2,3,4,5,6];

// for(i=1; i<list.length; i++){
//   let kvadratlar= list[i] * list[i]
//   console.log(list[i] + "-in kvadrati" + " " + kvadratlar)

// }
// let list=[1,2,3,4,5,6];

// for (let i = 0; i < list.length; i++) {

//   if (list[i] % 2 == 0) {
//     console.log(list[i] + " cüt rəqəmdir.");
//   }
// }


// Ededin cut tek olmasini yoxla
// let new_task=[2,5,8,9,15,24];

// for (let i = 0; i<new_task.length; i++) {
//   if (new_task[i]%2==0) {
// console.log('cut ededdir:', new_task[i]);

//   }
//   else{
//     console.log('tek ededdir:',new_task[i]);
    
//   }
  
// }
// YALNIZ TEK EDEDLERI YAZDIR
// let two_task=[4,3,17,19,12,13];
// for (let i = 0; i< two_task.length; i++) {
//  if (two_task[i]%2!==0) {
//   console.log('tek ededdir:', two_task[i]);
  
//  }
  
// }

// TEKRARLARI SILMEK
// let text_task=['Nezrin','Nezrin','Murad','Mehemmedeli'];

// let new_task=[... new Set(text_task)];
// console.log( new_task);


// let deyer = document.getElementById("header");
// let buton = document.getElementById("btn");

// deyer.innerText = "MURAD";
// console.log(deyer);

// buton.addEventListener("click",function(){
//     deyer.innerText ="Aysel"
   
   
// })

// let deyer = document.querySelectorAll(".item");
// let buton = document.getElementById("btn");

// buton.addEventListener("click", function() { 
    
//     deyer.forEach(function(tekElement) { 
//         tekElement.innerText = "Nezrin";
//         tekElement.style.color = "purple"; 
//     });

// });


// let deyer = document.getElementById("testElement");
// let buton = document.getElementById("btnClassName");

// buton.addEventListener("click",function () {
//     deyer.className = "red-bg"
    
// });
// buton.addEventListener("click",function(){
//     deyer.classList= "red-bg"
// });

// let elave = document.getElementById('text');
// let btn_1 =document.getElementById('add_text');
// let btn_2 =document.getElementById('clear_text');
// let siyahi =document.getElementById('list');

// btn_1.addEventListener('click',function(){

//     let yeniList=elave.value;

//     if(yeniList.trim() === ""){
// return;
//     }

//         if(yeniList.length <5){
// alert("adi uzadin")
// return;
//     }
// siyahi.innerHTML +=`

// <li>
// ${yeniList}

// <button onclick=this.parentElement.remove()>X</button>


// </li>

// `;

// elave.value=""

// })
// document.getElementById('clear_text').onclick = function() {
//     siyahi.innerHTML = "";

//     }
const slider_photo=document.querySelector('#slider_photo');
const button_groups=document.querySelector('#button_groups');
const slider_title=document.querySelector('#slider_title');
const prive_button=document.querySelector('#prive_button');
const next_button=document.querySelector('#next_button');
const sliderText=document.querySelector('#slider-text');
const sliderDesc=document.querySelector('#slider-desc');
const photo =document.querySelector('#photo');
let sliderIndex= 0;
let sliderInterval = null;

const sliderData =[
    {
        url:"https://www.carpro.com/hs-fs/hubfs/2023-Chevrolet-Corvette-Z06-credit-chevrolet.jpeg?width=1020&name=2023-Chevrolet-Corvette-Z06-credit-chevrolet.jpeg",
        title:"Best-Selling Sports Cars For All Of 2021",
        text:"20.01.2014"
    },
      {
        url:"https://media.wired.com/photos/63b8d0a771c6b526845f15a6/master/pass/CES-2023-PEUGEOT_INCEPTION_CONCEPT_2301CN202.jpg",
        title:"The Best Cars, Rides, and Auto Tech of CES 2023 | WIRED",
        text:"11.07.2014"
    },
      {
        url:"https://robbreport.com/wp-content/uploads/2024/08/temerario01.jpg?w=800",
        title:"The 50 Most Expensive Cars in the World",
        text:"22.10.2024"
    }
];

const nextSlider =function(){

 if(sliderIndex < sliderData.length -1){
sliderIndex++;
 }
 else{
  sliderIndex=0
 }

uiCreate()
}


const prevSlider =function(){

  if (sliderIndex>0) {

     sliderIndex --;
  }
  else{
    sliderIndex = sliderData.length -1
  }
 
  uiCreate()
}


button_groups.addEventListener('click',function(e){

const element = e.target.parentElement.tagName === 'BUTTON' ? e.target.parentElement :e.target;
if(element.tagName ==='BUTTON'){

  const navigation = element.getAttribute('data-nav');

  if(navigation === 'prev'){
prevSlider()
  }
  else if(navigation === 'next'){
nextSlider()
  }
}

});

const intervalSlider = function () {
   sliderInterval = setInterval(function() {
    nextSlider();
}, 3000);
}


const uiCreate= function () {
  const slider= sliderData[sliderIndex];
  console.log(slider);
  
 if(slider){
photo.src = slider.url
sliderText.innerText = slider.title
sliderDesc.innerText =slider.text
 }
  
};


button_groups.addEventListener('mouseover',function(){
  clearInterval( sliderInterval)
});

button_groups.addEventListener('mouseout',function(){
intervalSlider();
});

uiCreate()
