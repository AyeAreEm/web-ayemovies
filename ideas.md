## API
    So before, I refactored my code to become more friendly to work with, which basically meant I had to make an internal api.
    But if I want to make a mobile app for this, I have to make an actual public api to use. Which means, anyone could use it.

## Problem
    - Making new routes will be basically repeating code with slight adjustments
    - It would be easier to say like `if (cors() == myMobileApp) { res.send(data) }`

## Solution
    - Make new routes but also keep the old routes.
        (not the most optimal solution, i will keep researching to find a better way)