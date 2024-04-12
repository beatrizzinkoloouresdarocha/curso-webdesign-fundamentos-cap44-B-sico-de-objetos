let x = 10;

function muda(x) {
    x++;
    console.log("x interno", x);
}

muda(x);
//mudaX(10)
console.log("x externo", x);
