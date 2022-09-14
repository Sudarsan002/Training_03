import React from 'react'
import styled from 'styled-components'
import CreateButton from '../Components/CreateButton'
import TextComponent from '../Components/TextComponent'
import Router, { useRouter } from 'next/router'
import LandingpageIcon from '../Components/svg/LandingpageIcon'
const NoSchedule = () => {
    const Router = useRouter()
    const Next = () => {
        Router.push('/CreateSchedulePage')
    }
    return (
        <div
            onClick={Next}
            style={{
                padding:
                    '5.98639455782313vw 34.21768707482993vw 6.80952380952381vw',
                position: 'relative',
            }}
        >
            <LandingpageIcon />
            <div
                style={{
                    left: '34.4%',
                    top: ' 66.4%',
                    fontWeight: '600',
                    fontSize: '16px',
                    color: '#000000',
                    marginBottom: '15px',
                }}
            >
                There are no schedules get started by creating schedules
            </div>
            <CreateButton />
        </div>
    )
}

export default NoSchedule

