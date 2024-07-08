const heroes: string[] = [];
const superHero = 'spiderman'
heroes.push(superHero);
console.log(heroes);



type User = {
  name: string,
  email: string
}
const allUser: Array<User> = [];



const arrayOfcolors:  Array<Array<number>> = [];
const arrayOfColorNames: string[][] = [];
arrayOfcolors.push(
  [255, 255, 255],
  [255, 0, 0],
  [0, 255, 0],
  [0, 0, 255],
  [0, 0, 0],
)
arrayOfColorNames.push(
  ['white'], ['reg'], ['green'], ['blue'], ['black'] 
)