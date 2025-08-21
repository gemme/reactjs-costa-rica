// hoisting

/*
function getName (){
    // this
    // args
    console.log('function');
}
    */

// Arrow functions =>
// const getLastName = () => 'Martinez';

/*
const getLastName = () => {
    //...

    return 'Martinez';
}
    */

console.log(1);
console.log(2);
// evento tipo timer
setTimeout(() => {
  console.log(3);
}, 0);
console.log(4);

// 1234

// 1243

// 124  3 esta en otro hilo
