import React from 'react'
import SelectOption from './SelectOption'

export default function Select(props) {
  return (
    <>
      <label htmlFor={props.selectId}>{props.labelText}</label>
      <select id={props.selectId} required>
        {props.options.map((item) => (
          <SelectOption
            key={item.value}  // обов'язково!
            optionValue={item.value}
            optionText={item.label}
          />
        ))}
      </select>
    </>
  )
}
