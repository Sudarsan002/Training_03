import React from 'react'

import CustomDropDown from '../Components/CustomDropDown'

import { useState } from 'react'
import InputComponent from '../Components/InputComponent'
import TextComponent from '../Components/TextComponent'
import Button from '../Components/Button'
import { FormData } from '../Common/data/FormData'
import { SubjectLabComponent } from '../Components/LabComponents'
import { Dropdown0 } from '../Components/svg/Dropdown'
import Pop from '../Components/Popup'
import { useRouter } from 'next/router'
import DataForm from '../Common/data/DataForm'
import ArrowIcon from '../Components/svg/ArrowIcon'

const CreateSchedule = () => {
    const [branch, setBranch] = useState(FormData?.branchanddep || [])
    const [selectedBranch, setSelectedBranch] = useState(branch[0] || {})

    const [deps, setdeps] = useState(selectedBranch?.deps || [])
    const [selectedDep, setSelectedDep] = useState('--Select--')

    const [labDetails, setLabDetails] = useState([])

    const [ExamType, setExamType] = useState([])
    const [selectedExamType, setSelectedExamType] = useState('--Select--')

    const [subjectDetails, setSubjectDetails] = useState([])

    const [sem, setsem] = useState('')
    const handleChangeInSem = (event) => {
        setsem(event.target.value)
        setExamType(FormData?.[selectedDep]?.[event.target.value - 1])
        // setExamType(DataForm?.[selectedDep]?.[event.target.value - 1])
    }

    const setBranchs = (option) => {
        setSelectedBranch(option)
        setdeps(option?.deps)
        setSelectedDep(option?.deps?.[0])
    }

    const setDepartmentDetails = (option) => {
        console.log({ option })
        setSelectedDep(option)
        setExamType(FormData?.[option]?.[0])
        setSelectedExamType(FormData?.[option]?.[0]?.[0]?.ExamType)
    }

    const setexamTypes = (option) => {
        console.log(sem)
        setSelectedExamType(option.ExamType)
        setSubjectDetails(FormData?.[selectedDep]?.[sem - 1]?.[0]?.subjects)
        setLabDetails(FormData?.[selectedDep]?.[sem - 1]?.[0]?.labs)
    }

    const Router = useRouter()
    const Back = () => {
        Router.push('/')
    }

    const [timeRangeDetails, setTimeRangeDetails] = useState([
        {
            fromHours: '10',
            fromMinutes: '00',
            fromIsAm: true,
            toHours: 1,
            toMinutes: '00',
            toIsAm: 'AN',
        },
        {
            fromHours: '12',
            fromMinutes: '00',
            fromIsAm: true,
            toHours: '3',
            toMinutes: '00',
            toIsAm: 'FN',
        },
    ])
    //  const[active,setActive]=useState(false)
    const [time, setTime] = useState({ hr: '', min: '' })
    const [noon, setNoon] = useState(false)
    const [noonFN, setNoonFN] = useState(false)
    // const changeTimeHandler = (e) => {
    //     setTime({ hr: e.target.value, min: e.target.value })
    // }

    // const changeCheckHandler = (e) => {
    //     setNoon(e.target.checked)
    // }

    // const changeCheckFNHandler = (e) => {
    //     setNoonFN(e.target.checked)
    // }

    // const[done , setDone]=useState(false)

    DataForm.branch = selectedBranch.branch
    DataForm.subject = subjectDetails.length
    DataForm.department = selectedDep
    DataForm.lab = labDetails.length
    DataForm.ExamType = selectedExamType
    DataForm.semester = sem
    DataForm.complete = true
    DataForm.heading = selectedBranch.branch + ' ' + selectedDep + ' SEM ' + sem
    console.log(DataForm)

    return (
        <>
            <div
                style={{
                    padding: '35px 122px 89px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: '20px',
                    }}
                >
                    <div
                        style={{
                            height: '24px',
                            width: '24px',
                            marginTop: '4px',
                        }}
                    >
                        <ArrowIcon />
                    </div>
                    <div
                        style={{
                            fontWeight: '600',
                            fontSize: '24px',
                            color: '#000000',
                            marginLeft: '19px',
                        }}
                    >
                        {' '}
                        Create new schedule
                    </div>
                </div>
                <div
                    style={{
                        padding: '37px 55px 50px 55px',
                        background: '#fbfbfb',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '2.689%',
                        }}
                    >
                        <div style={{ marginRight: '2.689%', width: '33.3%' }}>
                            <CustomDropDown
                                options={branch}
                                selectedOption={selectedBranch?.branch}
                                setSelectedOption={setBranchs}
                                label="Branch"
                                optionObjectValue="branch"
                            />
                        </div>
                        <div style={{ marginRight: '2.69%', width: '33.3%' }}>
                            <CustomDropDown
                                options={deps}
                                selectedOption={selectedDep}
                                setSelectedOption={setDepartmentDetails}
                                label="Department"
                            />
                        </div>
                        <div style={{ width: '33.3%' }}>
                            <InputComponent
                                label="Semester"
                                onChange={handleChangeInSem}
                                value={sem}
                            />
                        </div>
                    </div>
                    <div style={{ marginBottom: '2.689%' }}>
                        <CustomDropDown
                            options={ExamType}
                            selectedOption={selectedExamType}
                            setSelectedOption={setexamTypes}
                            label="ExamType"
                            optionObjectValue="ExamType"
                        />
                    </div>
                    <div>
                        <div
                            style={{
                                fontWeight: '700',
                                fontSize: '16px',
                                color: '#000000',
                                marginBottom: '12px',
                                marginRight: '30%',
                            }}
                        >
                            Time Range
                        </div>
                    </div>
                    {timeRangeDetails?.map((item, index) => {
                        return (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginBottom: '20px',
                                }}
                            >
                                <div
                                    style={{
                                        marginTop: '15px',
                                        padding: '5px',
                                    }}
                                >
                                    {' '}
                                    {item?.toIsAm === 'AN' ? 'FN' : 'AN'}
                                </div>
                                {console.log('time', time)}
                                <div
                                    style={{
                                        background: '#ffffff',
                                        border: '1px solid #e8e8e8',
                                        borderRadius: '5px',
                                        padding: '17px 0px 17px 16px',
                                        marginRight: '30px',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        color: '#000000',
                                        width: '5%',
                                    }}
                                    type="number"
                                    // onChange={changeTimeHandler}
                                    // time
                                >
                                    {item?.fromHours}
                                </div>

                                {console.log('item', item)}
                                <div
                                    style={{
                                        background: '#ffffff',
                                        border: '1px solid #e8e8e8',
                                        borderRadius: '5px',
                                        padding: '17px 0px 17px 16px',
                                        marginRight: '30px',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        color: '#000000',
                                        width: '5%',
                                    }}
                                >
                                    {item?.fromMinutes}
                                </div>
                                <Dropdown0 />
                                <div
                                    style={{
                                        marginTop: ' 21px',
                                        marginRight: '37px',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                    }}
                                >
                                    to
                                </div>
                                <div
                                    style={{
                                        background: '#ffffff',
                                        border: '1px solid #e8e8e8',
                                        borderRadius: '5px',
                                        padding: '17px 0px 17px 16px',
                                        marginRight: '30px',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        color: '#000000',
                                        width: '5%',
                                    }}
                                >
                                    {item?.toHours}
                                </div>
                                <div
                                    style={{
                                        background: '#ffffff',
                                        border: '1px solid #e8e8e8',
                                        borderRadius: '5px',
                                        padding: '17px 0px 17px 16px',
                                        marginRight: '30px',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        color: '#000000',
                                        width: '5%',
                                    }}
                                >
                                    {item?.toMinutes}
                                </div>
                                <Dropdown0 />
                                <div
                                    style={{
                                        marginTop: '21px',
                                        marginRight: '56px',
                                        color: ' #767676',
                                        fontWeight: '700',
                                        fontSize: '16px',
                                    }}
                                >
                                    {item?.toHours}
                                </div>
                                <div
                                    style={{
                                        marginTop: '23px',
                                        marginRight: '22px',
                                        opacity: '0.5',
                                    }}
                                >
                                    3 hours
                                </div>
                                {/* <div
                                    style={{
                                        marginTop: '10px',
                                        marginRight: '13px',
                                        color: '#767676',
                                    }}
                                    type="checkbox"
                                    // value={item?.toMinutes}
                                    // onChange={changeCheckHandler}
                                ></div> */}
                                <div
                                    style={{
                                        marginTop: '21px',
                                        marginRight: '56px',
                                        color: ' #767676',
                                        fontWeight: '700',
                                        fontSize: '16px',
                                    }}
                                >
                                    {`Set all for ${
                                        item?.toIsAm === 'FN' ? 'AN' : 'FN'
                                    }`}
                                    {/* value={item?.toIsAm ? 'AN' : 'FN'} */}
                                    {/* onChange={changeCheckFNHandler} */}
                                </div>
                            </div>
                        )
                    })}

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '2.689%',
                        }}
                    >
                        <div style={{ marginRight: '2.69%', width: '33.3%' }}>
                            <InputComponent
                                label="Subjects"
                                value={subjectDetails.length}
                            />
                        </div>
                        <div style={{ width: '33.3%' }}>
                            <InputComponent
                                label="Labs"
                                value={labDetails.length}
                            />
                        </div>
                    </div>
                    <SubjectLabComponent
                        details={subjectDetails}
                        setDetails={setSubjectDetails}
                        label="Subject"
                        // noon={noon}
                        // noonFN={noonFN}
                    />
                    <div>
                        <div
                            style={{
                                marginBottom: '30px',
                            }}
                        >
                            Labs{' '}
                        </div>
                    </div>
                    <SubjectLabComponent
                        details={labDetails}
                        setDetails={setLabDetails}
                        label="Lab"
                    />
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Pop
                        dataForm={DataForm}
                        onClick={(e) => onClick(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}

export default CreateSchedule
