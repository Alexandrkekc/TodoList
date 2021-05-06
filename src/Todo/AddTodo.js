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
function AddTodo({ onCreate }) {
  const [value, setValue] = useState('');
  const classes = useStyles();

  function submitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      onCreate(value);
      setValue('');
    }
  }

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <TextField
        id="standard-basic"
        label="Новая запись"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {/* <input value={value} onChange={(event) => setValue(event.target.value)} /> */}
      <Button type="submit">Добавить</Button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default AddTodo;
