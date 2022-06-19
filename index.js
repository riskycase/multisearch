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
        case 'youtube':
        case 'docs': 
        case 'amazon':
        case 'bing':
        case 'github':
        case 'spotify':
        break;
        default: 
        search_engine = 'google';
        search_query = input;
    }
    let final_query = search_query.replace((search_engine + ' '), ''); // replacing original query without the name of the search engine
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
                image.src= 'slides.png'
                image.alt= 'Google slides icon';
                break;
            case 'drive':
                image.src= 'drive.png'
                image.alt= 'Google drive icon';
                break;
            case 'bing':
                image.src= 'bing.png'
                image.alt= 'bing icon';
                break;
             case 'amazon':
                image.src= 'amazon.png'
                image.alt= 'Amazon icon';
                break;
            case 'sheets':
                image.src= 'sheets.png'
                image.alt=' Sheets icon';
                break;
             case 'github':
                image.src= 'github.png'
                image.alt=' github icon';
                break;
            case 'spotify':
                image.src= 'spotify.png'
                image.alt=' spotify icon';
                break;
        }
    }
    if(e.key === 'Enter')
        switch(search_engine) {
            case 'docs':
                window.location = `https://docs.google.com/document/?q=${final_query}`;
                l
                break;
            case 'youtube': 
                window.location = `https://www.youtube.com/results?search_query=${final_query}`;
                break;
            case 'slides': 
                window.location = `https://docs.google.com/presentation/?q=${final_query}`;
                break;
            case 'drive': 
                window.location = `https://drive.google.com/drive/search?q=${final_query}`;
                break;
            case 'bing': 
                window.location = `https://www.bing.com/search?q=${final_query}`;
                break;
            case 'amazon': 
                window.location = `https://www.amazon.in/s?k=${final_query}`;
                break;
            case 'sheets': 
                window.location = `https://docs.google.com/spreadsheets/?q=${final_query}`;
                break;
            case 'google':
                window.location = `https://www.google.com/search?q=${final_query}`;
                break;
            case 'github':
                window.location = `https://github.com/search?q=${final_query}`;
                break;
            case 'spotify':
                window.location = `https://open.spotify.com/search/${final_query}`;
                break;
            default: 
                window.location = `https://www.google.com/search?q=${final_query}`;
        }
});         
