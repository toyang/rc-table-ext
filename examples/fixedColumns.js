webpackJsonp([18],{

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
throw new Error("Cannot find module \"rc-table\"");
throw new Error("Cannot find module \"rc-table/assets/index.less\"");
/* eslint-disable no-console,func-names,react/no-multi-comp */





var columns = [{ title: 'title1', dataIndex: 'a', key: 'a', width: 100, fixed: 'left' }, { title: 'title2', dataIndex: 'b', key: 'b', width: 100, fixed: 'left' }, { title: 'title3', dataIndex: 'c', key: 'c' }, { title: 'title4', dataIndex: 'b', key: 'd' }, { title: 'title5', dataIndex: 'b', key: 'e' }, { title: 'title6', dataIndex: 'b', key: 'f' }, { title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    'title7',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
    'Hello world!'
  ), dataIndex: 'b', key: 'g' }, { title: 'title8', dataIndex: 'b', key: 'h' }, { title: 'title9', dataIndex: 'b', key: 'i' }, { title: 'title10', dataIndex: 'b', key: 'j' }, { title: 'title11', dataIndex: 'b', key: 'k' }, { title: 'title12', dataIndex: 'b', key: 'l', width: 100, fixed: 'right' }];

var data = [{ a: '123', b: 'xxxxxxxx', d: 3, key: '1' }, { a: 'cdd', b: 'edd12221', d: 3, key: '2' }, { a: '133', c: 'edd12221', d: 2, key: '3' }, { a: '133', c: 'edd12221', d: 2, key: '4' }, { a: '133', c: 'edd12221', d: 2, key: '5' }, { a: '133', c: 'edd12221', d: 2, key: '6' }, { a: '133', c: 'edd12221', d: 2, key: '7' }, { a: '133', c: 'edd12221', d: 2, key: '8' }, { a: '133', c: 'edd12221', d: 2, key: '9' }];

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  { style: { width: 800 } },
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h2',
    null,
    'Fixed columns'
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_table___default.a, {
    columns: columns,
    expandedRowRender: function expandedRowRender(record) {
      return record.title;
    },
    expandIconAsCell: true,
    scroll: { x: 1200 },
    data: data
  })
), document.getElementById('__react-content'));

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(200);


/***/ })

},[372]);
//# sourceMappingURL=fixedColumns.js.map