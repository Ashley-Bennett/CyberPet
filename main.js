//overall pet class
class pet {
  constructor(name) {
      this.NAME = name;
      this.HAPPINESS = 100;
      this.HUNGER = 100;
      this.THIRST = 100;
      this.HEALTH = 10
  }
}

//dog class
class dog extends pet {
  constructor(name) {
      super(name);
      this.MAX_HUNGER = Math.floor(this.HUNGER * 1);
      this.MAX_THIRST = Math.floor(this.THIRST * 1);
      this.START_HUNGER = 75;
      this.START_THIRST = 75;
      this.PET = "Dog";
      this.MAX_HAPPINESS = Math.floor(this.HAPPINESS * 1.2);
  }
}


//cat class
class cat extends pet {
  constructor(name) {
      super(name);
      this.MAX_HUNGER = Math.floor(this.HUNGER * 0.8);
      this.MAX_THIRST = Math.floor(this.THIRST * 0.8);
      this.START_HUNGER = 60;
      this.START_THIRST = 60;
      this.PET = "Cat"
  }
}

//rabbit class
class rabbit extends pet {
  constructor(name) {
      super(name);
      this.MAX_HUNGER = Math.floor(this.HUNGER * 0.7);
      this.MAX_THIRST = Math.floor(this.THIRST * 0.7);
      this.START_HUNGER = 45;
      this.START_THIRST = 45;
      this.PET = "Rabbit"


  }
}



//let nameOfPet = prompt("name pet")


const getPet = () => {
  console.log("What kind of pet do you want? \n 1. Dog \n 2. Cat \n 3. Rabbit")
  const typePet = () => {
      let petType = prompt("", "")
      if (petType == 1) {
          console.log("What do you want to name your dog?")
          const getDog = () => {
              let name = prompt("", "")
              let newPet = new dog(name)
              console.log(`You now have a ${newPet.PET} named ${newPet.NAME}`);
          }
          setTimeout(getDog, 10)
      } else if (petType == 2) {
          console.log("What do you want to name your cat?")
          const getCat = () => {
              let name = prompt("", "")
              let newPet = new cat(name)
              console.log(`You now have a ${newPet.PET} named ${newPet.NAME}`);
          }
          setTimeout(getCat, 10)
      } else if (petType == 3) {
          console.log("What do you want to name your rabbit?")
          const getRabbit = () => {
              let name = prompt("", "")
              let newPet = new rabbit(name)
              console.log(`You now have a ${newPet.PET} named ${newPet.NAME}`);
              console.log(newPet);
          }
          setTimeout(getRabbit, 10)
      } else {
          console.log("Not an option")
      }



  }
  setTimeout(typePet, 100)

}



getPet()

//console.log(newPet)




 let newPet = new dog("Ash")
//console.log(newPet)

