class Player {
    constructor(name, totalCoins){
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = 'small';
        this.gameActive = true;
    }


    gotHit(){
        if (this.status === 'powered up'){
            this.status = 'big';
        } else if (this.status === 'big') {
            this.status = 'small';
        } else if (this.status === 'small') {
            this.status = 'dead'
            this.gameActive = false;
        }
    }

    addCoin(){
        this.totalCoins++
    }

    gotPowerUp(){
        if (this.status === 'small'){
            this.status = 'big';
        } else if (this.status === 'big'){
            this.status = 'powered up'
        }
    }

    print(){
        console.log(
          `Name: ${this.name},
           Total Coins: ${this.totalCoins},
           Status: ${this.status}`
         )
    }

}
const player1 = new Player("Mario", 0)


const randomNumber = () => {
  var rand = Math.floor(Math.random() * 3);
  if (rand === 0) {
    player1.gotHit()
    player1.print()
  } else if (rand === 1){
    player1.gotPowerUp()
    player1.print()
  } else {
    player1.addCoin()
    player1.print()
  }
  if (!player1.gameActive) {
    clearInterval(playGame);
  }
}


const playGame = setInterval(randomNumber, 1000);
