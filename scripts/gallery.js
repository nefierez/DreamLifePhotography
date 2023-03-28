import PhotoSession from "./gallery.mjs";
import sessionSelector from "./sessionSelector.mjs";

document.addEventListener("DOMContentLoaded", function() {
  sessionSelector().then((selectedValue) => {
    const session = new PhotoSession();
    session.photoSearch(selectedValue);
  });
});
