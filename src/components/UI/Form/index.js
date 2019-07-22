import React from 'react';
import FormControl from '@material-ui/core/FormControl/FormControl';
import Input from '@material-ui/core/Input/Input';
import propTypes from 'prop-types';

const Form = ({
  title, type, value, name, onChange,
}) => (
  <>
    <FormControl className="formControl">
      <label className='labelForm'>
        <span className="spanForm">
          { title }
:
          {' '}
        </span>
        <Input className="formInput" type={type} value={value} name={name} onChange={onChange} />
      </label>
    </FormControl>
  </>
);

Form.defaultProps = {
  title: 'Anonymous',
  type: 'text',
};
Form.propTypes = {
  title: propTypes.oneOfType([
    propTypes.string,
    propTypes.any.isRequired,
  ]),
  type: propTypes.string,
  value: propTypes.string,
  name: propTypes.string,
};

export default Form;
