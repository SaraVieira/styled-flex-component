// eslint-disable-next-line import/no-unresolved
import styled from 'styled-components';
import is from 'styled-is';

export default styled.div.withConfig({
  shouldForwardProp: (prop) => ['children'].includes(prop),
})`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;

  /********************************* display *********************************/
  /***************** http://cssreference.io/property/display *****************/

  ${is('inline')`
    display: inline-flex;
  `};

  /******************************** direction ********************************/
  /************** http://cssreference.io/property/flex-direction **************/

  ${is('row')`
    flex-direction: row; /* default */
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

  /*********************************** wrap ***********************************/
  /**************** http://cssreference.io/property/flex-wrap ****************/

  ${is('nowrap')`
    flex-wrap: nowrap; /* default */
  `};

  ${is('wrap')`
    flex-wrap: wrap;
  `};

  ${is('wrapReverse')`
    flex-wrap: wrap-reverse;
  `};

  /***************************** justify-content *****************************/
  /************* http://cssreference.io/property/justify-content *************/

  ${is('justifyStart')`
    justify-content: flex-start; /* default */
  `};

  ${is('justifyEnd')`
    justify-content: flex-end;
  `};

  ${is('justifyCenter')`
    justify-content: center;
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

  /****************************** align-content ******************************/
  /************** http://cssreference.io/property/align-content **************/

  ${is('contentStart')`
    align-content: flex-start;
  `};

  ${is('contentEnd')`
    align-content: flex-end;
  `};

  ${is('contentCenter')`
    align-content: center;
  `};

  ${is('contentSpaceBetween')`
    align-content: space-between;
  `};

  ${is('contentSpaceAround')`
    align-content: space-around;
  `};

  ${is('contentStretch')`
    align-content: stretch; /* default */
  `};

  /******************************* align-items *******************************/
  /*************** http://cssreference.io/property/align-items ***************/

  ${is('alignStart')`
    align-items: flex-start;
  `};

  ${is('alignEnd')`
    align-items: flex-end;
  `};

  ${is('alignCenter')`
    align-items: center;
  `};

  ${is('alignBaseline')`
    align-items: baseline;
  `};

  ${is('alignStretch')`
    align-items: stretch;
  `};

  /******************************** utilities ********************************/

  ${is('full')`
    width: 100%;
    height: 100%;
    flex-basis: 100%;
  `};

  ${is('center')`
    align-items: center;
    justify-content: center;
  `};
`;
