class MyLocalStorage {
  static localStorage: MyLocalStorage = new MyLocalStorage();

  private constructor() {}

  setItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getItem(key: string) {
    let value = localStorage.getItem(key);
    return value !== null ? JSON.parse(value) : JSON.parse('[]');
  }
  removeItem(key:string){
    localStorage.removeItem(key);
  }
}

const myLocalStorage = MyLocalStorage.localStorage;

export default myLocalStorage;
