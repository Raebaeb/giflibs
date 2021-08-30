# Project Overview

## Project Name

GIFLIBS

## Project Description

Fill in the blanks of MadLibs and the final story will use gifs to make it even funnier!

## API and Data Sample

Using the GIPHY API. https://developers.giphy.com/docs/api/#quick-start-guide


```
https://api.giphy.com/v1/gifs/search?api_key=94ZQzjNYZlMRHizPP8lN40b6kDQyL1Rt&q=spongebob&limit=1&offset=0&rating=g&lang=en

{
  "data": [
    {
      "type": "gif",
      "id": "nDSlfqf0gn5g4",
      "url": "https://giphy.com/gifs/dance-spongebob-bob-nDSlfqf0gn5g4",
      "slug": "dance-spongebob-bob-nDSlfqf0gn5g4",
      "bitly_gif_url": "http://gph.is/1a5EiCT",
      "bitly_url": "http://gph.is/1a5EiCT",
      "embed_url": "https://giphy.com/embed/nDSlfqf0gn5g4",
      "username": "spongebob",
      "source": "",
      "title": "Dance Reaction GIF by SpongeBob SquarePants",
      "rating": "g",
```      


## Wireframes

Check wireframe assets folder!

#### MVP 

- Provide stories with fill-in-the-blank word suggestions
- Select random gif corresponding to the provided word via API call
- Render story with GIFs replacing the filled in words

#### PostMVP  

- Ability to share the finished madlib with friends

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Students usally put in around 40+ hours into their project 1.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
