function jsonToName(originalMethod: any, context: any) {
  return () => JSON.parse(originalMethod()).name;
}

class FetchJson {
  @jsonToName
  static dataFromServer() {
    return '{"name": "Decorators are cool"}';
  }
}

console.log(FetchJson.dataFromServer());

export {};
