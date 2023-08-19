            //  making array of objects and then fetching 

const marvel = [
    { id:1, 
    imgsrc :"https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
    title :"Iron Man ",
    desc :"Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[a] it is the first film in the Marvel Cinematic Universe (MCU). ",
    },
    { id:2, 
        imgsrc :"https://upload.wikimedia.org/wikipedia/en/f/f0/The_Incredible_Hulk_%28film%29_poster.jpg",
        title :"The_Incredible_Hulk",
        desc:"The Incredible Hulk is a 2008 American superhero film based on the Marvel Comics character the Hulk. Produced by Marvel Studios and distributed by Universal Pictures,[a] it is the second film in the Marvel Cinematic Universe (MCU).",
    },
    { id:3,
        imgsrc :"https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg",
        title :"",
        desc : "https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg",

    },
    { id:4,
        imgsrc :"https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg",
        title :"Iron Man 2",
        desc : "Iron Man 2 is a 2010 American superhero film based on the Marvel Comics character Iron Man. Produced by Marvel Studios and distributed by Paramount Pictures,[a] it is the sequel to Iron Man (2008) and the third film in the Marvel Cinematic Universe (MCU). ",

    }
    // { id:
    //     imgsrc :"",
    //     title :"",
    //     desc : "",

    // }
]



    marvel.map((movie) =>{
        console.log(`ID: ${movie.id}`);
        console.log(`Image: ${movie.imgsrc}`);
        console.log(`Title: ${movie.title}`);
        console.log(`Desc: ${movie.desc}`);
    })
    
    




















