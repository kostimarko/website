import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: ${props => props.border || '1px solid #ccc'};
  background-color: #fff;
  margin-bottom: 25px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  :focus {
    outline: 1px solid #080708;
  }
`;

export const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #080708;
  color: #fff;
  margin-top: 25px;
  border-radius: 150px;
  font-weight: 700;
`;

export const Label = styled.p`
  font-size: 13px;
  line-height: 15px;
  width: 300px;
  margin-bottom: 5px;
  display: flex;
`;
export const TextArea = styled.textarea`
  width: 300px;
  height: 200px;
  border: ${props => props.border || '1px solid #ccc'};
  background-color: #fff;
  resize: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  :focus {
    outline: 1px solid #080708;
  }
`;
