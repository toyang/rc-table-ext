webpackJsonp([8],{

/***/ 210:
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





var onRowClick = function onRowClick(record, index, event) {
  console.log('Click nth(' + index + ') row of parent, record.name: ' + record.name);
  // See https://facebook.github.io/react/docs/events.html for original click event details.
  if (event.shiftKey) {
    console.log('Shift + mouse click triggered.');
  }
};

var onRowDoubleClick = function onRowDoubleClick(record, index) {
  console.log('Double click nth(' + index + ') row of parent, record.name: ' + record.name);
};

var columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 400
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: 100,
  render: function render(text) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      null,
      text,
      ' (Trigger Cell Click)'
    );
  },
  onCellClick: function onCellClick(record, e) {
    console.log('Click cell', record, e.target);
  }
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  width: 200
}];

var data = [{
  key: 1,
  name: 'a',
  age: 32,
  address: 'I am a',
  children: [{
    key: 11,
    name: 'aa',
    age: 33,
    address: 'I am aa'
  }, {
    key: 12,
    name: 'ab',
    age: 33,
    address: 'I am ab',
    children: [{
      key: 121,
      name: 'aba',
      age: 33,
      address: 'I am aba'
    }]
  }, {
    key: 13,
    name: 'ac',
    age: 33,
    address: 'I am ac',
    children: [{
      key: 131,
      name: 'aca',
      age: 33,
      address: 'I am aca',
      children: [{
        key: 1311,
        name: 'acaa',
        age: 33,
        address: 'I am acaa'
      }, {
        key: 1312,
        name: 'acab',
        age: 33,
        address: 'I am acab'
      }]
    }]
  }]
}, {
  key: 2,
  name: 'b',
  age: 32,
  address: 'I am b'
}];

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_table___default.a, {
  columns: columns,
  data: data,
  onRowClick: onRowClick,
  onRowDoubleClick: onRowDoubleClick
}), document.getElementById('__react-content'));

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(210);


/***/ })

},[382]);
//# sourceMappingURL=rowAndCellClick.js.map