//how to iterate object 
const person = {
    name:"Rahul", 
    age :20,
   "Rahul hobbies":["cooking","traveling","dance",]
   }   
  // for in loop 
  // Object.keys 
    
  // for get properties
  for( let properties in person){
    console.log(properties);
  }  
  // for get value
  for( let properties in person){
    console.log(person[properties]);
  } 
   
   // for get key:value
   for( let properties in person){
    console.log(`${properties}:${person[properties]}`); 
    console.log(properties," : ",person[properties]);
  }  
   