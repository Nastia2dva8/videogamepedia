import React from 'react'

export default function LabelAndInput(props) {
    const { inputId, labelText, type, ...otherAttributes } = props;
    return (
        <>
            <label htmlFor={inputId}>{labelText}</label>
            <input id={inputId} type={type} required {...otherAttributes}></input>
        </>
    )
}
