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

function openModal(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const getUrlLargeImg = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src=${getUrlLargeImg} width="1280" height="853">
`);

  instance.show();

  const basicLightboxEl = document.querySelector(".basicLightbox");

  if (basicLightboxEl) {
    document.addEventListener("keydown", (evt) => {
      if (evt.code === "Escape") {
        instance.close();
      }
    });
  }
}
