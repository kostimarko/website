import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './button.css';

const StoreButton = props => {
  return (
    <Button
      ButtonType={props.ButtonType}
      href={
        'https://apps.apple.com/us/app/pumps-mens-gym-workouts/id1452027491?ls=1'
      }
    />
  );
};

StoreButton.propTypes = {
  ButtonType: PropTypes.string,
};

export default StoreButton;
