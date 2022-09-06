// add eventlistener? to change class and display next question


//get and store the answer that the user chooses
document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault();
    let selectedAnswer = document.getElementsByName('answer');
    // console.log(selectedAnswer)
    for(i=0; i < selectedAnswer.length; i++){
        if(selectedAnswer[i].checked){
            // console.log(selectedAnswer[i].value)
            return selectedAnswer[i].value
        }
    }
    document.getElementById('answer1')
})