const life = () => {
  //do {

  let happinessStatus = "Your pet is happy";
  let hungerStatus = "Your pet is full";
  let thirstStatus = "Your pet is not thirsty";
  let healthStatus = "Your pet is healthy"

  //losing happiness
  const losingHappiness = () => {
      newPet.HAPPINESS -= 3;
      if (newPet.HAPPINESS > 80) {
          return happinessStatus = "Your pet is happy";
      } else if (newPet.HAPPINESS <= 80 && newPet.HAPPINESS > 60) {
          return happinessStatus = "Your pet is getting restless"
      } else if (newPet.HAPPINESS <= 60 && newPet.HAPPINESS > 40) {
          return happinessStatus = "Your pet is restless"
      } else if (newPet.HAPPINESS <= 40 && newPet.HAPPINESS > 20) {
          return happinessStatus = "Your pet is bored"
      } else if (newPet.HAPPINESS <= 20 && newPet.HAPPINESS > 0) {
          newPet.HEALTH--
          return happinessStatus = "Your pet is dying of boredom"
      } else(newPet.HAPPINESS < 0)
      newPet.HAPPINESS += 3
      newPet.HEALTH--
      return happinessStatus = "Your pet is dying of boredom"
  }

  //playing
  const play = () => {
      if (newPet.HAPPINESS > newPet.MAX_HAPPINESS) {
          return
      } else {
          newPet.HAPPINESS += 20
      }
  }


  //getting hungry
  const hungry = () => {
      newPet.START_HUNGER -= 3;
      if (newPet.START_HUNGER > 80) {
          return hungerStatus = "Your pet is full";
      } else if (newPet.START_HUNGER <= 80 && newPet.START_HUNGER > 60) {
          return hungerStatus = "Your pet is peckish"
      } else if (newPet.START_HUNGER <= 60 && newPet.START_HUNGER > 40) {
          return hungerStatus = "Your pet is hungry"
      } else if (newPet.START_HUNGER <= 40 && newPet.START_HUNGER > 20) {
          return hungerStatus = "Your pet is starving"
      } else if (newPet.START_HUNGER <= 20 && newPet.START_HUNGER > 0) {
          newPet.HEALTH--
          return hungerStatus = "Your pet is dying of starvation"
      } else(newPet.START_HUNGER < 0)
      newPet.START_HUNGER += 3
      newPet.HEALTH
      return hungerStatus = "Your pet is dying of starvation"
  }

  //feeding
  const feed = () => {
      if (newPet.START_HUNGER > newPet.MAX_HUNGER) {
          return
      } else {
          newPet.START_HUNGER += 20
      }
  }



  //getting thirsty
  const thirst = () => {
      newPet.START_THIRST -= 3;
      if (newPet.START_THIRST > 80) {
          return thirstStatus = "Your pet is not thirsty";
      } else if (newPet.START_THIRST <= 80 && newPet.START_THIRST > 60) {
          return thirstStatus = "Your pet is parched"
      } else if (newPet.START_THIRST <= 60 && newPet.START_THIRST > 40) {
          return thirstStatus = "Your pet is thirsty"
      } else if (newPet.START_THIRST <= 40 && newPet.START_THIRST > 20) {
          return thirstStatus = "Your pet is dehydrated"
      } else if (newPet.START_THIRST <= 20 && newPet.START_THIRST > 0) {
          newPet.HEALTH--
          return thirstStatus = "Your pet is dying of dehydration"
      } else(newPet.START_THIRST < 0)
      newPet.START_THIRST += 3
      newPet.HEALTH--
      return thirstStatus = "Your pet is dying of dehydration"
  }

  //give drink
  const giveDrink = () => {
      if (newPet.START_THIRST > newPet.MAX_THIRST) {
          return
      } else {
          newPet.START_THIRST += 20
      }
  }



  //health status check
  const healthCheck = () => {
      if (newPet.HEALTH > 9) {
          return healthStatus = "Your pet is healthy";
      } else if (newPet.HEALTH <= 9 && newPet.HEALTH > 6) {
          return healthStatus = "Your pet is feeling sick"
      } else if (newPet.HEALTH <= 6 && newPet.HEALTH > 4) {
          return healthStatus = "Your pet is sick"
      } else if (newPet.HEALTH <= 4 && newPet.HEALTH > 2) {
          return healthStatus = "Your pet is really sick"
      } else if (newPet.HEALTH <= 2 && newPet.HEALTH > 0) {
          newPet.HEALTH--
          return healthStatus = "Your pet is dying of sickness"
      } else {
          console.log("Your pet has died :'(");
      }
  }

  //go to vet
  const visitVet = () => {
      newPet.HEALTH += 5
      do {
          newPet.HEALTH--
      }
      while (newPet.HEALTH > 10);
  }

  const time = () => {
    console.log("...")
}


  //logging
  const action = () => {
      //console.log (happinessStatus,newPet.HEALTH, newPet.HAPPINESS)
      console.log("What do you want to do? \n 1. Check status of your pet \n 2. Play with your pet \n 3. Feed your pet \n 4. Give your pet a drink \n 5. Go to the vet \n 6. Quit")

      const choose = () => {
          let choice = prompt("", "")
          if (choice == 1) {
              console.log(happinessStatus, hungerStatus, thirstStatus, healthStatus)
              console.log(newPet.HAPPINESS, newPet.START_HUNGER, newPet.START_THIRST, newPet.HEALTH)
          } else if (choice == 0) {
              console.log("quit")
          } else if (choice == 2) {
              console.log("you have played with your pet")
              return play()
          } else if (choice == 3) {
              console.log("you have fed your pet")
              return feed()
          } else if (choice == 4) {
              console.log("you have given your pet a drink")
              return giveDrink()
          } else if (choice == 5) {
              console.log("you have taken your pet to the vet")
              return visitVet()
          } else if (choice == 6) {
            console.log("Quitting...");
            clearInterval(healthCheck,time,action,losingHappiness,hungry,thirst);
          }
      }
      setTimeout(choose, 50)
  }


  

  setInterval(healthCheck, 1000)
  setInterval(time, 1000)
  setInterval(action, 5000)
  setInterval(losingHappiness, 4000)
  setInterval(hungry, 7000)
  setInterval(thirst, 3000)
  // while (newPet.HEALTH > 0)
}

