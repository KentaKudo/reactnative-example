import React, { useState, useEffect } from "react";

import List from "./List";
import * as api from "./api";

// const mapItems = (items) =>
//   items.map((value, i) => ({ key: i.toString(), value }));

const ListContainer = () => {
  // const [asc, setAsc] = useState(true);
  // const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);

  const fetchItems = () =>
    api
      .fetchItems()
      .then((resp) => resp.json())
      .then(({ items }) =>
        setData(items.map((value, i) => ({ key: i.toString(), value })))
      )
      .catch(console.error);

  // const fetchData = async () => {
  //   const resp = await api.fetchItems();
  //   const { items: data } = await resp.json();
  //   setData(data);
  // };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <List
      data={data}
      fetchItems={fetchItems}
      // asc={asc}
      // onFilter={setFilter}
      // onSort={() => {
      //   setAsc(!asc);
      // }}
    />
  );
};

export default ListContainer;
