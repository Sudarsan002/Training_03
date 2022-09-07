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
                    color: 'White',
                    width: '900px',
                    height: '293px',
                    backgroundColor: '#FFF',
                    position: ' center',
                    marginBottom: '30%',
                    marginRight: '100px',
                    boxShadow:"7px 7px 5px 0px rgba(50, 50, 50, 0.75)",
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
                    <p style={{color:"black",textAlign:"center",fontFamily: 'Nunito Sans',
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "30px",marginTop:"70px"}}>BE EEE SEM3 schedule was successfully created</p>
                </span>
           
                <div>
               
                    <Button 
                    onClick={New}
                        style={{
                            
                            marginTop: '70px',
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
                            marginTop: '70px',
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

