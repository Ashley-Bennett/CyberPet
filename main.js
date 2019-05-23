//overall pet class
class pet {
  constructor(name) {
    this.NAME = name;
    this.HAPPINESS = 100;
    this.HUNGER = 100;
    this.THIRST = 100;
    this.HEALTH = 10;
    this.HUNGER_STATUS = "green"
    this.THIRST_STATUS = "green"
    this.HAPPINESS_STATUS = "green"
    this.HEALTH_STATUS = "green"
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
    this.MAX_HAPPINESS = Math.floor(this.HAPPINESS * 1.1)
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
    this.MAX_HAPPINESS = Math.floor(this.HAPPINESS * 0.9)
  }
}

// Declare page elements
let getButton = document.getElementById("get_button")
let startButton = document.getElementById("start_button")
let PET_ = document.getElementById("pet")
let HEALTH_ = document.getElementById("health")
let THIRST_ = document.getElementById("thirst")
let HAPPINESS_ = document.getElementById("happiness")
let HUNGER_ = document.getElementById("hunger")
let VET_ = document.getElementById("vet")
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
let quit = 0
let gameStart = 0

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
    console.log("Your pet is already happy");
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
    newPet.HUNGER_STATUS = ("green")
    return (hungerStatus = "Your pet is full");
  } else if (newPet.START_HUNGER <= 80 && newPet.START_HUNGER > 60) {
    newPet.HUNGER_STATUS = ("yellow")
    return (hungerStatus = "Your pet is peckish");
  } else if (newPet.START_HUNGER <= 60 && newPet.START_HUNGER > 40) {
    newPet.HUNGER_STATUS = ("amber")
    return (hungerStatus = "Your pet is hungry");
  } else if (newPet.START_HUNGER <= 40 && newPet.START_HUNGER > 20) {
    newPet.HUNGER_STATUS = ("orange")
    return (hungerStatus = "Your pet is starving");
  } else if (newPet.START_HUNGER <= 20 && newPet.START_HUNGER > 0) {
    newPet.HUNGER_STATUS = ("red")
    newPet.HEALTH--;
    return (hungerStatus = "Your pet is dying of starvation");
  } else newPet.START_HUNGER < 0;
  newPet.START_HUNGER += 3;
  newPet.HEALTH;
  return (hungerStatus = "Your pet is dying of starvation");
};

//feeding
// const feed = () => {
//   if (newPet.START_HUNGER > newPet.MAX_HUNGER) {
//     console.log("Your pet is full");
//     return;
//   } else {
//     newPet.START_HUNGER += 20;
//     newPet.START_THIRST - 10;
//   }
// };

//getting thirsty
const thirst = () => {
  newPet.START_THIRST -= 3;

  if (newPet.START_THIRST > 80) {
    newPet.THIRST_STATUS = ("green")
    return (thirstStatus = "Your pet is not thirsty");
  } else if (newPet.START_THIRST <= 80 && newPet.START_THIRST > 60) {
    newPet.THIRST_STATUS = ("yellow")
    return (thirstStatus = "Your pet is parched");
  } else if (newPet.START_THIRST <= 60 && newPet.START_THIRST > 40) {
    newPet.THIRST_STATUS = ("amber")
    return (thirstStatus = "Your pet is thirsty");
  } else if (newPet.START_THIRST <= 40 && newPet.START_THIRST > 20) {
    newPet.THIRST_STATUS = ("orange")
    return (thirstStatus = "Your pet is dehydrated");
  } else if (newPet.START_THIRST <= 20 && newPet.START_THIRST > 0) {
    newPet.THIRST_STATUS = ("red")
    newPet.HEALTH--;
    return (thirstStatus = "Your pet is dying of dehydration");
  } else newPet.START_THIRST < 0;
  newPet.START_THIRST += 3;
  newPet.HEALTH--;
  return (thirstStatus = "Your pet is dying of dehydration");
};

//give drink
// const giveDrink = () => {
//   if (newPet.START_THIRST > newPet.MAX_THIRST) {
//     console.log("Your pet is not tirsty");
//     return;
//   } else {
//     newPet.START_THIRST += 20;
//   }
// };

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

// const quit = () => {
//   // newPet.HEALTH -= 11;
//   return quit = 1;
// };

