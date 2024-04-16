// import Avatar from '@atlaskit/avatar';
import React from 'react';

function Shop({src, name, amount, percentage}) {
  return (
    <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
      {/* <Avatar appearance='square' src={src} /> */}
      <div style={{fontSize: 12}}>
        <h5 style={{margin: 0}}>{name}</h5>
        <h5 style={{margin: 0}}>{`${amount} ${percentage}`}</h5>
      </div>
    </div>
  )
}

export default Shop;