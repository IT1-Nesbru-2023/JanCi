function randomRange(min, max) {
    return (Math.round(Math.random()*(max-min))+min);
    console.log("Jan Cichowicz")
};

let t1 = Number(prompt("tall 1"));
let t2 = Number(prompt("tall 2"));

let result = randomRange(t1, t2);
document.write(result);