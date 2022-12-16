const student = "Марупов Ромиз Алимухаммадович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество
document.getElementById("student").innerHTML = student;
const pros = 0.2;
function throwRandomError(percent) {
   const kerr = Math.floor(Math.random() * 20 + 1); //Math.floor(Math.random() * 9) - 10;
   const kus = percent * 20; 
    if (percent < 0 || percent > 1) {
    throw new Error('0.0 до 1.0');
    };
    if (pros.toString().length > 3) {
    throw new Error('Error 404')
    };
    if (kerr <= kus) {
    throw new Error('Случайная ошибка!');
    };
    };   //throw err; неизвестная ошибка, пробросить исключение (**)
try {
    throwRandomError(pros); //20%=0.2
    alert('Всё в порядке, приложение работает в штатном режиме!!');
} catch(err) {
    alert(`Произошла ошибка, пожалуйста перезагрузите страницу! Сообщение: ${err.message}`); //+ err.message);
}
