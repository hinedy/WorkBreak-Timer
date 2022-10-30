# WorkBreak Timer
#### Video Demo: https://youtu.be/wGeOp5Id33k
#### Description: Improve productivity, Stay focused, and get things done using **WorkBreak Timer**.
A Chrome extension using JavaScript that enables you to set timers for Pomodoro-like cycles of work/break sessions.
## Features
 - Give your Work/Break session a unique name.
 - Specify the duration of both sessions *"25/5 by default"*.
 - Pause, resume and reset when needed.
 - See the log of completed sessions and their respective durations. 

## Functionality
**WorkBreak Timer** is a browser-based extension that uses chrome API to listen for clicks on the extension icon and create a popup window containing the timer.

JavaScript, HTML, and CSS are used to build this extension.

[ProgressBar.js](https://progressbarjs.readthedocs.io/en/latest/) is used to create a circle SVG path that displays current progress.

### How it works
When daunted by a huge task it's advised that you divide it into small tasks and address them one by one taking small breaks in between and every 4 small breaks you can take a longer break. 


After launching the extension by clicking on its icon you can:

- Decide on what task you're going to tackle.
- Set work and break timers
- Work on your task until the timer goes off
- now it's time for a small break.

- Repeat

## Folder Structure

    |   background.js  
    |   ding.mp3 
    |   icon.png    
    |   manifest.json   
    |   package-lock.json   
    |   package.json    
    |   popup.html  
    |   README.md   
    |   script.js   
    |   styles.css  
    |       
    \---node_modules    
## Design
It's mainly written in JavaScript, with a simple structure in HTML and a few CSS tweaks in appearance to give it a modern yet elegant look.

/background.js: contains the chrome.action.onClicked function which is responsible for creating and displaying the popup window.

/script.js: holds the content and core functionality of the extension. It contains declarations, event listeners, and functions. 

/popup.html: the skeleton of the extension:

Constructed by:
- a < div > that holds the timer and progress bar.
- inputs for task label and controller buttons.
- an unordered list containing session details updated by /script.js.



## Skills acquired & Topics researched 
- Time management  *"No Pun Intended"* 
- Better understanding of functional programming in JavaScript.
- JSON.
- Packages & npm

### References

- [Create a Pomodoro Clock with JavaScript (by AlbertoM)](https://dev.to/albertomontalesi/tutorial-create-a-pomodoro-clock-with-javascript-13om)
- [Chrome API Documentation](https://developer.chrome.com/docs/extensions/reference/)
- [ProgressBar.js Documentation ](https://progressbarjs.readthedocs.io/en/latest/)

### This Project is submitted as my final project for CS50’s Introduction to Computer Science Course.