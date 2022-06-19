let current_search = 'google'
document.querySelector('.search_input').addEventListener('keyup', e => {
    const input = e.target.value;
    let search_engine = input.split(' ')[0].toLowerCase();
    let search_query = input.split(' ').splice(0).join(' ');
    var search_query1;
    switch(search_engine){
        case 'google':
        case 'youtube':
        case 'docs':
        case 'drive':
        case 'slides':
        case 'sheets': break;
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
        }
    }
    
    if(e.key === 'Enter')
        switch(search_engine) {
            case 'docs':
                search_query1 = search_query.slice(5);
                window.location = `https://docs.google.com/document/?q=${search_query1}`;
                break;
            case 'youtube': 
            search_query1 = search_query.slice(8);
                window.location = `https://www.youtube.com/results?search_query=${search_query1}`;
                break;
            case 'drive':
                search_query1 = search_query.slice(6);
                window.location = `https://drive.google.com/drive/search?q=${search_query1}`;
                break;
            case 'slides':
                search_query1 = search_query.slice(7);
                window.location = `https://docs.google.com/presentation/u/0/?tgif=d&q=${search_query1}`;
                break;
            case 'sheets':
                search_query1 = search_query.slice(7);
                window.location = `https://docs.google.com/spreadsheets/u/0/?tgif=d&q=${search_query1}`;
                break;
            default: 
                window.location = `https://www.google.com/search?q=${search_query}`;
        }
});