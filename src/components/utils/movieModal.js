import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col
} from "reactstrap";

import poster from "../../resources/poster.jpg";

const movieModal = props => {

  let { original_title, original_name, vote_average, overview, poster_path, release_date, id, first_air_date } = props.data;

  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.toggle}
      className={props.className}
      size="lg"
      centered
    >
      <div className="container-fluid movie__modal">
        <Row>
          <Col sm="5">
            <img src={`http://image.tmdb.org/t/p/original${poster_path}`} alt="" />
          </Col>
          <Col>
          
          <ModalHeader toggle={props.toggle}>
            <div className="movie__modal--header">
              <div className="movie__modal--rating mr-3">{vote_average*10}<span style={{fontSize: "12px"}}>%</span></div>
              <div className="movie__modal--head mt-2">
                <h2>{original_name || original_title}</h2>
                <p>{release_date || first_air_date}</p>
              </div>
            </div>
            </ModalHeader>
            <div className="movie__modal--body">
              <hr />
              <p>
                {overview}
              </p>
            </div>
            <div className="movie__modal--footer">
              <ModalFooter><a href={`https://www.themoviedb.org/movie/${id}`}>Read more</a></ModalFooter>
            </div>
          </Col>
        </Row>
      </div>

      {/* <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adi  pisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
          </ModalFooter> */}
    </Modal>
  );
};

export default movieModal;
