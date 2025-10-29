function startTest() {
    window.location.href = "test.html"
}
function goOwnPage() {
    window.location.href = "about.html"
}
function goOwnPage2() {
    window.location.href = "result.html"
}
let activeButton = null;
function from_first(btn) {
  if (activeButton === btn) {
    btn.style.backgroundColor = "#4dbaf4"; // синий
    activeButton = null;
    return;
  }
  if (activeButton) {
    activeButton.style.backgroundColor = "#4dbaf4"; // синий
  }
  btn.style.backgroundColor = "#81C784";
  activeButton = btn;
// A) Математика B) Биология C) Литература D) Информатика E) История F) Физика G) ИЗО / Музыка H) Обществознание Что тебе интереснее всего делать? A) Решать задачи B) Читать и писать C) Рисовать и творить D) Работать с компьютером E) Помогать людям Как ты предпочитаешь учиться? A) Через практику B) Через теорию C) Через творчество D) Через общение Какие качества ты считаешь у себя сильными? A) Логика B) Эмпатия C) Креативность D) Упорство E) Коммуникабельность Что тебе ближе: работа в команде или индивидуально? A) В команде B) Индивидуально C) Всё зависит от задачи Какие технологии тебе интересны? A) Робототехника B) Программирование C) Дизайн D) Медицина E) Я не интересуюсь технологиями Как ты относишься к точным наукам? A) Люблю B) Нейтрально C) Не люблю Что ты хочешь изменить в мире? A) Улучшить здоровье людей B) Создать новые технологии C) Сделать мир красивее D) Повысить уровень образования E) Защитить природу Как ты относишься к публичным выступлениям? A) Люблю B) Нейтрально C) Избегаю Какая профессия тебе кажется интересной? A) Врач B) Программист C) Дизайнер D) Учитель E) Юрист
}
function go_from_first() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Какие дисциплины тебе нравятся?";
    btn1.textContent = "Программирование";
    btn2.textContent = "Математика";
    btn3.textContent = "Биология";
    btn4.textContent = "История";
}
function go_second() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Что тебе больше всего нравится в учебе?";
    btn1.textContent = "Практика";
    btn2.textContent = "Теория";
    btn3.textContent = "Исследование";
    btn4.style.display = "none";
}
function go_third() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Какие навыки ты хочешь развивать?";
    btn1.textContent = "Аналитика";
    btn2.textContent = "Креативность";
    btn3.textContent = "Коммуникация";
    btn4.style.display = "none";
}
function go_4() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Что тебе ближе?";
    btn1.textContent = "Люди";
    btn2.textContent = "Данные";
    btn3.textContent = "Технологии";
    btn4.style.display = "none";
}
function go_5() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Какие проекты тебе интересны?";
    btn1.textContent = "Социальные";
    btn2.textContent = "Технические";
    btn3.textContent = "Творческие";
    btn4.style.display = "block";
    btn4.textContent = "Научные";
}
function go_6() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Как ты относишься к предпринимательству?";
    btn1.textContent = "Положительно";
    btn2.textContent = "Нейтрально";
    btn3.textContent = "Отрицательно";
    btn4.style.display = "none";
}
function go_7() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Что ты хочешь изменить в своей сфере?";
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
}
function go_8() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Какие компании или личности тебя вдохновляют?";
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";
}
// 
function go_9() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Где ты хочешь работать?";
    
    btn1.textContent = "Стартап";
    btn2.textContent = "Крупная компания";
    btn3.textContent = "Госструктура"; 
    btn4.textContent = "Фриланс";
    btn4.style.display = "block";
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
}
let step = 0;
function go_next() {
  if (step === 0) {
    go_from_first(); 
  } else if (step === 1) {
    go_second(); 
  } else if (step === 2) {
    go_third(); 
  } else if (step == 3) {
    go_4();
  }else if (step == 4) {
    go_5();
  }else if (step == 5) {
    go_6();
  }else if (step == 6) {
    go_7();
  }else if (step == 7) {
    go_8();
  }else if (step == 8) {
    go_9();
  } else if (step == 9) {
    goOwnPage2();
  }
  step++; 
}
function about() {
  window.location.href = "about.html"
}
function results() {
  window.location.href = "result.html"
}