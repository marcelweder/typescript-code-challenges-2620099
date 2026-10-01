import { strict as assert } from "node:assert";
import { getValueFromServer } from "./util-getValueFromServer";

let myNumber = getValueFromServer();

// assert(typeof myNumber === "number", "error -> value is not a number");

function myAssert(input: any): asserts input is number {
  if (typeof input !== "number") {
    throw new Error("Type not a number");
  }
}

myAssert(myNumber);

type MyType = typeof myNumber;
