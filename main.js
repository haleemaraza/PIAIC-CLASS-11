"use strict";
//   oop
// if we use this the data will be same for every house like four rooms and two bathroom
class House {
    constructor() {
        this.numberOfRooms = 4;
        this.numberOfBathroom = 2;
    }
}
let house1 = new House();
let house2 = new House();
let house3 = new House();
let house4 = new House();
console.log(house1.numberOfBathroom);
// in this method we can put data of diff person 
class Person {
    constructor(name, fatherName, age, country, city) {
        this.name = name;
        this.fatherName = fatherName;
        this.age = age;
        this.country = country;
        this.city = city;
    }
}
let person1 = new Person("Haleema", "arif", 18, "pakistan", "karachi");
let person2 = new Person("Aydin", "usman", 28, "pakistan", "islamabad");
console.log(person1);
console.log(person2);
// type # 1 : inhertiance
class people {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}
class teacher extends people {
    constructor(name, gender, salary) {
        super(name, gender);
        this.salary = salary;
    }
}
class student extends people {
    constructor(name, gender, rollnumber) {
        super(name, gender);
        this.rollnumber = rollnumber;
    }
}
let Teacher = new teacher("halima ", "female", 20000);
console.log(teacher);
