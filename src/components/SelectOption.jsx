import React from 'react'

export default function SelectOption(props) {
  return (
    <option value={props.optionValue}>{props.optionText}</option>
  )
}
