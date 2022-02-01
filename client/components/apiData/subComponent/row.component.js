import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RowBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
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

export const Row = ({ name, value }) => {
  return (
    <RowBlock>
      <KeyBlock>{name} : </KeyBlock>
      <ValueBlock>{value}</ValueBlock>
    </RowBlock>
  );
};

Row.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};
