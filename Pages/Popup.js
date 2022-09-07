import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import { Button } from 'reactstrap'
//import 'reactjs-popup/dist/index.css';
import { useRouter } from 'next/router'

const  Pop=() => {
    const Router = useRouter()
    const New = () => {
        Router.push('/CreateSchedulePage')
    }
    
    return(
            <div >
        <Popup 
            trigger={
                <button

                    style={{
                        padding: '10px',
                        width: '174px',
                        borderRadius: '5px',
                        background: '#5375E2',
                        color: 'white',
                        marginTop: '30px',
                        marginRight: '10px',
                        border: '#5375E2',
                    }}
                >
                    {' '}
                    Save
                </button>
            }
            position="left center"
        >
            <div 
                style={{
                    color: 'black',
                    width: '900px',
                    height: '293px',
                    backgroundColor: '#F6F6F6',
                    position: ' center',
                    marginBottom: '30%',
                    marginRight: '100px',
                }}
            >
                <span
                    style={{
                        marginLeft: '817px',
                        marginBottom: "16px"
                    }}
                >
                    {' '}
                    <a href="AllocationPage">GoHome</a>
                </span>
           
                <div>
               
                    <Button 
                    onClick={New}
                        style={{
                            marginTop: '200px',
                            borderRadius: '5px',
                            border: '1px solid #5375E2',
                            marginLeft: '249px',
                            marginRight: '30px',
                            height: '40px',
                            width: '185px',
                        }}
                    >
                        Create New Schedule
                    </Button>
                    <Button
                        style={{
                            marginTop: '200px',
                            borderRadius: '5px',
                            border: '1px solid #5375E2',
                            marginLeft: '',
                            marginRight: '',
                            height: '40px',
                            width: '185px',
                        }}
                    >
                        Allocate Schedule
                    </Button>
                </div>
            </div>
        </Popup>
    </div>

    )
                    }
 export default Pop

