import React, { Component } from "react";

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

  render() {
    const { columns } = this.props;
    return (
      <thead style={{ textAlign: "left" }}>
        <tr>
          {columns.map((column) => {
            return (
              <th key={column.label || column.key} onClick={() => this.raiseSort(column.path)}>
                {column.label}
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
