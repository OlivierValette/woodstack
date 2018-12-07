// imports
import settings from './modules/settings.js';
import helpers from './modules/helpers.js';

// Fonction anonyme auto-appelante permettant de définir un alias
// à l'objet settings (et helpers) de portée limitée
((s, h)=> {
    
    /* with xmlHttpRequest and 
    // get images by Google customsearch API
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
    
    // get images by swapi API
    // with fetch()
    // draw randomly a new character
    s.character = Math.floor(Math.random()*50)+1;
    fetch(s.characterSearchAPI + s.character + "/?format=json").then(function(response) {
        response.json().then(function(json) {
            s.eCname.innerText = json.name;
            s.eCeyes.innerText = json.eye_color;
        });
    });
    
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
                
            }
        }
        // update HTML elements
        eUpdate();
    });
    
    // Update HTML elements
    function eUpdate() {
        // username
        s.eUserName.innerText = s.sUserName;
        // score
        s.eScore.innerText = s.score;
        // livebar with skulls and hearts
        let liveBar = '';
        for (let i = 0; i < s.lives + s.deads; i++) {
            liveBar += ((i < s.deads) ? '💀' : '💛');
        }
        s.eLives.innerText = liveBar;
        // TODO 
        if (s.lives == 0) {
                alert("End of game! You're definitly dead");
        }
    }

}) (settings, helpers);