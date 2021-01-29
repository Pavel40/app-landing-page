function changeAnswerDisplay(answerID, button) {
    const answer = document.getElementById(answerID);

    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        answer.classList.add('block');
        button.childNodes[0].src = 'img/faq/minus.png';
    }
    else {
        answer.classList.remove('block');
        answer.classList.add('hidden');
        button.childNodes[0].src = 'img/faq/plus.png';
    }
}
