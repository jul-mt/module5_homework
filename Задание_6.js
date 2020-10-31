let arr = [1, "1", 1, 1];
let check = 1;
arr.forEach(function(item, index, arrey) {
	let a = item === arr[0];
  check *= a;  
}) 

console.log(Boolean(check));