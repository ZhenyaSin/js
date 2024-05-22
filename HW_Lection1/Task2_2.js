// 2.  x2 - 4x - 5 = 0. - два корня

const b = -4;
const a = 1;
const c = -5;

// Вычисление дискриминанта
const D = b ** 2 - 4 * a * c;

// Проверка 2-ух корней
const x1= (-b + Math.sqrt(D)) / (2*a);
const x2= (-b - Math.sqrt(D)) / (2*a);

console.log(`Ответ к уравнению 2: ${x1} и ${x2}`)