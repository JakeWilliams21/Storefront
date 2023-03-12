import React, { useState} from 'react';
import jeans from '../images/jeans.webp'

const StorefrontItem = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href = '/detail'>
      <div
        className="storefront-item"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={jeans} alt='jeans' className="item-image" />

        {isHovered && (
          <div className="overlay">
            <div className="item-details">
              <div className="name">Levis 505</div>
              <div className="price">$45</div>
            </div>
          </div>
        )}
      </div>
    </a>
    
  );
};

export default StorefrontItem;
