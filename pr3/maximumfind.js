// maximum array find in array
let array=[80,45,65,95,23];
let max=array[0];

for(let i=0;i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }
}
console.log(max);
