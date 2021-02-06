import React from "react";
import "./Detail.css"
class Detail extends React.Component{
    componentDidMount(){
        console.log(this.props);
        const { location, history } =this.props;
        if(location.state === undefined){
            history.push("/");
        }

    }
    render(){
         const {location: {state}} = this.props;
         if (state){
            console.log("state는");
            console.log(state);
            return (
            <div className="movie_wrap">
                <img src={state.poster} alt={"movie_detail_image"}></img>
                <div class="movie_data">
                    <div className="movie_title"> 
                        {state.title}  
                    </div>
                    <div className="movie_year">
                        {state.year}
                    </div>
                    <div className="movie_genres">
                        {state.genres.map( //map에 있는 각각의 item은 key가 필요하다.
                        (genre, index) => 
                            <li key={index} className="genres__genre">
                                {genre}
                            </li> 
                        )}
                    </div>
                </div>
                <div className="movie_detail">
                    <div className="movie_summary">
                        {state.summary}
                    </div>
                </div>             
            </div>
            );
        } else{
            return null;
        }
        
    }
}
export default Detail;