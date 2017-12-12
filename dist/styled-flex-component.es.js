import styled from 'styled-components';
import is from 'styled-is';

var taggedTemplateLiteral = function(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw),
      },
    })
  );
};

var _templateObject = taggedTemplateLiteral(
  ['\n    display: inline-flex;\n  '],
  ['\n    display: inline-flex;\n  ']
);
var _templateObject2 = taggedTemplateLiteral(
  ['\n    flex-direction: row; /* default */\n  '],
  ['\n    flex-direction: row; /* default */\n  ']
);
var _templateObject3 = taggedTemplateLiteral(
  ['\n    flex-direction: row-reverse;\n  '],
  ['\n    flex-direction: row-reverse;\n  ']
);
var _templateObject4 = taggedTemplateLiteral(
  ['\n    flex-direction: column;\n  '],
  ['\n    flex-direction: column;\n  ']
);
var _templateObject5 = taggedTemplateLiteral(
  ['\n    flex-direction: column-reverse;\n  '],
  ['\n    flex-direction: column-reverse;\n  ']
);
var _templateObject6 = taggedTemplateLiteral(
  ['\n    flex-wrap: nowrap; /* default */\n  '],
  ['\n    flex-wrap: nowrap; /* default */\n  ']
);
var _templateObject7 = taggedTemplateLiteral(
  ['\n    flex-wrap: wrap;\n  '],
  ['\n    flex-wrap: wrap;\n  ']
);
var _templateObject8 = taggedTemplateLiteral(
  ['\n    flex-wrap: wrap-reverse;\n  '],
  ['\n    flex-wrap: wrap-reverse;\n  ']
);
var _templateObject9 = taggedTemplateLiteral(
  ['\n    justify-content: flex-start; /* default */\n  '],
  ['\n    justify-content: flex-start; /* default */\n  ']
);
var _templateObject10 = taggedTemplateLiteral(
  ['\n    justify-content: flex-end;\n  '],
  ['\n    justify-content: flex-end;\n  ']
);
var _templateObject11 = taggedTemplateLiteral(
  ['\n    justify-content: center;\n  '],
  ['\n    justify-content: center;\n  ']
);
var _templateObject12 = taggedTemplateLiteral(
  ['\n    justify-content: space-between;\n  '],
  ['\n    justify-content: space-between;\n  ']
);
var _templateObject13 = taggedTemplateLiteral(
  ['\n    justify-content: space-around;\n  '],
  ['\n    justify-content: space-around;\n  ']
);
var _templateObject14 = taggedTemplateLiteral(
  ['\n    align-content: flex-start;\n  '],
  ['\n    align-content: flex-start;\n  ']
);
var _templateObject15 = taggedTemplateLiteral(
  ['\n    align-content: flex-end;\n  '],
  ['\n    align-content: flex-end;\n  ']
);
var _templateObject16 = taggedTemplateLiteral(
  ['\n    align-content: center;\n  '],
  ['\n    align-content: center;\n  ']
);
var _templateObject17 = taggedTemplateLiteral(
  ['\n    align-content: space-between;\n  '],
  ['\n    align-content: space-between;\n  ']
);
var _templateObject18 = taggedTemplateLiteral(
  ['\n    align-content: space-around;\n  '],
  ['\n    align-content: space-around;\n  ']
);
var _templateObject19 = taggedTemplateLiteral(
  ['\n    align-content: stretch; /* default */\n  '],
  ['\n    align-content: stretch; /* default */\n  ']
);
var _templateObject20 = taggedTemplateLiteral(
  ['\n    align-items: flex-start;\n  '],
  ['\n    align-items: flex-start;\n  ']
);
var _templateObject21 = taggedTemplateLiteral(
  ['\n    align-items: flex-end;\n  '],
  ['\n    align-items: flex-end;\n  ']
);
var _templateObject22 = taggedTemplateLiteral(
  ['\n    align-items: center;\n  '],
  ['\n    align-items: center;\n  ']
);
var _templateObject23 = taggedTemplateLiteral(
  ['\n    align-items: baseline;\n  '],
  ['\n    align-items: baseline;\n  ']
);
var _templateObject24 = taggedTemplateLiteral(
  ['\n    align-items: stretch;\n  '],
  ['\n    align-items: stretch;\n  ']
);
var _templateObject25 = taggedTemplateLiteral(
  ['\n    width: 100%;\n    height: 100%;\n    flex-basis: 100%;\n  '],
  ['\n    width: 100%;\n    height: 100%;\n    flex-basis: 100%;\n  ']
);
var _templateObject26 = taggedTemplateLiteral(
  ['\n    align-items: center;\n    justify-content: center;\n  '],
  ['\n    align-items: center;\n    justify-content: center;\n  ']
);

