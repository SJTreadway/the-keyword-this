//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      Allows the reuse of functions across multiple objects.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      1. Implicit binding - 'this' is not bound to an object. So it is bound to the global scope and returns undefined.
      2. Explicit binding - 'this' is bound to an object.
      3. new Binding - 'this' is bound to itself inside a function linked to an object. Using 'new' keyword.
      4. default binding - 'this' is stored in a variable so that it can be used in a different scope.

  // 3) What is the difference between call and apply?

      //Answer
      Apply uses arrays as arguments. Call does not use arrays as arguments.

  // 4) What does .bind do?

      //Answer
      returns an identical function that uses this to point at the bound object.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: 'Sjtreadway',
      email: 'treadway08@gmail.com',
      getUsername: function() {
        return this.username;
      },
    }
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.
function Car(type, model, year){
  this.type = type;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function(){
    this.move += 10;
    return this.move;
  };
}

  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.move = 10;
mustang.move = 50;

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here
getYear.call(prius);
getYear.call(mustang);


//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here
  undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  The global scope object, which is window.

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
var f = getUsername.bind(user);
setTimeout(f, 5000);