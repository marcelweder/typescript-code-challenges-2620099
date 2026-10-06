function inputTypeIsOutputType<T extends any>(input: T): T {
  return input;
}

const shouldBeANumber = inputTypeIsOutputType(1);
const calculation = shouldBeANumber + 1;

const shouldBeAString = inputTypeIsOutputType("test");
const strLength = shouldBeAString.length;

export {};
