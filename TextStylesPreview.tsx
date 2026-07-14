import React from 'react';
import textStyles from './textStyles.module.css';
import styles from './TextStylesPreview.module.css';

const TextStylesPreview: React.FC = () => {
  return (
    <section className={styles.preview} data-node-id="2100:410">
      <p className={`${styles.text} ${textStyles.bodyDefault}`} data-node-id="2100:411">
        Text - Default
      </p>
      <p className={`${styles.text} ${textStyles.bodySemibold}`} data-node-id="2100:412">
        Text - SemiBold
      </p>
      <p className={`${styles.text} ${textStyles.bodyBold}`} data-node-id="2100:413">
        Text - Bold
      </p>
      <p className={`${styles.text} ${textStyles.bodyHoverable}`} data-node-id="2100:414">
        Text - Hoverable
      </p>
      <p className={`${styles.text} ${textStyles.smallDefault}`} data-node-id="2100:415">
        Text - Description - Default
      </p>
      <p className={`${styles.text} ${textStyles.smallSemibold}`} data-node-id="2100:416">
        Text - Description - SemiBold
      </p>
      <p className={`${styles.text} ${textStyles.tabs}`} data-node-id="2100:417">
        Text - TABS
      </p>
      <p className={`${styles.text} ${textStyles.h1}`} data-node-id="2100:418">
        H1
      </p>
      <p className={`${styles.text} ${textStyles.h2}`} data-node-id="2100:419">
        H2
      </p>
      <p className={`${styles.text} ${textStyles.h3}`} data-node-id="2100:420">
        H3
      </p>
    </section>
  );
};

export default TextStylesPreview;
