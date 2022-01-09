var bottomRow = document.getElementById('bottomRow');
var stats = document.getElementsByClassName('stats');
var megaStats = document.getElementById('megaStats');
var megaHP = document.getElementById('megaHP');
var veigHP = document.getElementById('veigHP');
var megaMoves = document.getElementById('megaMoves');
var speMoves = document.getElementById('speMoves');
var MegamanHP = 100;
var VeigarHP = 100;

function beginBattle() {
    bottomRow.innerHTML = "Pick Megaman's ability by clicking the button above.";
    for (var x = 0; x < stats.length; x++) {
        stats[x].style.visibility = "visible";
    }

}

function veigAttack() {
    var attackchoice = Math.round(Math.random() * 3);
    if (attackchoice == 1) {
        var hitChance = Math.round(Math.random() * 10);
        if (hitChance <= 7) {
            var dmg = Math.round(Math.random() * 10) + 10;
            MegamanHP -= dmg;
            if (MegamanHP < 0) {
                MegamanHP = 0;
            }
            bottomRow.innerHTML += "<br>Veigar hit with you a basic Blast, doing" + " " + dmg + " " + "damage. You now have" + " " + MegamanHP + " " + "hp.";
            var megaHPBarWidth = (MegamanHP / 100) * 300;
            megaHP.style.width = megaHPBarWidth + "px";
        } else {
            bottomRow.innerHTML += "<br>Veigar missed!";
        }
    } else if (attackchoice == 2) {
        var hitChance = Math.round(Math.random() * 10);
        if (hitChance <= 7) {
            var dmg = Math.round(Math.random() * 15) + 15;
            MegamanHP -= dmg;
            if (MegamanHP < 0) {
                MegamanHP = 0;
            }
            bottomRow.innerHTML += "<br>Veigar hit with you a basic Blast, doing" + " " + dmg + " " + "damage. You now have" + " " + MegamanHP + " " + "hp.";
            var megaHPBarWidth = (MegamanHP / 100) * 300;
            megaHP.style.width = megaHPBarWidth + "px";
        } else {
            bottomRow.innerHTML += "<br>Veigar missed!";
        }
    } else {
        var hitChance = Math.round(Math.random() * 10);
        if (hitChance <= 3) {
            var dmg = Math.round(Math.random() * 20) + 20;
            MegamanHP -= dmg;
            if (MegamanHP < 0) {
                MegamanHP = 0;
            }
            bottomRow.innerHTML += "<br>Veigar hit with you a basic Blast, doing" + " " + dmg + " " + "damage. You now have" + " " + MegamanHP + " " + "hp.";
            var megaHPBarWidth = (MegamanHP / 100) * 300;
            megaHP.style.width = megaHPBarWidth + "px";
        } else {
            bottomRow.innerHTML += "<br>Veigar missed!";
        }
    }
    if (MegamanHP == 0) {
        bottomRow.innerHTML += "<br>Veigar has defeated you!!!<br><button onclick='restartGame()'>Play Again?</button>";
        megaMoves.style.visibility = "hidden";
        speMoves.style.visibility = "hidden";

    }
}

function attack() {
    var hitChance = Math.round(Math.random() * 10);
    if (hitChance <= 7) {
        var dmg = Math.round(Math.random() * 10) + 10;
        VeigarHP -= dmg;
        if (VeigarHP < 0) {
            VeigarHP = 0;
        }

        bottomRow.innerHTML = "You hit Veigar with your Punch, doing" + " " + dmg + " " + "damage. Veigar now has" + " " + VeigarHP + " " + "hp.";
        var veigHPBarWidth = (VeigarHP / 100) * 300;
        veigHP.style.width = veigHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (VeigarHP == 0) {
        bottomRow.innerHTML += "<br>You have successfully defeated Veigar!!!!!<br><button onclick='restartGame()'>Play Again?</button>";
        megaMoves.style.visibility = "hidden";
        speMoves.style.visibility = "hidden";

    } else {
        veigAttack()
    }
}

function special() {
    var hitChance = Math.round(Math.random() * 20);
    if (hitChance <= 7) {
        var dmg = Math.round(Math.random() * 20) + 20;
        VeigarHP -= dmg;
        if (VeigarHP < 0) {
            VeigarHP = 0;
        }
        bottomRow.innerHTML = "You hit Veigar with your Blast, doing" + " " + dmg + " " + "damage. Veigar now has" + " " + VeigarHP + " " + "hp.";
        var veigHPBarWidth = (VeigarHP / 100) * 300;
        veigHP.style.width = veigHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "You missed!";
    }
    if (VeigarHP == 0) {
        bottomRow.innerHTML += "<br>You have successfully defeated Veigar!!!!!<br><button onclick='restartGame()'>Play Again?</button>";
        megaMoves.style.visibility = "hidden";
        speMoves.style.visibility = "hidden";
    } else {
        veigAttack()
    }
}

function restartGame() {
    MegamanHP = 100;
    VeigarHP = 100;
    var megaHPBarWidth = (MegamanHP / 100) * 300;
    megaHP.style.width = megaHPBarWidth + "px";
    var veigHPBarWidth = (VeigarHP / 100) * 300;
    veigHP.style.width = veigHPBarWidth + "px";
    megaMoves.style.visibility = "visible";
    speMoves.style.visibility = "visible";
    beginBattle();
}