class Dog {
    constructor(name) {
        this._name = name;
    }

    introduce() {
        console.log("this is " + this._name + " !");
    }

    // A static method
    static bark() {
        console.log("Woof!");
    }
}

const myDog = new Dog("Buster");
myDog.introduce();

// Calling the static method
Dog.bark();