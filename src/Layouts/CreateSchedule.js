import React from 'react'
import styled from 'styled-components'
import CustomDropDown from '../Components/CustomDropDown'
import Wrapper from '../Components/Wrapper'
import { useState } from 'react'
import InputComponent from '../Components/InputComponent'
import TextComponent from '../Components/TextComponent'
import Button from '../Components/Button'
import { FormData } from '../Common/data/FormData'
import SubjectLabComponent from '../Components/SubjectLabComponent'
import { Dropdown0 } from '../Components/svg/Dropdown'
import Pop from '../Components/Popup'
import { useRouter } from 'next/router'
import DataForm from '../Common/data/DataForm'

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
    const changeTimeHandler = (e) => {
        setTime({ hr: e.target.value, min: e.target.value })
    }

    const changeCheckHandler = (e) => {
        setNoon(e.target.checked)
    }

    const changeCheckFNHandler = (e) => {
        setNoonFN(e.target.checked)
    }

    // const[done , setDone]=useState(false)

    DataForm.branch = selectedBranch.branch
    DataForm.subject=subjectDetails.length
    DataForm.department = selectedDep
    DataForm.lab = labDetails.length
    DataForm.ExamType = selectedExamType
    DataForm.semester = sem
    DataForm.complete=true
    DataForm.heading = selectedBranch.branch+" "+selectedDep+" SEM "+ sem
    
    console.log(DataForm)

    

    return (
        <>
            <StyledMainContainer>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: '20px',
                    }}
                >
                    <StyledArrow
                        src="https://i.ibb.co/RBRPtj0/Vector-Arrow.png"
                        alt="Arrow"
                        onClick={Back}
                    />
                    <StyledTitle>Create new schedule</StyledTitle>
                </div>
                <StyledWrapper>
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
                        <StyledInputText1 label={'Time Range'} />
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
                                <StyledInput2
                                    type="number"
                                    value={item?.fromHours}
                                    onChange={changeTimeHandler}
                                    time
                                />

                                {console.log('item', item)}
                                <StyledInput2
                                    type="number"
                                    value={item?.fromMinutes}
                                />
                                <Dropdown0 />
                                <StyledInputText2_1
                                    label="to"
                                    // label={item?.fromHours}
                                />
                                <StyledInput2
                                    type="number"
                                    value={item?.toHours}
                                />
                                <StyledInput2
                                    type="number"
                                    value={item?.toMinutes}
                                />
                                <Dropdown0 />
                                <StyledInputText2_2
                                    
                                    value={item?.toHours}
                                />
                                <div
                                    style={{
                                        marginTop: '23px',
                                        marginRight: '22px',
                                        opacity: '0.5',
                                    }}
                                >
                                    3 hours
                                </div>
                                <StyledCheckBox
                                    type="checkbox"
                                    
                                    value={item?.toMinutes}
                                    onChange={changeCheckHandler}
                                />
                                <StyledInputText2_2
                                    label={`Set all for ${
                                        item?.toIsAm === 'AN' ? 'AN' : 'FN'
                                    }`}
                                    value={item?.toIsAm ? 'AN' : 'FN'}
                                    onChange={changeCheckFNHandler}
                                />
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
                        <StyledInputText3 label="Labs" />
                    </div>
                    <SubjectLabComponent
                        details={labDetails}
                        setDetails={setLabDetails}
                        label="Lab"
                    />
                </StyledWrapper>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Pop dataForm = {DataForm}  onClick={(e) => onClick(e.target.value)} />
                    {/* <div
                        onClick={(e) => onClick(e)}
                        style={{
                            width: 174,
                            height: '40px',
                            background: 'blue',
                            borderRadius: 6,
                            right: '',
                            top: 10,
                            border: '0.2px solid black',
                            marginBottom: '30px',
                            marginTop: '30px',
                            color:'white'
                        }}
                    >
                        Save
                    </div>

                    <div
                    
                        style={{
                            width: 908,
                            height: '293px',
                            background: 'red',
                            borderRadius: 6,
                            marginRight: '10%',
                            top: 50,
                            marginTop: '30%',
                            position: 'absolute',
                            
                        }}
                    >
                        s--s-s-s-ss-s-s-s-s-
                    </div> */}
                </div>
            </StyledMainContainer>
        </>
    )
}

export default CreateSchedule

const SaveButton = styled(Button)`
    border: 1px solid #5375e2;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    padding: 10.5px 49px;
    color: #ffffff;
    margin-top: 56px;
    background: #5375e2;
`

const StyledMainContainer = styled.div`
    padding: 35px 122px 89px;
`
const StyledArrow = styled.img`
    height: 24px;
    width: 24px;
    margin-top: 4px;
`
const StyledTitle = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
    margin-left: 19px;
`
const StyledWrapper = styled(Wrapper)`
    padding: 37px 55px 50px 55px;
    background: #fbfbfb;
`
const StyledInputText1 = styled(TextComponent)`
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 12px;
    margin-right: 30%;
`
const StyledInputText2 = styled(TextComponent)`
    margin-top: 21px;
    margin-right: 37px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
`
const StyledInput2 = styled(InputComponent)`
    background: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    padding: 17px 0px 17px 16px;
    margin-right: 30px;
    ${'' /* max-width: 4.53%; */}
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    width: 5%;
`
const StyledInputText2_1 = styled(TextComponent)`
    margin-top: 21px;
    margin-right: 37px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
`
const StyledInputText2_2 = styled(TextComponent)`
    margin-top: 21px;
    margin-right: 56px;
    color: #767676;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
`
const StyledCheckBox = styled(InputComponent)`
    margin-top: 10px;
    margin-right: 13px;
    color: #767676;
`
const StyledSubjectLabel = styled(TextComponent)`
    background: #f2f2f2;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #aba9ae;
    padding: 20px 0px 20px 12.8px;
    margin-top: 34px;
`

const FNANButton = styled(Button)`
    border: 1px solid #5375e2;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    padding: 21px 22px;
    color: #5375e2;
    margin-top: 30px;
`
const StyledInputText3 = styled(StyledInputText1)`
    margin-bottom: 30px;
`
