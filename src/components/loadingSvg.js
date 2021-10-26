
import React from 'react'
const Loadingsvg = ({active, w="15px"}) =>{
  if(!active)
    return null
  return(
    <div className="flex">
      <div className="loader animate-spin" style={{height:w, width:w}}></div>   
    </div>
  )
  
}
export default Loadingsvg