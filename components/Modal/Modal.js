import React from 'react'

function Modal(props) {
  return (
    <div 
      className={`absolute h-full w-full top-0 left-0 flex flex-col justify-center items-center transition-all `}
      style={{
        pointerEvents: props.isOpen ? 'all' : 'none',
        opacity: props.isOpen ? 1 : 0,
      }}
    >
      <div className={` p-5 bg-white rounded transition-all ${props.className}`}
        style={{
          zIndex: '999',
        }}
      >
        {props.children}
      </div>
      <div className={`absolute w-full h-full bg-black z-50 opacity-40`} onClick={props.toggle}/>
    </div>
  )
}

export default Modal