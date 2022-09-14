import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <>
            <div
                style={{
                    fontWeight: '200',
                    fontSize: '12px',
                    background: '#fbfbfb',
                    padding: '0.5% 25.6% 0.5% 33%',
                    display: 'flex',
                    flexDirection: 'row',
                    color: '#000000',
                    marginTop: '100px',
                }}
            >
                <div
                    style={{
                        marginLeft: '1%',
                        background: '#fbfbfb',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <p> Conditions of use & sale </p>
                    <div>Privacy notice</div>
                    <div>Powered By Incresco</div>
                </div>
            </div>
        </>
    )
}


export default Footer

const FooterText = styled.p`
    margin-left: 15%;
    background: #fbfbfb;
`