const choose = () => {
  THIRST_.innerHTML = newPet.START_THIRST
  let choice = prompt("What do you want to do? \n 1. Check status of your pet \n 2. Play with your pet \n 3. Feed your pet \n 4. Give your pet a drink \n 5. Go to the vet \n 6. Quit", "");
  if (choice == 1) {
    console.log(happinessStatus, hungerStatus, thirstStatus, healthStatus);
    console.log(
      newPet.HAPPINESS,
      newPet.START_HUNGER,
      newPet.START_THIRST,
      newPet.HEALTH
    );
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
    return quit = 1;
  }
};

const update = () => {
  THIRST_.classList.remove("green", "yellow", "amber", "orange", "red")
  THIRST_.classList.add(newPet.THIRST_STATUS)
  HUNGER_.classList.remove("green", "yellow", "amber", "orange", "red")
  HUNGER_.classList.add(newPet.HUNGER_STATUS)
  HEALTH_.classList.remove("green", "yellow", "amber", "orange", "red")
  HEALTH_.classList.add(newPet.HEALTH_STATUS)
  HAPPINESS_.classList.remove("green", "yellow", "amber", "orange", "red")
  HAPPINESS_.classList.add(newPet.HAPPINESS_STATUS)
}

THIRST_.addEventListener("click", () => {
  water()
})

HUNGER_.addEventListener("click", () => {
  feed()
})

HAPPINESS_.addEventListener("click", () => {
  play()
})

let statusArray = [HUNGER_, THIRST_, HAPPINESS_, VET_]

const removeUsed = () => {
  console.log("hi")
  for (i = 0; i < statusArray.length; i++) {
    statusArray[i].classList.remove("used")
  }
}



const water = () => {
  if (THIRST_.classList.contains("used")) {
    return
  } else {
    THIRST_.classList.add("used")
    if (newPet.START_THIRST > newPet.MAX_THIRST) {
      return;
    } else {
      newPet.START_THIRST += 20;
    }
    setTimeout(removeUsed.bind(null, THIRST_), 5000)
  }
}

const feed = () => {
  if (HUNGER_.classList.contains("used")) {
    return
  } else {
    for (i = 0; i < statusArray.length; i++) {
      statusArray[i].classList.add("used")
    }
    // HUNGER_.classList.add("used")
    if (newPet.START_HUNGER > newPet.MAX_HUNGER) {
      return;
    } else {
      newPet.START_HUNGER += 20;
      newPet.START_THIRST - 10
    }
    setTimeout(removeUsed, 5000)
  }
}

const play = () => {
  if (HAPPINESS_.classList.contains("used")) {
    return
  } else {
    for (i = 0; i < statusArray.length; i++) {
      statusArray[i].classList.add("used")
    }
    if (newPet.HAPPINESS > newPet.MAX_HAPPINESS) {
      return;
    } else {
      newPet.HAPPINESS += 20;
      newPet.START_HUNGER -= 10;
      newPet.START_THIRST -= 10;
    }
    setTimeout(removeUsed, 5000)
  }
}


const life = () => {
  let healthCheckInt = setInterval(healthCheck, 1000);
  let timeInt = setInterval(time, 1000);
  // let chooseInt = setInterval(choose, 5000);
  let losingHappinessInt = setInterval(losingHappiness, 4000);
  let hungryInt = setInterval(hungry, 7000);
  let thirstInt = setInterval(thirst, 3000);
  let updateInt = setInterval(update, 5000)


  const quitting = () => {
    if (quit) {
      clearInterval(healthCheckInt);
      clearInterval(timeInt);
      clearInterval(chooseInt);
      clearInterval(losingHappinessInt);
      clearInterval(hungryInt);
      clearInterval(thirstInt);
      clearInterval(gameQuit);
      clearInterval(updateInt)
    }
  }
  let gameQuit = setInterval(quitting, 2000)

};

// life();

getButton.addEventListener("click", () => {
  console.log("start")
  return newPet = typePet()
})

startButton.addEventListener("click", () => {
  if (newPet && gameStart == 0) {
    gameStart = 1
    life()
  } else if (!newPet) {
    alert("You need to get a pet")
  }
})