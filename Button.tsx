import React from 'react';
import styles from './Button.module.css';

type ButtonV2Props = {
  className?: string;
  destructive?: boolean;
  iconLeft?: string;
  iconLeft1?: boolean;
  iconRight?: boolean;
  iconRight1?: string;
  label?: string;
  loading?: boolean;
  size?: "Default" | "S";
  state?: "Default" | "Hover" | "Pressed" | "Disabled";
  type?: "Primary" | "Secondary" | "Tertiary";
};

const ButtonV2: React.FC<ButtonV2Props> = ({
  className,
  destructive = false,
  iconLeft = "Add",
  iconLeft1 = true,
  iconRight = true,
  iconRight1 = "Chevron-right",
  label = "Add",
  loading = false,
  size = "Default",
  state = "Default",
  type = "Primary"
}) => {
  const isDisabled = state === 'Disabled' || loading;
  const buttonClass = `${styles.button} ${size === 'S' ? styles.small : styles.default} ${styles[type.toLowerCase()]} ${styles[state.toLowerCase()]} ${destructive ? styles.destructive : ''} ${className || ''}`.trim();

  return (
    <button className={buttonClass} disabled={isDisabled} type="button">
      <div className={styles.content}>
        {iconLeft1 && (
          <div className={styles.icon}>
            <p>{iconLeft}</p>
          </div>
        )}
        <div className={styles.label}>
          <p>{label}</p>
        </div>
        {iconRight && (
          <div className={styles.icon}>
            <p>{iconRight1}</p>
          </div>
        )}
      </div>
    </button>
  );
};

export default ButtonV2;