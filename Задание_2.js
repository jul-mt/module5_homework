let x;
//x = 1;
y = typeof(x);
switch (y) {
    case "boolean":
        console.log('логический тип');
        break;
    case "number":
        console.log('число');
        break;    
    case "string":
        console.log('строка');
        break;
}

if (y !== "boolean" && y !== "string" && y !== "number") {
	console.log("Тип x не определён");
} 