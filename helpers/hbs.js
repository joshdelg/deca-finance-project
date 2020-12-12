module.exports = {
    checkQuestion: function(chosenAns, qId) {
        if(chosenAns == qId) {
            return 'checked';
        } else {
            return '';
        }
    },
    correctOrWrong: function(started, ansVal, correctAns) {
        if(started) {
            if(ansVal == correctAns)
                return '<span class="green badge white-text">Correct!</span>';
        }
    }
}