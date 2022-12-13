"use strict";
import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const galleryStr = galleryItems
  .map(
    ({
      description,
      original,
      preview,
    }) => `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`
  )
  .join("");

galleryEl.innerHTML = galleryStr;

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
