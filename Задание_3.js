// в данном упражнении предполагаетя, что я еще не знаю циклов, по этому использую такой неуклюжий способ перебора

let str = prompt('введите текст');
let length = str.length;
console.log(length);
switch (length) {
	case 0:
  	console.log("пустая строка");
    break;
	case 1:
  	console.log(str);
    break;
  case 2:
  	console.log(str.slice(1, 2) + str.slice(0, 1));
    break;
  case 3:
  	console.log(str.slice(2, 3) + str.slice(1, 2) + str.slice(0, 1));
    break;
  case 4:
  	console.log(str.slice(3, 4) + str.slice(2, 3) + str.slice(1, 2) + str.slice(0, 1));
    break;
  case 5:
  	console.log(str.slice(4, 5) + str.slice(3, 4) + str.slice(2, 3) + str.slice(1, 2) + str.slice(0, 1));
    break;
  case 6:
  	console.log(str.slice(5, 6) + str.slice(4, 5) + str.slice(3, 4) + str.slice(2, 3) + str.slice(1, 2) + str.slice(0, 1));
    break;
}