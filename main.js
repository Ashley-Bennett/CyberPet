


//overall pet class
class pet {
    constructor(name){
    this.NAME = name;
    this.HAPPINESS = 100;
    this.HUNGER = 100;
    this.THIRST = 100;
    this.HEALTH = 10
    }
  }
  
  //dog class
  class dog extends pet{
    constructor(name){
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
  class cat extends pet{
    constructor(name){
      super(name);
      this.MAX_HUNGER = Math.floor(this.HUNGER * 0.8);
      this.MAX_THIRST = Math.floor(this.THIRST * 0.8);
      this.START_HUNGER = 60;
      this.START_THIRST = 60;
      this.PET = "Cat"
    }
  }
  
  //rabbit class
  class rabbit extends pet{
    constructor(name){
      super(name);
      this.MAX_HUNGER = Math.floor(this.HUNGER * 0.7);
      this.MAX_THIRST = Math.floor(this.THIRST * 0.7);
      this.START_HUNGER = 45;
      this.START_THIRST = 45;
      this.PET = "Rabbit"
      
      
    }
  }
  
  
  
//   let newPet = new pet("Name")
//   let cat1 =  new cat("Another Name")
  
//   let petChoice = prompt("What pet would you like to have? \n 1. Dog \n 2. Cat \n 3. Rabbit","")
  
//   if (petChoice.toLowerCase() == "d" || petChoice == 1){
//     let name = prompt("What do you want your new pet's name to be","")
//     let newPet = new dog(name)
//     //alert (` You now have a ${newPet.PET} named ${newPet.NAME}`);
//   // } else if (petChoice.toLowerCase() == "c" || petChoice == 2){
//   //   let name = prompt("What do you want your new pet's name to be","")
//   //   let newPet = new cat(name)
//   // } else if (petChoice.toLowerCase() == "r" || petChoice == 3){
//   //   let name = prompt("What do you want your new pet's name to be","")
//   //   let newPet = new rabbit(name)
//   } else {
//     console.log("Not an option")
//   }
  
//   alert (` You now have a ${newPet.PET} named ${newPet.NAME}`);
   
  const getPet = () => { 
    console.log("What kind of pet do you want? \n 1. Dog \n 2. Cat \n 3. Rabbit")
    const typePet = () => {
        let pet = new
    }
    const namePet = () => {

    }


    typePet()
    namePet()
  }


















getPet()



// //overall pet class
// class pet {
//     constructor(name){
//     this.NAME = name;
//     this.HAPPINESS = 100;
//     this.HUNGER = 100;
//     this.THIRST = 100;
//     this.HEALTH = 10
//     }
//   }
  
//   //dog class
//   class dog extends pet{
//     constructor(name){
//       super(name);
//       this.MAX_HUNGER = Math.floor(this.HUNGER * 1);
//       this.MAX_THIRST = Math.floor(this.THIRST * 1);
//       this.START_HUNGER = 75;
//       this.START_THIRST = 75;
//       this.PET = "Dog";
//       this.MAX_HAPPINESS = Math.floor(this.HAPPINESS * 1.2);
//     }
//   }
  
//   let dog1 = new dog("Ash")
//   //console.log(dog1)
  
//   const life = () => {
//     //do {
    
//     let happinessStatus = "Your dog is happy";
//     let hungerStatus = "Your dog is full";
//     let thirstStatus = "Your dog is not thirsty";
//     let healthStatus = "Your dog is healthy"
    
//     //losing happiness
//     const losingHappiness = () => {
//       dog1.HAPPINESS -= 3;
//       if(dog1.HAPPINESS > 80) {
//         return happinessStatus = "Your dog is happy";
//       } else if (dog1.HAPPINESS <= 80 && dog1.HAPPINESS > 60) {
//         return happinessStatus = "Your dog is getting restless"
//       } else if (dog1.HAPPINESS <= 60 && dog1.HAPPINESS > 40) {
//         return happinessStatus = "Your dog is restless"
//       } else if (dog1.HAPPINESS <= 40 && dog1.HAPPINESS > 20) {
//         return happinessStatus = "Your dog is bored"
//       } else if (dog1.HAPPINESS <= 20 && dog1.HAPPINESS > 0) {
//         dog1.HEALTH --
//         return happinessStatus = "Your dog is dying of boredom"
//       } else (dog1.HAPPINESS < 0)
//         dog1.HAPPINESS += 3
//         dog1.HEALTH --
//         return happinessStatus = "Your dog is dying of boredom"
//     }
    
//     //playing
//     const play = () => {
//       if ( dog1.HAPPINESS > dog1.MAX_HAPPINESS){
//       return
//       } else {
//         dog1.HAPPINESS += 20
//       }
//     }
    
    
//     //getting hungry
//     const hungry = () => {
//       dog1.START_HUNGER -= 3;
//       if(dog1.START_HUNGER > 80) {
//         return hungerStatus = "Your dog is full";
//       } else if (dog1.START_HUNGER <= 80 && dog1.START_HUNGER > 60) {
//         return hungerStatus = "Your dog is peckish"
//       } else if (dog1.START_HUNGER <= 60 && dog1.START_HUNGER > 40) {
//         return hungerStatus = "Your dog is hungry"
//       } else if (dog1.START_HUNGER <= 40 && dog1.START_HUNGER > 20) {
//         return hungerStatus = "Your dog is starving"
//       } else if (dog1.START_HUNGER <= 20 && dog1.START_HUNGER > 0) {
//         dog1.HEALTH --
//         return hungerStatus = "Your dog is dying of starvation"
//       } else (dog1.START_HUNGER < 0)
//         dog1.START_HUNGER += 3
//         dog1.HEALTH
//         return hungerStatus = "Your dog is dying of starvation"
//     }
    
//     //feeding
//      const feed = () => {
//       if ( dog1.START_HUNGER > dog1.MAX_HUNGER){
//       return
//       } else {
//         dog1.START_HUNGER += 20
//       }
//     }
    
     
     
//     //getting thirsty
//     const thirst = () => {
//       dog1.START_THIRST -= 3;
//       if(dog1.START_THIRST > 80) {
//         return thirstStatus = "Your dog is not thirsty";
//       } else if (dog1.START_THIRST <= 80 && dog1.START_THIRST > 60) {
//         return thirstStatus = "Your dog is parched"
//       } else if (dog1.START_THIRST <= 60 && dog1.START_THIRST > 40) {
//         return thirstStatus = "Your dog is thirsty"
//       } else if (dog1.START_THIRST <= 40 && dog1.START_THIRST > 20) {
//         return thirstStatus = "Your dog is dehydrated"
//       } else if (dog1.START_THIRST <= 20 && dog1.START_THIRST > 0) {
//         dog1.HEALTH --
//         return thirstStatus = "Your dog is dying of dehydration"
//       } else (dog1.START_THIRST < 0)
//         dog1.START_THIRST += 3
//         dog1.HEALTH --
//         return thirstStatus = "Your dog is dying of dehydration"
//     }
    
//     //give drink
//     const giveDrink = () => {
//       if ( dog1.START_THIRST > dog1.MAX_THIRST){
//       return
//       } else {
//         dog1.START_THIRST += 20
//       }
//     }
    
    
    
//     //health status check
//     const healthCheck = () => {
//       if(dog1.HEALTH > 8) {
//         return healthStatus = "Your dog is healthy";
//       } else if (dog1.HEALTH <= 8 && dog1.HEALTH > 6) {
//         return healthStatus = "Your dog is feeling sick"
//       } else if (dog1.HEALTH <= 6 && dog1.HEALTH > 4) {
//         return healthStatus = "Your dog is sick"
//       } else if (dog1.HEALTH <= 4 && dog1.HEALTH > 2) {
//         return healthStatus = "Your dog is really sick"
//       } else if (dog1.HEALTH <= 2 && dog1.HEALTH > 0) {
//         dog1.HEALTH --
//         return healthStatus = "Your dog is dying of sickness"
//       }
//     }
    
//     //go to vet
//     const visitVet = () => {
//       dog1.HEALTH += 5
//       do {
//         dog1.HEALTH --
//         }
//       while(dog1.HEALTH > 10);
//       }
      
     
  
    
    
    
//     //logging
//     const action = () => {
//       //console.log (happinessStatus,dog1.HEALTH, dog1.HAPPINESS)
//       console.log("What do you want to do? \n 1. Check status of your pet \n 2. Play with your pet \n 3. Feed your pet \n 4. Give your pet a drink \n 5. Go to the vet")
      
//       const choose = () => {
//       let choice = prompt ("","")
//       if (choice == 1){
//         console.log (happinessStatus, hungerStatus, thirstStatus, healthStatus)
//         console.log (dog1.HAPPINESS, dog1.START_HUNGER, dog1.START_THIRST, dog1.HEALTH)
//       } else if(choice == 0){
//         console.log("quit")
//       } else if (choice == 2){
//         console.log("you have played with your pet")
//         return play()
//       } else if (choice == 3){
//         console.log("you have fed your pet")
//         return feed()
//       } else if (choice == 4){
//         console.log("you have given your pet a drink")
//         return giveDrink()
//       } else if (choice == 5){
//         console.log("you have taken your pet to the vet")
//         return visitVet()
//       }
      
//     }
//       setTimeout(choose,50)
//   }
      
    
//     const time = () => {
//       console.log ("...")
//     }
    
//     setInterval(healthCheck,1000)
//     setInterval(time,1000)
//     setInterval(action, 5000)
//     setInterval(losingHappiness, 4000)
//     setInterval(hungry, 7000)
//     setInterval(thirst, 3000)
//     // while (dog1.HEALTH > 0)
//   }
  
//   life()