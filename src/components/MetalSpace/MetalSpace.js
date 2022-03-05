
import React from 'react';
import './MetalSpace.css';
import Vote from '../Vote/Vote';

const MetalSpace = (props) => {
  const { band_name,fans,formed,origin,split,style,count} = props;
  return (
    <div className="MetalSpace">
      <div>
      <h1>
        {band_name}
      </h1>
     </div>
      <div>formed :{formed}</div>
      <div>split: {split}</div>
      <div>origin: {origin}</div>
      <div>fans : {fans}</div>
      <div>style :{style}</div>
      <div></div>
      <Vote/>
    </div>
  );
};

export default MetalSpace;