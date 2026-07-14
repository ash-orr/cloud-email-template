import React from 'react';
import styles from './Logo.module.css';

const imgProperty1IconVersionOld = "https://www.figma.com/api/mcp/asset/5e016823-7c5b-4847-bce0-994a26ea3827";
const imgPortnoxMidnightTransparentBg1 = "https://www.figma.com/api/mcp/asset/2909135e-c57f-4da1-bd23-5c8386baed87";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/316776c5-9be4-4d38-93d0-d741d56c76c1";

type LogoProps = {
  className?: string;
  property1?: "New full" | "Full" | "Icon";
  version?: "Old" | "New" | "New (SVG)";
};

const Logo: React.FC<LogoProps> = ({ className, property1 = "Icon", version = "Old" }) => {
  const isFullAndOld = property1 === "Full" && version === "Old";
  const isIconAndNewSvg = property1 === "Icon" && version === "New (SVG)";
  const isIconAndOld = property1 === "Icon" && version === "Old";

  const containerClass = `${styles.logo} ${isFullAndOld ? styles.fullOld : isIconAndNewSvg ? styles.iconNewSvg : isIconAndOld ? styles.iconOld : styles.newFull} ${className || ''}`.trim();

  return (
    <div className={containerClass}>
      {property1 === "Icon" && ["Old", "New (SVG)"].includes(version) && (
        <div className={isIconAndNewSvg ? styles.iconContainerNew : styles.iconContainer}>
          <img alt="" className={isIconAndNewSvg ? styles.iconImageNew : styles.iconImage} src={isIconAndNewSvg ? imgEllipse1 : imgProperty1IconVersionOld} />
        </div>
      )}
      {property1 === "New full" && version === "New" && (
        <div className={styles.newFullContainer}>
          <img alt="" className={styles.newFullImage} src={imgPortnoxMidnightTransparentBg1} />
        </div>
      )}
      {isFullAndOld && <img alt="" className={styles.fullOldImage} src={imgProperty1IconVersionOld} />}
    </div>
  );
};

export default Logo;