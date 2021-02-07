import { writable } from "svelte/store";
import { readable } from "svelte/store";

export const mobile = writable(false);

export const dropdownOpen = writable(false);

const theLemon = {
  src: "../images/crepe_theLemon.jpg",
  alt: "A lemon sugar crepe.",
  title: "The Lemon",
  ingredients: ["lemon", "sugar", "eggs", "dairy", "flour"],
  price: {
    full: "7.00",
    mini: "6.00",
  },
  // nutrition: ['Sugar 4g', 'Fat 2g']
};

const thePeanutButter = {
  src: "../images/crepe_thePeanutButter.jpg",
  alt: "A peanut butter and banana crepe.",
  title: "The Peanut Butter ",
  ingredients: ["peanut butter", "banana", "eggs", "dairy", "flour"],
  price: {
    full: "9.00",
    mini: "7.50",
  },

  // nutrition: ['Sugar 4g', 'Fat 2g']
};

const theChocolateRaspberry = {
  src: "../images/crepe_theChocolate.jpg",
  alt: "A chocolate raspberry crepe.",
  title: "The Chocolate",
  ingredients: ["chocolate", "raspberry", "eggs", "dairy", "flour"],
  price: {
    full: "9.00",
    mini: "7.50",
  }, // nutrition: ['Sugar 4g', 'Fat 2g']
};

const theNutella = {
  src: "../images/crepe_theNutella.jpg",
  alt: "A strawberry and nutella crepe.",
  title: "The Nutella",
  ingredients: ["Nutella", "strawberry", "eggs", "dairy", "flour"],
  price: {
    full: "9.00",
    mini: "7.50",
  }, // nutrition: ['Sugar 4g', 'Fat 2g']
};

const theEgg = {
  src: "../images/crepe_theEgg.jpg",
  alt: "An egg crepe with hollandaise.",
  title: "The Egg",
  ingredients: ["provolone", "spinach", "eggs", "dairy", "flour"],
  price: {
    full: "11.95",
    mini: "8.50",
  }, // nutrition: ['Sugar 4g', 'Fat 2g']
};

const theBlackBean = {
  src: "../images/crepe_theBlackBean.jpg",
  alt: "A black bean crepe.",
  title: "The Black Bean",
  ingredients: [
    "black bean",
    "avocado",
    "tomato",
    "spinach",
    "lime",
    "salsa",
    "eggs",
    "dairy",
    "flour",
  ],
  price: {
    full: "11.95",
    mini: "8.50",
  }, // nutrition: ['Sugar 4g', 'Fat 2g']
};

const theChicken = {
  src: "../images/crepe_chicken.jpg",
  alt: "A chicken crepe.",
  title: "The Chicken",
  ingredients: ["chicken", "spinach", "provolone", "eggs", "dairy", "flour"],
  price: {
    full: "11.95",
    mini: "8.50",
  }, // nutrition: ['Sugar 4g', 'Fat 2g']
};

const theMonteCristo = {
  src: "../images/crepe_monteCristo.jpg",
  alt: "A Monte Cristo crepe.",
  title: "The Monte Cristo",
  ingredients: [
    "ham",
    "turkey",
    "provolone",
    "cheddar",
    "raspberry",
    "eggs",
    "dairy",
    "flour",
  ],
  price: {
    full: "11.95",
    mini: "8.50",
  }, // nutrition: ['Sugar 4g', 'Fat 2g']
};

const theTurkeyBacon = {
  src: "../images/crepe_turkeyBacon.jpg",
  alt: "A turkey bacon crepe.",
  title: "The Turkey Bacon",
  ingredients: [
    "turkey",
    "bacon",
    "provolone",
    "tomato",
    "spinach",
    "ranch",
    "eggs",
    "dairy",
    "flour",
  ],
  price: {
    full: "11.95",
    mini: "8.50",
  }, // nutrition: ['Sugar 4g', 'Fat 2g']
};

const theChipotleChicken = {
  src: "../images/crepe_chickenChipotle.jpg",
  alt: "A chipotle chicken crepe.",
  title: "The Chipotle Chicken",
  ingredients: [
    "chicken",
    "cole slaw",
    "tomato",
    "chipotle ranch",
    "eggs",
    "dairy",
    "flour",
  ],
  price: {
    full: "11.95",
    mini: "8.50",
  }, // nutrition: ['Sugar 4g', 'Fat 2g']
};

const theBreakfastInBed = {
  src: "../images/crepe_theAllAmerican.jpg",
  alt: "A Breakfast in Bed crepe.",
  title: "The Breakfast in Bed",
  ingredients: [
    "bacon",
    "cheddar",
    "maple sausage",
    "maple syrup",
    "eggs",
    "dairy",
    "flour",
  ],
  price: {
    full: "11.95",
    mini: "8.50",
  }, // nutrition: ['Sugar 4g', 'Fat 2g']
};

const theCaprese = {
  src: "../images/crepe_caprese.jpg",
  alt: "A Caprese crepe.",
  title: "The Caprese",
  ingredients: [
    "mozzarella",
    "tomato",
    "arugula",
    "spinach",
    "balsamic",
    "eggs",
    "dairy",
    "flour",
  ],
  price: {
    full: "11.95",
    mini: "8.50",
  }, // nutrition: ['Sugar 4g', 'Fat 2g']
};

const theAllAmerican = {
  src: "../images/crepe_theAllAmerican.jpg",
  alt: "An All American crepe.",
  title: "The All American",
  ingredients: ["gravy", "bacon", "cheddar", "eggs", "dairy", "flour"],
  price: {
    full: "11.95",
    mini: "8.50",
  }, // nutrition: ['Sugar 4g', 'Fat 2g']
};

const theMixedBerry = {
  src: "../images/crepe_theNutella.jpg",
  alt: "A mixed berry crepe.",
  title: "The Mixed Berry",
  ingredients: [
    "cream cheese",
    "strawberry",
    "blueberries",
    "eggs",
    "dairy",
    "flour",
  ],
  price: {
    full: "9.00",
    mini: "7.50",
  }, // nutrition: ['Sugar 4g', 'Fat 2g']
};

const sweetCrepesData = [
  theLemon,
  thePeanutButter,
  theChocolateRaspberry,
  theNutella,
  theMixedBerry,
];

export const sweetCrepes = readable(sweetCrepesData, () => {
  console.log("got a subscriber to sweet crepes");
  return () => console.log("no more subscribers to sweet crepes");
});

const savoryCrepesData = [
  theEgg,
  theBreakfastInBed,
  theAllAmerican,
  theCaprese,
  theChicken,
  theChipotleChicken,
  theTurkeyBacon,
  theMonteCristo,
  theBlackBean,
];

export const savoryCrepes = readable(savoryCrepesData, () => {
  console.log("got a subscriber to savory crepes");
  return () => console.log("no more subscribers to savory crepes");
});
