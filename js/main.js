window.addEventListener("load", function () {
    let game = new Phaser.Game({
      title: "My Fantasy: Make Your Story",
      width: 600,
      height: 900,
      type: Phaser.AUTO,
      parent: "game",
      scale: {
        mode: Phaser.Scale.ENVELOP, 
        // mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
    });
  
    game.scene.add("Boot", Boot, true);
  });
  
  class Boot extends Phaser.Scene {
    preload() {
      //background
    this.load.image('bg-room', 'assets/images/bg-room.png');
    this.load.image('bg-place1', 'assets/images/bg-place1.png');
    this.load.image('bg-place2', 'assets/images/bg-place2.png');

    //Paul
    this.load.image('Paul', 'assets/images/Paul.png');
    this.load.image('PaulText1', 'assets/images/PaulText1.png');
    this.load.image('PaulText2', 'assets/images/PaulText2.png');

    //Lexi
    this.load.image('Lexi1', 'assets/images/Lexi1.png');
    this.load.image('Lexi2', 'assets/images/Lexi2.png');
    this.load.image('LexiText', 'assets/images/LexiText.png');

    //Lexi and outfit
    this.load.image('Lexi-dress1', 'assets/images/Lexi-dress1.png');
    this.load.image('Lexi-dress1-bag1', 'assets/images/Lexi-dress1-bag1.png');
    this.load.image('Lexi-dress1-bag1-accessory1', 'assets/images/Lexi-dress1-bag1-accessory1.png');
    this.load.image('Lexi-dress1-bag1-accessory2', 'assets/images/Lexi-dress1-bag1-accessory2.png');
    this.load.image('Lexi-dress1-bag2', 'assets/images/Lexi-dress1-bag2.png');
    this.load.image('Lexi-dress1-bag2-accessory1', 'assets/images/Lexi-dress1-bag2-accessory1.png');
    this.load.image('Lexi-dress1-bag2-accessory2', 'assets/images/Lexi-dress1-bag2-accessory2.png');
    this.load.image('Lexi-dress2', 'assets/images/Lexi-dress2.png');
    this.load.image('Lexi-dress2-bag1', 'assets/images/Lexi-dress2-bag1.png');
    this.load.image('Lexi-dress2-bag1-accessory1', 'assets/images/Lexi-dress2-bag1-accessory1.png');
    this.load.image('Lexi-dress2-bag1-accessory2', 'assets/images/Lexi-dress2-bag1-accessory2.png');
    this.load.image('Lexi-dress2-bag2', 'assets/images/Lexi-dress2-bag2.png');
    this.load.image('Lexi-dress2-bag2-accessory1', 'assets/images/Lexi-dress2-bag2-accessory1.png');
    this.load.image('Lexi-dress2-bag2-accessory2', 'assets/images/Lexi-dress2-bag2-accessory2.png');

    //Dresses
    this.load.image('dress1', 'assets/images/dress1.png');
    this.load.image('dress2', 'assets/images/dress2.png');

    //Bags
    this.load.image('Bag1', 'assets/images/Bag1.png');
    this.load.image('Bag2', 'assets/images/Bag2.png');

    //Accessories
    this.load.image('Accessory1', 'assets/images/Accessory1.png');
    this.load.image('Accessory2', 'assets/images/Accessory2.png');
    this.load.image('Accessory3', 'assets/images/Accessory3.png');

    //Choose
    this.load.image('Choose-dress', 'assets/images/Choose-dress.png');
    this.load.image('Choose-bag', 'assets/images/Choose-bag.png');
    this.load.image('Choose-accessory', 'assets/images/Choose-accessory.png');
    this.load.image('Choose-place', 'assets/images/Choose-place.png');

    //Progress
    this.load.image('Progress', 'assets/images/progress.png');
    this.load.image('Progress1', 'assets/images/progress1.png');
    this.load.image('Progress2', 'assets/images/progress2.png');
    this.load.image('Progress3', 'assets/images/progress3.png');

    //Assets
    this.load.image('Hand', 'assets/images/hand.png');
    this.load.image('PlayNow', 'assets/images/PlayNow.png');
    this.load.image('Place1', 'assets/images/place1.png');
    this.load.image('Place2', 'assets/images/place2.png');
    }
  
    create() {
      this.scene.add("Scene1", Scene1, true);
    }
  
    update() {}
  }