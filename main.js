/*
  task list:
    game over screen - basic
    pet
      cat
      rabbit
    conatin all with classes and objects
    tidy classes and variables not used
    export functions
    devMode
    new game
    empty name

  future implementations:
    dificulty multiplier
    colour blind mode
*/


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
    this.STATUS_IMG = ["./assets/dog/dog_green.png", "./assets/dog/dog_yellow.png", "./assets/dog/dog_amber.png", "./assets/dog/dog_orange.png", "./assets/dog/dog_red.png"]
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
let GET_BUTTON = document.getElementById("get_button")
let START_BUTTON = document.getElementById("start_button")
let PET_ = document.getElementById("pet")
let THIRST_ = document.getElementById("thirst")
let HAPPINESS_ = document.getElementById("happiness")
let HUNGER_ = document.getElementById("hunger")
let VET_ = document.getElementById("vet")
let NAME_ = document.getElementById("name")
let ANIMAL_ = document.getElementsByName("animal")
let INIT_ = document.getElementById("initialPage")
let TUT_ = document.getElementById("tutorialPage")
let MAIN_ = document.getElementById("gridContainer")
let GAME_OVER_ = document.getElementById("gameOver")
let OUTRO_ = document.getElementById("outro")
let FINAL_SCORE_ = document.getElementById("finalScore")
let NEW_GAME_ = document.getElementById("newGame")
let REQUIRED_ = document.getElementById("required")

//  Global variables
let quit = 0
let gameStart = 0
let score = 0
let time = 0
let statusArray = [HUNGER_, THIRST_, HAPPINESS_, VET_]

//  Gets radio value
const radio = () => {
  for (var i = 0; i < ANIMAL_.length; i++) {
    if (ANIMAL_[i].checked) {
      animal = ANIMAL_[i].value;
      return animal
    }
  }
}

//  Collects pet name and type. Move to tutorial room.
const start = (e) => {
  e.preventDefault()
  let name = NAME_.value
  if (name) {
    INIT_.classList.add("hidden")
    TUT_.classList.remove("hidden")
    let animal = radio()
    switch (animal) {
      case "dog":
        return newPet = new dog(`${name}`)
      case "cat":
        return newPet = new cat(`${name}`)
      case 'rabbit':
        return newPet = new rabbit(`${name}`)
      default:
        alert("error! - radio select")
    }
  } else {
    REQUIRED_.classList.remove("hidden")
  }
}


//  Losing happiness over time. Lose 3 happiness per run. Lose 1 health per run when happiness is less than 20.
const losingHappiness = () => {
  newPet.HAPPINESS -= 3;
  if (newPet.HAPPINESS > 80) {
    newPet.HAPPINESS_STATUS = ("green")
  } else if (newPet.HAPPINESS <= 80 && newPet.HAPPINESS > 60) {
    newPet.HAPPINESS_STATUS = ("yellow")
  } else if (newPet.HAPPINESS <= 60 && newPet.HAPPINESS > 40) {
    newPet.HAPPINESS_STATUS = ("amber")
  } else if (newPet.HAPPINESS <= 40 && newPet.HAPPINESS > 20) {
    newPet.HAPPINESS_STATUS = ("orange")
  } else if (newPet.HAPPINESS <= 20 && newPet.HAPPINESS > 0) {
    newPet.HAPPINESS_STATUS = ("red")
    newPet.HEALTH--;
  } else if (newPet.HAPPINESS < 0) {
    newPet.HAPPINESS_STATUS = ("red")
    do {
      newPet.HAPPINESS++;
    } while (newPet.HAPPINESS < 0);
    newPet.HEALTH--;
  } else {
    alert("error - happiness")
  }
};



//  Getting hungry over time
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
  } else if (newPet.START_HUNGER < 0) {
    newPet.HUNGER_STATUS = ("red")
    do {
      newPet.START_HUNGER++;
    } while (newPet.START_HUNGER < 0);
    newPet.HEALTH--;
    return (hungerStatus = "Your pet is dying of starvation");
  } else {
    alert("error - hungry")
  }
};


//  Getting thirsty over time
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
  } else if (newPet.START_THIRST <= 0) {
    newPet.THIRST_STATUS = ("red")
    do {
      newPet.START_THIRST++;
    } while (newPet.START_THIRST < 0);
    newPet.HEALTH--;
    return (thirstStatus = "Your pet is dying of dehydration");
  } else {
    alert("error - thirst")
  }
};

