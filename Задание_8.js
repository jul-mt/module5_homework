let map = new Map();
map.set(1,"s");
map.set(5,"f");
map.set("d",55);

for (let [key, value] of map) {
    console.log(`Ключ - ${key}, значегие - ${value}`);
}
