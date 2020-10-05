import { auth } from "../services/firebase";

export const getUserState = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("esta logueado");
      loginCheck(user);
    } else {
      console.log("no esta logueado");
      loginCheck(user);
    }
  });
};

const loginCheck = (user) => {
  let loggedInLinks = document.querySelectorAll(".logged-in");
  let loggedOutLinks = document.querySelectorAll(".logged-out");

  if (user) {
    loggedInLinks.forEach((item) => {
      item.classList.add("show");
    });

    loggedOutLinks.forEach((item) => {
      item.classList.remove("show");
    });
  } else {
    loggedInLinks.forEach((item) => {
      item.classList.remove("show");
    });

    loggedOutLinks.forEach((item) => {
      item.classList.add("show");
    });
  }
};
