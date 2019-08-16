/*!

=========================================================
* Material Dashboard PRO React - v1.7.0
=========================================================

* Product Ptime: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import { dataTable } from "variables/general.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";

import 'antd/dist/antd.css';
// Button should be inside import { Table, Tag } from 'antd';
import { Table, Tag } from 'antd';


const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};


const data = [
  {
    key: '1',
    startlocation: 'John Brown',
    time: 32,
    endlocation: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    startlocation: 'Jim Green',
    time: 42,
    endlocation: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    startlocation: 'Joe Black',
    time: 32,
    endlocation: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    startlocation: 'Jim Red',
    time: 32,
    endlocation: 'London No. 2 Lake Park',
  },
];

const columns = [
  {
    title: 'Time',
    dataIndex: 'time'
  },

  {
    title: 'Tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = 'green';
          if (tag === 'vacation') {
            color = 'volcano';
          } else if (tag === 'busuiness') {
            color = 'geekblue';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },

  {
    title: 'Start Loocation',
    dataIndex: 'startlocation'
  },
  {
    title: 'End Location',
    dataIndex: 'endlocation'
  }
];



class AntdTables extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setTimeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'time',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
        sorter: (a, b) => a.time - b.time,
        sortOrder: sortedInfo.columnKey === 'time' && sortedInfo.order,
      },

      {
        title: 'Start Location',
        dataIndex: 'startlocation',
        key: 'startlocation',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.startlocation || null,
        onFilter: (value, record) => record.startlocation.includes(value),
        sorter: (a, b) => a.startlocation.length - b.startlocation.length,
        sortOrder: sortedInfo.columnKey === 'startlocation' && sortedInfo.order,
      },

      {
        title: 'End Location',
        dataIndex: 'endlocation',
        key: 'endlocation',
        filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
        filteredValue: filteredInfo.endlocation || null,
        onFilter: (value, record) => record.endlocation.includes(value),
        sorter: (a, b) => a.endlocation.length - b.endlocation.length,
        sortOrder: sortedInfo.columnKey === 'endlocation' && sortedInfo.order,
      },
    ];
    return (
      <div>
        <div className="table-operations">
          <Button onClick={this.setTimeSort}>Sort time</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </div>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
      </div>
    );
  }


}

AntdTables.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(AntdTables);
