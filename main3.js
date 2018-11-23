
console.log("Example with class");

// Instead of a function that creates a car,
// we define a class Car

// A class looks much cleaner, and has many other advantages.

class Car {

	// The constructor initializes the properties.
	// It gets called when we do: new Car(some_brand)
	constructor(brand, model) {
		this.brand = brand;
        this.model = model;
		this.speed = 0;
        this.isItRunning();
	}

	// methods:

	// (notice that now we don't say "function" and that we
	//  don't put a comma after closing brace of the function)

	accelerate(amount) {
		this.speed += amount;
	}

	brake(amount) {
        if(amount <= this.speed) {
            this.speed -= amount;
        } else {
            this.speed = 0;
        }	
	}
    
    stopTheCar() {
        this.speed = 0;
    }
    
    isItRunning () {
        return this.speed > 0
    }

	status() {
		return this.brand + " " + this.model + " running at " + this.speed + " km/h" + " " + this.isItRunning();
	}
}


// Now we use create a Car object using the class

var car = new Car("Ford", "Mondeo");

console.log(car.status());

car.accelerate(50);
console.log(car.status());

car.accelerate(100);
console.log(car.status());

car.brake(25);
console.log(car.status());

car.brake(25);
console.log(car.status());

car.brake(10);
console.log(car.status());

car.stopTheCar();
console.log(car.status());

car.isItRunning();



// We may create other cars easily

var car2 = new Car("Ferrari");
car2.accelerate(200);
console.log(car2.status());

//1) Add another property like model, so you can create a "Ford" with model "Mondeo". Make the status method display the model too.
//2) Fix the brake method so the car never reduces its speed below zero (a Car can't run at -50 km/h) even when you try to brake more than necessary.
//3) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.
//4) Add a method that returns a boolean saying if the car is running (speed is greater than zero) or not.




class Tv {
    
    constructor(brand) {
        this.brand = brand
        this.channel = 1
        this.volume= 50
        this.resetChannel = this.channel
        this.resetVolume = this.volume
    }
    
    increaseVolume(amount) {
        if(amount + this.volume <= 100) {
            this.volume += amount
        } else {
            this.volume = 100
        }
    }
    
    decreaseVolume(amount) {
        if(amount <= this.volume) {
            this.volume -= amount
        } else {
            this.volume = 0
        }  
    }
    
    changeChannel(channel) {
        if(channel < 1 || channel > 50) {
            return this.channel
        } else {
            this.channel = channel
        }
    }
    
    resetTv() {
        this.channel = this.resetChannel
        this.volume = this.resetVolume
    }
    
    status() {
        return this.brand + ' at channel ' + this.channel + ' , volume ' + this.volume
    }
}


var tv = new Tv ('LG')

console.log(tv.status())

tv.increaseVolume(45)
console.log(tv.status())

tv.decreaseVolume(5)
console.log(tv.status())

tv.decreaseVolume(40)
console.log(tv.status())

tv.changeChannel(20)
console.log(tv.status())

tv.changeChannel(60)
console.log(tv.status())

tv.resetTv()
console.log(tv.status())
//exercise 5: is this the way to go??
//var tvReset = new Tv('LG')
//console.log(tvReset.status())

//1) Create a TV class with properties like brand, channel and volume.
//    Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
//2) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
//3) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
//4) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
//5) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".


