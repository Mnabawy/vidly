import React, { Component } from "react";
import { genres } from "../../services/fakeGenreService";
import { getMovies } from "../../services/fakeMovieService";

class ListGroup extends Component {
  render() {
    const {
      items,
      textProp,
      valueProp,
      onItemSelect,
      selectedItem,
    } = this.props;
    return (
      <ul>
        {items.map((item) => {
          return (
            <li
              key={item[valueProp]}
              className={
                item === selectedItem
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => onItemSelect(item)}
            >
              {item[textProp]}
            </li>
          );
        })}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  textProp: "name",
  valueProp: "_id",
};

export default ListGroup;
