let current_search = 'google'
document.querySelector('.search_input').addEventListener('keyup', e => {
    const input = e.target.value;
    let search_engine = input.split(' ')[0].toLowerCase();
    let search_query = input.split(' ').splice(0).join(' ');
    switch(search_engine){
        case 'google':
        case 'drive':
        case 'slides':
        case 'sheets':
        case 'spotify':
        case 'youtube':
        case 'docs': break;
        default: search_engine = 'google';
        search_query = input;
    }
    let query = search_query.replace((search_engine + ' '), '');
    // console.log(query);
    if(search_engine !== current_search) {
        current_search = search_engine;
        const image = document.querySelector('.search_icon');
        switch(search_engine){
            case 'google':
                image.src = 'google.png';
                image.alt = 'Google icon';
                break;
            case 'drive':
                image.src = 'drive.png';
                image.alt = 'Google Drive icon';
                break;
            case 'slides':
                image.src = 'slides.png';
                image.alt = 'Google Slides icon';
                break;
            case 'sheets':
                image.src = 'sheets.png';
                image.alt = 'Google Sheets icon';
                break;
            case 'spotify':
                image.src = 'spotify.png';
                image.alt = 'Spotify icon';
                break;
            case 'youtube':
                image.src = 'youtube.png';
                image.alt = 'YouTube icon';
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
                window.location = `https://docs.google.com/document/?q=${query}`;
                break;
            case 'drive':
                window.location = `https://drive.google.com/drive/u/0/search?q=${query}`;
                break;
            case 'slides':
                window.location = `https://docs.google.com/presentation/?q=${query}`;
                break;
            case 'sheets':
                window.location = `https://docs.google.com/spreadsheets/?q=${query}`;
                break;
            case 'spotify':
                window.location = `https://open.spotify.com/search/${query}`;
                break;
            case 'youtube':
                window.location = `https://www.youtube.com/results?search_query=${query}`;
                break;
            default:
                window.location = `https://www.google.com/search?q=${query}`;
        }
});
