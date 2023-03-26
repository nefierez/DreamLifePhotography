import PhotoSession from "./gallery.mjs";
import sessionSelector from "./sessionSelector.mjs";

const session = new PhotoSession();
session.photoSearch("wedding ceremony");

const session_Selector = sessionSelector();

const type = session_Selector.getSelectedSession();
console.log(type);