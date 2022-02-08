import { useState, useEffect } from 'react'

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            { id: 1, title: "the dog" },
            { id: 2, title: "the dog" },
            { id: 3, title: "the dog" },
            { id: 4, title: "the dog" }
        ]);
    }, 1500);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            { idTV: 1, watchCount: 42 },
            { idTV: 2, watchCount: 50 },
            { idTV: 3, watchCount: 63 },
            { idTV: 4, watchCount: 70 }
        ]);
    }, 1500);
});

export default function PromiseAll() {
    const [movies, setMovies] = useState({})

    useEffect(() => {
        Promise.all([promise1, promise2]).then((data) => {
            setMovies(data[1].map((watch) => (
                {
                    [watch.idTV]: watch.watchCount
                }
            )))
        })
    }, [])

    console.log(movies)

    return (
        <div>hello</div>
    )
}