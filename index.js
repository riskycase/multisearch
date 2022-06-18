/*
const page = document.querySelector(".page");
const toggle = document.querySelector(".toggle-input");
const toggleIcon = page.querySelector(".toggle-icon");

setCheckedState();

function setCheckedState() {
  // checks if localStorage has a "checked" value set at all
  if (!(localStorage.checked === undefined)) {
    // if it does, it sets the state of the toggle accordingly
    toggle.checked = isTrue(localStorage.getItem("checked"));
    // after setting the toggle state, the theme is adjusted according to the checked state
    toggleTheme();
  }
}

function replaceClass() {
  if (toggle.checked) {
    page.classList.replace("light", "dark");
  } else {
    page.classList.replace("dark", "light");
  }
}
function toggleIconTheme() {
  if (page.classList.contains("light")) {
    toggleIcon.src = "moon.png";
    toggleIcon.alt = "Switch to Dark mode";
  } else {
    toggleIcon.src = "sun.png";
    toggleIcon.alt = "Switch to Light mode";
  }
}
function toggleTheme() {
  replaceClass();
  toggleIconTheme();
  updateLocalStorage();
}
function updateLocalStorage() {
  localStorage.setItem("checked", toggle.checked);
}

function isTrue(value) {
  // convert string to boolean
  return value === "true";
}

toggle.addEventListener("change", toggleTheme);

*/

let current_search = "google";
document.querySelector(".search_input").addEventListener("keyup", (e) => {
  const input = e.target.value;
  let search_engine = input.split(" ")[0].toLowerCase();
  let search_query = input.split(" ").splice(1);
  //let search_query = input.substring(input.indexOf(" ") + 1, input.length);
  switch (search_engine) {
    case "google":
    case "youtube":
    case "sheets":
    case "slides":
    case "drive":
    case "docs":
      break;
    default:
      search_engine = "google";
      search_query = input;
  }
  if (search_engine !== current_search) {
    current_search = search_engine;
    const image = document.querySelector(".search_icon");
    switch (search_engine) {
      case "google":
        image.src = "google.png";
        image.alt = "Google icon";
        break;
      case "youtube":
        image.src = "youtube.png";
        image.alt = "YouTube icon";
        break;
      case "docs":
        image.src = "docs.png";
        image.alt = "Google Docs icon";
        break;
      case "slides":
        image.src = "slides.png";
        image.alt = "Google Slides icon";
        break;
      case "drive":
        image.src = "drive.png";
        image.alt = "Google drive icon";
        break;
      case "sheets":
        image.src = "sheets.png";
        image.alt = "Google Sheets icon";
        break;
    }
  }
  if (e.key === "Enter")
    switch (search_engine) {
      case "docs":
        window.location = `https://docs.google.com/document/?q=${search_query}`;
        break;
      case "youtube":
        window.location = `https://www.youtube.com/results?search_query=${search_query}`;
        break;
      case "drive":
        window.location = `https://drive.google.com/drive/search?q=${search_query}`;
        break;
      case "slides":
        window.location = `https://docs.google.com/presentation/?q=${search_query}`;
        break;
      case "sheets":
        window.location = `https://docs.google.com/spreadsheets?q=${search_query}`;
        break;
      default:
        window.location = `https://www.google.com/search?q=${search_query}`;
    }
});
