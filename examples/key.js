/* eslint-disable no-console,func-names,react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import Table from 'rc-table';
import 'rc-table/assets/index.less';

const CheckBox = React.createClass({
  render() {
    const props = this.props;
    return (
      <label>
        <input type="checkbox" />
        {props.id}
      </label>
    );
  },
});

const MyTable = React.createClass({
  getInitialState() {
    const props = this.props;
    return {
      data: props.data,
    };
  },

  remove(index) {
    const rows = this.state.data;
    rows.splice(index, 1);
    this.setState({
      data: rows,
    });
  },

  handleClick(index) {
    const self = this;
    return () => {
      self.remove(index);
    };
  },

  checkbox(a) {
    return <CheckBox id={a} />;
  },

  renderAction(o, row, index) {
    return <a href="#" onClick={this.handleClick(index)}>Delete</a>;
  },

  render() {
    const state = this.state;
    const columns = [
      { title: 'title1', dataIndex: 'a', key: 'a', width: 100, render: this.checkbox },
      { title: 'title2', dataIndex: 'b', key: 'b', width: 100 },
      { title: 'title3', dataIndex: 'c', key: 'c', width: 200 },
      { title: 'Operations', dataIndex: '', key: 'x', render: this.renderAction },
    ];
    return (
      <Table columns={columns} data={state.data} className="table" rowKey={record => record.a} />
    );
  },
});

const data = [{ a: '123' }, { a: 'cdd', b: 'edd' }, { a: '1333', c: 'eee', d: 2 }];

ReactDOM.render(
  <div>
    <h2>specify key</h2>
    <MyTable data={data} />
  </div>,
  document.getElementById('__react-content')
);
