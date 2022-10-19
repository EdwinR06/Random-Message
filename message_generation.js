const names = ["Joe", "Sue", "Bob", "John", "Nancy", "Mary", "Tom", "Allie", "Kate", "William", "Steve"];
const verbs = ["ran", "swam", "jumped", "hopscotched", "biked", "pogosticked", "hot airballooned"];
const nouns = ["park", "beach" , "school", "hospital", "mall", "post office", "grocery store"];
const adjs = ["cool", "cold", "hot", "warm", "round", "happy", "sad", "colossal", "microscopic"];


// Generate random index and store value from each array
const name = names[Math.floor(Math.random() * names.length)];
const verb = verbs[Math.floor(Math.random() * verbs.length)];
const noun = nouns[Math.floor(Math.random() * nouns.length)];
const adj = adjs[Math.floor(Math.random() * adjs.length)];

const generate_message = (name, verb, noun, adj) => `${name} ${verb} to the ${adj} ${noun}.`;
console.log(generate_message(name, verb, noun, adj));