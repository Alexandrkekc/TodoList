import React from 'react';
import './Modal.css';
import Button from '@material-ui/core/Button';

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <Button
          variant="contained"
          onClick={() => this.setState({ isOpen: true })}
        >
          Open modal
        </Button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Modal title</h1>
              <p>Modal text</p>
              <Button
                variant="contained"
                onClick={() => this.setState({ isOpen: false })}
              >
                Close modal
              </Button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
