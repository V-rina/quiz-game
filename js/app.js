let answers
let prize = 100
let totPrize = 0
let currentPrize = document.getElementsByClassName('currentPrize')[1];
let totalPrize = document.getElementById('totalPrize');
let skipQuestion = document.getElementById('skipQuestion')


document.getElementById('startGame').onclick = function() {
    document.getElementById('gameplace').style.display = 'block';
    event.target.style.display = 'none';
}
	
let getRandomQuestion = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function quiz() {
    let currentQuestion = window.questions[getRandomQuestion(0, window.questions.length)];
    document.getElementById('questionTitle').innerHTML = currentQuestion.question
    for (let i = 0; i < 4; i++) {
        answers = document.getElementsByClassName('option');
        answers[i].innerHTML = currentQuestion.content[i];
    }

    currentPrize.innerHTML = prize;

    for (let i = 0; i < 4; i++) {
        let answer = answers[i]
        skipQuestion.onclick = function() {
            quiz();
            event.target.disabled = true;
        }

        answer.onclick = function() {
            if ( Number.parseInt(event.target.id) === Number.parseInt(currentQuestion.correct) ) {
                totPrize += prize
                totalPrize.innerHTML = totPrize;
                prize *= 2;

                if (totPrize < 1000000) {
                    quiz()
                } else {
                    document.getElementById('cover').style.display = 'block';
                    document.getElementById('won').style.display = 'block';
                }
            } else {
                document.getElementById('cover').style.display = 'block';
                document.getElementById('failed').style.display = 'block';
                document.getElementsByClassName('currentPrize')[0].innerHTML = prize;
            }
        }
    }
}

quiz()




