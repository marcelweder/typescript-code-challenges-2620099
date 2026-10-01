class IceCream {
  public rating = "5/5 yummy!";
  constructor(public id: number, public name: string) {}
}

class IceCreamDatabase {
  static db = [
    new IceCream(5, "Chocolate"),
    new IceCream(34, "Blueberry"),
    new IceCream(9, "Strawberry Choc"),
  ];

  static getByIdOrName(type: "id", idOrName: number): any;
  static getByIdOrName(type: "name", idOrName: string): any;
  static getByIdOrName(type: "id" | "name", idOrName: number | string) {
    return IceCreamDatabase.db.find((ic) => ic[type] === idOrName);
  }
}

IceCreamDatabase.getByIdOrName("id", "5"); // ❌
IceCreamDatabase.getByIdOrName("name", 9); // ❌
IceCreamDatabase.getByIdOrName("id", 34); // ✅
IceCreamDatabase.getByIdOrName("name", "Blueberry"); // ✅

export {};