var flex = styled.div.withConfig({
  displayName: 'flex',
})(
  [
    'display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-content:stretch;',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
  ],
  is('inline')(_templateObject),
  is('row')(_templateObject2),
  is('rowReverse')(_templateObject3),
  is('column')(_templateObject4),
  is('columnReverse')(_templateObject5),
  is('nowrap')(_templateObject6),
  is('wrap')(_templateObject7),
  is('wrapReverse')(_templateObject8),
  is('justifyStart')(_templateObject9),
  is('justifyEnd')(_templateObject10),
  is('justifyCenter')(_templateObject11),
  is('justifyBetween')(_templateObject12),
  is('justifyAround')(_templateObject13),
  is('contentStart')(_templateObject14),
  is('contentEnd')(_templateObject15),
  is('contentCenter')(_templateObject16),
  is('contentSpaceBetween')(_templateObject17),
  is('contentSpaceAround')(_templateObject18),
  is('contentStretch')(_templateObject19),
  is('alignStart')(_templateObject20),
  is('alignEnd')(_templateObject21),
  is('alignCenter')(_templateObject22),
  is('alignBaseline')(_templateObject23),
  is('alignStretch')(_templateObject24),
  is('full')(_templateObject25),
  is('center')(_templateObject26)
);

var _templateObject$1 = taggedTemplateLiteral(
  ['\n    order: ', '\n  '],
  ['\n    order: ', '\n  ']
);
var _templateObject2$1 = taggedTemplateLiteral(
  ['\n    flex-basis: ', '\n  '],
  ['\n    flex-basis: ', '\n  ']
);
var _templateObject3$1 = taggedTemplateLiteral(
  ['\n    flex-grow: ', ';\n  '],
  ['\n    flex-grow: ', ';\n  ']
);
var _templateObject4$1 = taggedTemplateLiteral(
  ['\n    flex-shrink: ', ';\n  '],
  ['\n    flex-shrink: ', ';\n  ']
);
var _templateObject5$1 = taggedTemplateLiteral(
  ['\n    flex-shrink: 0;\n  '],
  ['\n    flex-shrink: 0;\n  ']
);

var item = styled.div.withConfig({
  displayName: 'item',
})(
  [
    'order:0;flex-basis:auto;flex-grow:0;flex-shrink:1;',
    ';',
    ';',
    ';',
    ';',
    ';',
  ],
  is('order')(_templateObject$1, function(props) {
    return props.order;
  }),
  is('basis')(_templateObject2$1, function(props) {
    return props.basis;
  }),
  is('grow')(_templateObject3$1, function(props) {
    return props.grow;
  }),
  is('shrink')(_templateObject4$1, function(props) {
    return props.shrink;
  }),
  is('noShrink')(_templateObject5$1)
);

