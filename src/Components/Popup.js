import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { useRouter } from 'next/router'
import { CardForm } from '../Common/data/CardForm'

const Pop = ({ onClick, dataForm }) => {
    const Router = useRouter()
    const New = () => {
        Router.reload(window.location.CreateSchedulePage)
    }

    const [ishidden, setisHidden] = useState(true)
    const onSClick = (e) => {
        console.log(CardForm)
        CardForm.push(dataForm)
        // setDone(e)
        console.log(CardForm)
        setisHidden(!ishidden)
        // console.log('-s-s-s-s-s-')
        // console.log(e)
        // console.log('6-6-6-6-6-')
    }

    return (
        <div>
            <button
                onClick={onSClick}
                style={{
                    padding: '10px',
                    width: '174px',
                    borderRadius: '5px',
                    background: '#5375E2',
                    color: 'white',
                    marginTop: '60px',
                    border: '#5375E2',
                    position: 'relative',
                }}
            >
                Save
            </button>

            <div
                hidden={ishidden}
                style={{
                    position: 'absolute',
                    top: '500px',
                    left: '175px',
                    zIndex: 2,
                    color: 'White',
                    width: '900px',
                    height: '293px',
                    backgroundColor: '#FFF',
                    marginRight: '100px',
                    boxShadow: '5px 5px 5px gray',
                }}
            >
                <span
                    style={{
                        marginLeft: '817px',
                        marginBottom: '16px',
                        color: 'white',
                    }}
                >
                    {' '}
                    <a href="AllocationPage">GoHome</a>
                    <p
                        style={{
                            color: 'black',
                            textAlign: 'center',
                            fontFamily: 'Nunito Sans',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '30px',
                            marginTop: '70px',
                        }}
                    >
                        BE MECH SEM3 schedule was successfully created
                    </p>
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
                            // backgroundColor:"#5375E2",
                            color: '#5375E2',
                            background: 'white',
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
                            backgroundColor: '#5375E2',
                            color: 'white',
                        }}
                    >
                        Allocate Schedule
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Pop