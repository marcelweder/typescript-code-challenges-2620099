const personDefinition = {
  name: "David",
  age: 2000,
  gender: "male",
};

const personExtension = {
  hobbies: ["Klettern"],
};

type WantedType = Pick<typeof personDefinition, "name"> & Partial <Pick<typeof personExtension, "hobbies">>;

const myNewObject: WantedType = {
  name: "John",
  hobbies: ["Food", "Sport"],
}

export {};
