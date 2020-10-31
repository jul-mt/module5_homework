let value = prompt('введите значение'); 
value++;
if (value == "NaN") {
	console.log("Упс, кажется, вы ошиблись");
} else if (typeof(value) !== "number") {
	console.log("Упс, кажется, вы ошиблись");
} else {
	if (value % 2 == 0) {
  	console.log("нечетное");
  } else {
  	console.log("четное");
  }
}