let x = 10;

function muda(x) {
    x++;
    console.log("x interno", x);
}

muda(x);
console.log("x externo", x);
