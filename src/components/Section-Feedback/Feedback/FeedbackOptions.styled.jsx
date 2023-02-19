import styled from "@emotion/styled";

export const BtnWrapper = styled.div`
    display: flex;
    gap:20px;
`;

export const ButtonStat = styled.button`
  padding:5px 10px;
  border: 1px solid;
  border-radius: 10px;
  background-color: transparent;
  transition: 500ms background-color;

cursor: pointer;

:hover{
background-color: #a8a6a6;
}
`;