const express = require('express');
let router = express.Router();

const horror = [
    {title: "It", link: "Horror/Movies/It", smallImg: "https://img.vxdn.net/poster/200/it-21815.jpg", bigImg: "https://img.vxdn.net/cover/1440/it-21815.jpg", src: "https://player.voxzer.org/view/1727642b04f68550bc5005e0", desc: "Seven helpless and bullied children are forced to face their worst nightmares when Pennywise, a shape-shifting clown, reappears. The clown, an ancient evil torments children before feeding on them.", genre: "Horror, Thriller"},
    {title: "It Chapter Two", link: "Horror/Movies/It2", smallImg: "https://img.vxdn.net/poster/200/it-chapter-two-29547.jpg", bigImg: "https://img.vxdn.net/cover/1440/it-chapter-two-29547.jpg", src: "https://vidnext.net/streaming.php?id=MjgxMjE4", desc: "After 27 years, the Losers Club receive a call from their friend Mike Hanlon that Pennywise is back. They decide to honour their promise and return to their old town to end the evil clown for good.", genre: "Horror, Thriller"}
]

router.get('/Shows/:id', (req, res) => {
    const foundIndex = horror.findIndex((item) => {
        return item.link === `Horror/Shows/${req.params.id}`
    });

    res.render('shows', {
        title: horror[foundIndex].title,
        img: horror[foundIndex].bigImg,
        desc: horror[foundIndex].desc,
        genre: horror[foundIndex].genre,
        eps: horror[foundIndex].eps,
        seasons: horror[foundIndex].seasons ? horror[foundIndex].seasons : null
    });
});

router.get('/Movies/:id', (req, res) => {
    const foundIndex = horror.findIndex((item) => {
        return item.link === `Horror/Movies/${req.params.id}`
    });

    res.render('dynamic', {
        title: horror[foundIndex].title,
        src: horror[foundIndex].src,
        img: horror[foundIndex].bigImg,
        desc: horror[foundIndex].desc,
        genre: horror[foundIndex].genre
    });
});

module.exports = {router: router, horror: horror};