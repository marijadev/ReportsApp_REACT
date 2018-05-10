import React, { Component, Fragment } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }

    handleChange = (event) => {
        const inputValue = event.target.value;
        this.props.searchParams(inputValue);
        this.setState({inputValue: inputValue});
    }

  render() {
    return (
      <Fragment>
        <div className="search-btn-holder">
            <input id="search-input" type="text" placeholder="Search" onChange={this.handleChange} value={this.state.inputValue} />
        </div>
      </Fragment>
    )
  }
}

export {Search}
