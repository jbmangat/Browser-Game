let numClicks = 0
let score = 0
let questions = [
    {question: "What is May's birthstone?", questionNum: 'Question 1', choices: ['correctAnswer', 'incorrectAnswer', 'incorrectAnswer'], labelChoices: ['answer1', 'answer2', 'answer3']},
    {question: 'What kind of fruit is Florida known for?', questionNum: 'Question 2', choices: ['incorrectAnswer', 'correctAnswer', 'incorrectAnswer'], labelChoices: ['apple', 'orange', 'pear']},
    {question: 'Which U.S. President served more than two terms?', questionNum: 'Question 3', choices: ['correctAnswer', 'incorrectAnswer', 'incorrectAnswer'], labelChoices: ['Franklin D. Roosevelt','Ulysses S. Grant','John Adams']},
    {question: 'Who wrote 1984?', questionNum: 'Question 4', choices: ['incorrectAnswer', 'incorrectAnswer', 'correctAnswer'], labelChoices: ['Harper Lee','J. D. Salinger ','George Orwell']},
    {question: 'When did the Berlin Wall fall?', questionNum: 'Question 5', choices: ['correctAnswer', 'incorrectAnswer', 'incorrectAnswer'], labelChoices: ['1989','1991','1997']},
    {question: 'What is the smallest country in the world?', questionNum: 'Question 6', choices: ['incorrectAnswer', 'incorrectAnswer', 'correctAnswer'], labelChoices: ['Monaco','Liechtenstein','Vatican City']},
    {question: 'Who painted "The Starry Night"?', questionNum: 'Question 7', choices: ['incorrectAnswer', 'correctAnswer', 'incorrectAnswer'], labelChoices: ['Leonardo da Vinci','Vincent van Gogh','Pablo Picasso']},
    {question: 'Who directed "Jurassic Park"?', questionNum: 'Question 8', choices: ['incorrectAnswer', 'correctAnswer', 'incorrectAnswer'], labelChoices: ['James Cameron','Steven Spielberg','George Lucas']},
    {question: 'Who is the lead singer of U2?', questionNum: 'Question 9', choices: ['incorrectAnswer', 'incorrectAnswer', 'correctAnswer'], labelChoices: ['Bruce Springsteen','Sting','Bono']},
    {question: 'What is the largest organ in the human body?', questionNum: 'Question 10', choices: ['correctAnswer', 'incorrectAnswer', 'incorrectAnswer'], labelChoices: ['Skin', 'Brain', 'Lung']},
    {question: 'Results', choices: ['', '', ''], labelChoices: ['', '', '']},
    {question: 'restarting', choices: ['', '', ''], labelChoices: ['', '', '']},
]

function submitClick(){
    document.getElementById('submit').addEventListener('click', function(event){
        
        event.preventDefault();
        // returns which answer the user selected
        let allAnswers = document.getElementsByName('answer');
        function selectedAnswer(){
            for(i=0; i < allAnswers.length; i++){
                if(allAnswers[i].checked){
                    
                    return allAnswers[i].value
                }
            } 
        }

        //  checks whether answer is correct or incorrect and update the score for the user
        function checkAnswer(){
            if(selectedAnswer() == 'correctAnswer'){
                console.log('correct answer')
                score += 1
                document.getElementById('score').innerHTML = score
            }else if(selectedAnswer() == 'incorrectAnswer'){
                console.log('incorrect answer')
                // console.log(score)
            }
        }

        // for changing the text content and values of the question
        function changeQuestion(question, choice1, choice2, choice3, labelChoice1, labelChoice2, labelChoice3){
            document.getElementById('question').innerHTML = question
            document.getElementById('answer1').setAttribute("value", choice1)
            document.getElementById('answer2').setAttribute("value", choice2)
            document.getElementById('answer3').setAttribute("value", choice3)
            document.getElementById('label1').innerHTML = labelChoice1
            document.getElementById('label2').innerHTML = labelChoice2
            document.getElementById('label3').innerHTML = labelChoice3
        }

        function clickCount(){
            numClicks += 1
        }
        
        // getting arguements and passing them into changeQuestion
        function nextQuestion(){    
            for(i=0; i<questions.length; i++){
                if(document.getElementById('questionNum').innerHTML == questions[i].questionNum){
                    return changeQuestion(
                        questions[numClicks].question, 
                        questions[numClicks].choices[0],
                        questions[numClicks].choices[1],
                        questions[numClicks].choices[2],
                        questions[numClicks].labelChoices[0],
                        questions[numClicks].labelChoices[1],
                        questions[numClicks].labelChoices[2]
                    )
                }
            }
        }

        // getGame and num need better names
        function displayResults(){
            if(document.getElementById('question').innerHTML == 'Results' && score >= 7){
                let getGame = [...document.querySelectorAll('.duringGame')]
                getGame.map((num) => num.setAttribute('class', 'endGame'))
                document.querySelector('h2').innerHTML = `You got ${score} questions correct`
                document.querySelector('h3').innerHTML = "You win!"
            }else if(document.getElementById('question').innerHTML == 'Results' && score < 7){
                let getGame = [...document.querySelectorAll('.duringGame')]
                getGame.map((num) => num.setAttribute('class', 'endGame'))
                document.querySelector('h2').innerHTML = `You got ${score} questions correct`
                document.querySelector('h3').innerHTML = "You lose!" 
            }else if(document.getElementById('question').innerHTML == 'restarting'){
                location.reload()
            }
        }
        
        
        selectedAnswer()
        checkAnswer()
        clickCount()
        nextQuestion()
        displayResults()   
    })
}
submitClick()


