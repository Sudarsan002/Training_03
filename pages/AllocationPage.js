import React, { useState } from 'react'
import { AllocationPageComp } from '../src/Components/AllocationPageComp'
import CheckBox from '../src/Components/CheckBox'
import Header from '../src/Layouts/Header'
import Footer from '../src/Layouts/Footer'
import FilterIcon from '../src/Components/svg/Filter'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { CardForm } from '../src/Common/data/CardForm'

const AllocationPage = () => {
    const Router = useRouter()
    const Fil = () => {
        Router.push('/')
    }

    const [dropDown, setDropDown] = useState(['Semster', 'Model', 'Internal'])

    const [radioFlag, setRadioFlag] = useState(false)

    

    const [filterPopup, setFilterPopup] = useState(false)

    

    const [cardDetails, setCardDetails] = useState(CardForm)

    const [filter, setFilter] = useState(cardDetails)

    const onDelete = (item, index) => {
        let tempCardDetails = [...filter]
        let clonedArray = [...cardDetails]

        let foundIndex = cardDetails?.findIndex((i) => i.id === item?.id)
        if (foundIndex > -1) {
            clonedArray.splice(foundIndex, 1)
            setCardDetails(clonedArray)
        }
        tempCardDetails.splice(index, 1)
        console.log({tempCardDetails})
        setFilter(tempCardDetails)
    }

    const handleExamFilter = (item, index) => {
        const filterData = cardDetails?.filter(function (i, index) {
            console.log({ d: i?.ExamType })
            return i?.ExamType === item
        })

        setFilter(filterData)
        setFilterPopup(false)
    }

    const handleFilter = (e) => {
        setRadioFlag(e)
        if (e) {
            const filteredData = cardDetails?.filter((arr) => {
                return arr.completed === true
            })
            setFilter(filteredData)
        } else {
            setFilter(cardDetails)
        }
    }
    const InnerColor=styled.div`
      border:1px solid transparent;
      cursor:pointer;
      &:hover{
        background-color:#5375e2;
        border-radius:3px;
      }
    `
    ;

    return (
        <>
            
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
                <CheckBox
                    filter={filter}
                    cardDetails={cardDetails}
                    setCardDetails={setCardDetails}
                    value={radioFlag}
                    setValue={setRadioFlag}
                    onClick={handleFilter}
                />
                <span style={{ marginRight: '10px', marginLeft: '10px' }}>
                    Filter
                </span>
                <div style={{ position: 'relative' }}>
                    <FilterIcon onClick={() => setFilterPopup(!filterPopup)} />
                    {filterPopup && (
                        <div
                            style={{
                                width: 400,
                                background: 'white',
                                padding: '22px 29px 17px 29px',
                                borderRadius: 6,
                                position: 'absolute',
                                right: 4,
                                border: '0.2px solid black',
                            }}
                        >
                            {dropDown?.map((item, index) => {
                                return (
                                    <InnerColor>
                                    <div
                                        style={{
                                            fontWeight: '400',
                                            fontSize: 16,
                                            lineHeight: '22px',
                                            color: '#000000',
                                            marginBottom:
                                                dropDown?.length - 1 !== index
                                                   
                                        }}
                                        onClick={() =>
                                            handleExamFilter(item, index)
                                        }
                                    >
                                        {item} Exam
                                    </div>
                                    </InnerColor>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>

            <div
                style={{
                    padding: '0px 120px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 20,
                }}
            >
                {filter?.map((item, index) => {
                    return (
                        <AllocationPageComp
                            isCreateCard={item?.createCard}
                            heading={item?.heading}
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

          
        </>
    )
}
export default AllocationPage
