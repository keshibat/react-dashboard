import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
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
    time: '2019/05/14 20:02:09',
    tags: ["vacation"],
    startlocation: 'Sydney',
    endlocation: 'Melbourne'

  },
  {
    key: '2',
    time: '2019/05/15 06:02:02',
    tags: [],
    startlocation: 'Melbourne',
    endlocation: 'Sydney'
  },
  {
    key: '3',
    time: '2019/05/12 10:02:02',
    tags: ['busuiness'],
    startlocation: 'Brisbane',
    endlocation: 'Gold Coast'

  },
  {
    key: '4',
    time: '2018/05/22 18:02:02',
    tags: ["surftrip"],
    startlocation: 'Gold Coast',
    endlocation: 'Brisbane'
  },

  {
    key: '5',
    time: '2019/05/19 13:02:02',
    tags: ['busuiness'],
    startlocation: 'lennox head',
    endlocation: 'Margaret River'

  },
  {
    key: '6',
    time: '2018/05/14 19:02:02',
    tags: ["surftrip"],
    startlocation: 'Perth',
    endlocation: 'Adelaide'
  },
  {
    key: '7',
    time: '2019/05/12 10:02:02',
    tags: ['busuiness'],
    startlocation: 'Adelaide',
    endlocation: 'Brisbane'

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
        title: 'Tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = 'green';
              if (tag === 'vacation') {
                color = 'red';
              } else if (tag === 'busuiness') {
                color = 'blue';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
        key: 'tags',
        filters: [{ text: 'busuiness', value: 'busuiness' }, { text: 'vacation', value: 'vacation' }],
        filteredValue: filteredInfo.tags || null,
        onFilter: (value, record) => record.tags.includes(value),
      },


      {
        title: 'Start Location',
        dataIndex: 'startlocation',
        key: 'startlocation',
        filters: [{ text: 'Sydney', value: 'Sydney' }, { text: 'Brisbane', value: 'Brisbane' }],
        filteredValue: filteredInfo.startlocation || null,
        onFilter: (value, record) => record.startlocation.includes(value),
      },


      {
        title: 'End Location',
        dataIndex: 'endlocation',
        key: 'endlocation',
        filters: [{ text: 'Sydney', value: 'Sydney' }, { text: 'Brisbane', value: 'Brisbane' }],
        filteredValue: filteredInfo.endlocation || null,
        onFilter: (value, record) => record.endlocation.includes(value),
      }

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