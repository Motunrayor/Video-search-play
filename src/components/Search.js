import React from "react";

class Search extends React.Component {
  state = { text: "" };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onTextSubmit(this.state.text);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="search">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
