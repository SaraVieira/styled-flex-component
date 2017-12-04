import styled from 'styled-components'
import is from 'styled-is'

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

  ${is('contentStretch')`
    align-content: stretch;
  `};

  ${is('justifyCenter')`
    justify-items: center;
  `};

  ${is('justifyStart')`
    justify-items: flex-start;
  `};

  ${is('justifyEnd')`
    justify-items: flex-end;
  `};

  ${is('justifyBetween')`
    justify-items: space-between;
  `};

  ${is('justifyAround')`
    justify-items: space-around;
  `};

  ${is('justifyEvenly')`
    justify-items: space-evenly;
  `};

  ${is('rowReverse')`
    flex-direction: row-reverse;
  `};

  ${is('column')`
    flex-direction: column-reverse;
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
`

export default Flex
