# image-search-abstraction-layer
Image search abstraction layer for free code camp asdasd


 <h3>Image search input example</h3>
    <code>https://image-search-2017.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10</code>
    <h3>output will be</h3>
    <pre>
[
    {
        "url": "http://www.bajiroo.com/wp-content/uploads/2013/06/funny-lol-cats-fun-pics-images-photos-pictures-5.jpg",
        "snippet": "funny-lol-cats-fun-pics-images ...",
        "thumbnail": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUXCGnfYdIRdxb86GIz-VCaSsgmgG5uS27hMCq1IquRvSTd2zwQwtphXA",
        "context": "http://www.bajiroo.com/33-funniest-lolcats-ever"
    },
    {
        "url": "https://momentofzen.in/wp-content/uploads/2010/08/lolcat-funny-picture-moderator1.jpg",
        "snippet": "lolcat-funny-picture- ...",
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly4P_8NJmjHOGZGVetmT2Zv07JqigsieKo2z7xPB-ntfpwnb1uCFj6PE",
        "context": "https://www.momentofzen.in/2010/08/08/funneh-pickchaaaz/"
    },
    {
        "url": "http://img.scoop.it/f-tKCNgJWPoGzbrK5LCQhTl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9",
        "snippet": "... Lolcats - Funny Pictures ...",
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9YV7OVwpK4TQ2zyBx8ofWEawWFIAAtqJmYvhV96TI5FFE7jkIyH54to",
        "context": "http://www.scoop.it/t/pictures/p/1665736655/2012/04/25/lolcats-ohai-hooman-lolcats-funny-pictures-of-cats-i-can-has"
    },
    {
        "url": "http://cutedogpics.xyz/wp-content/uploads/2016/08/amusing-lol-cats-also-lolcats-funny-cat-pictures-300x300.jpg",
        "snippet": "... lolcats funny cat pictures",
        "thumbnail": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSBVA929eowQNiEHz8LkjxPfnylMzyZ0bw8eMwN1MWSBUGLaF3mibkSNw",
        "context": "http://cutedogpics.xyz/splendid-lol-cats/gorgeous-lol-cats-together-with-lolcats-funny-cat-pictures/"
    },
    {
        "url": "http://cdn.playbuzz.com/cdn/d68ef92c-3973-4b00-98c9-913e423d83ff/f9ec20e0-bb55-48b1-8789-bb51947e4d12.jpg",
        "snippet": "Whats a Summary of Your life?",
        "thumbnail": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRWWY7kdyrsQXsyW8fqoVs6_I-RwRm1BFpduC6imCrnbsbuT0Q5pmqrHrg",
        "context": "http://www.playbuzz.com/mikeyh10/whats-a-summary-of-your-life"
    },
    {
        "url": "http://data.whicdn.com/images/30552485/large.jpg",
        "snippet": "... this image include: funny, ...",
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UXgQjkCb9deD1Hqc_0ddZN1882K1r1Tf9vYGgqPC8d2AfbRLW0j8dH0u",
        "context": "http://weheartit.com/entry/group/13643171"
    },
    {
        "url": "https://i.ytimg.com/vi/8nOsEEBrEuA/hqdefault.jpg",
        "snippet": "LOLCats in All Fired Up lol ...",
        "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuWNpmeNmLlMNc0v32tK83j4eOrOPVS6M2kty-CVFzQTvbS9d9WdKfrg7E",
        "context": "https://www.youtube.com/watch?v=8nOsEEBrEuA"
    },
    {
        "url": "https://s-media-cache-ak0.pinimg.com/736x/65/93/7c/65937c3530f9be634e8a8a1236dd8b4b.jpg",
        "snippet": "LOL Cats | LOLCats - lol-cats: ...",
        "thumbnail": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEESibBh0ulGhoGfnCitjrw40Oh5TPc_1c4gKKfETDRVCttAIhX3wV6Dw",
        "context": "https://www.pinterest.com/pin/418764465326164976/"
    },
    {
        "url": "http://img.scoop.it/nCDfJ08MpKhEdCcEztDllTl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9",
        "snippet": "Lolcats - Funny Pictures of ...",
        "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSw9_jVXrQFer2E2yp2oqw4JdeWF89zGgUvj-9lez5sEzTR-SMFxtKR5w",
        "context": "http://www.scoop.it/t/crazy-cats/p/1664282889/2012/04/25/funny-video-funny-cats-fight-like-baby"
    },
    {
        "url": "http://data.whicdn.com/images/30552485/original.jpg",
        "snippet": "... Lolcats - Funny Pictures ...",
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHF8B1W285WcrXec7bQr2GZDG3F_ZZgPgrPekgN4linAgle7HG-yE6MEk",
        "context": "http://weheartit.com/entry/group/13643171"
    }
]
        </pre>
    <br>
    <h3>Image search input history example</h3>
    <code>https://image-search-2017.herokuapp.com/api/latest/imagesearch</code>
    <h3>Output will be</h3>
    <pre>
[
    {
        "term": "lolcats funny",
        "when": "2017-01-09T13:35:16.897Z"
    },
    {
        "term": "lolcats funny",
        "when": "2017-01-09T13:30:22.898Z"
    },
    {
        "term": "jjjjj",
        "when": "2017-01-09T12:56:04.551Z"
    },
    {
        "term": "lolcats funny",
        "when": "2017-01-09T12:55:53.356Z"
    },
    {
        "term": "lolcats funny",
        "when": "2017-01-09T12:50:29.775Z"
    },
    {
        "term": "lolcats funny",
        "when": "2017-01-09T12:49:50.333Z"
    },
    {
        "term": "lolcats funny",
        "when": "2017-01-09T12:49:47.087Z"
    },
    {
        "term": "lolcats funny",
        "when": "2017-01-09T12:49:41.478Z"
    },
    {
        "term": "lolcats funny",
        "when": "2017-01-09T12:45:37.944Z"
    },
    {
        "term": "lolcats funny",
        "when": "2017-01-09T12:45:26.906Z"
    }
]        
    </pre>
