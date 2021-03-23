## Lazy Loading
    - When loading the images and links on the home page, I load them all at the same time.
    - For now, this is fine but eventually, it won't scale

## Problems
    1. For the search suggestions, I use the data sent from the backend but if not all the data is loaded then not all the suggestions will exist.
    2. Selecting a category won't be possible because when loading new data, I need to make a whole new category with the id as well. but if the data isn't loaded in, the category select won't have all the categories.

## Solution
    - When there is only one category showing, only get the data for that category
    - Then when the user scrolls down and reaches a new category, get the data for that category

    OR

    - use an observer and observe an element on the bottom of the page.
    - if half of the element is in view, call a fetch request for more data (e.g. dc, netflix, etc.) 

    - send a fetch request when user reaches the (example) dc id to /DC
    - then on that get request, send back the data for dc and load it into the frontend
    - so for backend,
        ```javascript
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