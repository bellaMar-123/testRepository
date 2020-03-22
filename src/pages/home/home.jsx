import React, { Component } from 'react';
import {connect} from 'dva';
import { Table } from 'antd';

@connect(({home,loading})=>({
  home,
  loading:loading.models.home,//连接model文件
}))
class Home extends Component {
  componentDidMount() {
     const { dispatch } = this.props;

     dispatch({
       type: 'home/fetch',
     });
  }

  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }];

    const { home: { list } } = this.props;
    const dataSource = [];

    return (
      <div>
        <Table
          bordered
          dataSource={dataSource}
          columns={columns}
          size="small" />
      </div>
    );
  }
}

export default Home;
