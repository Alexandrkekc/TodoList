import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      marginBottom: '1rem',
    },
  },
}));

function useTextFieldValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(''),
    value: () => value,
  };
}
function AddTodo({ onCreate }) {
  const classes = useStyles();
  const textField = useTextFieldValue('');

  function submitHandler(event) {
    event.preventDefault();

    if (textField.value().trim()) {
      onCreate(textField.value());
      textField.clear();
    }
  }

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <TextField id="standard-basic" label="Новая запись" {...textField.bind} />
      <Button type="submit">Добавить</Button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default AddTodo;
