module.exports = {
    difficulty: 1/6,
    score: 0,
    lives: 5,
    deads: 0,
    audioDead:  new Audio("https://www.soundjay.com/mechanical/sounds/gun-gunshot-01.mp3"),
    audioTrigger: new Audio("https://www.soundjay.com/mechanical/sounds/gun-trigger-click-01.mp3"),
    sUserName: prompt('Votre nom ?', 'Rick and Morty'),
    eUserName: document.getElementById('js-username'),
    eImage: document.getElementById('js-image'),
    eScore: document.getElementById('js-score'),
    eTrigger: document.getElementById('js-trigger'),
    eLives: document.getElementById('js-lives')
};