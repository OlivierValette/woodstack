module.exports = {
    difficulty: 1/6,
    score: 0,
    lives: 5,
    deads: 0,
    endOfGame: false,
    audioDead: new Audio("https://www.soundjay.com/mechanical/sounds/gun-gunshot-01.mp3"),
    audioTrigger: new Audio("https://www.soundjay.com/mechanical/sounds/gun-trigger-click-01.mp3"),
    
    // values for swapi API
    // character: 26,
    // characterSearchAPI: "https://swapi.co/api/people/",
    // eCname: document.getElementById('js-cname'),
    // eCeyes: document.getElementById('js-ceyes'),
    
    // values for Google customsearch
    imageSearchAPI: "https://www.googleapis.com/customsearch/v1?key=_____&cx=_____&q=",
    imageSearchParameters: "&searchType=image&fileType=jpg&imgType=face&alt=json",
    imageResult: ["https://fer-ge.ch/image/journal/article?img_id=637842&t=1460124494763"],
    sUserName: prompt('Votre nom ?', 'Rick and Morty'),
    // HTML elements
    eUserName: document.getElementById('js-username'),
    eImage: document.getElementById('js-image'),
    eScore: document.getElementById('js-score'),
    eEndOfGame: document.getElementById('js-endofgame'),
    eTrigger: document.getElementById('js-trigger'),
    eLives: document.getElementById('js-lives')
};
