const dictionary = {
    init() {
        this.define();
    },

    define() {
        document.getElementById('get-definition').addEventListener('click', () => {
            const word = document.getElementById('word-input').value;

            fetch(`http://localhost:8000/define/${word}/`)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        document.getElementById('definition').innerHTML = data.error
                    } else {
                        document.getElementById('definition').innerHTML = `
                        <h2>${data.hwi.hw}</h2>
                        <p>${data.shortdef[0]}</p>
                        `;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    document.getElementById('definition').innerHTML = 'Error Fetching Definition.';
                });
        })
    }

}

dictionary.init()

// const predictor = {

//     init() {
//         this.predict();
//     },

//     predict() {
//         const outcomes = ['Apple', 'Banana', 'Cherry', 'Date'];
//         const pred_button = document.getElementById('predict-button')

//         if (pred_button) {
//             pred_button.addEventListener('click', (event) => {
//                 event.preventDefault();
//                 const match = document.getElementById('match').value;
//                 if (match) {
//                     const foutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
//                     console.log(foutcome);
//                     const outcomeDiv = document.querySelector('.bg-white');
//                     if (outcomeDiv) {
//                         outcomeDiv.textContent = `Outcome: ${foutcome}`;
//                     }
//                 }
//             })
//         }
//     }

// }

// predictor.init()

