import { alarm, clock } from "./js/clock.js";
import contdown from "./js/contdown.js";
import darkTheme from "./js/dark_theme.js";
import userDeviceInfo from "./js/device_detection.js";
import draw from "./js/draw.js";
import getGeolocation from "./js/geolocation.js";
import hamburgerMenu from "./js/hamburger_menu.js";
import { shortcut, moveBall } from "./js/keyboard.js";
import networkStatus from "./js/network_status.js";
import responsiveMedia from "./js/responsive_object.js";
import responsiveTester from "./js/responsive_test.js";
import scrollTopButton from "./js/scroll_button.js";
import scrollSpy from "./js/scroll_spy.js";
import searchFilter from "./js/search_filter.js";
import slider from "./js/slider.js";
import smartVideo from "./js/smart_video.js";
import speechReader from "./js/speech_reader.js";
import contactFormValidations from "./js/validation_form.js";

import webCam from "./js/webcam_detection.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  clock("#start-clock-btn", "#stop-clock-btn", "#clock");
  //stopClock("#stop-clock-btn");
  alarm("#start-alarm-btn", "#stop-alarm-btn", "assets/car-alarm.mp3");
  contdown("contdown", "Aug 4, 2022", "Feliz cumple Chichir");
  scrollTopButton(".top-scroll-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 650px)",
    `<a href="https://www.youtube.com/watch?v=iU6iSvGZHMI" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/iU6iSvGZHMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 650px)",
    `<a href="https://goo.gl/maps/Je792prPmDyMyzP77" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13898.503932686981!2d-66.87544729218752!3d-29.439726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427d97efdc85d4d%3A0x155272b19a30dcb6!2sMonumento%20Al%20Chacho%20Pe%C3%B1aloza!5e0!3m2!1ses-419!2sar!4v1658643489785!5m2!1ses-419!2sar" width="560" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilter(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcut(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode"); /* Se saca del DOMContent Loaded*/
networkStatus();
speechReader();
