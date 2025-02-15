// minimum array find in array
let array=[20,57,29,43,86];
let min=array[0];

for(let i=0;i<array.length;i++){
    if(array[i]<min){
        min=array[i];
    }
}
console.log(min);