life()












var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
var namePick = prompt("Find a name for your monster!");

	//variables 
	$scope.monster = {
		name: "Jason",
		happiness: 5,
		size: 1,
		hungry: 0,
        energy: 50,
        drunk: 0,
        level: 1,
        xp: 0,
        nextxp: 10,
        strength: 1,
        speed: 1
	}
	$scope.tricks = [
	   {
        name: "run",
        desc: "I'm runnin runnin and runnin runnin... (+1 speed)",
        plusHappy: 15,
        plusxp: 3,
        minusEnergy: 15,
        act: function(){
            $scope.monster.speed += 1;
        }
       },
       {
        name: "walk",
        desc: "walkin' on sunshineee, yeah",
        plusHappy: 10,
        plusxp: 1,
        minusEnergy: 7,
        act: function(){

        }
       }
	]
	$scope.money = 20;
    $scope.monster.name = namePick;
    $scope.info = document.getElementById("info");
	//feed that monster, if he's hungry
	$scope.feed = function() {

		//set the old and the new width/height
		var monsterImg = document.getElementById('monster');
		var height = monsterImg.offsetHeight;
		var newHeight = height + 3;

		var width = monsterImg.offsetWidth;
		var newWidth = width + 3;

		//if the monster is hungry, and you have some food left, increase the size of the monster, and decrease hunger 
		if ($scope.monster.hungry > 0) {
		if ($scope.food.supply > 0) {
		$scope.food.supply -= 1;
		if ($scope.monster.hungry > 0) {
			$scope.monster.hungry -= 16;
			monsterImg.style.height = newHeight + 'px';
			monsterImg.style.width = newWidth + 'px';
		}
		}
	}
	}
    //give beer to the monster 
   $scope.giveBeer = function() {
        if($scope.beer.supply > 0) {
        if($scope.monster.drunk < 2) {
            $scope.monster.drunk ++;
            $scope.monster.happiness += 20;
            $scope.beer.supply --;
            info.innerHTML = "Thanks! I feel better.";
        }
        else {
            info.innerHTML = "I'm too drunk. I don't want to drink that. :(";
        }
    }
        else {
            info.innerHTML = "You don't have any beer. Go to the shop, and get some...";
        }
    }

    //give energy drink
    $scope.giveEnergyDrink = function() {
        if($scope.energyDrink.supply > 0) {
            $scope.monster.energy += 20;
            $scope.energyDrink.supply --;
            info.innerHTML = "Thanks! I feel the power.";
        }
        else {
            info.innerHTML = "You don't have any energy drink. Go to the shop, and get some...";
        }
    }

    //school elements
    $scope.allTricks = [
        {
            name: "karate",
            desc: "Whuya! Thanks for the practice, you increased your monster's strength.",
            plusHappy: 30,
            plusxp: 8,
            minusEnergy: 40,
            act: function(){
                $scope.monster.strength += 1;
            }
        },
        {
            name: "dance",
            desc: "Yo i can dance, check it out! (+1 speed for your monster)",
            plusHappy: 50,
            plusxp: 5,
            minusEnergy: 40,
            act: function(){
                $scope.monster.speed += 1;
            }
        },
        {
            name: "sing",
            desc: "siiiiingin' in the rain, I'm singin in the rain!",
            plusHappy: 25,
            plusxp: 5,
            minusEnergy: 20,
            act: function() {

            }
        },
        {
            name: "hunt",
            desc: "hunting",
            plusHappy: 10,
            plusxp: 12,
            minusEnergy: 10,
            act: function() {
                var randomNum = (Math.random() * 10) + ($scope.monster.strength/ 10);
                if(randomNum > 7) {
                    this.desc = "Succesful hunting. +2 food!";
                    $scope.monster.happiness += 5;
                    $scope.food.supply += 2;
                    console.log(randomNum);
                }
                else {
                    this.desc = "No luck this time.";
                    console.log(randomNum);
                }
            }
        },
        {
            name: "steal",
            desc: "steal",
            plusHappy: 10,
            plusxp: 4,
            minusEnergy: 20,
            act: function() {
                var randomNum = (Math.random() * 10) + ($scope.monster.speed / 10);
                if(randomNum > 8) {
                    this.desc = "Succesful stealing. +4 money!";
                    $scope.monster.happiness += 5;
                    $scope.money += 5;
                    console.log(randomNum);
                }
                else {
                    this.desc = "No luck this time.";
                    console.log(randomNum);
                }
            }
        }
    ];

    // push the selected trick into your monster's skills
    
        $scope.changedValue = function(item) {
        var current = item.name;    
        var partOf = false;
        if ($scope.money >= 5) {
        for (i = 0; i < $scope.tricks.length; i++) {
            if (current === $scope.tricks[i].name) {
                partOf = true;
            }
        }

        if (partOf == false) {
            $scope.tricks.push(item);
            $scope.money -= 5;
            $scope.monster.xp += item.plusxp;
            $scope.levelCheck();
            document.getElementById("info").innerHTML = "You've succesfully learned how to " + item.name + ".";
        }
        else {
            console.log("nem tanultad meg.");
            document.getElementById("info").innerHTML = "You've already learned this skill!";
        }
    }
    else {
        document.getElementById("info").innerHTML = "You don't have enough money."    }
};  
        //doing the tricks
    
    $scope.doTrick = function(target) {
        if ($scope.monster.energy >= target.minusEnergy) {
            target.act();
        info.innerHTML = target.desc;
        $scope.monster.happiness += target.plusHappy;
        $scope.monster.energy -= target.minusEnergy;
        $scope.monster.xp += (target.plusxp / 10);
        $scope.levelCheck();
    }
        else {
            info.innerHTML = "I'm tired. Can't do that..."
        }
    }
    
    // Set timeout, the monster gets hungrier, energy increases
    setInterval(function() { 
    $scope.monster.hungry += 7;
        if ($scope.monster.hungry > 100) {
            $scope.monster.hungry = 100;
        }
        if ($scope.monster.hungry == 100) {
            $scope.monster.happiness --;
            if($scope.monster.happiness < 0) {
                $scope.monster.happiness = 0;
                info.innerHTML = "I'm not happy. I want to die... :("
            }
        }
        $scope.monster.energy += 5;
        if ($scope.monster.energy > 100) {
            $scope.monster.energy = 100;
        }
        $scope.monster.drunk --;
        if($scope.monster.drunk < 0) {
            $scope.monster.drunk = 0;
        }
    $scope.$apply();
    }, 5000);
    
    //show the shop
    
    $scope.showBolt = false;
    $scope.showShop = function() {
        $scope.showBolt = !$scope.showBolt;
        $scope.showTeach = false;
        $scope.showPlay = false;
        $scope.showCustom= false;
        $scope.showArenas = false;
    }
    //show the playground
    $scope.showPlay = false;
    $scope.showPlayGround = function() {
        $scope.showPlay = !$scope.showPlay;
        $scope.showTeach = false;
        $scope.showBolt = false;
        $scope.showCustom= false;
        $scope.showArenas = false;
    }

        //show the school
    $scope.showTeach = false;
     $scope.showSchool = function() {
        $scope.showTeach = !$scope.showTeach;
         $scope.showBolt = false;
         $scope.showPlay = false;
         $scope.showCustom= false;
         $scope.showArenas = false;
}
         //show customize
     $scope.showCustom= false;
     $scope.showCustomize = function() {
        $scope.showCustom = !$scope.showCustom;
         $scope.showBolt = false;
         $scope.showPlay = false;  
         $scope.showTeach = false;  
         $scope.showArenas = false;
    }
        //show properties
     $scope.showProps= false;
     $scope.showProperties = function() {
        $scope.showProps = !$scope.showProps;
         $scope.showBolt = false;
         $scope.showPlay = false;  
         $scope.showTeach = false;  
         $scope.showCustom= false;
         $scope.showArenas = false;
    }   

        //show the arena
         $scope.showArenas = false;
     $scope.showArena = function() {
        $scope.showArenas = !$scope.showArenas;
         $scope.showBolt = false;
         $scope.showPlay = false;  
         $scope.showTeach = false;  
         $scope.showCustom= false;
         $scope.showProps= false;
    }   

    //food, beer 
    $scope.food = {
        name: "food",
        img: "http://icons.iconarchive.com/icons/mohsenfakharian/christmas/512/fast-food-icon.png",
        cost: 2,
        supply: 5
    }
    $scope.beer = {
        name: "beer",
        img: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/beer-icon.png",
        cost: 4,
        supply: 0
    }
    $scope.energyDrink = {
        name: "energydrink",
        img: "http://www.delivermedrinks.com/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/r/e/redbull.png",
        cost: 3,
        supply: 3,
        act: function() {
            return giveEnergyDrink();
        }
    }

    //buy something

   $scope.buy = function(target) {
        if($scope.money >= target.cost) {
            target.supply ++;
            info.innerHTML = "You bought some " + target.name + ".";
            $scope.money -= target.cost;
        }
        else {
            info.innerHTML = "You'dont have enough money.";
        }
    }

    //casino

    $scope.playCasino = function() {
        var number = document.casino.pickNumber.value;
        var bet = document.casino.money.value;


        if ($scope.money < bet) {
            info.innerHTML = "Wrong! You don't have enough money to do that.";
        }
        else {
            if (number < 0 || number > 5) {
                info.innerHTML = "Not a valid number. Pick a number between 1 and 5";
            }
            else {
            var randomNum = Math.floor(Math.random() * 5 + 1);
        if (number == randomNum) {
            info.innerHTML = "The dealer's number is " + randomNum + ". Yeah! You've won " + bet * 4 + " gold.";
            $scope.money += bet * 5;
        }
        else {
            info.innerHTML = "The dealer's number is " + randomNum + ". Sad. You've lost " + bet + " gold.";
            $scope.money -= bet;
        }
    }
        }

        
    }

    // customize 
    $scope.allMonsters = [
        "https://cdn.pixabay.com/photo/2016/03/22/17/28/transparent-background-1273346_960_720.png",
        "http://img15.deviantart.net/8602/i/2013/171/a/b/doctane_the_noivern_by_drphantom24-d69xmx9.png",
        "http://img00.deviantart.net/7a97/i/2012/122/6/9/cookie_monster_by_neorame-d4yb0b5.png",
        "http://www.clipartkid.com/images/417/digital-scrapbooking-cute-clipart-daily-svg-freebies-clip-art-Vdjm9j-clipart.png",
        "http://vignette1.wikia.nocookie.net/monsterhunterfanon/images/c/c3/Crackler_Without_Background.png/revision/latest?cb=20151025105258",
        "http://s6.favim.com/610/151113/background-cute-drawing-fall-Favim.com-3561016.png"
    ]

    $scope.customMonster = function(target) {
        document.getElementById("monster").src = target;
        $scope.showCustom= false;
    }

    //levelling system 
    $scope.levelCheck = function() {
        if ($scope.monster.xp > ($scope.monster.level * $scope.monster.level) * 8) {
            $scope.monster.level++;
            info.innerHTML = "You've reached lvl " + $scope.monster.level + "!";
            $scope.monster.speed += $scope.monster.level * 3;
            $scope.monster.strength += $scope.monster.level * 2;
            $scope.monster.nextxp = ($scope.monster.level * $scope.monster.level) * 8;
        }
    }
