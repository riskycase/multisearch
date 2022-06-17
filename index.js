let current_search = 'google'
document.querySelector('.search_input').addEventListener('keyup', e => {
    const input = e.target.value;
    let search_engine = input.split(' ')[0].toLowerCase();
    let search_query = input.split(' ').splice(0).join(' ');
    switch(search_engine){
        case 'google':
        case 'youtube':
        case 'docs': 
        case 'drive':
        case 'slides':
        case 'sheets':
        case 'Spotify':
        case 'GitHub':
        case 'Wattpad':
        case 'goodreads':
        case 'animixplay':
        case 'stackoverflow':    
            
        break;
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
            case 'docs':
                image.src = 'docs.png';
                image.alt = 'Google Docs icon';
                break;
            case 'drive':
                image.src = 'drive.png';
                image.alt = 'Google drive icon';
                break;
            case 'slides':
                image.src = 'slides.png';
                image.alt = 'Google slides icon';
                break;
            case 'sheets':
                image.src = 'sheets.png';
                image.alt = 'Google sheets icon';
                break; 
            case 'Spotify':
                image.src = 'spotify.png';
                image.alt = 'spotify icon';
                break;
             case 'GitHub':
                image.src = 'github.png';
                image.alt = 'github icon';
                break; 
             case 'Wattpad':
                image.src = 'Wattpad.png';
                image.alt = 'Wattpad icon';
                break; 
             case 'goodreads':
                image.src = 'goodreads.png';
                image.alt = 'goodreads icon';
                break;
             case 'animixplay':
                image.src = 'animixplay.png';
                image.alt = 'animixplay icon';
                break;
             case 'stackoverflow':
                image.src = 'stackoverflow.png';
                image.alt = 'stackoverflow icon';
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
            case 'drive': 
                window.location = `https://drive.google.com/drive/search?q=${search_query}`;
                break;
            case 'slides':
                window.location = `https://docs.google.com/presentation/u/0/?tgif=d&q=${search_query}`;
                break;
            case 'sheets':
                window.location = `https://docs.google.com/spreadsheets/u/0/?tgif=d&q=${search_query}`;
                break;
            case 'Spotify':
                window.location = `https://open.spotify.com/search/${search_query}`;
                break;
            case 'GitHub':
                window.location = `https://github.com/search?q=${search_query}`;
                break;
             case 'Wattpad':
                window.location = `https://www.wattpad.com/search/${search_query}`;
                break; 
             case 'goodreads':
                window.location = `https://www.goodreads.com/search?utf8=%E2%9C%93&query=${search_query}`;
                break;
             case 'animixplay':
                window.location = `https://animixplay.to/?q=${search_query}`;
                break; 
              case 'stackoverflow':
                window.location = `https://stackoverflow.com/search?q=${search_query}`;
                break;   
                default: 
                window.location = `https://www.google.com/search?q=${search_query}`;
        }
});
