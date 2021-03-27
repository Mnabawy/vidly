import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class TableHeader extends Component {
  raiseSort = (path) => {
    let sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") <i className="fa fa-sort-down m-1" />;
    return <i className="fa fa-sort-up m-1" />;
  };

  render() {
    const { columns, sortColumn } = this.props;
    return (
      <thead style={{ textAlign: "left" }}>
        <tr>
          {columns.map((column) => {
            return (
              <th
                style={{ cursor: "pointer" }}
                key={column.label || column.key}
                onClick={() => this.raiseSort(column.path)}
              >
                {column.label}
                {this.renderSortIcon(column)}
              </th>
            );
          })}

          <th />
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
