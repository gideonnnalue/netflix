import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";



import backImg from "../../resources/test.jpg";

const moviePreview = props => {
  let { original_title, original_name, vote_average, overview, backdrop_path, release_date } = props.data;
  console.log(props.data);
  return (
    <Card className="movie__card text-white" onClick={props.toggle}>
      <div
        style={{ backgroundImage: "url(http://image.tmdb.org/t/p/original" + backdrop_path + ")" }}
        className="movie__card--img"
      >
        <div className="movie__card--overlay p-3">
          <h3 className="movie__title">{original_title || original_name}</h3>
          <p className="text-bold movie__rating">{`${vote_average}/10`}</p>
          <p className="movie__desc">{overview}
          </p>
        </div>
      </div>
    </Card>
  );
};

// "http://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg";

export default moviePreview;
