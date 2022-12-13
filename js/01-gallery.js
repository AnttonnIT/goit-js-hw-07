"use strict";
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryStr = galleryItems
  .map(
    ({ description, original, preview }) => `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
  )
  .join("");

galleryEl.innerHTML = galleryStr;

galleryEl.addEventListener("click", openModal);

const instance = basicLightbox.create(
  `
    <img src="" width="1280" height="853">
`,
  {
    onShow: (instance) => {
      document.addEventListener("keydown", onEscClick);
    },
    onClose: (instance) => {
      document.removeEventListener("keydown", onEscClick);
    },
  }
);

function openModal(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  instance.element().querySelector("img").src = evt.target.dataset.source;

  instance.show();
}

function onEscClick(evt) {
  if (evt.code === "Escape") {
    instance.close();
    return;
  }
}
