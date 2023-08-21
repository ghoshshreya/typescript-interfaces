interface Person {
  name: string;
  age?: number; // Optional parameter
  id: number | string; // union
}

const sheldon: Person = {
  name: 'Sheldon',
  age: 28,
  id: 24,
};

/*----------Note----------*/
// Age is an optional parameter, hence we can omit it while implementation
// id can either be number or string
const penny: Person = {
  name: 'penny',
  id: 'ABC_24',
};

/*----------Another example---------*/
interface logger {
  log: (msg: string) => void;
}

const logMe: logger = {
  log: (msg: string) => console.log(msg),
  // otherProp: true, // trying to add extra property other that the one in interface will throw error
};

/*----------Extending other interfaces----------*/
interface clearable {
  clear: () => void;
}

interface logger2 extends clearable {
  log: (msg: string) => void;
}

// Properties in both the interfaces must be implemented
const logMe2: logger2 = {
  log: (msg: string) => console.log(msg),
  clear: () => console.log('Clearing'),
};

/*----------Interfaces with callable signatures----------*/
interface logger3 {
  (message: string): void;
  log: (msg: string) => void;
}

const logMe3: logger = (message: string) => {
  console.log(message);
};

logMe3.log = (message: string) => {
  console.log(message);
};

// logMe3.log2 = (message: string) => { // Gives error
//   console.log(message);
// };

/*----------Interfaces with Index Signatures----------*/
// You can add an index signature to your interface, just like you can with normal types, thus allowing the interface to have an unlimited number of properties.

interface entityDef {
  [key: string]: number;
}

const someVal: entityDef = {
  myKey: 2,
  //myKey1: '2', //throws error since value is string
};
