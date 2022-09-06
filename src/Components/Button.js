import React from 'react'

const Button = (props) => {
    const {className,label,onClick} = props
  return (
    <>
        <div className={className} onClick={onClick}>{label}</div>
    </>
  )
}

export default Button