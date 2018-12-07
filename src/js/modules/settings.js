module.exports = {
    difficulty: 1/6,
    score: 0,
    lives: 5,
    deads: 0,
    audioDead: new Audio("https://www.soundjay.com/mechanical/sounds/gun-gunshot-01.mp3"),
    audioTrigger: new Audio("https://www.soundjay.com/mechanical/sounds/gun-trigger-click-01.mp3"),
    
    // values for swapi API
    // character: 26,
    // characterSearchAPI: "https://swapi.co/api/people/",
    // eCname: document.getElementById('js-cname'),
    // eCeyes: document.getElementById('js-ceyes'),
    
    // values for Google customsearch
    imageSearchAPI: "https://www.googleapis.com/customsearch/v1?key=AIzaSyAzH04-G6MaOBNxWzCvw_vjuWwvRyEALkk&cx=005014813520210222604:dtsxfu-zgcc&q=",
    imageSearchParameters: "&searchType=image&fileType=jpg&imgType=face&alt=json",

    sUserName: prompt('Votre nom ?', 'Rick and Morty'),
    eUserName: document.getElementById('js-username'),
    eImage: document.getElementById('js-image'),
    eScore: document.getElementById('js-score'),
    eTrigger: document.getElementById('js-trigger'),
    eLives: document.getElementById('js-lives')
};
