let current_search = 'google'
document.querySelector('.search_input').addEventListener('keyup', e => {
    const input = e.target.value;
    let search_engine = input.split(' ')[0].toLowerCase();
    let search_query = input.split(' ').slice(1).join(' ');
    switch(search_engine){
        case 'google':
        case 'youtube':
        case 'drive':
        case 'slides':
        case 'sheets':
        case 'github':
        case 'stackoverflow':
        case 'reddit':
        case 'archlinux':
        case 'spotify':
        case 'docs': break;
        default: search_engine = 'google';
        search_query = input;
    }
    if(search_engine !== current_search) {
        current_search = search_engine;
        const image = document.querySelector('.search_icon');
        switch(search_engine) {
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
                image.src = 'slides.png';
                image.alt = 'Google Slides icon';
                break;
            case 'sheets':
                image.src = 'sheets.png';
                image.alt = 'Google Sheets icon';
                break;
            case 'github':
                image.src = 'github.png';
                image.alt = 'Github icon';
                break;
            case 'stackoverflow':
                image.src = 'stackoverflow.png';
                image.alt = 'Stackoverflow icon';
                break;
            case 'reddit':
                image.src = 'reddit.png';
                image.alt = 'Reddit icon';
                break;
            case 'archlinux':
                image.src = 'archlinux.png';
                image.alt = 'Archlinux icon';
                break;
            case 'spotify':
                image.src = 'spotify.png';
                image.alt = 'Spotify icon';
                break;
        }
    }
    if(e.key === 'Enter') {
        let search_engine_url
        switch(search_engine) {
            case 'docs':
                search_engine_url = `https://docs.google.com/document/?q=`
                break;
            case 'youtube': 
                search_engine_url = `https://www.youtube.com/results?search_query=`;
                break;
            case 'drive': 
                search_engine_url = `https://drive.google.com/drive/search?q=`;
                break;
            case 'slides':
                search_engine_url = `https://docs.google.com/presentation/?q=`;
                break;
            case 'sheets':
                search_engine_url = `https://docs.google.com/spreadsheets/?q=`;
                break;
            case 'github':
                search_engine_url = `https://github.com/search?ref=opensearch&q=`;
                break;
            case 'stackoverflow':
                search_engine_url = `https://stackoverflow.com/search?q=`;
                break;
            case 'reddit':
                search_engine_url = `https://www.reddit.com/search/?q=`;
                break;
            case 'archlinux':
                search_engine_url = `https://archlinux.org/packages/?q=`;
                break;
            case 'spotify':
                search_engine_url = `https://open.spotify.com/search/`;
                break;
            default: 
                search_engine_url = `https://www.google.com/search?q=`;
        }
        window.location = search_engine_url + search_query;
    }
});