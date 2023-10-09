class Person {
  constructor(name, age) {
    this.name = name;
    this.setAge(age);
  }

  setAge(age) {
    if (typeof age === "number") {
      this.age = age;
    } else {
      this.age = "unbekannt";
    }
  }

  info() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

person1 = new Person("Emanuela", 18);
person2 = new Person("Carina", "25");

person1.info();
person2.info();