export { item as FlexItem };
export default flex;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW1pdG9zL2Rldi95bGQvc3R5bGVkLWZsZXgtY29tcG9uZW50L3NyYy9mbGV4LmpzIiwiL1VzZXJzL3JhbWl0b3MvZGV2L3lsZC9zdHlsZWQtZmxleC1jb21wb25lbnQvc3JjL2l0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgaXMgZnJvbSAnc3R5bGVkLWlzJztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIGRpc3BsYXkgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAvKioqKioqKioqKioqKioqKiogaHR0cDovL2Nzc3JlZmVyZW5jZS5pby9wcm9wZXJ0eS9kaXNwbGF5ICoqKioqKioqKioqKioqKioqL1xuXG4gICR7aXMoJ2lubGluZScpYFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBgfTtcblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogZGlyZWN0aW9uICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAvKioqKioqKioqKioqKiogaHR0cDovL2Nzc3JlZmVyZW5jZS5pby9wcm9wZXJ0eS9mbGV4LWRpcmVjdGlvbiAqKioqKioqKioqKioqKi9cblxuICAke2lzKCdyb3cnKWBcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyAvKiBkZWZhdWx0ICovXG4gIGB9O1xuXG4gICR7aXMoJ3Jvd1JldmVyc2UnKWBcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGB9O1xuXG4gICR7aXMoJ2NvbHVtbicpYFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGB9O1xuXG4gICR7aXMoJ2NvbHVtblJldmVyc2UnKWBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIGB9O1xuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiB3cmFwICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAvKioqKioqKioqKioqKioqKiBodHRwOi8vY3NzcmVmZXJlbmNlLmlvL3Byb3BlcnR5L2ZsZXgtd3JhcCAqKioqKioqKioqKioqKioqL1xuXG4gICR7aXMoJ25vd3JhcCcpYFxuICAgIGZsZXgtd3JhcDogbm93cmFwOyAvKiBkZWZhdWx0ICovXG4gIGB9O1xuXG4gICR7aXMoJ3dyYXAnKWBcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIGB9O1xuXG4gICR7aXMoJ3dyYXBSZXZlcnNlJylgXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG4gIGB9O1xuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBqdXN0aWZ5LWNvbnRlbnQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIC8qKioqKioqKioqKioqIGh0dHA6Ly9jc3NyZWZlcmVuY2UuaW8vcHJvcGVydHkvanVzdGlmeS1jb250ZW50ICoqKioqKioqKioqKiovXG5cbiAgJHtpcygnanVzdGlmeVN0YXJ0JylgXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAvKiBkZWZhdWx0ICovXG4gIGB9O1xuXG4gICR7aXMoJ2p1c3RpZnlFbmQnKWBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBgfTtcblxuICAke2lzKCdqdXN0aWZ5Q2VudGVyJylgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGB9O1xuXG4gICR7aXMoJ2p1c3RpZnlCZXR3ZWVuJylgXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBgfTtcblxuICAke2lzKCdqdXN0aWZ5QXJvdW5kJylgXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGB9O1xuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogYWxpZ24tY29udGVudCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIC8qKioqKioqKioqKioqKiBodHRwOi8vY3NzcmVmZXJlbmNlLmlvL3Byb3BlcnR5L2FsaWduLWNvbnRlbnQgKioqKioqKioqKioqKiovXG5cbiAgJHtpcygnY29udGVudFN0YXJ0JylgXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgYH07XG5cbiAgJHtpcygnY29udGVudEVuZCcpYFxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBgfTtcblxuICAke2lzKCdjb250ZW50Q2VudGVyJylgXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBgfTtcblxuICAke2lzKCdjb250ZW50U3BhY2VCZXR3ZWVuJylgXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYH07XG5cbiAgJHtpcygnY29udGVudFNwYWNlQXJvdW5kJylgXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBgfTtcblxuICAke2lzKCdjb250ZW50U3RyZXRjaCcpYFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7IC8qIGRlZmF1bHQgKi9cbiAgYH07XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogYWxpZ24taXRlbXMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgLyoqKioqKioqKioqKioqKiBodHRwOi8vY3NzcmVmZXJlbmNlLmlvL3Byb3BlcnR5L2FsaWduLWl0ZW1zICoqKioqKioqKioqKioqKi9cblxuICAke2lzKCdhbGlnblN0YXJ0JylgXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGB9O1xuXG4gICR7aXMoJ2FsaWduRW5kJylgXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBgfTtcblxuICAke2lzKCdhbGlnbkNlbnRlcicpYFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGB9O1xuXG4gICR7aXMoJ2FsaWduQmFzZWxpbmUnKWBcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGB9O1xuXG4gICR7aXMoJ2FsaWduU3RyZXRjaCcpYFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBgfTtcblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogdXRpbGl0aWVzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICR7aXMoJ2Z1bGwnKWBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgYH07XG5cbiAgJHtpcygnY2VudGVyJylgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYH07XG5gO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgaXMgZnJvbSAnc3R5bGVkLWlzJztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmRpdmBcbiAgb3JkZXI6IDA7XG4gIGZsZXgtYmFzaXM6IGF1dG87XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDE7XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogb3JkZXIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgLyoqKioqKioqKioqKioqKioqKiBodHRwOi8vY3NzcmVmZXJlbmNlLmlvL3Byb3BlcnR5L29yZGVyICoqKioqKioqKioqKioqKioqKi9cblxuICAke2lzKCdvcmRlcicpYFxuICAgIG9yZGVyOiAke3Byb3BzID0+IHByb3BzLm9yZGVyfVxuICBgfTtcblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogZmxleC1iYXNpcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgLyoqKioqKioqKioqKioqKiogaHR0cDovL2Nzc3JlZmVyZW5jZS5pby9wcm9wZXJ0eS9mbGV4LWJhc2lzICoqKioqKioqKioqKioqKiovXG5cbiAgJHtpcygnYmFzaXMnKWBcbiAgICBmbGV4LWJhc2lzOiAke3Byb3BzID0+IHByb3BzLmJhc2lzfVxuICBgfTtcblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogZmxleC1ncm93ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAvKioqKioqKioqKioqKioqKiBodHRwOi8vY3NzcmVmZXJlbmNlLmlvL3Byb3BlcnR5L2ZsZXgtZ3JvdyAqKioqKioqKioqKioqKioqL1xuXG4gICR7aXMoJ2dyb3cnKWBcbiAgICBmbGV4LWdyb3c6ICR7cHJvcHMgPT4gcHJvcHMuZ3Jvd307XG4gIGB9O1xuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIGZsZXgtc2hyaW5rICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIC8qKioqKioqKioqKioqKiogaHR0cDovL2Nzc3JlZmVyZW5jZS5pby9wcm9wZXJ0eS9mbGV4LXNocmluayAqKioqKioqKioqKioqKiovXG5cbiAgJHtpcygnc2hyaW5rJylgXG4gICAgZmxleC1zaHJpbms6ICR7cHJvcHMgPT4gcHJvcHMuc2hyaW5rfTtcbiAgYH07XG5cbiAgJHtpcygnbm9TaHJpbmsnKWBcbiAgICBmbGV4LXNocmluazogMDtcbiAgYH07XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsImRpdiIsImlzIiwicHJvcHMiLCJvcmRlciIsImJhc2lzIiwiZ3JvdyIsInNocmluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUdBLFdBQWVBLE9BQU9DLEdBQXRCOzs2T0FVSUMsR0FBRyxRQUFILENBVkosbUJBaUJJQSxHQUFHLEtBQUgsQ0FqQkosb0JBcUJJQSxHQUFHLFlBQUgsQ0FyQkosb0JBeUJJQSxHQUFHLFFBQUgsQ0F6Qkosb0JBNkJJQSxHQUFHLGVBQUgsQ0E3Qkosb0JBb0NJQSxHQUFHLFFBQUgsQ0FwQ0osb0JBd0NJQSxHQUFHLE1BQUgsQ0F4Q0osb0JBNENJQSxHQUFHLGFBQUgsQ0E1Q0osb0JBbURJQSxHQUFHLGNBQUgsQ0FuREosb0JBdURJQSxHQUFHLFlBQUgsQ0F2REoscUJBMkRJQSxHQUFHLGVBQUgsQ0EzREoscUJBK0RJQSxHQUFHLGdCQUFILENBL0RKLHFCQW1FSUEsR0FBRyxlQUFILENBbkVKLHFCQTBFSUEsR0FBRyxjQUFILENBMUVKLHFCQThFSUEsR0FBRyxZQUFILENBOUVKLHFCQWtGSUEsR0FBRyxlQUFILENBbEZKLHFCQXNGSUEsR0FBRyxxQkFBSCxDQXRGSixxQkEwRklBLEdBQUcsb0JBQUgsQ0ExRkoscUJBOEZJQSxHQUFHLGdCQUFILENBOUZKLHFCQXFHSUEsR0FBRyxZQUFILENBckdKLHFCQXlHSUEsR0FBRyxVQUFILENBekdKLHFCQTZHSUEsR0FBRyxhQUFILENBN0dKLHFCQWlISUEsR0FBRyxlQUFILENBakhKLHFCQXFISUEsR0FBRyxjQUFILENBckhKLHFCQTJISUEsR0FBRyxNQUFILENBM0hKLHFCQWlJSUEsR0FBRyxRQUFILENBaklKOzs7Ozs7OztBQ0hBLEFBR0EsV0FBZUYsT0FBT0MsR0FBdEI7O29GQVNJQyxHQUFHLE9BQUgsQ0FUSixvQkFVYTtTQUFTQyxNQUFNQyxLQUFmO0NBVmIsR0FnQklGLEdBQUcsT0FBSCxDQWhCSixxQkFpQmtCO1NBQVNDLE1BQU1FLEtBQWY7Q0FqQmxCLEdBdUJJSCxHQUFHLE1BQUgsQ0F2QkoscUJBd0JpQjtTQUFTQyxNQUFNRyxJQUFmO0NBeEJqQixHQThCSUosR0FBRyxRQUFILENBOUJKLHFCQStCbUI7U0FBU0MsTUFBTUksTUFBZjtDQS9CbkIsR0FrQ0lMLEdBQUcsVUFBSCxDQWxDSjs7Ozs7In0=
