import React from 'react'
import ArrowIcon from '../Components/svg/ArrowIcon'
import { Scheduleform } from '../Common/data/ScheduleForm'
import { LabForm } from '../Common/data/LabForm'

export const Title = () => {
    return (
        <div
            style={{
                padding: '35px 122px 20px',
                display: 'flex',
                flexDirection: 'row',
                fontSize: '24px',
            }}
        >
            <ArrowIcon />

            <section style={{ marginLeft: '15px' }}>
                Semester Exam - BE EEE SEM 3
            </section>
        </div>
    )
}
export const SchduleButton = () => {
    return (
        <div
            style={{
                marginLeft: '122px',
                marginTop: '10px',
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <button
                style={{
                    backgroundColor: '#5375E2',
                    width: '144px',
                    height: '32px',
                    color: 'white',
                    border: '1px solid #5375E2',
                }}
            >
                Schedules
            </button>
            <AllocationBtn />
        </div>
    )
}

export const Schedule = () => {
    return (
        <div
            style={{
                padding: '20px 122px 78px',
                border: '1px solid #D6D5D7',
                marginTop: '20px',
                fontWeight: '700',
                fontSize: '20px',
                width: '1196px',
                marginLeft: '120px',
            }}
        >
            <div
                style={{
                    marginBottom: '10px',
                }}
            >
                Semester Schedule
            </div>
            <SemSch />
            <div
                style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                }}
            >
                Lab Schedule
            </div>
            <LabSch />
        </div>
    )
}

export const AllocationBtn = (props) => {
    return (
        <div>
            <button
                style={{
                    //*

                    width: '144px',
                    height: '32px',
                    color: '#5375E2',
                    background: 'white',
                    border: '1px solid #5375E2',
                }}
            >
                Allocation
            </button>
        </div>
    )
}

export const SemSch = () => {
    return (
        <div
            style={{
                padding: '20px 62px',
                border: '1px solid #000000',
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <table
                style={{
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                <thead>
                    <tr
                        style={{
                            color: '#5375E2',
                        }}
                    >
                        <td>SNo</td>
                        <td>Date</td>
                        <td>Session</td>
                        <td>CourseCode</td>
                        <td>SubjectName</td>
                    </tr>
                </thead>
                {Scheduleform.map((SemesterSch) => (
                    <tr>
                        <td>{SemesterSch.SNo}</td>
                        <td>{SemesterSch.Date}</td>
                        <td>{SemesterSch.Session}</td>
                        <td>{SemesterSch.CourseCode}</td>
                        <td>{SemesterSch.SubjectName}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export const LabSch = () => {
    return (
        <div
            style={{
                padding: '20px 62px',
                border: '1px solid #000000',
            }}
        >
            <table
                style={{
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                <tr
                    style={{
                        color: '#5375E2',
                    }}
                >
                    <td>SNo</td>
                    <td>Date</td>
                    <td>Session</td>
                    <td>CourseCode</td>
                    <td>SubjectName</td>
                </tr>

                {LabForm.map((LabForm) => (
                    <tr>
                        <td>{LabForm.SNo}</td>

                        <td>{LabForm.Date}</td>
                        <td>{LabForm.Session}</td>
                        <td>{LabForm.CourseCode}</td>
                        <td>{LabForm.SubjectName}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
