
const giphyURl = "https://api.giphy.com/v1"
// Store Madlibs as objects with title and content keys
// Turn Madlib into DOM element
// Create input form with word prompts 
// Store input answers as an array
// Replace "____" in madlib element with embedded gifs
    // Element.innerText.replace("____", API response)

// Create Event Handler
    //inputArray.forEach((answer) => {
            // c0nst gif = document.createElement("img");
            // gif.src = answer.apiValue;
            // element.replace("____", gif)
        // })

// Create Event Listener
    // button.addEventListener("click", renderGifs)

const madlib1 = {
    title: "The Job Interview from Hell",
    content: `I scoured my closet for the perfect ____ to wear. Dressing for the ____ place around isn't easy. Sweating _____ during the interview is a sure sign of weakness. I must remember to play up my strengths: ____, menacing stares and ____ collecting. It has always been my dream to work with the Devil. The power and prestige are extremely desirable. The Gates of ____ tower above me as I ring the doorbell. I can't believe ____ is the doorbell chime. My goodness, his red ____ look(s) better in person! The Devil: "Welcome to Hell. Your inverview will ____ now."
    Me: "It's a pleasure to meet you. My name is ____."
    The Devil: "Who cares? I have only one question. Do you hate ____?"
    Me: "Yes, yes I do. I hate them more than ____."
    The Devil: "You're hired. Wait, is that a ____ you're wearing?"
    Me: "No, it's actually a ____ suit."
    The Devil: "You're fired. Maybe you should pursure a career in ____."`,
    words: ["article of clothing", "superlative", "plural noun", "sport", "noun", "proper noun", "song title", "article of clothing", "verb", "your name", "plural noun", "plural noun", "article of clothing", "adjective", "field of study"]
};
const form = document.querySelector("form");
const submit = document.querySelector("#submit-button");
const storyTitle = document.querySelector(".title")
// Create inputs and attach to form element
function createInputs(madlib) {
    madlib.words.forEach((word) => {
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.className = "word-input"
        newInput.placeholder = word;
        form.append(newInput)
    })
    form.append(submit);
    storyTitle.innerText = madlib.title
}

console.log(storyTitle)
createInputs(madlib1);

async function renderGifs() {
    try {

    } catch (error) {
        console.error(error)
    }
}
