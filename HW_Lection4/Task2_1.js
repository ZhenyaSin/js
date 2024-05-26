// 1.
// Реализовать Task 1 через switch
let age = "aaa";
let age_2 = 18;
let age_3 = 61;


switch(true) {
    case age < age_2:
        console.log(`You don't have access cause your ${age} is It's less then `);
        break;
    case age >= age_2 && age < age_3:
        console.log('Welcome !');
        break;
    case age > age_3:
        console.log('Keep calm and look Culture channel');
        break;
    default:
        console.log('Technical work');
}