// 2. 
// Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. 
//   И если он не number - кидалась ошибка в консоль.
//   Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"

const age = '10';
const age_2 = 18;
const age_3 = 60;

if (typeof age === `number`) {
    console.log('age is not a number');
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