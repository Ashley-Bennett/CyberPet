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

// Declare page elements
let getButton = document.getElementById("get_button")
let startButton = document.getElementById("start_button")

let newPet


const getDog = () => {
  let name = prompt("What do you want to name your dog?", "");
  if (name) {
    alert(`You now have a dog named ${name}`)
    let newPet = new dog(`${name}`)
    return (newPet)
  } else {
    alert("You must name your pet")
    getDog()
  }
};

const getCat = () => {
  let name = prompt("What do you want to name your cat?", "");
  if (name) {
    alert(`You now have a cat named ${name}`)
    let newPet = new cat(`${name}`)
    return (newPet)
  } else {
    alert("You must name your pet")
    getCat()
  }
};

const getRabbit = () => {
  let name = prompt("What do you want to name your rabbit?", "");
  if (name) {
    alert(`You now have a rabbit named ${name}`)
    let newPet = new rabbit(`${name}`)
    return (newPet)
  } else {
    alert("You must name your pet")
    getRabbit()
  }
};

const typePet = () => {
  let petType = prompt("What kind of pet do you want? \n 1. Dog \n 2. Cat \n 3. Rabbit", "")
  switch (petType) {
    case "1":
      return getDog()
    case "2":
      return getCat()
    case "3":
      return getRabbit();
    default:
      alert("Not an option")
      typePet();
  }

};




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
    console.log("Your dog is already happy");
    return;
  } else {
    newPet.HAPPINESS += 20;
    newPet.START_HUNGER -= 10;
    newPet.START_THIRST -= 10;
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
    console.log("Your pet is full");
    return;
  } else {
    newPet.START_HUNGER += 20;
    newPet.START_THIRST - 10;
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
    console.log("Your pet is not tirsty");
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
  newPet.HAPPINESS -= 20;
  do {
    newPet.HEALTH--;
  } while (newPet.HEALTH > 10);
};

const time = () => {
  console.log("...");
};

const quit = () => {
  newPet.HEALTH -= 11;
  return;
};

const choose = () => {
  let choice = prompt("", "");
  if (choice == 1) {
    console.log(happinessStatus, hungerStatus, thirstStatus, healthStatus);
    //console.log(
    //newPet.HAPPINESS,
    //newPet.START_HUNGER,
    //newPet.START_THIRST,
    //newPet.HEALTH
    //);
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
    return quit();
  }
};

//logging
const action = () => {
  //console.log (happinessStatus,newPet.HEALTH, newPet.HAPPINESS)
  console.log(
    "What do you want to do? \n 1. Check status of your pet \n 2. Play with your pet \n 3. Feed your pet \n 4. Give your pet a drink \n 5. Go to the vet \n 6. Quit"
  );

  setTimeout(choose, 50);
};

const life = (pet) => {
  setInterval(healthCheck, 1000);
  setInterval(time, 1000);
  setInterval(action, 5000);
  setInterval(losingHappiness, 4000);
  setInterval(hungry, 7000);
  setInterval(thirst, 3000);
};

// life();

getButton.addEventListener("click", () => {
  console.log("start")

  return newPet = typePet()
  // return 
  // life()

})

startButton.addEventListener("click", () => {
  if(newPet){
    life()
  } else {
    alert("You need to get a pet")
  }
})
