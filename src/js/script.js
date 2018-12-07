// imports
import settings from './modules/settings.js';
import helpers from './modules/helpers.js';

// Fonction anonyme auto-appelante permettant de définir un alias
// à l'objet settings (et helpers) de portée limitée
((s, h)=> {
    
    // get images by Google customsearch API
    // -------------------------------------

    /* with xmlHttpRequest 
    const imageSearch = new XMLHttpRequest(JSON);
    // asynchronous method: waiting for request response
    imageSearch.onreadystatechange = function(event) {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                console.log("Réponse reçue: %s", this.responseText);
            } else {
                console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
            }
        }
    };
    imageSearch.open('GET', s.imageSearchAPI + s.username + s.imageSearchParameters, false); 
    imageSearch.send(null);
    */
    
    // with fetch()
    var imageResult = [];
    fetch(s.imageSearchAPI + s.sUserName + s.imageSearchParameters).then(function(response) {
        response.json().then(function(json) {
            for (let index = 0; index < s.lives; index++) {
                imageResult.push(json.items[index].link);
            }
            console.log(imageResult);
        });
    });
    
    // get character by swapi API
    // --------------------------
        
    // draw randomly a new character
    // s.character = Math.floor(Math.random()*10)+1;
    
    // with xmlHttpRequest 
    // code de Matthieu Schneider
    /*
    function getJson(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            let status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            } else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    };
    getJson('https://swapi.co/api/people/26/?format=json', changeCharacter);

    function changeCharacter(status, data) {
        console.log(data);
    }
    
    // with fetch()
    fetch(s.characterSearchAPI + s.character + "/?format=json").then(function(response) {
        response.json().then(function(json) {
            s.eCname.innerText = json.name;
            s.eCeyes.innerText = json.eye_color;
            s.eImage.src = 'http://www.facetheforce.today/' + json.name.split(' ')[0].toLowerCase() + '/400';
        });
    });
    */
    
    // update HTML elements
    eUpdate();
    
    // trigger
    s.eTrigger.addEventListener('click', function() {
        // sounds reset
        s.audioTrigger.pause();
        s.audioTrigger.currentTime = 0;
        s.audioDead.pause();
        s.audioDead.currentTime = 0;
        
        // random draw...
        if (Math.random() > s.difficulty) {
            // live
            s.audioTrigger.play();
            ++s.score;
        }
        else {
            // shot
            s.audioDead.play();
            --s.lives;
            ++s.deads;
            // end of game
            if (s.lives == 0) {
                s.eTrigger.disabled = true;
            }
        }
        // update HTML elements
        eUpdate();
    });
    
    // Update HTML elements
    function eUpdate() {
        // username
        s.eUserName.innerText = s.sUserName;
        // image
        s.eImage.src = imageResult[s.deads];
        // score
        s.eScore.innerText = s.score;
        // livebar with skulls and hearts
        let liveBar = '';
        for (let i = 0; i < s.lives + s.deads; i++) {
            liveBar += ((i < s.deads) ? '💀' : '💛');
        }
        s.eLives.innerText = liveBar;
        // TODO wait for liveBar render before alert 
        if (s.lives == 0) {
            alert("End of game! You're definitly dead");
        }
    }

}) (settings, helpers);