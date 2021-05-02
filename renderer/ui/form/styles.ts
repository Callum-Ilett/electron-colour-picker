import styled from "styled-components";

export const StyledForm = styled.form``;

export const Group = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;
export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
`;
export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  background-color: #333333;
  background-clip: padding-box;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const StyledSelect = styled.select`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  background-color: #333333;
  background-clip: padding-box;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const StyledCheckBox = styled.div`
  & input {
    margin-right: 8px;
  }
`;
