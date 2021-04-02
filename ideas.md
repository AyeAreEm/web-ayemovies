## API
    So before, I refactored my code to become more friendly to work with, which basically meant I had to make an internal api.
    But if I want to make a mobile app for this, I have to make an actual public api to use. Which means, anyone could use it.

## Problem
    - Making new routes will be basically repeating code with slight adjustments
    - It would be easier to say like `if (cors() == myMobileApp) { res.send(data) }`

## Solution
    - Make new routes but also keep the old routes.
        (not the most optimal solution, i will keep researching to find a better way)
    

## Report a bug
    Have a user friendly way for someone to report a bug within the website.

## Solution
    Well I have three ideas.

    1. Have them send through email to my account (they do not need to sign in, it could just use like a ten-min account to send me the description of the bug)
    2. Make an internal system where the bug description is saved to a database that then can be seen by going to /issues
    3. Make my repo public and have them write an issue in the issue section.

    Not too sure which one I will use.

## App
    I want to make an app that anyone can use without the need of installing from an app store.
    
## Solution
    - I make a react native app and share it through QR code. BUT, I am not sure if this would work because it might need a server to be continuously running
     
     OR

     - Make the website a PWA. This would alway me to just write a manifest and service worker file, which means I don't have to start from scratch.
     - This might be a hassle because my entire website needs wifi but the app should be able to load offline.
     - Meaning I would have to do a lot of fetch request and etc. in the service worker.