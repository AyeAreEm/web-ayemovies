const express = require('express');
let router = express.Router();

const horror = [
    {title: "It", link: "Horror/Movies/It", smallImg: "https://img.vxdn.net/poster/200/it-21815.jpg", bigImg: "https://img.vxdn.net/cover/1440/it-21815.jpg", src: "https://player.voxzer.org/view/1727642b04f68550bc5005e0", desc: "Seven helpless and bullied children are forced to face their worst nightmares when Pennywise, a shape-shifting clown, reappears. The clown, an ancient evil torments children before feeding on them.", genre: "Horror, Thriller"},
    {title: "It Chapter Two", link: "Horror/Movies/It2", smallImg: "https://img.vxdn.net/poster/200/it-chapter-two-29547.jpg", bigImg: "https://img.vxdn.net/cover/1440/it-chapter-two-29547.jpg", src: "https://vidembed.net/streaming.php?id=MjgxMjE4&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "After 27 years, the Losers Club receive a call from their friend Mike Hanlon that Pennywise is back. They decide to honour their promise and return to their old town to end the evil clown for good.", genre: "Horror, Thriller"},
    {title: "A Quiet Place", link: "Horror/Movies/A-Quiet-Place", smallImg: "https://img.vxdn.net/poster/200/a-quiet-place-24429.jpg", bigImg: "https://img.vxdn.net/cover/1440/a-quiet-place-24429.jpg", src: "https://vidembed.net/streaming.php?id=MTc4ODc4&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "the plot revolves around a father and a mother who struggle to survive and raise their children in a post-apocalyptic world inhabited by blind monsters with an acute sense of hearing.", genre: "Horror, Sci-Fi"},
    {title: "A Quiet Place Part II", link: "Horror/Movies/A-Quiet-Place-2", smallImg: "https://img.vxdn.net/poster/200/a-quiet-place-part-ii-1621869026.jpg", bigImg: "https://img.vxdn.net/cover/1440/a-quiet-place-part-ii-1621869026.jpg", src: "https://player.voxzer.org/view/5ae5572f915e4c0607ca260d", desc: "Following the deadly events at home, the Abbott family must now face the terrors of the outside world as they continue their fight for survival in silence. Forced to venture into the unknown, they quickly realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.", genre: "Horror, Thriller"},
    {title: "Split", link: "Horror/Movies/Split", smallImg: "https://img.vxdn.net/poster/200/split-19131.jpg", bigImg: "https://img.vxdn.net/cover/1440/split-19131.jpg", src: "https://player.voxzer.org/view/db70690d0714b6f62ab9b5e0", desc: "Kevin, who is suffering from dissociative identity disorder and has 23 alter egos, kidnaps three teenagers. They must figure out his friendly personas before he unleashes his 24th personality.", genre: "Horror, Thriller"},
    {title: "The Invisible Man", link: "Horror/Movies/The-Invisible-man", smallImg: "https://img.vxdn.net/poster/200/the-invisible-man-100519.jpg", bigImg: "https://img.vxdn.net/cover/1440/the-invisible-man-100519.jpg", src: "https://vidembed.net/streaming.php?id=MzEwNjkw&cover=Y292ZXIvZW1pbGlvLXBhbGFjaW9zLnBuZw==", desc: "Cecilia's abusive ex-boyfriend fakes his death and becomes invisible to stalk and torment her. She begins experiencing strange events and decides to hunt down the truth on her own.", genre: "Horror, Thriller"},
    {title: "Candyman", link: "Horror/Movies/Candyman", smallImg: "https://img.vxdn.net/poster/200/candyman-1627222816.jpg", bigImg: "https://img.vxdn.net/cover/1440/candyman-1627222816.jpg", src: "https://player.voxzer.org/view/a9f5572f915e4c088735b614", desc: "For decades, the housing projects of Chicago's Cabrini-Green were terrorized by a ghost story about a supernatural, hook-handed killer. In present day, an artist begins to explore the macabre history of Candyman, not knowing it would unravel his sanity and unleash a terrifying wave of violence that puts him on a collision course with destiny.", genre: "Horror, Thriller"},
    {title: "Scream (2022)", link: "Horror/Movies/Scream-2022", smallImg: "https://img.vxdn.net/poster/200/scream-1630852570.jpg", bigImg: "https://img.vxdn.net/c-max/1200/scream-1630852570.jpg", src: "https://player.voxzer.org/view/10c75894253fb98331e7e620", desc: "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, Calif., a new killer dons the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town's deadly past.", genre: "Horror, Thriller"}
]

router.get('/', (req, res) => {
    res.send(horror);
});

router.get('/Shows/:id', (req, res) => {
    try {
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
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

router.get('/Movies/:id', (req, res) => {
    try {
        const foundIndex = horror.findIndex((item) => {
            return item.link === `Horror/Movies/${req.params.id}`
        });
    
        res.render('movies', {
            title: horror[foundIndex].title,
            src: horror[foundIndex].src,
            img: horror[foundIndex].bigImg,
            desc: horror[foundIndex].desc,
            genre: horror[foundIndex].genre
        });
    } catch (err) {
        res.render('error', {
            error: "Sorry, we weren't able find your request. Make sure you only use the image links instead of directly typing a url."
        });
    }
});

module.exports = {router: router, horror: horror};