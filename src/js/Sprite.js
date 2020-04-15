import React from 'react';

const Sprite = React.forwardRef(({src}, ref) => {

  return (
    <>
      <img src={src} ref={ref} className="sprite-image" width="100px" />
    </>
  )
})

export default Sprite