import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import Update from "./Movies/Update";
import AddMovie from "./Movies/AddMovie"
import axios from 'axios';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response));
  };

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    getMovieList();
  }, [isUpdate]);

  const movieUpdate = (id, item, props) => {
    axios
        .put(`http://localhost:5000/api/movies/${id}`, item)
        .then(res=>{
          console.log(res);
          isUpdate ? setIsUpdate(false): setIsUpdate(true);
          props.history.push(`/`);
          

        })
        .catch(err => {
          console.log(err);
        });

  };

  const deleteMovie = (id, props) => {
    axios
      .delete(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        isUpdate ? setIsUpdate(false): setIsUpdate(true);
        props.history.push(`/`);  
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addMovie = (movie, props) => {
    axios
      .post(`http://localhost:5000/api/movies`, movie)
      .then(res => {
        isUpdate ? setIsUpdate(false): setIsUpdate(true);
        props.history.push(`/`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Route exact path="/"
        render = { props => (
          <MovieList {...props} movies={movieList} />
        )}
        
      />

      <Route path="/movies/:id"
        render = { props => (
          <Movie {...props} addToSavedList={addToSavedList} delete={deleteMovie} />
        )}
        
      />

      <Route exact path="/update-movie/:id"
        render = {props => (
          <Update {...props} movies={movieList} movieUpdate={movieUpdate} />
        )}
      />

      <Route exact path="/add-movie/"
        render = {props => (
          <AddMovie {...props} addMovie={addMovie} />
        )}
      />
    </div>
  );
};

export default App;
