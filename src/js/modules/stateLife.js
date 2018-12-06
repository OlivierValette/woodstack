"use strict";

function stateLife() {

    let life = 100;

    function changeLife(val) {
        life += val;
    }

    return {
        addLife: function() {
            changeLife(1);
        },
        removeLife: function() {
            changelife(-1);
        },
        showLife: function() {
            console.log(life);
        }
    }
    
};

var maVie = stateLife();
maVie.addLife();
maVie.showLife();

