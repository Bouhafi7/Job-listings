import { Fragment, useState } from "react";
import "./styles.css";
import Filter from "./components/Filter";
import Job from "./components/Job";

export default function App() {

  const [filterItem, setFilterItem] = useState([]);

  return (
    <Fragment>
      <Filter filterItem={filterItem} setFilterItem={setFilterItem} />
      <Job filterItem={filterItem} setFilterItem={setFilterItem} />
    </Fragment>
  );
}