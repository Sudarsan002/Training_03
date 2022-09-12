import React from 'react'
const CheckBox = (props) => {
    const { value = false, onClick = () => null } = props
    // console.log({ value })
    return (
        <div>
            <input
                type="checkbox"
                value={value}
                onChange={() => onClick(!value)}
            />
        </div>
    )
}
export default CheckBox
