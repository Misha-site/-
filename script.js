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
}
function go_from_first() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Что тебе интереснее всего делать?";
    btn1.textContent = "Решать задачи";
    btn2.textContent = "Читать и писать";
    btn3.textContent = "Рисовать и творить";
    btn4.textContent = "Работать с компьютером";
}
function go_second() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Как ты предпочитаешь учиться?";
    btn1.textContent = "Через практику";
    btn2.textContent = "Через теорию";
    btn3.textContent = "Через творчество";
    btn4.style.display = "block";
    btn4.textContent = "Через общение";
    
}
function go_third() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Какие качества ты считаешь у себя сильными?";
    btn1.textContent = "Логика";
    btn2.textContent = "Эмпатия";
    btn3.textContent = "Креативность";
    btn4.style.display = "block";
    btn4.textContent = "Упорство";
}
function go_4() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Что тебе ближе: работа в команде или индивидуально?";
    btn1.textContent = "В команде";
    btn2.textContent = "Индивидуально";
    btn3.textContent = "Всё зависит от задачи";
    btn4.style.display = "none";
}
function go_5() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Какие технологии тебе интересны?";
    btn1.textContent = "Робототехника";
    btn2.textContent = "Программирование";
    btn3.textContent = "Дизайн";
    btn4.style.display = "block";
    btn4.textContent = "Медицина";
}
function go_6() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Как ты относишься к точным наукам";
    btn1.textContent = "Люблю";
    btn2.textContent = "Нейтрально";
    btn3.textContent = "Не люблю";
    btn4.style.display = "none";
}

function go_7() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Что ты хочешь изменить в мире?";
     btn1.textContent = "Улучшить здоровье людей";
    btn2.textContent = "Создать новые технологии";
    btn3.textContent = "Сделать мир красивее";
    btn4.style.display = "none";
}
function go_8() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = " Как ты относишься к публичным выступлениям?";
    btn1.textContent = "Люблю";
    btn2.textContent = "Нейтрально";
    btn3.textContent = "Избегаю";
    btn4.style.display = "none";
}
// 
function go_9() {
    const h1 = document.getElementById("h1");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    h1.textContent = "Какая профессия тебе кажется интересной?";
    
    btn1.textContent = "Врач";
    btn2.textContent = "Программист";
    btn3.textContent = "Дизайнер"; 
    btn4.textContent = "Учитель";
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
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function about() {
  window.location.href = "about.html"
}
const descriptions = [
  `Вы обладаете аналитическим складом ума и стремитесь <br>к системности во всём, что делаете. Вам важно понимать, <br>как устроены процессы, видеть причинно-следственные<br> связи и принимать решения, основанные <br>на логике и фактах.<br>

                    Вы предпочитаете работать самостоятельно,<br> но при чётко поставленных целях можете <br>быть ценным участником команды. Вас вдохновляют <br>интеллектуальные задачи, глубокие исследования <br>и возможность влиять на стратегию. Именно поэтому <br>профессии, связанные с анализом, технологиями <br>и планированием, подходят вам особенно хорошо.`,
  `Ты — человек, который умеет брать на себя ответственность <br>и организовывать процессы. У тебя выраженные лидерские<br> качества, ты легко принимаешь решения и умеешь<br> вдохновлять других. Ты ценишь порядок, эффективность <br>и результат. В стрессовых ситуациях сохраняешь<br> хладнокровие и быстро находишь оптимальные решения. <br>Люди часто обращаются к тебе за советом или <br>поддержкой.`,
  `Ты — ярко выраженная творческая натура с развитой<br> эмпатией и богатым воображением. Тебя вдохновляют люди,<br> истории и эстетика. Ты чувствителен к эмоциональным <br>состояниям окружающих, умеешь находить нестандартные<br> решения и выражать идеи через искусство или слово.<br> Тебе важно, чтобы работа приносила внутреннее<br> удовлетворение и имела социальную ценность.`
];
const randomIndex = Math.floor(Math.random() * descriptions.length);
function results() {
    window.location.href = "result.html"
    window.onload = function () {
    const resultBlock = document.getElementById("result");
    resultBlock.textContent = descriptions[randomIndex];
};
}
