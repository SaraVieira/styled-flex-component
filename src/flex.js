import styled from 'styled-components';
import is from 'styled-is';

const Flex = styled.div`
  display: flex;

  ${is('full')`
    width: 100%;
    height: 100%;
    flex-basis: 100%;
  `};

  ${is('inline')`
    display: inline-flex;
  `};

  ${is('center')`
    align-items: center;
    justify-content: center;
  `};

  ${is('alignCenter')`
    align-items: center;
  `};

  ${is('alignStart')`
    align-items: flex-start;
  `};

  ${is('alignEnd')`
    align-items: flex-end;
  `};

  ${is('alignBaseline')`
    align-items: baseline;
  `};

  ${is('alignStretch')`
    align-items: stretch;
  `};

  ${is('alignCenter')`
    align-items: center;
  `};

  ${is('contentCenter')`
    align-content: center;
  `};

  ${is('contentStart')`
    align-content: flex-start;
  `};

  ${is('contentEnd')`
    align-content: flex-end;
  `};

  ${is('contentBaseline')`
    align-content: baseline;
  `};

  ${is('contentStretch')`
    align-content: stretch;
  `};

  ${is('contentAround')`
    align-content: around;
  `};

  ${is('justifyCenter')`
    justify-content: center;
  `};

  ${is('justifyStart')`
    justify-content: flex-start;
  `};

  ${is('justifyEnd')`
    justify-content: flex-end;
  `};

  ${is('justifyBetween')`
    justify-content: space-between;
  `};

  ${is('justifyAround')`
    justify-content: space-around;
  `};

  ${is('justifyEvenly')`
    justify-content: space-evenly;
  `};

  ${is('rowReverse')`
    flex-direction: row-reverse;
  `};

  ${is('column')`
    flex-direction: column;
  `};

  ${is('columnReverse')`
    flex-direction: column-reverse;
  `};

  ${is('wrap')`
    flex-wrap: wrap;
  `};

  ${is('wrapReverse')`
    flex-wrap: wrap-reverse;
  `};
`;

export default Flex;
