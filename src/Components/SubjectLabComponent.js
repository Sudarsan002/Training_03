import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import InputComponent from './InputComponent'
import TextComponent from './TextComponent'

const DropIcon = () => {
    return (
        <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.0148 1.73389L10.5896 0.0187441L6.04937 5.71184L1.41013 0.14078L0.015455 1.89342L6.07996 9.19192L12.0148 1.73389Z"
                fill="#1F1F1F"
            />
        </svg>
    )
}

const SubjectLabComponent = (props) => {
  // 
    const { details, setDetails, label } = props
    const handleChangeDate = (event, index) => {
        let clonedArray = [...details]
        clonedArray[index].date = event?.target?.value
        setDetails(clonedArray)
    }
    const handleChangeFN = (index) => {
        let clonedArray = [...details]
        if (clonedArray[index].isNoon === '') clonedArray[index].isNoon = false
        else if (clonedArray[index].isNoon === false)
            clonedArray[index].isNoon = true
        else clonedArray[index].isNoon = false
        setDetails(clonedArray)
    }
    return (
        <>
            {details.map((item, index) => {
                {
                    console.log('item', item.isNoon)
                }
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
                                <div>{item?.code}</div>
                                <DropIcon />
                            </div>
                        </div>
                        <div
                            style={{
                                marginRight: '1.6125%',
                                width: '36.756%',
                            }}
                        >
                            <StyledSubjectLabel label={item?.name} />
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
                                onChange={(event) => {
                                    handleChangeDate(event, index)
                                    console.log(details)
                                }}
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
                                    <FNANButton
                                        label="FN"
                                        onClick={(event) => {
                                            handleChangeFN(index)
                                            console.log(details)
                                        }}
                                    />
                                </div>
                                <div style={{ width: '6.1%' }}>
                                    <FNANButton label="AN" />
                                </div>
                            </>
                        ) : item.isNoon ? (
                            <>
                                <div
                                    style={{
                                        marginRight: '1.6125%',
                                        width: '6.1%',
                                    }}
                                >
                                    <FNANButton label="FN" />
                                </div>
                                <div style={{ width: '6.1%' }}>
                                    <FNANButtonActive
                                        label="AN"
                                        onClick={(event) => {
                                            handleChangeFN(index)
                                            console.log(details)
                                        }}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    style={{
                                        marginRight: '1.6125%',
                                        width: '6.1%',
                                    }}
                                >
                                    <FNANButtonActive
                                        label="FN"
                                        onClick={(event) => {
                                            handleChangeFN(index)
                                            console.log(details)
                                        }}
                                    />
                                </div>
                                <div style={{ width: '6.1%' }}>
                                    <FNANButton label="AN" />
                                </div>
                            </>
                        )}

                        {/* <div
                            style={{
                                marginRight: '1.6125%',
                                width: '6.1%',
                            }}
                        >
                            <FNANButton label="FN" />
                        </div>
                        <div style={{ width: '6.1%' }}>
                            <FNANButton label="AN" />
                        </div> */}
                    </div>
                )
            })}
        </>
    )
}

export default SubjectLabComponent

const StyledSubjectLabel = styled(TextComponent)`
    background: #f2f2f2;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #aba9ae;
    padding: 20px 0px 20px 12.8px;
    margin-top: 34px;
`

const FNANButton = styled(Button)`
    border: 1px solid #5375e2;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    padding: 21px 22px;
    color: #5375e2;
    margin-top: 30px;
`

const FNANButtonActive = styled(Button)`
    border: 1px solid #5375e2;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    padding: 21px 22px;
    color: #ffffff;
    margin-top: 30px;
    background: #5375e2;
`
