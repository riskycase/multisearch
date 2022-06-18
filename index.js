let current_search = 'google';

function button_trigger(){
    switch(search_engine) {
        case 'docs':
            window.location = `https://docs.google.com/document/?q=${search_query}`;
            break;
        case 'youtube': 
            window.location = `https://www.youtube.com/results?search_query=${search_query}`;
            break;
        case 'drive': 
            window.location = `https://drive.google.com/drive/u/0/search?q=${search_query}`;
            break;
        case 'slides': 
            window.location = `https://docs.google.com/presentation/u/0/?tgif=d&q=${search_query}`;
            break;
        case 'sheets': 
            window.location = `https://docs.google.com/spreadsheets/u/0/?tgif=d&q=${search_query}`;
            break;
        case 'pornhub': 
            window.location = `https://www.pornhub.com/video/search?search=${search_query}`;
            break;
        case 'chaturbate': 
            window.location = `https://chaturbate.com/?keywords=${search_query}`;
            break;
        case 'wolfram':
            window.location = `https://www.wolframalpha.com/input?i=${search_query}`;
            break;
        case 'github':
            window.location = `https://github.com/search?q=${search_query}`;
            break;
        case 'spotify':
            window.location = `https://open.spotify.com/search/${search_query}`;
            break;
        default: 
            window.location = `https://www.google.com/search?q=${search_query}`;
    }
}

document.querySelector('.search_input').addEventListener('keyup', e => {
    const input = e.target.value; 
    window.search_engine = input.split(' ')[0].toLowerCase();
    window.search_query = input.replace(search_engine+' ','');

    switch(search_engine){
        case 'google':
        case 'youtube':
        case 'docs':
        case 'drive':
        case 'slides':
        case 'sheets':
        case 'chaturbate':
        case 'wolfram':
        case 'github':
        case 'spotify':
        case 'pornhub': break;
        default: search_engine = 'google';
        
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
            case 'pornhub':
                image.src = 'pornhub.png';
                image.alt = 'Pornhub icon';
                break; 
            case 'chaturbate':
                image.src = 'chaturbate.png';
                image.alt = 'Chaturbate icon';
                break;  
            case 'wolfram':
                image.src = 'wolfram.png';
                image.alt = 'Wolfram icon';
                break;
            case 'github':
                image.src = 'github.png';
                image.alt = 'Github icon';
                break;   
            case 'spotify':
                image.src = 'spotify.png';
                image.alt = 'Spotify icon';
                break; 
        }
    }


    if(e.key === 'Enter'){
        switch(search_engine) {
            case 'docs':
                window.location = `https://docs.google.com/document/?q=${search_query}`;
                break;
            case 'youtube': 
                window.location = `https://www.youtube.com/results?search_query=${search_query}`;
                break;
            case 'drive': 
                window.location = `https://drive.google.com/drive/u/0/search?q=${search_query}`;
                break;
            case 'slides': 
                window.location = `https://docs.google.com/presentation/u/0/?tgif=d&q=${search_query}`;
                break;
            case 'sheets': 
                window.location = `https://docs.google.com/spreadsheets/u/0/?tgif=d&q=${search_query}`;
                break;
            case 'pornhub': 
                window.location = `https://www.pornhub.com/video/search?search=${search_query}`;
                break;
            case 'chaturbate': 
                window.location = `https://chaturbate.com/?keywords=${search_query}`;
                break;
            case 'wolfram':
                window.location = `https://www.wolframalpha.com/input?i=${search_query}`;
                break;
            case 'github':
                window.location = `https://github.com/search?q=${search_query}`;
                break;
            case 'spotify':
                window.location = `https://open.spotify.com/search/${search_query}`;
                break;
            default: 
                window.location = `https://www.google.com/search?q=${search_query}`;
        }}
            
});