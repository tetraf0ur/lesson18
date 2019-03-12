import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Card from '../components/Card'
const Heading = styled.h2`
  color: red;
  font-style: italic;
  text-transform: uppercase;
  `;

class HomePage extends Component {
  state = {};
  inputRef = React.createRef();
  formRef = React.createRef();
  h1Ref = React.createRef();

  componentDidMount() {
    console.log(this);

    setTimeout(() => {
      this.inputRef.current.focus();
    }, 0);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.formRef.current.reset();
  };

  render() {
    return (
      <React.Fragment>
        <h1>asdasdasdasdasdasdasdasdasd</h1>
        <Heading>самый красивый заголовок №2</Heading>
        <form
          onSubmit={this.handleSubmit}
          className="form-inline"
          ref={this.formRef}
        >
          <div className="form-group">
            <input
              placeholder="text"
              className="form-control mr-2"
              ref={this.inputRef}
            />
          </div>
          <div className="form-group">
            <input placeholder="name" className="form-control mr-2" />
          </div>
          <div className="form-group">
            <input
              placeholder="age"
              type="number"
              className="form-control mr-2"
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            send
          </button>
        </form>
        <Card price={100}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    //..
  };
};
export default connect(
  mapStateToProps,
  {}
)(HomePage);
