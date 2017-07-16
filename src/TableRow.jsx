import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TableCell from './TableCell';
import ExpandIcon from './ExpandIcon';

import {ContextMenu, Item, Separator} from 'react-contexify-ext';
import 'react-contexify-ext/dist/ReactContexify.min.css';

export default class TableRow extends React.Component {
  static propTypes = {
    onDestroy: PropTypes.func,
    onRowClick: PropTypes.func,
    onRowDoubleClick: PropTypes.func,
    onRowMouseEnter: PropTypes.func,
    onRowMouseLeave: PropTypes.func,
    record: PropTypes.object,
    prefixCls: PropTypes.string,
    expandIconColumnIndex: PropTypes.number,
    onHover: PropTypes.func,
    columns: PropTypes.array,
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    visible: PropTypes.bool,
    index: PropTypes.number,
    hoverKey: PropTypes.any,
    expanded: PropTypes.bool,
    expandable: PropTypes.any,
    onExpand: PropTypes.func,
    needIndentSpaced: PropTypes.bool,
    className: PropTypes.string,
    indent: PropTypes.number,
    indentSize: PropTypes.number,
    expandIconAsCell: PropTypes.bool,
    expandRowByClick: PropTypes.bool,
    store: PropTypes.object.isRequired,
    expandedRow: PropTypes.bool,
    fixed: PropTypes.bool,
    rowKey: PropTypes.string,
  }

  static defaultProps = {
    onRowClick() {},
    onRowDoubleClick() {},
    onRowMouseEnter() {},
    onRowMouseLeave() {},
    onDestroy() {},
    expandIconColumnIndex: 0,
    expandRowByClick: false,
    onHover() {},
  }

  state = {
    hovered: false,
    height: null,
  }

  componentDidMount() {
    const { store } = this.props;
    this.pushHeight();
    this.pullHeight();
    this.unsubscribe = store.subscribe(() => {
      this.setHover();
      this.pullHeight();
    });
  }

  componentWillUnmount() {
    const { record, onDestroy, index } = this.props;
    onDestroy(record, index);
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  onRowClick = (event) => {
    const {
      record,
      index,
      onRowClick,
      expandable,
      expandRowByClick,
      expanded,
      onExpand,
    } = this.props;
    if (expandable && expandRowByClick) {
      onExpand(!expanded, record, event, index);
    }
    onRowClick(record, index, event);
  }

  onRowDoubleClick = (event) => {
    const { record, index, onRowDoubleClick } = this.props;
    onRowDoubleClick(record, index, event);
  }

  onMouseEnter = (event) => {
    const { record, index, onRowMouseEnter, onHover, hoverKey } = this.props;
    onHover(true, hoverKey);
    onRowMouseEnter(record, index, event);
  }

  onMouseLeave = (event) => {
    const { record, index, onRowMouseLeave, onHover, hoverKey } = this.props;
    onHover(false, hoverKey);
    onRowMouseLeave(record, index, event);
  }

  setHover() {
    const { store, hoverKey } = this.props;
    const { currentHoverKey } = store.getState();
    if (currentHoverKey === hoverKey) {
      this.setState({ hovered: true });
    } else if (this.state.hovered === true) {
      this.setState({ hovered: false });
    }
  }


  pullHeight() {
    const { store, expandedRow, fixed, rowKey } = this.props;
    const { expandedRowsHeight } = store.getState();
    if (expandedRow && fixed && expandedRowsHeight[rowKey]) {
      this.setState({ height: expandedRowsHeight[rowKey] });
    }
  }

  pushHeight() {
    const { store, expandedRow, fixed, rowKey } = this.props;
    if (expandedRow && !fixed) {
      const { expandedRowsHeight } = store.getState();
      const height = this.trRef.getBoundingClientRect().height;
      expandedRowsHeight[rowKey] = height;
      store.setState({ expandedRowsHeight });
    }
  }

  onDestroyContextMenu = () => {
    console.log('onDestroyContextMenu');
    let div = this.contextMenuContainer;
    if(div){
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  }

  onContextMenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('onContextMenu',event);

    let onContextMenuItemClick = () => {
      console.log('item click', this);
      console.log('item click', this.props.record);
      this.onDestroyContextMenu();
    }

    onContextMenuItemClick = onContextMenuItemClick.bind(this);

    const myAwesomeMenu = (
      <ContextMenu onDestroyContextMenu={this.onDestroyContextMenu} event={event}>
          <Item onClick={onContextMenuItemClick}>
              Add
          </Item>
          <Item>
              Remove
          </Item>
          <Item>cut</Item>
          <Separator/>
          <Item disabled>
              Paste
          </Item>
      </ContextMenu>
    );
    this.contextMenuContainer = document.createElement('div');
    document.body.appendChild(this.contextMenuContainer);
    ReactDOM.render(myAwesomeMenu, this.contextMenuContainer);
  }

  render() {
    const {
      prefixCls, columns, record, visible, index,
      expandIconColumnIndex, expandIconAsCell, expanded, expandRowByClick,
      expandable, onExpand, needIndentSpaced, indent, indentSize,
    } = this.props;

    let { className } = this.props;

    if (this.state.hovered) {
      className += ` ${prefixCls}-hover`;
    }

    const cells = [];

    const expandIcon = (
      <ExpandIcon
        expandable={expandable}
        prefixCls={prefixCls}
        onExpand={onExpand}
        needIndentSpaced={needIndentSpaced}
        expanded={expanded}
        record={record}
      />
    );

    for (let i = 0; i < columns.length; i++) {
      if (expandIconAsCell && i === 0) {
        cells.push(
          <td
            className={`${prefixCls}-expand-icon-cell`}
            key="rc-table-expand-icon-cell"
          >
            {expandIcon}
          </td>
        );
      }
      const isColumnHaveExpandIcon = (expandIconAsCell || expandRowByClick)
        ? false : (i === expandIconColumnIndex);
      cells.push(
        <TableCell
          prefixCls={prefixCls}
          record={record}
          indentSize={indentSize}
          indent={indent}
          index={index}
          column={columns[i]}
          key={columns[i].key}
          expandIcon={isColumnHaveExpandIcon ? expandIcon : null}
        />
      );
    }
    const height = this.props.height || this.state.height;
    const style = { height };
    if (!visible) {
      style.display = 'none';
    }

    return (
      <tr
        ref={(node) => (this.trRef = node)}
        onContextMenu={this.onContextMenu}
        onClick={this.onRowClick}
        onDoubleClick={this.onRowDoubleClick}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className={`${prefixCls} ${className} ${prefixCls}-level-${indent}`}
        style={style}
      >
        {cells}
      </tr>
    );
  }
}
