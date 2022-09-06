import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  font-weight: 200;
  font-size: 12px;
  line-height: 130%;
  background: #fbfbfb;
  padding: 0.5% 25.6% 0.5% 33%;
  display: flex;
  flex-direction: row;
  letter-spacing: 0.03em;
  color: #000000;
  //color:red;
  margin-top:50px;
`;

const FooterText = styled.p`
  margin-left: 15%;
  background: #fbfbfb;
`;

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <p>Conditions of use & sale </p>
        <FooterText>Privacy notice</FooterText>
        <FooterText>Powered By Incresco</FooterText>
      </FooterWrapper>
    </>
  );
};

export default Footer;
