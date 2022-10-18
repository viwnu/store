import React from 'react';

import './headerCounter.css'

export default function HeaderCounter({count}) {
  return (
    <div
      className="orangeCircle headerCounter"
    >{count}</div>
  );
}
