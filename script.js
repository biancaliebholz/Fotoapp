let myImages =[
"algave.jpg",
"blauer_see_schweiz.jpg",
"blue_car_honkong.jpg",
"cave.jpg",
"chinese_people.jpg",
"chinese_temple.jpg",
"chinese_tree.jpg",
"church.jpg",
"fruits_in_china.jpg",
"fuerstenberg.jpg",
"helene.jpg",
"hongkong.jpg",
"kroatien_katamaran.jpg",
"kroatien-night.jpg",
"kroatien.jpg",
"matterhorn.jpg",
"palmen_cavoeiro.jpg",
"plant_ily.jpg",
"portugal_algave.jpg",
"portugal_aussicht.jpg",
"portugal_beach.jpg",
"red_car_hongkong.jpg",
"schwan.jpg",
"schweiz.jpg",
"shenzhen_futian.jpg",
"sonnenuntergang.jpg",
"streichwitz.jpg",
"thuner_see.jpg",
"wandern.jpg",
];

const gallery = document.getElementById("gallery");
let currentIndex = 0;


function renderImages(){
    for (let i = 0; i < myImages.length; i++){
        gallery.innerHTML+=`
            <li>
             <img onclick="openDialog(${i})" src="./pics-komprimiert/${myImages[i]}"
            </li>
            `
    }
}

renderImages()

function openDialog(i){
    currentIndex= i;
    let viewerImage = document.getElementById("viewerImage");
    let viewer = document.getElementById("viewer");
    viewer.showModal()
    viewerImage.src=`./pics-komprimiert/${myImages[i]}`
}

document.getElementById("closeViewer").addEventListener("click",()=>{
     let viewer = document.getElementById("viewer");
    viewer.close()
})

function skipLeft(){
    if (currentIndex > 0){
        currentIndex--;
    }
    document.getElementById("viewerImage").src=`./pics-komprimiert/${myImages[currentIndex]}`;
}
    document.getElementById("skipLeft").addEventListener("click", skipLeft);
    
function skipRight(){
  if (currentIndex < myImages.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  document.getElementById("viewerImage").src =
    `./pics-komprimiert/${myImages[currentIndex]}`;
}

document.getElementById("skipRight").addEventListener("click", skipRight);