$scope.showPay = true;
    // enter the Arena 
$scope.showFight = false;
    $scope.enterArena = function() {
        if($scope.money >= 2) {
        $scope.money -= 3;
        var randomLvl = $scope.monster.level + (Math.floor((Math.random() * 10) - 4));
        if (randomLvl < 1) {
            randomLvl = 1;
        }
        var randomStrength = randomLvl * 2 + randomLvl;
        $scope.randomLvl = randomLvl;
        $scope.randomStrength = randomStrength;
        $scope.showFight = true;
        $scope.showPay = false;
        var randPic = $scope.allMonsters[Math.floor(Math.random() * $scope.allMonsters.length)];
        document.getElementById("enemyPlace").innerHTML = "<img src=" + randPic + " id='monster'>";
        document.getElementById("enemyStats").innerHTML = "Looks like you have an enemy here!<br> LvL:" + randomLvl + "<br> Strength:" + randomStrength + "<br>";
        }
        else {
            document.getElementById("info").innerHTML = "You don't have enough money! ";
        }
    }

    //fight 
        $scope.randomLvl;
    $scope.randomStrength

    // reset arena 
    $scope.resetArena = function() {
        document.getElementById("enemyPlace").innerHTML = "<h4> Welcome in the Arena! To enter, you have to pay 3 gold.</h4>";
        document.getElementById("enemyStats").innerHTML = "";
        $scope.showPay = true;
        $scope.showFight = false;
    }


    $scope.doFight = function() {
        if ($scope.monster.strength + (Math.random()) * 10 > $scope.randomStrength + (Math.random())) {
            document.getElementById("info").innerHTML = "Your monster was stronger! You gained 4 gold and some experience!";
            $scope.money += 5;
            $scope.monster.xp += 3;
            $scope.resetArena();
        }
        else {
            console.log("loose");
            document.getElementById("info").innerHTML = "Your monster was weak. You lost 2 gold.";
            $scope.resetArena();
        }
    }


});	 


