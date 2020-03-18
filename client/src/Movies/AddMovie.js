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
        <div className="form">
            <form onSubmit={(e) => {e.preventDefault(); props.addMovie(add, props)}}>
                <div className="formHeader">
                    <h4>Add a Movie</h4>
                </div>

                <div className="formContent">
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

                    <div>
                        <button type='submit'>Add Movie</button>
                    </div>
                    

                </div>  
            </form>
        </div>
    );
};

export default AddMovie;