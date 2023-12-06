import styled from "styled-components";

const ButtonContainer = styled.button`
    width: 20%;
    height: 62px;
    margin-top: 20px;
    color: #E6EDF3;
    font-size: 18px;
    padding: 5px 20px;
    background: transparent;
    border: solid 1px #E6EDF3;
    border-radius: 20px;

    &:hover {
        color: #E6EDF360;
        border: solid 1px #E6EDF360;
        cursor: pointer; 
    }
`;

export default ButtonContainer;