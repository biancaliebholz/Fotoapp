let myImages = [
  { src: "algave.jpg", alt: "Küstenlandschaft an der Algarve in Portugal" },
  { src: "blauer_see_schweiz.jpg", alt: "Blauer Bergsee in der Schweiz" },
  { src: "blue_car_honkong.jpg", alt: "Blaues Auto in Hongkong" },
  { src: "cave.jpg", alt: "Felsige Höhle am Meer" },
  { src: "chinese_people.jpg", alt: "Menschen auf einer Straße in China" },
  { src: "chinese_temple.jpg", alt: "Traditioneller chinesischer Tempel" },
  { src: "chinese_tree.jpg", alt: "Alter Baum in China" },
  { src: "church.jpg", alt: "Kirche in ländlicher Umgebung" },
  { src: "fruits_in_china.jpg", alt: "Obstmarkt in China" },
  { src: "fuerstenberg.jpg", alt: "Schloss Fürstenberg" },
  { src: "helene.jpg", alt: "Porträt einer Person namens Helene" },
  { src: "hongkong.jpg", alt: "Skyline von Hongkong bei Tag" },
  { src: "kroatien_katamaran.jpg", alt: "Katamaran vor der Küste Kroatiens" },
  { src: "kroatien-night.jpg", alt: "Kroatische Küste bei Nacht" },
  { src: "kroatien.jpg", alt: "Küstenlandschaft in Kroatien" },
  { src: "matterhorn.jpg", alt: "Matterhorn in den Schweizer Alpen" },
  { src: "palmen_cavoeiro.jpg", alt: "Palmen in Carvoeiro, Portugal" },
  { src: "plant_ily.jpg", alt: "Nahaufnahme einer Pflanze" },
  { src: "portugal_algave.jpg", alt: "Algarve Küste in Portugal" },
  { src: "portugal_aussicht.jpg", alt: "Aussichtspunkt in Portugal" },
  { src: "portugal_beach.jpg", alt: "Sandstrand in Portugal" },
  { src: "red_car_hongkong.jpg", alt: "Rotes Auto in Hongkong" },
  { src: "schwan.jpg", alt: "Schwan auf einem See" },
  { src: "schweiz.jpg", alt: "Landschaft in der Schweiz" },
  { src: "shenzhen_futian.jpg", alt: "Stadtteil Futian in Shenzhen" },
  { src: "sonnenuntergang.jpg", alt: "Sonnenuntergang am Horizont" },
  { src: "streichwitz.jpg", alt: "Landschaft in Streichwitz" },
  { src: "thuner_see.jpg", alt: "Thunersee in der Schweiz" },
  { src: "wandern.jpg", alt: "Wanderweg in den Bergen" },
];

const gallery = document.getElementById("gallery");
const viewer = document.getElementById("viewer");
let currentIndex = 0;

function renderImages() {
  gallery.innerHTML = "";
  for (let i = 0; i < myImages.length; i++) {
    gallery.innerHTML += getHtml(i);
  }
}

function getHtml(i){
return`
      <li>
        <img onclick="openDialog(${i})"
             src="./pics-komprimiert/${myImages[i].src}"
             alt="${myImages[i].alt}">
      </li>
    `;
}

function updateViewerCaption() {
  const imagesCaption = document.getElementById("imagesCaption");
  const viewerCount = document.getElementById("viewerCount");

  imagesCaption.textContent = myImages[currentIndex].alt;
  viewerCount.textContent = `${currentIndex + 1}/${myImages.length}`;
}

function openDialog(i) {
  currentIndex = i;
  const viewerImage = document.getElementById("viewerImage");
  const viewer = document.getElementById("viewer");

  viewer.showModal();
  viewerImage.src = `./pics-komprimiert/${myImages[currentIndex].src}`;
  viewerImage.alt = myImages[currentIndex].alt;

 
  updateViewerCaption();
}

document.getElementById("closeViewer").addEventListener("click", () => {
  document.getElementById("viewer").close();
});



viewer.addEventListener("click", (e) => {
  if (e.target === viewer) {
    viewer.close();
  }
});

function showCurrentImage() {
  const viewerImage = document.getElementById("viewerImage");
  viewerImage.src = `./pics-komprimiert/${myImages[currentIndex].src}`;
  viewerImage.alt = myImages[currentIndex].alt;
  updateViewerCaption();
}

function skipLeft() {
  if (currentIndex === 0) {
    currentIndex = myImages.length - 1; // zum letzten Bild
  } else {
    currentIndex--;
  }
  showCurrentImage();
}

function skipRight() {
  if (currentIndex === myImages.length - 1) {
    currentIndex = 0; // zurück zum ersten Bild
  } else {
    currentIndex++;
  }
  showCurrentImage();
}
document.getElementById("skipRight").addEventListener("click", skipRight);

document.getElementById("skipLeft").addEventListener("click", skipLeft);

document.addEventListener("keydown", (e) => {
  const viewer = document.getElementById("viewer");
  if (!viewer.open) return;

  if (e.key === "Escape") viewer.close();
  if (e.key === "ArrowLeft") skipLeft();
  if (e.key === "ArrowRight") skipRight();
});