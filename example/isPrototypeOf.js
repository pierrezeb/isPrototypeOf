function isPrototypeOf (prototypeObject, childObject) {
//shorter access to Object.getPrototypeOf function
var prototypeOf= Object.getPrototypeOf;
//prototype of childObject
var childPrototype =prototypeOf(childObject);
//thriw a typeError if prototypeObject is null or undefined
if (Boolean(prototypeObject===null || prototypeObject===undefined) ){
  throw new TypeError
}
//loop ends :
// 1. if the end of the prototype chain has been reached
// 2. or if one prototype matches the prototypeObject
while (childPrototype != null){
if(childPrototype===prototypeObject){
return true;
}
//childPrototype becomes the prototype of the previous childPrototype
childPrototype=prototypeOf(childPrototype)
}
//if loop reaches the end without finding a match return false
return false;
}
