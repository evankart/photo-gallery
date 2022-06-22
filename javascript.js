class galleryImage {
  constructor(url, title, location, caption, alt) {
    this.url = url;
    this.title = title;
    this.location = location;
    this.caption = caption;
    this.alt = alt;
  }
}

let galleryImages = [
  {
    url: "images/backlit-leaf-color_GalleryImg-1500px-long.jpg",
    title: "Backlit Leaf",
    location: "Oakland, CA",
    caption:
      "This image was taken on a neighborhood walk during the pandemic, this period of my life encouraged me to slow down and enjoy the details",
    alt: "A backlit banana leaf with sunlight shining through.",
  },

  {
    url: "images/hawaii-gold-coast_GalleryImg-1500px-long.jpg",
    title: "Coast BW",
    Location: "Kauai, HI",
    caption: "Late afternoon on the Napali Coast",
    alt: "Black and white image of the steep mountains on the nepali coast.",
  },
];

console.log(galleryImages[0].url); // logs the url of the first object
console.log(galleryImages[0].location); // logs the location of the first object

console.log(galleryImages[0]); // logs all key value pairs of the object

console.log(galleryImages); // logs the list of objects and all their info

const testImg = new galleryImage(
  "images/camelias-color_GalleryImg-1500px-long.jpg",
  "Camelias",
  "Oakland, CA",
  "Caption for Camelias",
  "alt text for Camelias"
);

const kitchenTable = new galleryImage(
  "images/kitchen-table-color_GalleryImg-1500px-long.jpg",
  "Kitchen Table",
  "Oakland, CA",
  "Evening light through the kitchen window"
);

galleryImages.push(testImg); // appends testImg to the galleryImages list, using the galleryImage class template

// for each object in galleryImages, log the title
for (let i = 0; i < galleryImages.length; i++) {
  console.log(galleryImages[i].title);
}

// Using Javascript to add images to the .js-gallery div

for (let i = 0; i < galleryImages.length; i++) {
  let img = document.createElement("img");
  img.src = galleryImages[i].url;

  let block = document.getElementById("js-gallery");
  block.appendChild(img);
}
