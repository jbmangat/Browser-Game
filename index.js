// add eventlistener? to change and display next question
//get and store the answer that the user chooses
function submitClick(){
    document.getElementById('submit').addEventListener('click', function(event){
    
        event.preventDefault();
        let allAnswers = document.getElementsByName('answer');
        // console.log(allAnswers)
        function selectedAnswer(){
            for(i=0; i < allAnswers.length; i++){
                if(allAnswers[i].checked){
                    console.log(allAnswers[i].value)
                    return allAnswers[i].value
                }
            } 
        }
        selectedAnswer()
        
        function changeQuestion(question, choice1, labelChoice1, choice2, labelChoice2, choice3, labelChoice3){
            document.getElementById('question').innerHTML = question
            document.getElementById('answer1').setAttribute("value", choice1)
            document.getElementById('label1').innerHTML = labelChoice1
            document.getElementById('answer2').setAttribute("value", choice2)
            document.getElementById('label2').innerHTML = labelChoice2
            document.getElementById('answer3').setAttribute("value", choice3)
            document.getElementById('label3').innerHTML = labelChoice3
        }
        
        
        let numClicks = []
        function clickCount(){
            numClicks.push(1)
            console.log(numClicks)
        }
        clickCount()
        

        function nextQuestion(){
            let questionsAndAnswers = changeQuestion('Question 1',2,2,2,2,2,4)
            if(document.getElementById('question').innerHTML == 'Question 1'){
                let questionsAndAnswers = changeQuestion('Question 2')
            }if(document.getElementById('question').innerHTML == 'Question 2'){
                let questionsAndAnswers = changeQuestion('Question 3')
            }
            
        }
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

