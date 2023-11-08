/*
1.Створення і рендер розмітки на підставі масиву даних galleryItems 
і наданого шаблону елемента галереї.

2.Реалізація делегування на ul.gallery і отримання url великого зображення.

3.Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.

4.Відкриття модального вікна по кліку на елементі галереї. 
Для цього ознайомся з документацією і прикладами.

5.Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
*/

import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const container = document.querySelector(".gallery");
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return
  }

  const currentPhoto = evt.target;
  const originalPhoto = currentPhoto.dataset.source;
  const descriptionPhoto = currentPhoto.alt;

  const instance = basicLightbox.create(
    `<div>
      <img src="${originalPhoto}" alt="${descriptionPhoto}" />
    </div>`,
    {
      onShow: (instance) => {window.addEventListener("keydown", onKeyPress);},
   
      onClose: (instance) => {window.removeEventListener("keydown", onKeyPress);},
    }
  );
  instance.show();
  
  function onKeyPress(evt) {
    if (evt.key === "Escape") {
      instance.close();
    }
  }

}
container.addEventListener("click", onClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}
