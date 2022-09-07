import React, { useState } from 'react'
import { AllocationPageComp } from '../src/Components/AllocationPageComp'
import { CheckBox } from '../src/Components/CheckBox'
import Header from '../src/Layouts/Header'
import Footer from '../src/Layouts/Footer'
import FilterIcon from '../src/Components/svg/Filter'
import { useRouter } from 'next/router'

const AllocationPage = (props) => {
    const Router = useRouter()
    const Fil = () => {
        Router.push('/')
    }
    const [cardDetails, setCardDetails] = useState([
        {
            createCard: true,
        },
        {
            heading: 'BE IT SEM3',
            branch: 'B.E',
            department: 'I.T',
            semester: '3',
            subject: '5',
            lab: '2',
            ExamType: 'Semster',
            completed: false,
        },
        {
            heading: 'BE EEE SEM 3',
            branch: 'B.E',
            department: 'I.T',
            semester: '3',
            subject: '5',
            lab: '2',
            ExamType: 'Semster',
            completed: true,
        },
        {
            heading: 'BTECH CIVIL SEM5',
            branch: 'B.E',
            department: 'I.T',
            semester: '3',
            subject: '5',
            lab: '2',
            ExamType: 'Semster',
            completed: true,
        },
        {
            heading: 'BE CSE SEM 3',
            branch: 'B.E',
            department: 'I.T',
            semester: '3',
            subject: '5',
            lab: '2',
            ExamType: 'Semster',
            completed: false,
        },
        {
            heading: 'BTECH CSBS SEM2',
            branch: 'B.E',
            department: 'I.T',
            semester: '3',
            subject: '5',
            lab: '2',
            ExamType: 'Semster',
            completed: true,
        },
    ])

    const onDelete = (item, index) => {
        const tempCardDetails = [...cardDetails]
        tempCardDetails.splice(index, 1)
        setCardDetails(tempCardDetails)
    }

    return (
        <>
            <Header />
            <div
                style={{
                    marginLeft: '1100px',
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: '-3px',
                }}
            >
                <span
                    style={{
                        marginRight: '10px',
                    }}
                >
                    Show Allocated
                </span>
                <CheckBox style={{}} />
                <span style={{ marginRight: '10px', marginLeft: '10px' }}>
                    Filter
                </span>
                <div onClick={Fil}><FilterIcon/></div>
            </div>

            <div
                style={{
                    padding: '0px 120px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 20,
                }}
            >
                {cardDetails?.map((item, index) => {
                    return (
                        <AllocationPageComp
                            isCreateCard={item?.createCard}
                            heading={item?.heading}
                            // deletePress={() => null}
                            // editPress={() => null}
                            branch={item?.branch}
                            department={item?.department}
                            semester={item?.semester}
                            subject={item?.subject}
                            lab={item?.lab}
                            ExamType={item?.ExamType}
                            isCompleted={item?.completed}
                            marginTop={51}
                            deletePress={() => onDelete(item, index)}
                            editPress={() => (onclick = { Edit })}
                        />
                    )
                })}
            </div>

            <Footer />
        </>
    )
}
export default AllocationPage
