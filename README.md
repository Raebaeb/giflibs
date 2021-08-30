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

![giflibs-wireframes](https://user-images.githubusercontent.com/36183361/131379158-9050687a-76dc-40de-9023-98325876fb2c.png)

![giflibs-mobile-wireframes](https://user-images.githubusercontent.com/36183361/131379138-afb7b50f-dde2-46ea-9118-b13283a117b2.png)


#### MVP 

- Provide stories with fill-in-the-blank word suggestions
- Select random gif corresponding to the provided word via API call
- Render story with GIFs replacing the filled in words

#### PostMVP  

- Smooth, flashy transitions!
- Animated rainbow borders/buttons

## Priority Matrix

Check uploaded files! 

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Style Boilerplate | L | 2hrs|  |  |
| Create Logo | L | 0.75hrs|  |  |
| Navbar w/ Logo and github link | L | 1hrs|  |  |
| How-To Page | L | 3hrs|  |  |
| Post MVP Transitions | M | 2hrs|  |  |
| Post MVP Animated Rainbow styling | M | 2hrs|  |  |
| Import Madlibs | M | 1hrs|  |  |
| Event Listeners | M | 2hrs|  |  |
| Store API responses for use in finished story | M | 2hrs|  |  |
| API responses => DOM elements | H | 3hrs|  |  |
| Structuring API Calls | H | 3hrs|  |  |
| Testing | H | 3hrs|  |  |
| Style Finished Story w/ Inline GIFs | H | 2hrs|  |  |
| Structuring API Calls | H | 3hrs|  |  |
| Total | H | 29.75hrs|  |  |

## Code Snippet


## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
