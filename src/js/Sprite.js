import React from 'react';

const Sprite = React.forwardRef(({src, className = ''}, ref) => {
  let spriteStyles = {}
  return (
    <div className={(className + ' sprite').trim()} style={spriteStyles} ref={ref} >
      <img src={src} className="sprite-image" width="100px" />
    </div>
  )
})

export default Sprite