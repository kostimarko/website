import React from 'react';
import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';
import { Button } from './modal.css';

import '@reach/dialog/styles.css';

const Modal = ({ children, onClose, showDialog }) => {
  return (
    <div>
      <Dialog isOpen={showDialog} onDismiss={() => onClose()}>
        <div>{children}</div>
        <div>
          <Button onClick={() => onClose()}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>Close</span>
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default Modal;
