const container = document.querySelector('.container')
const questionContainer = document.querySelector('.questions')
const answers = document.querySelector('.answers')
const results = document.querySelector('.game-ended')
const timerView = document.querySelector('.timer')

let currentQuestion = 0
let selectedOption = ''
let score = 0
let totalScore = 0
let timer = 60

const questions = [
    {
        question: 'Javascript is an _______ language?',
        options: [
            { value: 'object-based', correct: 1 },
            { value: 'Markup', correct: 2 },
            { value: 'object-oriented', correct: 3 },
            { value: 'procedural', correct: 4 }
        ],
    },
    {
        question: 'Which of the following keyowrd is used to define a variable in javascript?',
        options: [
            { value: 'both let and var', correct: 3 },
            { value: 'let', correct: 2 },
            { value: 'var', correct: 1 },
            { value: 'none', correct: 4 }
        ],
    },

    {
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        options: [
            { value: 'getElementsbysymbols', correct: 1 },
            { value: 'getElementsbyname', correct: 2 },
            { value: 'getElementbyid()', correct: 3 },
            { value: 'getElementbyhover', correct: 4 }
        ],
    },

    {
        question: 'Upon encountering empty statements, what does the Javascript interpreter do??',
        options: [
            { value: 'Throws an arror', correct: 2 },
            { value: 'Ignore the statements', correct: 3 },
            { value: 'Gives a warning', correct: 1 },
            { value: 'None', correct: 4 }
        ],
    },

    {
        question: 'How can a datatype be declared to be a constant type?',
        options: [
            { value: 'constant', correct: 4 },
            { value: 'var', correct: 2 },
            { value: 'let', correct: 1 },
            { value: 'const', correct: 3 }
        ],
    },

    {
        question: 'When the switch statement matches the expression with the given labels, how is the comparison done?',
        options: [
            { value: 'Both the value of the expression and its datatype is compared', correct: 3 },
            { value: 'Only the datatype of the expression is compared', correct: 2 },
            { value: 'Only the value of the expression is compared', correct: 1 },
            { value: 'None', correct: 4 }
        ],
    },

    {
        question: 'What keyword is used to check whether a given property is valid or not?',
        options: [
            { value: 'in', correct: 3 },
            { value: 'is in', correct: 2 },
            { value: 'exists', correct: 1 },
            { value: 'lies', correct: 4 }
        ],
    },

    {
        question: 'What is the use of the <nonscript> tag in Javascript?',
        options: [
            { value: 'Clears all cookies and cache', correct: 1 },
            { value: 'none', correct: 2 },
            { value: 'The content is displayed by non-Javascript browsers only', correct: 3 },
            { value: 'accepts cookies', correct: 4 }
        ],
    },

    {
        question: 'What does the Javascript "debugger" statement do?',
        options: [
            { value: '', correct: 4 },
            { value: '', correct: 2 },
            { value: '', correct: 1 },
            { value: 'it acts as a breakpoint in a program', correct: 3 }
        ],
    },

    {
        question: '?',
        options: [
            { value: '', correct: 3 },
            { value: '', correct: 2 },
            { value: '', correct: 1 },
            { value: '', correct: 4 }
        ],
    },

    {
        question: '?',
        options: [
            { value: '', correct: 3 },
            { value: '', correct: 2 },
            { value: '', correct: 1 },
            { value: '', correct: 4 }
        ],
    },

    {
        question: '?',
        options: [
            { value: '', correct: 3 },
            { value: '', correct: 2 },
            { value: '', correct: 1 },
            { value: '', correct: 4 }
        ],
    },

    {
        question: '?',
        options: [
            { value: '', correct: 3 },
            { value: '', correct: 2 },
            { value: '', correct: 1 },
            { value: '', correct: 4 }
        ],
    },
]

const questionsMap = questions.map((item) => {
    return `
    <div class="question">
        <div>
            <p>${item.question}</p>
        </div>
        <div class="options">
            ${item.options.map((item) => {
                return `
                <div class="option-item">
                    <input type="radio" name='options' id=${item.correct} class="option-item" oninput="choose(event)"> 
                    <label for="${item.correct}">${item.value}</label>
                </div>
                `
            }).sort(() => 0.5 - Math.random()).join('')}
        </div>
    </div>
    `
})

const answersMap = questions.map((item) => {
    return `
    <div class="question">
        <div>
            <p>${item.question}</p>
        </div>
        <div class="options">
            ${item.options.map(v => `<div class='option-item__review' style="${v.correct === 3 ? 'background: green;' : 'background: tomato;'}">${v.value}</div>`).join(' ')}
        </div>
    </div>
    `
})

questionContainer.innerHTML = questionsMap[currentQuestion]

function choose(e) {
    if (e.target.id === '3') {
        score = 1
    } else {
        score = 0
    }
}

function next() {
    currentQuestion += 1
    questionContainer.innerHTML = questionsMap[currentQuestion]
    totalScore += score;

    if (currentQuestion > questions.length - 1) {
        displayResult()
        clearInterval(timeLeft)
    }
}

function displayResult() {
    container.classList.add('hide')
    results.classList.remove('hide')

    results.innerHTML = `
        <div class="score">
            <p>You got ${totalScore}/${questions.length}</p>
            <p>Review answers: </p>
            <div>
                ${answersMap}
            </div>
        </div>
    `
    timerView.innerHTML = ''
}

const timeLeft = setInterval(() => {
    timer--
    timerView.innerHTML = timer
    if (timer === 0) {
        clearInterval(timeLeft)
        displayResult()
        timerView.innerHTML = ''
    }
}, 1000)