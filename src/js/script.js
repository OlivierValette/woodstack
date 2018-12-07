// imports
import settings from './modules/settings.js';
import helpers from './modules/helpers.js';

// Fonction anonyme auto-appelante permettant de définir un alias
// à l'objet settings (et helpers) de portée limitée
((s, h)=> {
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
            ++s.score;
            s.audioTrigger.play();
        }
        else {
            // shot
            --s.lives;
            ++s.deads;
            s.audioDead.play();
            // end of game
            if (s.deads == 5) {
                
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
        s.eScore.innerText = 'Score: ' + s.score;
        // livebar with skulls and hearts
        let liveBar = '';
        for (let i = 0; i < s.lives + s.deads; i++) {
            liveBar += ((i < s.deads) ? '💀' : '💛');
        }
        s.eLives.innerText = liveBar;
    }

}) (settings, helpers);