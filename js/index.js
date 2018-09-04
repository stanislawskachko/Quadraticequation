const a = parseFloat(prompt('Введіть коеффіціент a'));
const b = parseFloat(prompt('Введіть коеффіціент b'));
const c = parseFloat(prompt('Введіть коеффіціент c'));

function quadrEqSolving(a, b, c) {

    const d = Math.pow(b, 2) - 4 * a * c;
    if (d > 0) {
        const x1 = (-b - Math.sqrt(d)) / (2 * a);
        const x2 = (-b + Math.sqrt(d)) / (2 * a);
        return 'Рішення: x1 = ' + x1 + ' x2 = ' + x2;
    }
    else if (d == 0) {
        const x = -b / (2 * a);
        return 'Рішення: x = ' + x;
    }
    else {
        return 'Вибачте, реальних коренів немає.'
    }
}

const message = quadrEqSolving(a, b, c);
alert(message);
