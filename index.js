let current_search = "google";
document.querySelector(".search_input").addEventListener("keyup", (e) => {
  const input = e.target.value;
  let search_engine = input.split(" ")[0].toLowerCase();
  console.log("the search engine is \n");
  console.log(search_engine);
  let search_query = input.split(" ");
  search_query.shift(); //didnt know how to integrate into a compound command so i removed the first element separately and then reformed the string
  search_query = search_query.splice(0).join(" ");
  console.log("the search query is \n");
  console.log(search_query);
  switch (search_engine) {
    case "google":
    case "youtube":
    case "docs":
    case "slides":
    case "drive":
    case "sheets":
      break;
    default:
      search_engine = "google";
      search_query = input;
  }
  if (search_engine !== current_search) {
    current_search = search_engine;
    const image = document.querySelector(".search_icon");
    switch (search_engine) {
      case "slides":
        image.src = "slides.png";
        image.alt = "Google slides icon";
        break;
      case "drive":
        image.src = "drive.png";
        image.alt = "Google  drive icon";
        break;
      case "sheets":
        image.src = "sheets.jpg";
        image.alt = "Google sheets icon";
        break;

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

      case "slides":
        window.location = `https://docs.google.com/presentation/?q=${search_query}`;
        break;
      case "drive":
        window.location = `https://drive.google.com/drive/search?q=${search_query}`;
        break;
      case "sheets":
        window.location = `https://docs.google.com/spreadsheets/?q=${search_query}`;
        break;

      default:
        window.location = `https://www.google.com/search?q=${search_query}`;
    }
});
