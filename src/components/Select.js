
import React, { useContext } from 'react'




export const Select = (props) => {

  return (

    <div>
    <label id  = {props.labelId}>{props.name}</label>
    <br/>
     <select id = {props.selectId} value = {props.value} >
      {props.options}
     </select>

    </div>
  )
}
