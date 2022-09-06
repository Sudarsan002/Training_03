import React from "react";
import styled from "styled-components";
import { useState } from "react";

const CustomDropDown = (props) => {
  const {
    label,
    selectedOption,
    setSelectedOption,
    options = [],
    optionObjectValue = null,
  } = props;
  //console.log(options, selectedOption);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const handleSelected = (option) => {
    setSelectedOption(option);
    setIsOptionsVisible(false);
  };

  return (
    <>
      {label && <StyledDropDownText>{label}</StyledDropDownText>}
      <StyledDropDown>
        <StyledDropDownComponent>
          <StyledSelectedOptionWrapper
            onClick={() => setIsOptionsVisible(!isOptionsVisible)}
          >
            <StyledDropDownLabel>{selectedOption}</StyledDropDownLabel>
            {isOptionsVisible ? (
              <svg
                width="13"
                height="10"
                viewBox="0 0 13 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0148 1.99732L10.5896 0.282172L6.04937 5.97527L1.41013 0.404208L0.015455 2.15685L6.07996 9.45535L12.0148 1.99732Z"
                  fill="#1F1F1F"
                />
              </svg>
            ) : (
              <svg
                width="13"
                height="10"
                viewBox="0 0 13 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0148 1.99732L10.5896 0.282172L6.04937 5.97527L1.41013 0.404208L0.015455 2.15685L6.07996 9.45535L12.0148 1.99732Z"
                  fill="#1F1F1F"
                />
              </svg>
            )}
          </StyledSelectedOptionWrapper>
          {isOptionsVisible && (
            <StyledDropDownOptions>
              {options.length > 0 &&
                options?.map((option) => (
                  <StyledDropDownOption onClick={() => handleSelected(option)}>
                    {optionObjectValue !== null
                      ? option[optionObjectValue]
                      : option}
                  </StyledDropDownOption>
                ))}
            </StyledDropDownOptions>
          )}
        </StyledDropDownComponent>
      </StyledDropDown>
    </>
  );
};

export default CustomDropDown;

const StyledDropDown = styled.div`
  position: relative;
`;

const StyledDropDownText = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 12px;
`;

const StyledDropDownLabel = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 116%;
  width: 100%;
`;

const StyledDropDownComponent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  height: 100%;
  position: relative;
  border: 1px solid #e8e8ea;
  border-radius: 5px;
  color: #a5a3a9;
  padding: 20px 24px;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 116%;
`;

const StyledSelectedOptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const StyledDropDownOptions = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0px;
  transform: translateY(100%);
  background-color: #ffffff;
  width: 100%;
  border-radius: 5px;
  max-height: 310px;
  overflow: scroll;
  color: #000000;
  z-index: 2;
  padding: 14px 0px;
`;

const StyledDropDownOption = styled.div`
  padding: 5.5px 24px;
  &:hover {
    background-color: #5375e2;
  }
`;
