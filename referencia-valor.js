let x = 10;

function muda(n) {
    x++;
    console.log("x interno", x);
}

muda(x);
console.log("x externo", x);
