import React from 'react'
import styled from "styled-components";
import TextComponent from '../Components/TextComponent';
const Header = () => {
  return (
    <StyledHeaderContainer>
        <div>
        <CollegeLogo src="https://i.ibb.co/RQV2JZV/college-Logo.png" alt="LOGO"/>
        </div>
        <DivDivider1 >
          <StyledHeaderText1 label="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY"/>
          <StyledHeaderText2 label="Exam Scheduler"/>
        </DivDivider1>
        <DivDivider2>
          <UserLogo src="https://i.ibb.co/wgKdx86/healthicons-ui-user-profile.png"/>
          <UserName label = "Waseem"/>
        </DivDivider2>
    </StyledHeaderContainer>
  )
}

export default Header

const StyledHeaderContainer = styled.div`
  ${'' /* padding: 1% 8% 0.5% 3%; */}
  display: flex;
  flex-direction: row;
  background: #5375e2;
`;

const CollegeLogo = styled.img`
  height: 52px;
  width: 53px;
 margin-left:23px;
 margin-top:7px;
`;

const StyledHeaderText1 = styled(TextComponent)`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  margin-left: 3%;
  margin-bottom: 3px;
  flex-direction: row;
`;

const StyledHeaderText2 = styled(TextComponent)`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #ffffff;
  margin-left: 3%;
`;
const DivDivider1 = styled.div`
  width: 100%;
`;

const DivDivider2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 45%;
`;

const UserLogo = styled.img`
  height: 30px;
  width: 30px;
  margin-top: 14px;
  margin-bottom: 14px;
  margin-right:10px
`;
const UserName = styled(TextComponent)`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  margin-top: 17px;
  margin-bottom: 14px;
  ${'' /* margin-left: 11px; */}
  margin-right:20px

`;