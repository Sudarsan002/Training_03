import React from 'react'
import Button from './Button'
import InputComponent from './InputComponent'
import TextComponent from './TextComponent'

export const SubjectLabComponent = (props) => {
    const { details, setDetails, label, noon } = props
    console.log('noon', noon)
    // const handleChangeDate = (event, index) => {
    //     let clonedArray = [...details]
    //     clonedArray[index].date = event?.target?.value
    //     setDetails(clonedArray)
    // }


    return (
        <>
            {details.map((item, index) => {
               
                return (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '2.689%',
                        }}
                    >
                        <div
                            style={{
                                marginRight: '1.6125%',
                                width: '16.13%',
                            }}
                        >
                            <div
                                style={{
                                    marginBottom: '12px',
                                    fontWeight: 700,
                                    fontSize: 16,
                                    lineHeight: '22px',
                                    color: '#000000',
                                }}
                            >
                                <div>
                                    {label}
                                    {index + 1}
                                </div>
                            </div>
                            <div
                                style={{
                                    background: '#FFFFFF',
                                    border: '1px solid #E5E5E5',
                                    borderRadius: 10,
                                    padding: '16px 18.5px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    height: 60,
                                    boxSizing: 'border-box',
                                    color: '#ABA9AE',
                                }}
                            >

                            {/* Subject code */}
                                <div>{item?.code}</div>
                            </div>
                        </div>
                        <div
                            style={{
                                marginRight: '1.6125%',
                                width: '36.756%',
                            }}
                        >
                            {/* Subject name box */}
                            <div
                                style={{
                                    background: '#f2f2f2',
                                    borderRadius: '5px',
                                    fontWeight: '400',
                                    fontSize: '16px',
                                    lineHeight: '22px',
                                    color: '#aba9ae',
                                    padding: '20px 0px 20px 12.8px',
                                    marginTop: '34px',
                                }}
                            >
                                {' '}
                                {item?.name}{' '}
                            </div>
                        </div>
                        <div
                            style={{
                                marginRight: '1.6125%',
                                width: '23.3%',
                            }}
                        >
                            <InputComponent
                                label="Date"
                                type="date"
                                // onChange={(event) => {
                                //     handleChangeDate(event, index)
                                // }}
                            />
                        </div>

                        {item.isNoon === '' ? (
                            <>
                                <div
                                    style={{
                                        marginRight: '1.6125%',
                                        width: '6.1%',
                                    }}
                                >
                                    <div
                                        style={{
                                            border: '1px solid #5375e2',
                                            borderradius: '5px',
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            borderRadius: '5px',
                                            padding: '21px 22px',
                                            color: '#5375e2',
                                            marginTop: '30px',
                                        }}
                                    >
                                        {' '}
                                        <Button
                                            label="FN"
                                            // onClick={(event) => {
                                            //     handleChangeFN(index)
                                            //     console.log(details)
                                            // }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        width: '6.1%',
                                        border: '1px solid #5375e2',
                                        borderRadius: '5px',
                                        fontWeight: '400',
                                        fontSize: '16px',
                                        padding: '21px 22px',
                                        color: '#5375e2',
                                        marginTop: '30px',
                                    }}
                                >
                                    <Button
                                        label="AN"
                                        // onClick={(event) => {
                                        //     handleChangeAN(index)
                                        //     console.log(details)
                                        // }}
                                    />
                                </div>
                            </>
                        ) : item.isNoon ? (
                            <>
                                {/* <div
                                    style={{
                                        marginRight: '1.6125%',
                                        width: '6.1%',

                                    }}
                                >
                                    <Button
                                        label="FN"
                                        // onClick={(event) => {
                                        //     handleChangeFN(index)
                                        //     console.log(details)
                                        // }}
                                    />
                                </div> */}
                                {/* <div style={{ width: '6.1%' }}>
                                    <FNANButtonActive
                                        label="AN"
                                        // onClick={(event) => {
                                        //     handleChangeAN(index)
                                        //     console.log(details)
                                        // }}
                                    />
                                </div> */}
                            </>
                        ) : (
                            <>
                                {/* <div
                                    style={{
                                        marginRight: '1.6125%',
                                        width: '6.1%',
                                        border: '1px solid #5375e2',
                                        borderRadius: '5px',
                                        fontWeight: '400',
                                        fontSize: '16px',

                                        padding: '21px 22px',
                                        color: '#ffffff',
                                        marginTop: '30px',
                                        background: '#5375e2',
                                    }}
                                >
                                    <FNANButtonActive
                                        label="FN"
                                        // onClick={(event) => {
                                        //     handleChangeFN(index)
                                        //     console.log(details)
                                        // }}
                                    />
                                </div> */}
                                {/* <div style={{ width: '6.1%' }}> */}
                                    {/* <FNANButton label="AN" 
                                        // onClick={(event) => {
                                        //     handleChangeAN(index)
                                        //     console.log(details)
                                        // }}
                                    /> */}
                                {/* </div> */}
                            </>
                        )}
                    </div>
                )
            })}
        </>
    )
}

