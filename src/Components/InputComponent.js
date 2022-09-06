import React from 'react'
import styled from 'styled-components'
const InputComponent = (props) => {
    const {
        className,
        type = 'text',
        value,
        placeholder,
        label,
        onChange,
    } = props
    return (
        <>
            {label && <StyledInputLabel>{label}</StyledInputLabel>}
            {type === 'text' || type === 'date' ? (
                <StyledInput type={type} onChange={onChange} value={value} />
            ) : (
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    className={className}
                />
            )}
        </>
    )
}

export default InputComponent

const StyledInput = styled.input`
    background: #ffffff;
    /* Gray/11 */
    border: 1px solid #e8e8ea;
    border-radius: 5px;
    padding: 20px 24px 20px 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 116%;
    width: 100%;
    color: rgb(165, 163, 169);
    box-sizing: border-box;
`

const StyledInputLabel = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 12px;
    width: 100%;
`
