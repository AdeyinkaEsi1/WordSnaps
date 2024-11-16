const predictor = {

    init() {
        this.predict();
    },

    predict() {
        const outcomes = ['Apple', 'Banana', 'Cherry', 'Date'];
        const pred_button = document.getElementById('predict-button')

        if (pred_button) {
            pred_button.addEventListener('click', (event) => {
                event.preventDefault();
                const match = document.getElementById('match').value;
                if (match) {
                    const foutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
                    console.log(foutcome);
                    const outcomeDiv = document.querySelector('.bg-white');
                    if (outcomeDiv) {
                        outcomeDiv.textContent = `Outcome: ${foutcome}`;
                    }
                }
            })
        }
    }

}

predictor.init()

