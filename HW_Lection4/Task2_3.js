// 3.
// Преобразовать Task 2 - 1 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
//   преобразовываясь в number

let age = '60';
let age_2 = '18';
let age_3 = '60';

let age_4 = parseInt(age)
let age_5 = parseInt(age_2)
let age_6 = parseInt(age_3)


if (age_4 < age_5) {
    console.log(`You don't have access cause your ${age_4} is It's less then `);
} else if (age_4 >= age_5 && age_4 < age_6) {
    console.log('Welcome  !');
} else if (age_4 > age_6) {
    console.log('Keep calm and look Culture channel');
} else {
    console.log('Technical work');
    }