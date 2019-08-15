/*!

=========================================================
* Material Dashboard PRO React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
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
    time: `13 Aug 3:45 PM`,
    tags: ['busuiness'],
    startlocation: `Sydney`,
    endlocation: `Brisbane`,
  },
  {
    time: `13 Aug 3:45 PM`,
    tags: ['vacation', 'Melbourne'],
    startlocation: `Sydney`,
    endlocation: `Melbourne`,
  },
  {
    time: `13 Aug 3:45 PM`,
    tags: ['busuiness', 'Brisbane'],
    startlocation: `Sydney`,
    endlocation: `Brisbane`,
  },
  {
    time: `13 Aug 3:45 PM`,
    tags: ['vacation', 'sydney'],
    startlocation: `Brisbane`,
    endlocation: `Sydney`,
  }


];
//

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
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }
}

AntdTables.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(AntdTables);
