const listEl = document.getElementById("list");

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        listEl.innerHTML += `<li class="boxx box-fizz boxx--${i}"> Fizz </li>`;
    } else if (i % 5 == 0) {
        listEl.innerHTML += `<li class="boxx box-buzz boxx--${i}"> Buzz </li>`;
    } else if ((i % 3 == 0) && (i % 5 == 0)) {
        listEl.innerHTML += `<li class="boxx box-fizzbuzz boxx--${i}"> FizzBuzz </li>`;
    } else {
        listEl.innerHTML += `<li class="boxx boxx--${i}"> ${i} </li>`;
    }
}