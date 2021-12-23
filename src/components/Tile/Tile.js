import React from 'react'

import './Tile.css'

const Tile = (props) => {

  const selectedOrMatched = (props.selected || props.matched);
  const dynamicColor = selectedOrMatched ? {backgroundColor: props.color} : null;
  let svgComp = null;
  if (selectedOrMatched) {
    svgComp = props.svg;
  }

  return (
    <div className='Tile' style={dynamicColor}>
      {svgComp}
    </div>
  )
}

export default Tile
