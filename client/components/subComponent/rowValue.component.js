import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row } from './row.styled';

const RowBlock = styled(Row)`
  justify-content: normal;
  width: 300px;
`;

const MidBlock = styled.div`
  min-width: 49%;
`;

const KeyBlock = styled(MidBlock)`
  color: ${(props) => props.theme.displayBlock.keyBlockColor};
`;

const ValueBlock = styled(MidBlock)`
  color: ${(props) => props.theme.displayBlock.valueBlockColor};
  overflow: auto;
`;

export const RowValue = ({ name, value }) => {
  return (
    <RowBlock>
      <KeyBlock>{name} : </KeyBlock>
      <ValueBlock>{value}</ValueBlock>
    </RowBlock>
  );
};

RowValue.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};
