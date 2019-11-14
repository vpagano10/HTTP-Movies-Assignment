import React, { useState, useEffect } from 'react';
import axios from 'axios'

function MovieUpdate(props) {
    const [movie, setMovie] = useState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars: ''
    })

    useEffect(() => {
        axios
            .get(`/api/movies/${props.match.params.id}`)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => {
                console.log('Error with update', err)
            })
    }, [props.match.params.id])

    const handleChange = (event) => {
        setMovie({
            ...movie,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put(`/api/movies/${props.match.params.id}`, movie)
            .then(res => {
                props.history.push('/')
            })
            .catch(err => {
                console.log('Error with put req', err)
            })
    }

    return (
        <>
            <h1>Update Movie</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    placeholder='title'
                    value={movie.title}
                    onChange={handleChange}
                /><br />
                <input
                    type='text'
                    name='director'
                    placeholder='director'
                    value={movie.director}
                    onChange={handleChange}
                /><br />
                <input
                    type='text'
                    name='metascore'
                    placeholder='metascore'
                    value={movie.metascore}
                    onChange={handleChange}
                /><br />
                <input
                    type='text'
                    name='stars'
                    placeholder='stars'
                    value={movie.stars}
                    onChange={handleChange}
                /><br />
                <button type='submit'>Save</button>
            </form>
        </>
    );
};

export default MovieUpdate;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// export default function UpdateForm(props) {
//    const [movie, setMovie] = useState({
//        id: "",
//        tittle: "",
//        director: "",
//        metascore: "",
//        stars: []
//    });
//    useEffect(() => {
//        axios.get(`/api/movies/${props.match.params.id}`)
//            .then((response) => {
//                console.log(response.data)
//                setMovie(response.data)
//            })
//    }, [props.match.params.id])
//    const handleChange = (e) => {
//        setMovie({ ...movie, [e.target.name]: e.target.value })
//    }
//    const handleStars = (e) => {
//        setMovie({
//            ...movie,
//             stars: [e.target.value]
//        })
//     }
//    const handleSubmit = (e) => {
//        e.preventDefault();
//        console.log(movie)
//        axios.put(`/api/movies/${props.match.params.id}`, movie)
//            .then(res => {
//                console.log(res);
//                setMovie({
//                    id: "",
//                    tittle: "",
//                    director: "",
//                    metascore: "",
//                    stars: []
//                });
//                props.history.push("/");
//            })
//            .catch(error => {
//                console.log(error);
//            })
//    }
//    return (
//        <div className="save-wrapper">
//            <h1>Update your Movie</h1>
//            <form onSubmit={handleSubmit}>
//                <label>Title:</label>
//                <input type="text"
//                    placeholder="Title"
//                    name="title"
//                    value={movie.title}
//                    onChange={handleChange}
//                />
//                <br />
//                <label>Director:</label>
//                <input type="text"
//                    placeholder="Director"
//                    name="director"
//                    value={movie.director}
//                    onChange={handleChange} />
//                <br />
//                <label>Meta-Score:</label>
//                <input type="text"
//                    placeholder="Meta score"
//                    name="metascore"
//                    value={movie.metascore}
//                    onChange={handleChange} />
//                <br /><label>Stars:</label>
//                <input
//                    type='text'
//                    name='stars'
//                    placeholder='stars'
//                    value={movie.stars}
//                    onChange={handleStars}
//                />
//                <button>Update</button>
//            </form>
//        </div>
//    )
// }