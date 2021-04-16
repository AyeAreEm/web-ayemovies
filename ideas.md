## Viewing the movie / show
    So, the website redirects the user to where the actual video is being held.
    But it doesn't look great on mobile. It's alright with desktop so there is no need to change it there.

## Solution
    For tv shows on mobile,
        - When the episode button is clicked, get the preview image and replace it with an iframe with the src (with can be passed in as a parameter)

    For movies on mobile
        - When the preview img is clicked, replace it with an iframe with the src 
        - Maybe use a dataset on the img and get it from the function