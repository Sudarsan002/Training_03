import React from 'react'
import DeleteIcon from './svg/DeleteIcon'
import TickIcon from './svg/TicketIcon'
import EditIcon from './svg/EditIcon'
import { ButtonComponent1 } from './ButtonComponent'
import { useRouter } from 'next/router'

export const AllocationPageComp = (props) => {
    const {
        heading = '',
        deletePress = () => null,
        branch = '',
        department = 'I.T',
        semester = '3',
        subject = '5',
        lab = '2',
        ExamType = 'Semester',
        isCompleted = false,
        marginTop = 0,
        isCreateCard = false,
    } = props

    const Router = useRouter()
    const Edit = () => {
        Router.push('/Editpage')
        
    }
  
    return (
        <div style={{ marginTop }}>
            {isCreateCard ? (
                <div
                    style={{
                        width: 392,
                        height: 262,
                        background: '#FFFFFF',
                        borderRadius: 10,
                        border: '1px dashed #000000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <ButtonComponent1 marginLeft={0} marginTop={0} />
                </div>
            ) : (
                <div
                    style={{
                        ...styles.container,
                        border: isCompleted
                            ? '1px solid #5375E2'
                            : '1px solid #FFA500',
                    }}
                >
                    <section style={styles.section1}>
                        <div style={styles.rowSpaceBetween}>
                            <div style={styles.headingText}>{heading}</div>
                            <div style={styles.row}>
                                <EditIcon onClick={Edit} />
                                <DeleteIcon
                                    onClick={deletePress}
                                    marginLeft={22}
                                />
                            </div>
                        </div>
                        <div style={styles.createdLabel}>
                            Created on 01/08/2022 11:00AM
                        </div>
                        <div
                            style={{
                                ...styles.rowSpaceBetween,
                                marginTop: 11.14,
                            }}
                        >
                            <div style={styles.flexLayout}>
                                <div style={styles.headLabel}>Branch</div>
                                <div style={styles.headValue}>{branch}</div>
                            </div>
                            <div style={styles.flexLayout}>
                                <div style={styles.headLabel}>Department</div>
                                <div style={styles.headValue}>{department}</div>
                            </div>
                            <div style={styles.flexLayout}>
                                <div style={styles.headLabel}>Semester</div>
                                <div style={styles.headValue}>{semester}</div>
                            </div>
                        </div>
                        <div
                            style={{
                                ...styles.rowSpaceBetween,
                                marginTop: 11.14,
                            }}
                        >
                            <div style={styles.flexLayout}>
                                <div style={styles.headLabel}>Subject</div>
                                <div style={styles.headValue}>{subject}</div>
                            </div>
                            <div style={styles.flexLayout}>
                                <div style={styles.headLabel}>Lab</div>
                                <div style={styles.headValue}>{lab}</div>
                            </div>
                            <div style={styles.flexLayout}>
                                <div style={styles.headLabel}>ExamType</div>
                                <div style={styles.headValue}>{ExamType}</div>
                            </div>
                        </div>
                    </section>
                    <div
                        style={{
                            ...styles.footer,
                            backgroundColor: isCompleted
                                ? '#5375E2'
                                : '#FFA500',
                        }}
                    >
                        <div style={styles.statusText}>
                            {isCompleted ? 'Allocated' : 'Not Allocated'}
                        </div>
                        <Button isCompleted={isCompleted} />
                    </div>
                </div>
            )}
        </div>
    )
}

const Button = (props) => {
    const {
        btnLabel = 'Allocate',
        onClick = () => null,
        isCompleted = false,
    } = props
    return (
        <>
            {isCompleted ? (
                <TickIcon />
            ) : (
                <div style={styles.btnStyles} onClick={onClick}>
                    <div style={styles.btnText}>{btnLabel}</div>
                </div>
            )}
        </>
    )
}

const styles = {
    container: {
        width: 392,
        height: 262,
        background: '#FFFFFF',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    rowSpaceBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headingText: {
        fontWeight: '600',
        fontSize: 24,
        lineHeight: '33px',
        color: '#000000',
    },
    footer: {
        borderRadius: 9,
        width: '100%',
        padding: '10px 20px 8px 34px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statusText: {
        fontFamily: 'Nunito Sans',
        fontWeight: 700,
        fontSize: 20,
        lineHeight: '27px',
        color: '#FFFFFF',
    },
    headLabel: {
        fontFamily: 'Nunito Sans',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: '19px',
        color: '#000000',
    },
    section1: {
        padding: '20px 13.5px 0 33px',
    },
    createdLabel: {
        fontWeight: '400',
        fontSize: 10,
        lineHeight: '14px',
        color: '#ABA9AE',
        marginTop: 9,
    },
    headValue: {
        fontWeight: 700,
        fontSize: 16,
        lineHeight: '22px',
        color: '#ABA9AE',
        marginTop: 9,
    },
    flexLayout: {
        width: '33.3%',
    },
    btnStyles: {
        padding: '8.5px 20px',
        background: 'white',
        border: '1px solid #5375E2',
        borderRadius: 5,
    },
    btnText: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '22px',
        color: '#5375E2',
    },
}

// {/* <ButtonComponent1 /> */}
