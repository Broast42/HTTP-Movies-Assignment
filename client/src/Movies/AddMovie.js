import React, { useState } from 'react';

const AddMovie = (props) => {
    const initalState = {
        title: '',
        director: '',
        metascore: '',
        stars: [],
    }

    const [add, setAdd] = useState(initalState);

    const handleChange = e => {
        setAdd({
            ...add,
            [e.target.name]: e.target.value
        });
    }

    const handleChangeStars = e => {
        setAdd({
            ...add,
            stars: [ ...add.stars, e.target.value ]
        })

    }

    console.log(add);

    return(
        <div className="App">
            <form onSubmit={(e) => {e.preventDefault(); props.addMovie(add, props)}}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                /> 

                <input
                    type="text"
                    name="director"
                    placeholder="Director"
                    onChange={handleChange}
                /> 

                <input
                    type="text"
                    name="metascore"
                    placeholder="metascore"
                    onChange={handleChange}
                /> 

                <input
                    type="text"
                    name="stars"
                    placeholder="Staring"
                    onChange={handleChangeStars}
                />

                <input
                    type="text"
                    name="stars"
                    placeholder="Staring"
                    onChange={handleChangeStars}
                /> 

                <input
                    type="text"
                    name="stars"
                    placeholder="Staring"
                    onChange={handleChangeStars}
                /> 

                <button type='submit'>Add Movie</button>  
            </form>
        </div>
    );
};

export default AddMovie;