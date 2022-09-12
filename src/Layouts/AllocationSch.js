import React from 'react'

import { SchduleButton, Title } from './Schedule'

export const AllocationSch = () => {
    return (
        <div>
            <Title />
            <SchduleButton />
            <div
                style={{
                    padding: '25px 123px 160px',
                    border: '1px solid black',
                    margin: '20px 123px 160px 120px',
                    // display:"flex",
                    // flexDirection:"row"
                }}
            >
                <section>
                    <select
                        style={{
                            width: '177px',
                            height: '31px',
                        }}
                    >
                        <option value="Subject1">Subject1</option>
                        <option value="Subject2">Subject2</option>
                        <option value="Subject3">Subject3</option>
                        <option value="Subject4">Subject4</option>
                        <option value="Subject5">Subject5</option>
                    </select>

                    <span
                        style={{
                            margin: '39px 34px 27px 528px',
                        }}
                    >
                        {' '}
                        Date: 24/08/2022{' '}
                    </span>
                    <span>Sesion:FN</span>
                </section>
                <div
                    style={{
                        marginTop: '20px',
                    }}
                >
                    <button
                        style={{
                            width: '160px',
                            height: '32px',
                            color: '#5375E2',
                            background: 'white',
                            border: '1px solid #5375E2',
                            borderRadius: '5px 0px 0px 5px',
                        }}
                    >
                        Room 1
                    </button>
                    <button
                        style={{
                            width: '160px',
                            height: '32px',
                            color: '#5375E2',
                            background: 'white',
                            border: '1px solid #5375E2',
                            borderRadius: '0px',
                        }}
                    >
                        Room 2
                    </button>
                    <button
                        style={{
                            width: '160px',
                            height: '32px',
                            color: '#5375E2',
                            background: 'white',
                            border: '1px solid #5375E2',
                            borderRadius: '0px',
                        }}
                    >
                        Room 3
                    </button>
                    <button
                        style={{
                            width: '160px',
                            height: '32px',
                            color: '#5375E2',
                            background: 'white',
                            border: '1px solid #5375E2',
                            borderRadius: '0px',
                        }}
                    >
                        Room 4
                    </button>
                    <button
                        style={{
                            width: '160px',
                            height: '32px',
                            color: '#5375E2',
                            background: 'white',
                            border: '1px solid #5375E2',
                            borderRadius: '0px',
                        }}
                    >
                        Room 5
                    </button>
                    <button
                        style={{
                            width: '160px',
                            height: '32px',
                            color: '#5375E2',
                            background: 'white',
                            border: '1px solid #5375E2',
                            borderRadius: '0px 5px 5px 0px ',
                        }}
                    >
                        Room 6
                    </button>
                </div>
                <div
                    style={{
                        margin: '24.82px 185px 18.94px 55px',
                        border: '1px solid #E8E8EA',
                        width: '843px',
                        height: '40px',
                        // textAlign:"center"
                    }}
                >
                    <div style={{
                        display:"flex",
                        flexDirection:"row"
                    }}>
                        <span style={{
                            padding:"15px 60px 35px"
                        }}>Invigilator Name: John </span>
                        <span style={{
                            padding:"15px 22px "
                        }}>Invigilator Department: ECE   </span>
                        <span style={{
                            padding:"15px 90px 77px"
                        }}>Students Count: 50 </span>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
