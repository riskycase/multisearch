let current_search = 'google'
document.querySelector('.search_input').addEventListener('keyup', e => {
    const input = e.target.value;
    let search_engine = input.split(' ')[0].toLowerCase();
    let search_query = input.split(' ').splice(1).join(' ');
    switch(search_engine){
        case 'google':
        case 'youtube':
        case 'slides' :
        case 'drive' :
        case 'sheets' :            
        case 'docs': break;
        default: search_engine = 'google';
        search_query = input;
    }
    if(search_engine !== current_search) {
        current_search = search_engine;
        const image = document.querySelector('.search_icon');
        switch(search_engine){
            case 'google':
                image.src = 'google.png';
                image.alt = 'Google icon';
                break;
            case 'youtube':
                image.src = 'youtube.png';
                image.alt = 'YouTube icon';
                break;
            case 'slides':
                image.src = 'slides.png';
                image.alt = 'Google Slides icon';
                break; 
            case 'drive':
                image.src = 'drive.png';
                image.alt = 'Google Drive icon';
                break;
            case 'sheets':
                image.src = 'sheets.png';
                image.alt = 'Google Sheets icon';
                break;           
            case 'docs':
                image.src = 'docs.png';
                image.alt = 'Google Docs icon';
                break;
        }
    }
    if(e.key === 'Enter')
        switch(search_engine) {
            case 'docs':
                window.location = `https://docs.google.com/document/?q=${search_query}`;
                break;
            case 'youtube': 
                window.location = `https://www.youtube.com/results?search_query=${search_query}`;
                break;
            case 'slides':
                window.location = `https://docs.google.com/presentation/?q=${search_query}`;
                break; 
            case 'sheets':
                window.location = `https://docs.google.com/spreadsheets/?q=${search_query}`;
                break; 
            case 'drive':
                window.location = `https://drive.google.com/drive/search?q=${search_query}`;
                break;            
            default: 
                window.location = `https://www.google.com/search?q=${search_query}`;
        }
});

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    //video.pause();
    btn.innerHTML = "Sorry lol";
    myVideo.style.display = "none";
    setTimeout(function() {myBtn.style.display = "none"}, 5000);
  }
}