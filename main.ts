
//   oop

// if we use this the data will be same for every house like four rooms and two bathroom
class House{
    numberOfRooms:number=4
    numberOfBathroom:number=2
}
let house1 = new House()
let house2 = new House()
let house3 = new House()
let house4 = new House()

console.log(house1.numberOfBathroom)


// in this method we can put data of diff person 
class Person{
    name:string;
    readonly fatherName:string;
    age:number;
    readonly country:string;
    city:string;

    constructor(name:string,fatherName:string,age:number,country:string,city:string){
        this.name=name
        this.fatherName=fatherName
        this.age=age
        this.country=country
        this.city=city
    }
}

let person1 =new Person("Haleema","arif",18,"pakistan","karachi")
let person2 =new Person("Aydin","usman",28,"pakistan","islamabad")

console.log(person1)
console.log(person2)




// type # 1 : inhertiance
class people{
    name:string
    gender:string
    constructor(name:string,gender:string){
        this.name=name
        this.gender=gender
    }
}
class teacher extends people{
    salary:number
    constructor(name:string,gender:string,salary:number){
       super(name,gender)
        this.salary=salary
    }
}
class student extends people{
    rollnumber:number
    constructor(name:string,gender:string,rollnumber:number){
         super(name,gender)
        this.rollnumber=rollnumber
    }
}

let Teacher = new teacher("halima ","female",20000)
console.log(teacher)
