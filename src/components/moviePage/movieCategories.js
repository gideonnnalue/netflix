import React, { Component } from "react";
import { Row, Col, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import MoviePreview from '../utils/moviePreview';
import MovieModal from '../utils/movieModal';

class movieCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      items: [1, 2, 3, 4, 5],
      position: 0
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(i) {

    if (!this.state.modal) {
      this.setState({
        position: i
      });
    } else {
      this.setState({
        position: 0
      });
    }
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    
  }

  render() {

    
    const { title, data } = this.props.items;

    const movieItems = this.state.items.map((item, i) => (
      <div className="mb-3 mr-2" key={i}>
        <MoviePreview data={data[i]} toggle={() => this.toggle(i)}/>
      </div>
    ));


    return (
      <div className="mx-5 preview ">
          <h2 className="text-white font-weight-bold" style={{fontSize: "24px"}}>{title}</h2>
          <div className="preview__items">
            {movieItems}
          </div>
          <MovieModal toggle={this.toggle} isOpen={this.state.modal} data={data[this.state.position]}/>
      </div>
    );
  }
}

export default movieCategories;
