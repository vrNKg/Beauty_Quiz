import { quiz } from './quiz.module'
import {onShowResult} from './result.main'

const NEXT = 'Дальше';
const PREVIOUS = 'Назад';
const SHOW_RESULT = 'Узнать результат';

let currentPage = 1;
let questionIndex = 0;
let answerStorage = new Map();

const main = document.querySelector('.main');
let skinTest = document.createElement('section');
skinTest.className = 'skin-test';
main.appendChild(skinTest);
let skinTestWrapper = document.createElement('div');
skinTestWrapper.className = 'skin-test__wrapper';
skinTest.appendChild(skinTestWrapper);
let progressWrapper = document.createElement('div');
progressWrapper.className = 'skin-test__progress-wrapper';
skinTestWrapper.appendChild(progressWrapper);
let progress = document.createElement('div');
progress.className = 'skin-test__progress';
progressWrapper.appendChild(progress);
for (let i=1; i<4; i++) {
    let dot = document.createElement('div');
    dot.className = 'skin-test__progress_dot';
    dot.dataset.progress = `${i}`;
    if (i == currentPage) {
        dot.classList.toggle('active');
    };
    progress.append(dot);
};
let pageCounter = document.createElement('div');
pageCounter.className = 'skin-test__progress_digit';
pageCounter.innerHTML = `Вопрос ${currentPage} из 3`;
progressWrapper.appendChild(pageCounter);
let form = document.createElement('form');
skinTestWrapper.appendChild(form);
let fieldset = document.createElement('fieldset');
fieldset.className = 'skin-test__field';
form.appendChild(fieldset);
let legend = document.createElement('legend');
legend.className = 'skin-test__question';
let testResult = document.createElement('section');
testResult.className = 'test-result';


function clearQuestion() {
    fieldset.innerHTML = '';
    legend.innerHTML = '';
};

function onPageChange() {
    pageCounter.innerHTML = `Вопрос ${currentPage} из 3`;
    let dots = document.querySelectorAll('.skin-test__progress_dot');
    dots.forEach((activeDot) => {
        if (activeDot.dataset.progress == currentPage) {
            activeDot.classList.toggle('active');
        } else {
            activeDot.classList.remove('active');
        };
    });
};

function createAnswers() {
    quiz[questionIndex].answers.forEach((answer) => {
        let lable = document.createElement('label');
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = answer;
        lable.append(input, answer);
        if (answer === answerStorage.get(questionIndex)) {
            input.checked = true;
        };
        fieldset.appendChild(lable);
    });
};

function createButtons() {
    let buttonWrapper = document.createElement('div')
    buttonWrapper.className = 'button-wrapper'
    fieldset.appendChild(buttonWrapper);

    quiz[questionIndex].button.forEach((buttonText) => {
        let button = document.createElement('button');
        button.append(buttonText);
        if (buttonText === 'Назад') {
            button.className = 'previous-button';
        } else {
            button.className = 'submit-button';
        };
        buttonWrapper.appendChild(button);
        button.onclick = getOnClickAction(buttonText);
    });
};

function showQuestion() {
    fieldset.appendChild(legend);
    legend.append(quiz[questionIndex].question);
    createAnswers();
    createButtons();
};

function onNextQuestion(e) {
    e.preventDefault();
    const checkAnswer = fieldset.querySelector('input[type="radio"]:checked');
    if (checkAnswer) {
        answerStorage.set(questionIndex, checkAnswer.value);
        questionIndex++;
        clearQuestion();
        showQuestion();
        currentPage++;
        onPageChange();
    } else {
        alert('Выберите ответ');
    };
};

function onPreviousQuestion(e) {
    e.preventDefault();
    answerStorage.delete(questionIndex);
    questionIndex--;
    clearQuestion();
    showQuestion();
    currentPage--;
    onPageChange();
};
function getOnClickAction(buttonText) {
    if (buttonText === NEXT) {
        return onNextQuestion
    } else if (buttonText === PREVIOUS) {
        return onPreviousQuestion
    } else if (buttonText === SHOW_RESULT) {
        return onShowResult
    } else {
        alert('Что-то пошло не так')
    }
};

export {main, skinTest, showQuestion}