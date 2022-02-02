import styled from 'styled-components';

export const ItemBlock = styled.div`
  display: block;
  justify-content: center;
  align-items: center;

  min-height: 350px;
  min-width: 300px;

  margin: 25px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.QUATERNARY};
`;

export const HalfItemBlock = styled(ItemBlock)`
  min-height: 150px;
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`;
