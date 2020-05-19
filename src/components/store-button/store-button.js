import React from 'react';
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

export default StoreButton;
