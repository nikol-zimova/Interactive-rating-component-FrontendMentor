let ratingButtons = document.querySelectorAll('.RatingButton');

let ratingLabel = document.querySelector('.user-rating-label');

ratingButtons.forEach((button) => {
    button.addEventListener('click', function() {
        ratingButtons.forEach((btn) => {
            btn.classList.remove('active');
        });

        this.classList.add('active');

        ratingLabel.textContent = 'You selected ' + this.value + ' out of 5';
    });
let submitButton = document.querySelector('.submit-button');

let ratingState = document.querySelector('.rating-state');
let thankYouState = document.querySelector('.thank-you-state');

submitButton.addEventListener('click', function() {
    ratingState.setAttribute('hidden', 'true');

    thankYouState.removeAttribute('hidden');
});

});
