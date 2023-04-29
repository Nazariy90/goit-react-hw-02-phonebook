import React from 'react';

class Filter extends React.Component {
  render() {
    const { filter, onFilterChange } = this.props;

    return (
      <>
        <h3>Find contacts by name</h3>
        <label>
          <input
            type="text"
            name="username"
            value={filter}
            onChange={onFilterChange}
          />
        </label>
      </>
    );
  }
}

export default Filter;
