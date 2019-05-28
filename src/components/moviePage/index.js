import React, { Component } from "react";
import Featured from "./featured";
import MovieCategories from "./movieCategories";
import axios from "axios";

class MoviePage extends Component {
  state = {
    items: [
      {
        title: "Top Movies this week",
        data: []
      },
      {
        title: "Most Popular Movies",
        data: []
      },
      {
        title: "Most Popular Tv Shows",
        data: []
      },
      {
        title: "2018 Most Popular Movies",
        data: []
      },
      {
        title: "Comedy magic",
        data: []
      }
    ]
  };

  loadData() {

    axios
      .all([
        axios.get(
          "https://api.themoviedb.org/3/trending/movie/week?api_key=57990760b68a8d988e6ffb38cc7fadcf"
        ),
        axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=57990760b68a8d988e6ffb38cc7fadcf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        ),
        axios.get(
          "https://api.themoviedb.org/3/discover/tv?api_key=57990760b68a8d988e6ffb38cc7fadcf&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"
        ),
        axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=57990760b68a8d988e6ffb38cc7fadcf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2018"
        ),
        axios.get(
          "https://api.themoviedb.org/3/trending/movie/week?api_key=57990760b68a8d988e6ffb38cc7fadcf"
        )
      ])
      .then(
        axios.spread(
          (topMovies, popularMovies, popularTv, popular2018, comedy) => {            
            let oldState = this.state.items;      
            oldState[0].data = topMovies.data.results.splice(0, 5);
            oldState[1].data = popularMovies.data.results.splice(0, 5);
            oldState[2].data = popularTv.data.results.splice(0, 5);
            oldState[3].data = popular2018.data.results.splice(0, 5);
            oldState[4].data = comedy.data.results.splice(0, 5);

            this.setState({
                items: oldState
            });

            console.log(this.state)
          }
        )
      )
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {

    let movieCategory;

    if (!(this.state.items[0].data.length < 1)){
      movieCategory = this.state.items.map((item, i) =>
      <div className="mb-5" key={i}>
        <MovieCategories items={this.state.items[i]} />
      </div>
    );
    } else {
      movieCategory = (
        <div className="text-white font-weight-bold ml-5">
          Loading Movie Data...
        </div>
      );
    }
    

    return (
      <div className="moviePage">
        <Featured />
        {movieCategory}
      </div>
    );
  }
}

export default MoviePage;
