// add eventlistener? to change and display next question
//get and store the answer that the user chooses
let numClicks = 0

let score = 0

let questions = [
    {question: 'Question 1', choices: ['correctAnswer', 'incorrectAnswer', 'incorrectAnswer' ], labelChoices: ['answer1', 'answer2', 'answer3'], qNumber: 1},
    {question: "Question 2", choices:['incorrectAnswer', 'correctAnswer', 'incorrectAnswer'], labelChoices: ['apple', 'orange', 'pear'], qNumber: 2},
    {question: 'Question 3', choices: ['correctAnswer', 'incorrectAnswer', 'incorrectAnswer'], labelChoices: ['1v','2','3'], qNumber: 3},
    {question: 'Question 4', choices: ['incorrectAnswer', 'incorrectAnswer', 'correctAnswer'], labelChoices: ['1vv','2','3'], qNumber: 4},
    {question: 'Question 5', choices: ['correctAnswer', 'incorrectAnswer', 'incorrectAnswer'], labelChoices: ['1vvv','2','3'], qNumber: 5}
]

// console.log(questions[4].qNumber == questions.length)

function submitClick(){
    document.getElementById('submit').addEventListener('click', function(event){
        event.preventDefault();
        // returns which answer the user selected
        let allAnswers = document.getElementsByName('answer');
        // console.log(allAnswers)
        function selectedAnswer(){
            for(i=0; i < allAnswers.length; i++){
                if(allAnswers[i].checked){
                    // console.log(allAnswers[i].value)
                    return allAnswers[i].value
                }
            } 
        }
        //  checks whether answer is correct or incorrect and changes users score
        function checkAnswer(){
            if(selectedAnswer() == 'correctAnswer'){
                console.log('correct answer')
                score += 1 
                // console.log(score)
                document.getElementById('score').innerHTML = score
            }else{
                console.log('incorrect answer')
                // console.log(score)
            }
        }

        function results(){
            for(i=1; i<questions.length; i++){
                if(questions[i].qNumber == questions.length){
                    console.log('amongus')
                }
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
                if(document.getElementById('question').innerHTML == questions[i].question){
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
        
        
        
        selectedAnswer()
        checkAnswer()
        results()
        clickCount()
        nextQuestion()    
    })
}
submitClick()

// console.log(typeof document.getElementById('question').innerHTML)


// change the questions using a for loop of numbers for each question. 
// start with 3 questions
// everytime submit is clicked it changes which call of the function and which parameters its using
// empty array to log evertime answer is submitted? 
// if statement to check whether answer logged or not and push into array
// add class of correct-answer for correct answer else not correct

