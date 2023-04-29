import React from 'react';
import PropTypes from 'prop-types';

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

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
