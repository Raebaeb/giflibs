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


// ==> JS for word-submission.html <==
const madlib1 = {
    title: "The Job Interview from Hell",
    content: `I scoured my closet for the perfect ____ to wear.

    Dressing for the ____ place around isn't easy. 

    Sweating ____ during the interview is a sure sign of weakness. 

    I must remember to play up my strengths: ____, menacing stares and ____ collecting. 

    It has always been my dream to work with the Devil. The power and prestige are extremely desirable.

    The Gates of ____ tower above me as I ring the doorbell. 

    I can't believe ____ is the doorbell chime. My goodness, his red ____ look(s) better in person!

    The Devil: "Welcome to Hell. Your inverview will ____ now."

    Me: "It's a pleasure to meet you. My name is ____."

    The Devil: "Who cares? I have only one question. Do you hate ____?"

    Me: "Yes, yes I do. I hate them more than ____."

    The Devil: "You're hired. Wait, is that a ____ you're wearing?"

    Me: "No, it's actually a ____ suit."

    The Devil: "You're fired. Maybe you should pursure a career in ____."`,
    words: ["article of clothing", "superlative", "plural noun", "sport", "noun", "proper noun", "song title", "article of clothing", "verb", "your name", "plural noun", "plural noun", "article of clothing", "adjective", "field of study"]
};
const madlib2 = {
    title: "Generic Superhero Movie",
    content: `Meet our hero ____, a super-intelligent ____.

    A run-in with the ____ military leads him to create his alter-ego ____, 
    
    a ____ ____ giant capable of great destruction.
    
    He battles the military with his girlfriend Jessica.
    
    Eventually it is discovered that our hero's long-time colleague ____, distinguished by his ____ ____, is trying to turn our hero into a weapon.
    
    This leads to a climactic (if pointless) battle in downtown ____ with an evil version of the same giant alter-ego called The Diabolical ____.
    
    Eventually the enemy is subdued by ____ him with a ____ and the city is saved.`,
    words: ["silly name", "unrealistic profession", "country", "another silly name", "color", "adjective", "third silly name", "adjective", "facial feature", "US city", "one more silly name", "-ing verb", "noun"]
};
const madlib3 = {
    title: "What's for Dinner?",
    content: `It was Thanksgiving, and the scent of succulent roast ____ wafted through my house.
    
    "It's time to ____!" my mother called.
    
    I couldn't wait to get my ____ on that ____ Thanksgiving meal.
    
    My family sat around the dining-room ____.
    
    It was laid out with every kind of ____ imaginable.
    
    There was a basked of hot buttered ____ and glasses of sparkling ____.
    
    The ____ turkey sat, steaming, next to a tureen of ____ gravy.
    
    A bowl of ruby-red ____ sauce, a sweet-____ casserole, and a dish of mashed ____ tempted my taste buds.
    
    But the dish I looked forward to most was Grandma ____'s famous ____ pie. Thanksgiving is my favorite holiday, ____ down.`,
    words: ["noun", "verb", "part of body (plural)", "adjective", "noun", "noun", "plural noun", "type of liquid", "adjective", "noun", "noun", "noun", "plural noun", "person in zoom", "noun", "part of body (plural)"]
};
const form = document.querySelector("form");
const storyTitle = document.querySelector(".title");
const startButton = document.querySelector(".start-button");
const submitButton = document.querySelector("#submit-button");
const inputContainer = document.querySelector("#input-container")
const storyContainer = document.querySelector("#story-container");
const allInputs = document.getElementsByTagName("input");
const story = document.querySelector("#giflib-paragraph")
const nextButton = document.querySelector('#next-button');
let allInputValues = [];
let giflib = {};
const availMadlibs = [madlib1, madlib2, madlib3];

// Create inputs and attach to form element
function renderStory() {
    story.innerText = giflib.content;
    storyContainer.append(story, startButton);
};

function createInputs() {
    storyContainer.innerHTML = "";
    giflib = availMadlibs.shift();
    giflib.words.forEach((word) => {
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.className = "word-input";
        newInput.placeholder = word;
        form.append(newInput)
    })
    storyTitle.innerText = giflib.title;
    submitButton.style.display = "block";
};

// Collect array of input values to run through fetchGifs() and hide form
// remove whitespace from input values

function inputValueArray() {
    Array.prototype.forEach.call(allInputs, input => {
        const inputValue = encodeURIComponent(input.value);
        allInputValues.push(inputValue);
    });
    console.log(allInputValues)
    form.innerHTML = "";
    submitButton.style.display = "none";
}

function fetchGifs(array) {
    let gifArray = [];
    for (let i = 0; i < array.length; i++) {
                gifArray.push(axios.get(`https://api.giphy.com/v1/gifs/random?api_key=94ZQzjNYZlMRHizPP8lN40b6kDQyL1Rt&tag=${array[i]}&rating=g`));
    }
    return gifArray;
};
    
// Add gifs to madlib object and element.replace("____", gif) in order from top to bottom of the story
function renderGifs(embedArray) {
    embedArray.forEach((embedUrl) => {
        story.innerHTML = story.innerHTML.replace("____", `<iframe src=${embedUrl} class="giphy-link" align="middle"></iframe>`);
})
}

//Scroll to top function for next btn

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Event listner "LETS DO THIS"
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    inputValueArray();
    const gifs = fetchGifs(allInputValues);
    Promise.all(gifs).then((responses) => {
        const embeds = responses.map((response) => {
            return response.data.data.embed_url
        });
        renderStory();
        renderGifs(embeds);
    }).catch(err =>console.error(err))
    nextButton.style.display = "block"
    });

// Event Listener NEXT LIB
nextButton.addEventListener('click', () => {
    scrollToTop();
    createInputs();
})
