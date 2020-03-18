import React, { useState, useEffect} from "react";


const Update = (props) => {

    const id = props.match.params.id;
    const [item, setItem] = useState({});
    const [edit, setEdit] = useState({});

    useEffect(() =>{
        const updateItem = props.movies.find(x => {
            return `${x.id}` === id;
        })
        if(updateItem) {
            setItem(updateItem);
            setEdit(updateItem);
        }

    },[props.movies, id]);

    const handleChange = e => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        });
    }

    const handleChangeStars = e => {
        setEdit({
            ...edit,
            stars: { ...edit.stars, [e.target.name]: e.target.value}
        })

    }

    

    console.log(edit);

    return(
        <div className="form">
            <form onSubmit={(e) => {e.preventDefault(); props.movieUpdate(id, edit, props)}}>

                <div className="formHeader">
                    <h4>Update {item.title}</h4>
                </div>

                <div className='formContent'>
                    <span>Title:</span>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder={item.title} 
                        defaultValue={item.title || '' }
                        onChange={handleChange} 
                    />

                    <span>Director:</span>
                    <input 
                        type="text" 
                        name="director" 
                        placeholder="director" 
                        defaultValue={item.director || ''}
                        onChange={handleChange}  
                    />

                    <span>Metascore:</span>
                    <input 
                        type="text" 
                        name="metascore" 
                        placeholder="metascore" 
                        defaultValue={item.metascore || ''} 
                        onChange={handleChange} 
                    />
                    
                    <span>Stars:</span>
                    {item.stars ? item.stars.map((x,i)=>(
                        <input
                            key={i} 
                            type="text" 
                            name={i} 
                            placeholder="stars" 
                            defaultValue={x || ''}
                            onChange={handleChangeStars} 
                        />
                        
                    )): null }

                    <button type="submit">Submit changes</button>
                </div>
            </form>
        </div>
    );
};

export default Update;