
console.log("Objects containing other objects");

// Let's remember our Product class

class Product {

	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	toString() {
		return this.name + " " + this.price + "€";
	}
}

// And create a couple of products
let p1 = new Product("vacuum cleaner", 100);
let p2 = new Product("pencil", 3);
let p3 = new Product("bike", 300);
let p4 = new Product("helmet", 50);
let p5 = new Product("locker", 100)


// Now, let's create a ShoppingCart class, that will contain products

class ShoppingCart {

	constructor() {
		this.products = []; // empty at 
        this.priceArray = [];
        this.productNameArray = [];

        this.count = {};
        this.freeItemPrice = 0;
        this.totalPrice = 0
	}

	addProduct(product) {
		this.products.push(product);
	}
    
    getTotalPrice() {
        this.priceArray = this.products
            .map(x => x.price)
                
        //here i am creating a key for my object when i don't have it (at the beginning my object is empty so i will have to create the key) and then i am assigning a value to this key (the value is undefined because the productNameArray doesn't have a value, so if it is undefined i will set it to 0 and then add 1). Then i am going to the next one, and if a key with the same name already exist i simply access it and add 1 to the existing value, otherwise i create a new key ecc ecc
        
//        this.productNameArray
//            .forEach(x => { this.count[x] = (this.count[x] || 0)+1; });
//        
//        console.log(this.count)
        
        this.products.forEach(x => {
            if(this.count[x] === undefined){
                this.count[x] = 1
            } else {
                this.count[x] = this.count[x] + 1
                if(this.count[x] % 4 === 0) {
                    this.freeItemPrice += x.price
                }
            }
            
        })
        console.log(this.count)
        console.log(this.freeItemPrice)

//        for (var key in this.count) {
//            if (this.count.hasOwnProperty(key)) {
//                
//                const map = {}
//                map[key] = Math.floor(this.count[key] / 3)
//                this.freeItem.push(map)
//            }
//        }
//        console.log(this.freeItem)
//        console.log(this.products)
        
        
        this.totalPrice = this.priceArray.reduce((a, b) => a + b) - this.freeItemPrice
        if(this.priceArray.length < 5) {
            return this.totalPrice
        } else {
            return this.totalPrice -= (this.totalPrice * 10) / 100
        }
    }

	toString() {
		return "cart with: " + this.products + ". And the total price is: " + this.totalPrice;
	}
}


// We can create a cart and add the products we created before

let cart = new ShoppingCart();
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p2);
cart.addProduct(p2);
cart.addProduct(p2);
cart.addProduct(p2);
cart.addProduct(p2);
cart.addProduct(p2);
cart.addProduct(p2);
cart.addProduct(p3);
cart.addProduct(p4);
cart.addProduct(p5);
cart.addProduct(p5);
cart.addProduct(p5);
cart.addProduct(p5);


console.log("We have a " + cart);

cart.getTotalPrice();
console.log("We have a " + cart);



//1) In ShoppingCart, define a method totalPrice() that returns the total amount of the products it contains.
//
//2) Now let's say that, if you buy 5 products or more, you have a 10% of discount. Change totalPrice to reflect this calculation.
//
//3) Besides the previous discount, if you buy 3 items of the same type (e.g. 3 pencils) you may get one more for free. So, if you buy 4 pencils you only pay 3, if you buy 8 pencils you only pay 6, etc. Change totalPrice so it considers the free items you get. Notice that if you buy 3 pencils you just pay the 3 of them.
//
//4) Sometimes a product is sold out and has to be replaced by a new one. Add a method replace(productName, replacementProduct) that looks for products with productName and replaces them by new instances of the product like replacementProduct. Notice that productName is a string, and replacementProduct is a Product. Also, bear in mind that you don't have to add the replacementProduct itself to the cart, but create new products like that one (whenever necessary).
