// 2. 
// Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. 
//   И если он не number - кидалась ошибка в консоль.
//   Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"

let age = 'aaa';
let age_2 = 18;
let age_3 = 60;

if (typeof age !== 'number' || typeof age_2 !== 'number' || typeof age_3 !== 'number') {
    console.log('one of the ages is not a number');
} else {
    if (age < age_2) {
        console.log(`You don't have access cause your age is ' + '${age}' + ' It's less then `);
    } else if (age >= age_2 && age < age_3) {
        console.log("Welcome  !");
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel");
    } else {
        console.log("Technical work");
    }
}