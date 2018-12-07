module.exports = {
    difficulty: 1/6,
    score: 0,
    lives: 5,
    deads: 0,
    character: 26,
    audioDead: new Audio("https://www.soundjay.com/mechanical/sounds/gun-gunshot-01.mp3"),
    audioTrigger: new Audio("https://www.soundjay.com/mechanical/sounds/gun-trigger-click-01.mp3"),
    // values for swapi API
    characterSearchAPI: "https://swapi.co/api/people/",
    // values for Google customsearch
    // imageSearchAPI: "https://www.googleapis.com/customsearch/v1?key=AIzaSyBGEEg3ld_VC-T0qI-wx5xFVG5ElwOfo74&cx=002035746340990724895:hddqw2saqqg&q=",
    // imageSearchParameters: "&searchType=image&fileType=jpg&imgType=face&alt=json",
    sUserName: prompt('Votre nom ?', 'Rick and Morty'),
    eUserName: document.getElementById('js-username'),
    eImage: document.getElementById('js-image'),
    eCname: document.getElementById('js-cname'),
    eCeyes: document.getElementById('js-ceyes'),
    eScore: document.getElementById('js-score'),
    eTrigger: document.getElementById('js-trigger'),
    eLives: document.getElementById('js-lives')
};