import React from 'react'
const CheckBox = ({
    style = {
        marginLeft: '20%',
        marginTop: '19px',
    },
}) => {
    return (
        <div style={{ style }}>
            <input type="checkbox" name="FN" value="FN" />
        </div>
    )
}
export default CheckBox
