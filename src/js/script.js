// imports
import settings from './modules/settings.js';
import helpers from './modules/helpers.js';

// Fonction auto-appelante permettant de définir un
// alias à l'objet settings (et helpers) de portée limitée
((s, h)=> {
    // update HTML elements
    eUpdate();

    // trigger
    s.eTrigger.addEventListener('click', function() {
        if (Math.random() > s.difficulty) {
            // live
            ++s.score;
        }
        else {
            // shot
            --s.lives;
            ++s.deads;
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
        s.eUsername.innerText = s.sUsername;
        // score
        s.eScore.innerText = 'Score: ' + s.score;
        // livebar with skulls and hearts
        let liveBar = '';
        for (let i = 0; i < 5; i++) {
            liveBar += ((i < s.deads) ? '💀' : '💛');
        }
        s.eLives.innerText = liveBar + ' ' + s.lives;
        }

}) (settings, helpers);