import React from 'react'
import styled from 'styled-components'
import UserLogo from '../Components/svg/UserLogo'

const Header = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                background: '#5375e2',
            }}
        >
            <div>
                <CollegeLogo
                    src="https://i.ibb.co/RQV2JZV/college-Logo.png"
                    alt="LOGO"
                />
            </div>
            <div
                style={{
                    width: '100%',
                }}
            >
                <div
                    style={{
                        fontWeight: '700',
                        fontSize: '16px',
                        color: '#ffffff',
                        marginLeft: ' 3%',
                        marginBottom: '3px',
                        flexDirection: 'row',
                    }}
                >
                    {' '}
                    label="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY"{' '}
                </div>
                <div
                    style={{
                        fontWeight: '700',
                        fontSize: '32px',
                        color: '#ffffff',
                        marginLeft: '3%',
                    }}
                >
                    Exam Scheduler
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '45%',
                }}
            >
                <div
                    style={{
                        marginRight: '10px',
                        marginTop: '15px',
                    }}
                >
                    <UserLogo />
                </div>
            </div>
        </div>
    )
}

export default Header

const CollegeLogo = styled.img`
    height: 52px;
    width: 53px;
    margin-left: 23px;
    margin-top: 7px;
`


