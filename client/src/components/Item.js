import React, { useState} from 'react';
import { Buffer } from 'buffer';

const StorefrontItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href = {`/detail/${props.id}`}>
      <div
        className="storefront-item hide"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {props.img && <img src={`data:${props.img.contentType};base64,${Buffer.from(props.img.data.data).toString('base64')}`} alt='jeans' className="item-image" />}
        

        {isHovered && (
          <div className="overlay">
            <div className="item-details">
              <div className="name">{props.name}</div>
              <div className="price">${props.price}</div>
            </div>
          </div>
        )}
      </div>
    </a>
    
  );
};

export default StorefrontItem;
