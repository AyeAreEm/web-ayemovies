# AyeMovies

## Make a "best matches" page
    - When a user enters in a movie or tv show into the search bar but doesn't fully match the spelling of the title
    - Usually, it would go to '/{misspelledWord}' and throw a 404 error

## Solution
    - Make an app.get('/:id')
    - get the id and run an algorithm to compare the id to the title names of every movie or tv show
    - then send the most likely ones back to the web page with a res.render("matches", likelyItems);


## Change routes
    - I have hard coded each route for each movie and tv show
    - in the long run, this makes it very hard to scale

## Solution
    - Make a route for each category. e.g. route for marvel, dc, star wars
    - on the get in for example marvel, check the id and compare it to the titles in marvel
    - so 
        ```js
        app.get('/Marvel/Movies/:id', (req, res) => {
            // get the id and compare to the list of marvel movies and shows
            // once it finds a match, return and save it to a variable (like foundItem)
            res.render('dynamic', {
                // then send the needed info
            })
        })

        app.get('/Marvel/Shows/:id', (req, res) => {
            // get the id and compare to the list of marvel movies and shows
            // once it finds a match, return and save it to a variable (like foundItem)
            res.render('shows', {
                // then send the needed info
            })
        })
        ```


## Lazy Loading
    - When loading the images and links on the home page, I load them all at the same time.
    - For now, this is fine but eventually, it won't scale

## Solution
    - When there is only one category showing, only get the data for that category
    - Then when the user scrolls down and reaches a new category, get the data for that category

    - send a fetch request when user reaches the (example) dc id to /DC
    - then on that get request, send back the data for dc and load it into the frontend
    - so for backend,
        ```js
        app.get('/DC', (req, res) => {
            res.send(dc: dcRoute.dc)
        })
        ```
    - and for frontend,
        ```ejs
        <% const dc = fetch('/DC')%> // or something like that
        <% dc.forEach(item => {%>
            <a href="<= item.link %%>"><img src="<%= item.smallImg%>"></img></a> // again, something like that
        <%})%>
        ```