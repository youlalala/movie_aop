import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const{
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //rating 별로 정렬 하기 위해 n?sort_by=rating"
    // const  movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);
    this.setState({ movies, isLoading:false });
  }

  componentDidMount(){
    this.getMovies();
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // }, 6000);
    
  }
  render(){
    const {isLoading, movies } = this.state; //state로부터 가져온다.
    return (
    //html에서 class는 class지만  js안에 있으면 component class에 의해 혼란스러워서 className로 한다.
    <section className="container"> 
      {isLoading 
      ? <div className="loader">
        <span className="loader__text">
        Loading..  
        </span>
        </div>
      : /*"We are ready"*/  (
        <div className="movies">
          {movies.map(movie => (
            <Movie 
              key={movie.id} //key prop
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image} 
              //장르 추가
              genres={movie.genres}
            />
            //props 가 필요, id year title summary poster
        ))}          
        </div>
      )}
    </section>
    );
  }
}
export default App;


