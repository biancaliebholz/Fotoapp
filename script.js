let myImages = [
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

function renderImages() {
  gallery.innerHTML = ""; 
  for (let i = 0; i < myImages.length; i++) {
    gallery.innerHTML += `
      <li>
        <img onclick="openDialog(${i})" src="./pics-komprimiert/${myImages[i]}" alt="">
      </li>
    `;
  }
}

renderImages();

function updateViewerCaption() {
  const imagesCaption = document.getElementById("imagesCaption");
  const viewerCount = document.getElementById("viewerCount");

  imagesCaption.textContent = myImages[currentIndex].slice(0, -4);
  viewerCount.textContent = `${currentIndex + 1}/${myImages.length}`;
}

function openDialog(i) {
  currentIndex = i;
  const viewerImage = document.getElementById("viewerImage");
  const viewer = document.getElementById("viewer");

  viewer.showModal();
  viewerImage.src = `./pics-komprimiert/${myImages[currentIndex]}`;
  updateViewerCaption();
}

document.getElementById("closeViewer").addEventListener("click", () => {
  document.getElementById("viewer").close();
});

const viewer = document.getElementById("viewer");

viewer.addEventListener("click", (e) => {
  if (e.target === viewer) {
    viewer.close();
  }
});

function skipLeft() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = myImages.length - 1; 
  }

  document.getElementById("viewerImage").src =
    `./pics-komprimiert/${myImages[currentIndex]}`;

  updateViewerCaption();
}

document.getElementById("skipLeft").addEventListener("click", skipLeft);

function skipRight() {
  if (currentIndex < myImages.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  document.getElementById("viewerImage").src =
    `./pics-komprimiert/${myImages[currentIndex]}`;

  updateViewerCaption();
}

document.getElementById("skipRight").addEventListener("click", skipRight);

document.addEventListener("keydown", (e) => {
  const viewer = document.getElementById("viewer");
  if (!viewer.open) return;

  if (e.key === "Escape") viewer.close();
  if (e.key === "ArrowLeft") skipLeft();
  if (e.key === "ArrowRight") skipRight();
});