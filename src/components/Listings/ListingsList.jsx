import React from "react";
import css from "./ListingsList.module.css";
import ListingsItem from "./ListingsItem";

const ListingsList = ({ listings, onModify }) => {
  return (
    <div className={`container ${css.list}`}>
      {listings.map((item) => (
        <ListingsItem onModify={onModify} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListingsList;
