// @flow
import * as React from 'react';

import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    color?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconStar = ({ className = '', color = '#979797', height = 14, title, width = 14 }: Props) => (
    <AccessibleSVG className={`icon-star ${className}`} height={height} title={title} viewBox="0 0 14 14" width={width}>
        <path
            className="stroke-color"
            d="M7 10.5l-4.114 2.163.785-4.58L.344 4.836l4.6-.67L7 0l2.057 4.168 4.6.67L10.33 8.08l.784 4.58z"
            fill="none"
            fillRule="evenodd"
            stroke={color}
        />
    </AccessibleSVG>
);

export default IconStar;
