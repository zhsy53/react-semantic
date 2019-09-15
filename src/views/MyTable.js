import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Table } from "semantic-ui-react";

import axios from "axios";

// import Loader from "../components/Loader";

function MyTable(props) {
  const [data, setData] = useState([]);

  const mapToRow = object => {
    const row = { name: object.name };
    const details = object.details || [];
    const success = details.map(detail => detail.success).reduce((a, b) => a + b, 0);
    const fail = details.map(detail => detail.fail).reduce((a, b) => a + b, 0);
    row.success = success;
    row.fail = fail;

    return row;
  };

  useEffect(() => {
    axios
      .get("/api/servers/statistics")
      .then(response => response.data)
      .then(array => array.map(mapToRow))
      .then(setData);

    return () => {
      setData([]);
    };
  }, []);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {props.titles.map(title => (
            <Table.HeaderCell key={title}>{title}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map(row => (
          <Table.Row key={row.name}>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell positive>{row.success}</Table.Cell>
            <Table.Cell negative>{row.fail}</Table.Cell>
          </Table.Row>
        ))}
        <Table.Row>
          <Table.Cell>总计</Table.Cell>
          <Table.Cell positive>
            {data.map(row => row.success).reduce((a, b) => a + b, 0)}
          </Table.Cell>
          <Table.Cell negative>{data.map(row => row.fail).reduce((a, b) => a + b, 0)}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

MyTable.propTypes = {
  titles: PropTypes.array.isRequired,
};

export default MyTable;
