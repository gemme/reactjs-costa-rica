export const deepClone = (value) => {
  return JSON.parse(JSON.stringify(value));
};

const originalArray = [1, 2, 3];
const copyArray = originalArray;
// se crea una nueva ferencia
const copiedArray = [...originalArray]; // copiedArray is [1, 2, 3], independent of originalArray

copyArray.push(4);

copiedArray.push(5);

console.log(originalArray);
console.log(copyArray);
console.log(copiedArray);
// referencia 1
const originalObj = {
  name: "Gabriel",
  // referencia 2
  address: {
    street: "Insurgentes avenue",
    colony: {
      name: "Santa Maria La Ribera",
    },
  },
};

const copyObj = originalObj;
// referencia 1 -> referencia 3
// referencia 2 -> referencia 4
//const copiedObj = { ...originalObj, address: { ...originalObj.address } };

const copiedObj = deepClone(originalObj);

copyObj.name = "Ernesto";

copiedObj.lastname = "Martinez";
copiedObj.address.street = "Siempre viva avenue";
copiedObj.address.colony.name = "Forever and ever";

console.log(originalObj);
console.log(copyObj);
console.log(copiedObj);

// JSON y objeto de javascript
