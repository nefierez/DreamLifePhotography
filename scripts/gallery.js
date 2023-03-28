import PhotoSession from "./gallery.mjs";
import sessionSelector from "./sessionSelector.mjs";



sessionSelector()
    .then((selectedValue) => {
        const session = new PhotoSession();
        session.photoSearch(selectedValue);
    })