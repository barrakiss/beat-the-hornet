new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            this.monsterHealth -= this.calculationDamage(3, 10);

            if (this.checkWin()) {
                return;
            }
            this.playerHealth -= this.calculationDamage(5, 12);
            this.checkWin();
        },
        specialAttack: function () {
            this.monsterHealth -= this.calculationDamage(10, 20);

            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = this.playerHealth;
            }
            // this.monsterAttack();
        },
        giveUp: function () {

        },
        monsterAttack: function () {
            this.playerHealth -= this.calculationDamage(5, 12);
            this.checkWin();
        },
        calculationDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {

            if (this.monsterHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if (this.playerHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});