import React from 'react';
import PropTypes from 'prop-types';
import IconBtn from '../Buttons/IconBtn';
import { icSearch } from '../../assets/icons';

const SearchInput = (props) => {

  const { placeholder, handleSubmit, isSubmitting, searchInput } = props;

  return (
    <form>
      <div className= "search_input_container flex-row">
        <label
          className = 'visually-hidden'
          htmlFor = "search">
          { placeholder }
        </label>

        <input
          className="input search_input"
          id = "search"
          name = "search"
          type="text"
          placeholder={ placeholder }
          onChange={ (e) => searchInput(e) } />

        <IconBtn
          ariaLabel = { placeholder }
          icon = { icSearch }
          btnStyle = 'input_btn icon_btn submit-btn'
          btnFunction = { handleSubmit }
          isSubmitting = { isSubmitting }
          icStyle = 'icon_button_icon' />

      </div>

    </form>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  searchInput: PropTypes.func.isRequired
};

export default SearchInput;