//  Periodically checks health. If drops below 0 then sets quit to 1.
const healthCheck = () => {
  if (newPet.HEALTH > 8) {
    PET_.src = newPet.STATUS_IMG[0]
    return newPet.HEALTH_STATUS = ("green")
  } else if (newPet.HEALTH <= 8 && newPet.HEALTH > 6) {
    PET_.src = newPet.STATUS_IMG[1]
    return newPet.HEALTH_STATUS = ("yellow")
  } else if (newPet.HEALTH <= 6 && newPet.HEALTH > 4) {
    PET_.src = newPet.STATUS_IMG[2]
    return newPet.HEALTH_STATUS = ("amber")
  } else if (newPet.HEALTH <= 4 && newPet.HEALTH > 2) {
    PET_.src = newPet.STATUS_IMG[3]
    return newPet.HEALTH_STATUS = ("orange")
  } else if (newPet.HEALTH <= 2 && newPet.HEALTH > 0) {
    PET_.src = newPet.STATUS_IMG[4]
    return newPet.HEALTH_STATUS = ("red")
  } else if (newPet.HEALTH <= 0) {
    quit = 1
  } else {
    alert("error - healthCheck")
  }
}

const timer = () => {
  time++
};

//  Update status every 5 seconds
const update = () => {
  score += newPet.HEALTH
  for (i = 0; i < statusArray.length; i++) {
    statusArray[i].classList.remove("green", "yellow", "amber", "orange", "red")
  }
  THIRST_.classList.add(newPet.THIRST_STATUS)
  HUNGER_.classList.add(newPet.HUNGER_STATUS)
  VET_.classList.add(newPet.HEALTH_STATUS)
  HAPPINESS_.classList.add(newPet.HAPPINESS_STATUS)
  console.log(newPet.START_HUNGER)
  console.log(newPet.START_THIRST)
  console.log(newPet.HAPPINESS)
  console.log(newPet.HEALTH)
}




//  Removes "used" class
const removeUsed = () => {
  for (i = 0; i < statusArray.length; i++) {
    statusArray[i].classList.remove("used")
  }
}



const water = () => {
  if (THIRST_.classList.contains("used")) {
    return
  } else {
    for (i = 0; i < statusArray.length; i++) {
      statusArray[i].classList.add("used")
    }
    if (newPet.START_THIRST < newPet.MAX_THIRST) {
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
    if (newPet.START_HUNGER < newPet.MAX_HUNGER) {
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
    if (newPet.HAPPINESS < newPet.MAX_HAPPINESS) {
      newPet.HAPPINESS += 20;
      newPet.START_HUNGER -= 10;
      newPet.START_THIRST -= 10;
    }
    setTimeout(removeUsed, 5000)
  }
}


const vet = () => {
  if (VET_.classList.contains("used")) {
    return
  } else {
    for (i = 0; i < statusArray.length; i++) {
      statusArray[i].classList.add("used")
    }
    newPet.HEALTH += 3;
    newPet.HAPPINESS -= 20;
    do {
      newPet.HEALTH--;
    } while (newPet.HEALTH > 10);
    setTimeout(removeUsed, 5000)
  }
}


const life = () => {
  let timeInt = setInterval(timer, 1000);
  let healthInt = setInterval(healthCheck, 1000);
  let losingHappinessInt = setInterval(losingHappiness, 4000);
  let hungryInt = setInterval(hungry, 7000);
  let thirstInt = setInterval(thirst, 3000);
  let updateInt = setInterval(update, 5000)
  THIRST_.classList.add(newPet.THIRST_STATUS)
  HUNGER_.classList.add(newPet.HUNGER_STATUS)
  HAPPINESS_.classList.add(newPet.HAPPINESS_STATUS)
  VET_.classList.add(newPet.HEALTH_STATUS)


  const quitting = () => {
    if (quit) {
      MAIN_.classList.add("hidden")
      GAME_OVER_.classList.remove("hidden")
      OUTRO_.innerText = `Sadly your pet ${newPet.PET}, ${newPet.NAME}, has passed away after being in your care for ${time} seconds. Your final score is:`
      FINAL_SCORE_.innerText = `${score}`
      clearInterval(healthInt)
      clearInterval(timeInt);
      clearInterval(losingHappinessInt);
      clearInterval(hungryInt);
      clearInterval(thirstInt);
      clearInterval(gameQuit);
      clearInterval(updateInt)
    }
  }
  let gameQuit = setInterval(quitting, 2000)

};

const newGame = () => {
  GAME_OVER_.classList.add("hidden")
  INIT_.classList.remove("hidden")
  quit = 0
  time = 0
  score = 0
  gameStart = 0
}

//  Button event listeners
THIRST_.addEventListener("click", () => {
  water()
})
HUNGER_.addEventListener("click", () => {
  feed()
})
HAPPINESS_.addEventListener("click", () => {
  play()
})
VET_.addEventListener("click", () => {
  vet()
})
START_BUTTON.addEventListener("click", () => {
  if (newPet && gameStart == 0) {
    TUT_.classList.add("hidden")
    MAIN_.classList.remove("hidden")
    gameStart = 1
    life()
  } else if (!newPet) {
    alert("You need to get a pet")
  }
})
NEW_GAME_.addEventListener("click", () => {
  newGame()
})