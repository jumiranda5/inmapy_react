// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Field } from 'formik';

// class SelectInput extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       key: 'city'
//     };
//   }

//   handleChange = (e) => {
//     console.log(e.target.value)
//   }

//   render() {

//     const { id, options, label, handleSelection } = this.props;

//     return (
//       <div className="select_input_container">
//         <label htmlFor={ id } className="input_label">
//           {label}
//         </label>
//         <Field
//           as="select"
//           onChange = { this.handleChange }
//           name={id} id={id}
//           className="input select_input">
//           {
//             options.map(option =>
//               <option
//                 key={option.key}
//                 value={option.key}>

//                 {option.value}

//               </option>)
//           }
//         </Field>
//       </div>
//     );
//   }
// }

// SelectInput.propTypes = {
//   id: PropTypes.string.isRequired,
//   options: PropTypes.array.isRequired,
//   label: PropTypes.object.isRequired,
//   handleSelection: PropTypes.func.isRequired
// };

// export default SelectInput;

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const SelectInput = props => {

  const { id, options, label, handleSelection } = props;

  const handleChange = (e) => {
    console.log(e.target.value);
    handleSelection(e.target.value);
  }

  return (

    <div className="select_input_container">
      <label htmlFor={ id } className="input_label">
        {label}
      </label>

      <Field
        onChange = { handleChange }
        as="select" name={id} id={id} className="input select_input">
        {
          options.map(option =>
            <option
              key={option.key}
              value={option.key}>

              {option.value}

            </option>)
        }
      </Field>
    </div>

  );
};

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.object.isRequired,
  handleSelection: PropTypes.func.isRequired
};

export default SelectInput;
