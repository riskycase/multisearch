let current_search = 'google'
document.querySelector('.search_input').addEventListener('keyup', e => {
    const input = e.target.value;
    let search_engine = input.split(' ')[0].toLowerCase();
    let search_query = input.split(' ').splice(0).join(' ');
   
    switch(search_engine){
        case 'google':
        case 'youtube':
        case 'drive':
        case 'sheets':
        case 'slides':
        case 'docs':
        case 'wikipedia':
        case 'playstore':
        case 'amazon':
         break;
        default: search_engine = 'google';
        search_query = 'google ' + input;
    }
     let search = search_query.split(' ').splice(1).join(' ');

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
            case 'docs':
                image.src = 'docs.png';
                image.alt = 'Google Docs icon';
                break;
            case 'drive':
                image.src = 'drive.png';
                image.alt = 'Google Drive icon';
                break;
            case 'slides':
                image.src = 'slides2.png';
                image.alt = 'Google Slides icon';
                break;
            case 'sheets':
                image.src = 'sheets.png';
                image.alt = 'Google Sheets icon';
                break;
            case 'wikipedia':
                image.src = 'wikipedia.png';
                image.alt = 'Wikipedia icon';
                break;
            case 'playstore':
                image.src = 'playstore3.png';
                image.alt = 'Playstore icon';
                break;
            case 'amazon':
                image.src = 'amazon2.png';
                image.alt = 'Amazon icon';
                break;
        }
    }
    if(e.key === 'Enter')
        switch(search_engine) {
            case 'docs':
                window.location = `https://docs.google.com/document/?q=${search}`;
                break;
            case 'youtube': 
                window.location = `https://www.youtube.com/results?search_query=${search}`;
                break;
            case 'drive': 
                window.location = `https://drive.google.com/drive/search?q=${search}`;
                break;
            case 'slides':
                window.location = `https://docs.google.com/presentation/?q=${search}`;
                break;
            case 'sheets':
                window.location = `https://docs.google.com/spreadsheets/?q=${search}`;
                break;
            case 'wikipedia':
                window.location = `https://en.wikipedia.org/wiki/Special:Search?search=${search}`;
                break;
            case 'playstore':
                window.location = `https://play.google.com/store/search?q=${search}`;
                break;
            case 'amazon':
                window.location = `https://www.amazon.in/s?k=${search}`;
                break;
            default: 
                window.location = `https://www.google.com/search?q=${search}`;
        }
});