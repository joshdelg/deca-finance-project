module.exports = {
    checkQuestion: function(chosenAns, qId) {
        if(chosenAns == qId) {
            return 'checked';
        } else {
            return '';
        }
    },
    correctOrWrong: function(userRes, ansVal, correctAns) {
        if(userRes && userRes.correct) {
            if(ansVal == correctAns)
                return '<span class="green badge white-text">Correct!</span>';
        }
    }
}