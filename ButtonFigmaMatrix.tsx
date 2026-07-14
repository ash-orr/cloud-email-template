import React from 'react';
import Button from './Button';
import styles from './ButtonFigmaMatrix.module.css';

type ButtonType = 'Primary' | 'Secondary' | 'Tertiary';
type ButtonState = 'Default' | 'Hover' | 'Disabled';

const states: ButtonState[] = ['Default', 'Hover', 'Disabled'];

const ButtonFigmaMatrix: React.FC = () => {
  const renderGroup = (type: ButtonType) => (
    <div className={styles.group}>
      {states.map((state) => (
        <div className={styles.row} key={`${type}-${state}`}>
          <Button
            destructive={false}
            iconLeft="+"
            iconLeft1
            iconRight
            iconRight1="›"
            label="Add"
            state={state}
            type={type}
          />
          <Button
            destructive
            iconLeft="+"
            iconLeft1
            iconRight
            iconRight1="›"
            label="Add"
            state={state}
            type={type}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.canvas}>
      {renderGroup('Primary')}
      {renderGroup('Secondary')}
      {renderGroup('Tertiary')}
    </div>
  );
};

export default ButtonFigmaMatrix;
