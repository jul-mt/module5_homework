let arr = [1, NaN, 0, "ааа", 2, null, 5];
let even = 0;
let odd = 0;
for (let i = 0; i < arr.length; i++) { 
  if ((typeof(arr[i]) !== "number") || (arr[i] === 0) || arr[i]+"" == "NaN") {
   } else {
      if (arr[i]%2 === 0) {
    	even++;
      } else {
    	odd++;
      }
   }
}

console.log("Четных чисел: "+even+". Нечетных: "+odd);