//overall pet class
class pet {
    constructor(name) {
      this.NAME = name;
      this.HAPPINESS = 100;
      this.HUNGER = 100;
      this.THIRST = 100;
      this.HEALTH = 10;
    }
  }
  
  //dog class
  class dog extends pet {
    constructor(name) {
      super(name);
      this.MAX_HUNGER = Math.floor(this.HUNGER * 1);
      this.MAX_THIRST = Math.floor(this.THIRST * 1);
      this.START_HUNGER = 75;
      this.START_THIRST = 75;
      this.PET = "Dog";
      this.MAX_HAPPINESS = Math.floor(this.HAPPINESS * 1.2);
    }
  }
  
  //cat class
  class cat extends pet {
    constructor(name) {
      super(name);
      this.MAX_HUNGER = Math.floor(this.HUNGER * 0.8);
      this.MAX_THIRST = Math.floor(this.THIRST * 0.8);
      this.START_HUNGER = 60;
      this.START_THIRST = 60;
      this.PET = "Cat";
    }
  }
  
  //rabbit class
  class rabbit extends pet {
    constructor(name) {
      super(name);
      this.MAX_HUNGER = Math.floor(this.HUNGER * 0.7);
      this.MAX_THIRST = Math.floor(this.THIRST * 0.7);
      this.START_HUNGER = 45;
      this.START_THIRST = 45;
      this.PET = "Rabbit";
    }
  }
  
  //let nameOfPet = prompt("name pet")
  // let newDog = 
  
  const getDog = () => {
    let name = prompt("", "");
    // newDog.NAME = name;
    console.log(`You now have a Dog named ${name}`);
    return new dog(name);
  };
  
  const getCat = () => {
    let name = prompt("", "");
    //let newPet = new cat(name);
    console.log(`You now have a Cat named ${name}`);
    return new cat(name)
  };
  
  const getRabbit = () => {
    let name = prompt("", "");
    //let newPet = new rabbit(name);
    console.log(`You now have a rabbit named ${name}`);
    return new cat(name)
  };
  
  const typePet = () => {
      let petType = prompt("", "");
      if (petType == 1) {
        console.log("What do you want to name your dog?");
        setTimeout(getDog, 10);
      } else if (petType == 2) {
        console.log("What do you want to name your cat?");
        setTimeout(getCat, 10);
      } else if (petType == 3) {
        console.log("What do you want to name your rabbit?");
        setTimeout(getRabbit, 10);
      } else {
        console.log("Not an option");
      }
    };
  
  const getPet = () => {
    console.log("What kind of pet do you want? \n 1. Dog \n 2. Cat \n 3. Rabbit");
    setTimeout(typePet, 100);
  };
  
  getPet()
  
  let newPet = pet
  
  //console.log(newPet)
  
  // let newPet = new dog("Ash")
  //console.log(newPet)
  
  const life = () => {
    //do {
  
    let happinessStatus = "Your pet is happy";
    let hungerStatus = "Your pet is full";
    let thirstStatus = "Your pet is not thirsty";
    let healthStatus = "Your pet is healthy";
  
    //losing happiness
    const losingHappiness = () => {
      newPet.HAPPINESS -= 3;
      if (newPet.HAPPINESS > 80) {
        return (happinessStatus = "Your pet is happy");
      } else if (newPet.HAPPINESS <= 80 && newPet.HAPPINESS > 60) {
        return (happinessStatus = "Your pet is getting restless");
      } else if (newPet.HAPPINESS <= 60 && newPet.HAPPINESS > 40) {
        return (happinessStatus = "Your pet is restless");
      } else if (newPet.HAPPINESS <= 40 && newPet.HAPPINESS > 20) {
        return (happinessStatus = "Your pet is bored");
      } else if (newPet.HAPPINESS <= 20 && newPet.HAPPINESS > 0) {
        newPet.HEALTH--;
        return (happinessStatus = "Your pet is dying of boredom");
      } else newPet.HAPPINESS < 0;
      newPet.HAPPINESS += 3;
      newPet.HEALTH--;
      return (happinessStatus = "Your pet is dying of boredom");
    };
  
    //playing
    const play = () => {
      if (newPet.HAPPINESS > newPet.MAX_HAPPINESS) {
        return;
      } else {
        newPet.HAPPINESS += 20;
      }
    };
  
    //getting hungry
    const hungry = () => {
      newPet.START_HUNGER -= 3;
      if (newPet.START_HUNGER > 80) {
        return (hungerStatus = "Your pet is full");
      } else if (newPet.START_HUNGER <= 80 && newPet.START_HUNGER > 60) {
        return (hungerStatus = "Your pet is peckish");
      } else if (newPet.START_HUNGER <= 60 && newPet.START_HUNGER > 40) {
        return (hungerStatus = "Your pet is hungry");
      } else if (newPet.START_HUNGER <= 40 && newPet.START_HUNGER > 20) {
        return (hungerStatus = "Your pet is starving");
      } else if (newPet.START_HUNGER <= 20 && newPet.START_HUNGER > 0) {
        newPet.HEALTH--;
        return (hungerStatus = "Your pet is dying of starvation");
      } else newPet.START_HUNGER < 0;
      newPet.START_HUNGER += 3;
      newPet.HEALTH;
      return (hungerStatus = "Your pet is dying of starvation");
    };
  
    //feeding
    const feed = () => {
      if (newPet.START_HUNGER > newPet.MAX_HUNGER) {
        return;
      } else {
        newPet.START_HUNGER += 20;
      }
    };
  
    //getting thirsty
    const thirst = () => {
      newPet.START_THIRST -= 3;
      if (newPet.START_THIRST > 80) {
        return (thirstStatus = "Your pet is not thirsty");
      } else if (newPet.START_THIRST <= 80 && newPet.START_THIRST > 60) {
        return (thirstStatus = "Your pet is parched");
      } else if (newPet.START_THIRST <= 60 && newPet.START_THIRST > 40) {
        return (thirstStatus = "Your pet is thirsty");
      } else if (newPet.START_THIRST <= 40 && newPet.START_THIRST > 20) {
        return (thirstStatus = "Your pet is dehydrated");
      } else if (newPet.START_THIRST <= 20 && newPet.START_THIRST > 0) {
        newPet.HEALTH--;
        return (thirstStatus = "Your pet is dying of dehydration");
      } else newPet.START_THIRST < 0;
      newPet.START_THIRST += 3;
      newPet.HEALTH--;
      return (thirstStatus = "Your pet is dying of dehydration");
    };
  
    //give drink
    const giveDrink = () => {
      if (newPet.START_THIRST > newPet.MAX_THIRST) {
        return;
      } else {
        newPet.START_THIRST += 20;
      }
    };
  
    //health status check
    const healthCheck = () => {
      if (newPet.HEALTH > 9) {
        return (healthStatus = "Your pet is healthy");
      } else if (newPet.HEALTH <= 9 && newPet.HEALTH > 6) {
        return (healthStatus = "Your pet is feeling sick");
      } else if (newPet.HEALTH <= 6 && newPet.HEALTH > 4) {
        return (healthStatus = "Your pet is sick");
      } else if (newPet.HEALTH <= 4 && newPet.HEALTH > 2) {
        return (healthStatus = "Your pet is really sick");
      } else if (newPet.HEALTH <= 2 && newPet.HEALTH > 0) {
        newPet.HEALTH--;
        return (healthStatus = "Your pet is dying of sickness");
      } else {
        console.log("Your pet has died :'(");
      }
    };
  
    //go to vet
    const visitVet = () => {
      newPet.HEALTH += 5;
      do {
        newPet.HEALTH--;
      } while (newPet.HEALTH > 10);
    };
  
    const time = () => {
      console.log("...");
    };
  
    //logging
    const action = () => {
      //console.log (happinessStatus,newPet.HEALTH, newPet.HAPPINESS)
      console.log(
        "What do you want to do? \n 1. Check status of your pet \n 2. Play with your pet \n 3. Feed your pet \n 4. Give your pet a drink \n 5. Go to the vet \n 6. Quit"
      );
  
      const choose = () => {
        let choice = prompt("", "");
        if (choice == 1) {
          console.log(happinessStatus, hungerStatus, thirstStatus, healthStatus);
          console.log(
            newPet.HAPPINESS,
            newPet.START_HUNGER,
            newPet.START_THIRST,
            newPet.HEALTH
          );
        } else if (choice == 0) {
          console.log("quit");
        } else if (choice == 2) {
          console.log("you have played with your pet");
          return play();
        } else if (choice == 3) {
          console.log("you have fed your pet");
          return feed();
        } else if (choice == 4) {
          console.log("you have given your pet a drink");
          return giveDrink();
        } else if (choice == 5) {
          console.log("you have taken your pet to the vet");
          return visitVet();
        } else if (choice == 6) {
          console.log("Quitting...");
          clearInterval(
            healthCheck,
            time,
            action,
            losingHappiness,
            hungry,
            thirst
          );
        }
      };
      setTimeout(choose, 50);
    };
  
    setInterval(healthCheck, 1000);
    setInterval(time, 1000);
    setInterval(action, 5000);
    setInterval(losingHappiness, 4000);
    setInterval(hungry, 7000);
    setInterval(thirst, 3000);
    // while (newPet.HEALTH > 0)
  };
  
  //life()