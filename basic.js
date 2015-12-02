var firstName;

//without var keyword
lastName = "Wagah";
 

 
//Basic Math
 //BODMAS
 //Javascript math operators follow BODMAS
 //convention

 problemOne = (5 + 2) - 4/2 * 2;
 console.log(problemOne);
//if statement
//if else if else if
//This type of if statament allows is to check for multiple truth values.PLEASE NOTE the first expression that evaluates to true, is the ONLY one that gets executed

age = 20;
if(age < 18){
	console.log("Not an adult");
}else if (age === 18){
    console.log("Is an adult");
}else if (age > 18){
	console.log("Over adult age");
}else if (age % 2 === 0){
	console.log("Age is an even number");
}

//Switch statement - exact matching
//This is similar to the if else if else if statement
switch (age){
	case 18:
		console.log("CASE: You are an adult");
		break;
	case 17:
		console.log("CASE: You are not an adult");
		break;
	case 19:
		console.log("CASE: You are above the adult age");
		break;
	default:
		console.log("CASE: You are not accounted for");

}

/// Array
//Array in javascript belong to the object data type
//They are used to store lists and have zero indexed keys. 

//Empty array
years = [];

//Populated with array
names = ["Vincent","Munene","Harrison","George", "Paul"];

carModels = ["Prado","Vitz","Zonda","Wish","Passat","Land Cruiser"];

//Common operations on an array
//Retrieving elements
///Using the index
console.log(carModels[1]);


//Adding elements on array
 //+ Using concatenation-joins two arrays together
newCarModels = carModels.concat(["Honda", "Subaru"]);
console.log("New Car Models", newCarModels);

//+ Using the push method
///Push is a destructive method.It manipulates the original array

carModels.push("Escudo");
console.log("Car models afer push", carModels);

//Removing elements from an array
///+ To remove the last element of an array using pop method

carModels.pop();
console.log("Car Models after pop", carModels);

//finding the length
numberOfCarModels = carModels.length
console.log("Number of Car Models", numberOfCarModels);

// Removing elements at a particular index
//+using splice
//carModels = ["Prado","Vitz","Zonda","Wish","Passat","Land Cruiser"];
carModels.splice(2,1)
console.log("carModels after splice:")
 //Adding
 carModels.splice(2,0,"Honda");


//OBJECTS
//Definition and initialization

//Empty object
person = {};

//Populate object
 customer = {
 	name: "Wagah",
 	age: 23,
 	loyalty_points: 90
 };
 //Defining an object dynamically
 car = {};
 car = {
 		
 		model: "Toyota",
 		year_of_manufacture: 2007,
 		number_plate: "kdf126",
 		quality: "good",
 		cc: 2200
 };
//adding key
car["name"] = "Vitz",
car["Country_of_origin"] = "Korea"
console.log(car)


 ///COMMON OPERATION ON OBJECTS
 //Accessing values
 //+Using 'dot' notation

 console.log("Car model: ", car.model, "year of manufacture: ", car.year_of_manufacture);
 //+Using brackets
 year_of_manufacture = car["year_of_manufacture"];

 	console.log("Using brackets: year_of_manufacture",year_of_manufacture);

//Changing keys//setting a value
car.year_of_manufacture = 2015;
car["name"] = "Land Rover";
console.log("Updated object", car);

//FUNCTION
///+Named function
//Exercise, define a function called createContact that takes in the argument name and phoneNumber
function createContact(name,phoneNumber){
	
	
};
 

 //OR 
createContact = function(name,phoneNumber){
	
}
//Defining a function: start with function keyword
function makeTea(){

};
///+Annoymous function- functions that do not have a name
///This functions= should be to buyCoffee
(function(){

})
// Using functions
///To use/run a function you have to call it
///Calling named function
makeTea();

///Calling anonymous function
buyCoffee = function(){

}
buyCoffee();
//to make tea we need: tea leaves, milk, water, sugar
function makeTea(tealeaves, milk, water){
	console.log(tealeaves, milk, water);
}
makeTea("ketepa","Fresha","city council");
 

 // function orderFood

 //Loops
 //+Iterating arrays
 //+Using the forEach method
 carModels.forEach(function(carModel, index){
 		carModels[index] = {name: carModel};

 });
 console.log("Car Models after running forEach", carModels)

 //Using a regular for Loop
 carModels = ["Prado","Vitz","Zonda","Wish","Passat","Land Cruiser"];
 for(i = 0; i < carModels.length; i++){
 		carModels[i] = {name: carModels[i]}

 }
 console.log("Car Models after running for loop", carModels);

 //Using the Map- when reqested to do some computation or manipulation then return the new array, then the MAP is approriate
 //The map returns a anew array after executing the callback on eacj element in an array
 //index the product array would increment- used to get dynamic- basically it accesses the index then adds it to the value

 carModelObjects = carModels.map(function(carModel, index){
 		return{name: carModel, year:2009 + index};

 }); 
  console.log("Car Models after running map", carModelObjects);

  //Iteration over an Object

  pet = {
  		name: "Simmer",
  		Owner: "Wagah",
  		age: 3,
  		gender:"male"

  }
  for(key in pet){
  	console.log("Objects key: ",key,"object value: ", pet[key]);
  }
 