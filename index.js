// add eventlistener? to change and display next question
//get and store the answer that the user chooses
let numClicks = 0


let questions = [
    {question: 'Question 1', choices: ['apple', "organge", "pear" ], },
    {question: "Question 2", choices:['red', "yellow", "purple"], labelChoices: ['apple', 'orange', 'pear']},
    {question: 'Question 3', choices: ['1','2','3'], labelChoices: ['1','2','3']},
    {question: 'Question 4', choices: ['1','2','3'], labelChoices: ['1','2','3']},
    {question: 'Question 5', choices: ['1','2','3'], labelChoices: ['1','2','3']}
]

function submitClick(){
    document.getElementById('submit').addEventListener('click', function(event){
    
        event.preventDefault();
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
        clickCount()
        nextQuestion()    
    })
}
submitClick()




// change the questions using a for loop of numbers for each question. 
// start with 3 questions
// everytime submit is clicked it changes which call of the function and which parameters its using
// empty array to log evertime answer is submitted? 
// if statement to check whether answer logged or not and push into array
// add class of correct-answer for correct answer else not correct

