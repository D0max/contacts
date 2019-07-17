import React from 'react';
import FormControl from '@material-ui/core/FormControl/FormControl';
import Input from '@material-ui/core/Input/Input';
import propTypes from 'prop-types';

const Form = ({
  title, type, value, name, onChange,
}) => (
  <>
    <FormControl>
      <label>
        <span>
          { title }
:
          {' '}
        </span>
        <Input type={type} value={value} name={name} onChange={onChange} />
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
