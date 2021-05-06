import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '2px solid black',
    borderRadius: '4px',
    marginBottom: '.5rem',
    fontSize: '18px',
  },
  input: {
    marginRight: '1rem',
  },
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push('done');
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{++index}</strong>
        &nbsp;
        {todo.title}
      </span>
      <IconButton aria-label="delete" onClick={() => removeTodo(todo.id)}>
        <DeleteIcon />
      </IconButton>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
