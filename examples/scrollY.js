webpackJsonp([5],{

/***/ 213:
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





var data = [];
for (var i = 0; i < 10; i++) {
  data.push({
    key: i,
    a: 'a' + i,
    b: 'b' + i,
    c: 'c' + i
  });
}

var Test = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
  displayName: 'Test',
  getInitialState: function getInitialState() {
    return {
      showBody: true
    };
  },
  toggleBody: function toggleBody() {
    this.setState({
      showBody: !this.state.showBody
    });
  },
  render: function render() {
    var columns = [{ title: 'title1', key: 'a', dataIndex: 'a', width: 100 }, { id: '123', title: 'title2', dataIndex: 'b', key: 'b', width: 100 }, { title: 'title3', key: 'c', dataIndex: 'c', width: 200 }, {
      title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { onClick: this.toggleBody, href: '#' },
        this.state.showBody ? '隐藏' : '显示',
        '\u4F53'
      ),
      key: 'x',
      width: 200,
      render: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: '#' },
          'Operations'
        );
      }
    }];
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_rc_table___default.a, {
      columns: columns,
      data: data,
      scroll: { y: 300 },
      rowKey: function rowKey(record) {
        return record.key;
      },
      bodyStyle: {
        display: this.state.showBody ? '' : 'none'
      }
    });
  }
});

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'h2',
    null,
    'scroll body table'
  ),
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Test, null)
), document.getElementById('__react-content'));

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(213);


/***/ })

},[385]);
//# sourceMappingURL=scrollY.js.map