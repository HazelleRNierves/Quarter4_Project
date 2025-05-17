        const questions = [
            { question: "What is one of the main causes of climate change?", answers: ["Poverty", "Overfishing", "Deforestation", "Floods"], correct: 2 },
            { question: "What can be solutions to climate change?", answers: ["Using too much electricity", "Planting trees", "More fossil fuels", "Deforestation"], correct: 1 },
            { question: "What is climate change?", answers: ["The changing position of the moon.", "Promoting deforestation", "Change of temperature, seasons, and weather over a long period of time.", "The change of texture of the soil."], correct: 2 },
            { question: "Which of the following is an example of the causes of climate change?", answers: ["Riding a bike", "Deforestation", "Cleaning the environment", "Planting more trees"], correct: 1 },
            { question: "Which animal is found in Arctic regions that is considered to be endangered due to climate change?", answers: ["Polar Bears", "Chicken", "Snake", "Rats"], correct: 0 }
        ];

        let currentQuestion = 0;
        let score = 0;
        let selectedAnswers = [];

        function loadQuestion() {
            const quizContainer = document.getElementById('quiz');
            quizContainer.innerHTML = '';
            const question = questions[currentQuestion];
            quizContainer.innerHTML = `<div class="question"><h2>${question.question}</h2></div>`;
            for (let i = 0; i < question.answers.length; i++) {
                const selectedClass = selectedAnswers[currentQuestion] === i ? 'selected' : '';
                quizContainer.innerHTML += `<div class="answer ${selectedClass}" onclick="selectAnswer(${i})">${question.answers[i]}</div>`;
            }
            document.getElementById('prevBtn').style.display = currentQuestion === 0 ? 'none' : 'inline';
            document.getElementById('nextBtn').style.display = currentQuestion === questions.length - 1 ? 'none' : 'inline';
            document.getElementById('submitBtn').style.display = currentQuestion === questions.length - 1 ? 'inline' : 'none';
        }

        function selectAnswer(index) {
            selectedAnswers[currentQuestion] = index;
            loadQuestion();
        }

        function nextQuestion() {
            currentQuestion++;
            loadQuestion();
        }

        function prevQuestion() {
            currentQuestion--;
            loadQuestion();
        }

        function submitQuiz() {
            const quizContainer = document.getElementById('quiz');
            quizContainer.innerHTML = '';
            score = 0;

            for (let i = 0; i < questions.length; i++) {
                const question = questions[i];
                const answerIndex = selectedAnswers[i];
                quizContainer.innerHTML += `<div class="question"><h2>${question.question}</h2></div>`;

                for (let j = 0; j < question.answers.length; j++) {
                    const selectedClass = j === question.correct
                        ? 'correct'
                        : (j === answerIndex ? 'incorrect' : '');
                    quizContainer.innerHTML += `<div class="answer ${selectedClass}">${question.answers[j]}</div>`;
                }

                if (answerIndex === question.correct) {
                    score++;
                }
            }

            showResult();
        }

        function showResult() {
            const resultContainer = document.getElementById('result');
            resultContainer.style.display = 'block';

            if (score === questions.length) {
                resultContainer.innerHTML = `<h2>Excellent! Your score: ${score} out of ${questions.length}</h2>`;
            } else if (score > questions.length / 2) {
                resultContainer.innerHTML = `<h2>Good job! Your score: ${score} out of ${questions.length}</h2>`;
            } else {
                resultContainer.innerHTML = `<h2>Better luck next time. Your score: ${score} out of ${questions.length}</h2>`;
            }
            document.getElementById('prevBtn').style.display = 'none';
            document.getElementById('nextBtn').style.display = 'none';
            document.getElementById('submitBtn').style.display = 'none';
        }

        loadQuestion();
