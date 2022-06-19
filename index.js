let current_search = 'google'
document.querySelector('.search_input').addEventListener('keyup', e => {
    const input = e.target.value;
    let search_engine = input.split(' ')[0].toLowerCase();
    let search_query = input.split(' ').splice(0).join(' ');
    switch(search_engine){
        case 'google':
        case 'youtube':
        case 'slides':
        case 'sheets':
        case 'drive':
        case 'spotify':
        case 'github':
        case 'duckduckgo':
        case 'docs': break;
        default: search_engine = 'google';
                 search_query = 'google ' + input; // adding google if no search engine specified
    }
    console.log(search_query);

    let find=search_query.split(' ').slice(1).join(' '); // fixed search query

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
            case 'slides':
                image.src = 'slides.png';
                image.alt = 'Google Slides icon';
                break;
            case 'sheets':
                image.src = 'sheets.png';
                image.alt = 'Google Sheets icon';
                break;
            case 'drive':
                image.src = 'drive.png';
                image.alt = 'Google Drive icon';
                break;
            case 'spotify':
                image.src = 'spotify.png';
                image.alt = 'Spotify icon';
                break;
            case 'github':
                image.src = 'github.png';
                image.alt = 'GitHub icon';
                break;
            case 'duckduckgo':
                image.src = 'duckduckgo.png';
                image.alt = 'DuckDuckGo icon';
                break;
        }
    }
    if(e.key === 'Enter')
        switch(search_engine) {
            case 'docs':
                window.location = `https://docs.google.com/document/?q=${find}`;
                break;
            case 'youtube': 
                window.location = `https://www.youtube.com/results?search_query=${find}`;
                break;
            case 'slides': 
            window.location = `https://docs.google.com/presentation/?q=${find}`;
            break;
            case 'sheets': 
            window.location = `https://docs.google.com/spreadsheets/?q=${find}`;
            break;
            case 'drive': 
            window.location = `https://drive.google.com/drive/search?q=${find}`;
            break;
            case 'spotify': 
            window.location = `https://open.spotify.com/search/${find}`;
            break;
            case 'github': 
            window.location = `https://github.com/search?q=${find}`;
            break;
            case 'duckduckgo': 
            window.location = `https://duckduckgo.com/?q=${find}`;
            break;
            default: 
            window.location = `https://www.google.com/search?q=${find}`;
        }
});