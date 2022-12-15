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
    alert('Все работает как запланировано!');
} catch(err) {
    alert(`Ошибка, перезагрузите страницу ! Error: ${err.message}`); //+ err.message);
}
// if ($r=rand(1, 100) < 80) return 2 // 80% случаев //else не надо if (($r = rand(1, 9)) < 2) return $r;