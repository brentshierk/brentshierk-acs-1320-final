import React from 'react';
import data from '../metal.json';
import MetalSpace from '../MetalSpace/MetalSpace';
import './MetalMeta.css';

const MetalMeta = () => {
  const spaces = data.map(({ band_name,fans,formed,origin,split,style }, i) => {
    return (
      <MetalSpace
        id={i}
        key={band_name}
        band_name={band_name}
        origin={origin}
        fans={fans}
        formed={formed}
        split={split}
        style={style}
      />
    );
  });

  return <div className="MetalMeta">{spaces}</div>;
};

export default MetalMeta;