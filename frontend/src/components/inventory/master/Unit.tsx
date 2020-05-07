import React, { Component } from 'react';
import { Button, Col, Input, Row, Table, AutoComplete, Checkbox, Select } from 'antd';
import './Style.scss';

const dataSource = [
  {
    key: '1',
    name: 'Classmate Note book 100p',
    shortName: 'Book',
    Parent: 'Lorem Ipsum'
  },
  {
    key: '2',
    name: 'Classmate Note book 100p',
    shortName: 'Book',
    Parent: 'Lorem Ipsum'
  },
  {
    key: '3',
    name: 'Classmate Note book 100p',
    shortName: 'Book',
    Parent: 'Lorem Ipsum'
  },

];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
  },
  {
    title: 'Short Name',
    dataIndex: 'shortName',
    key: 'shortName',
  },
  {
    title: 'Parent',
    dataIndex: 'Parent',
    key: 'Parent',
  },
];

const parent = [
  {
    value: 'Party 1',
  },
  {
    value: 'Party 2',
  },
  {
    value: 'Party 3',
  },
];

const { Option } = Select;

const InputArea = function() {

  return (
    <Col span={24} style={{ margin: 'auto',
      maxWidth: '600px'}}>
      <Col className='box'>
        <h4 className='text'>Name</h4>
        <Input placeholder='Name'/>
      </Col>
      <Col className='box'>
        <h4 className='text'>Short Name</h4>
        <Input placeholder='Short Name'/>
      </Col>
      <Col className='box'>
        <h4 className='text'>Parent</h4>
        <AutoComplete
          style={{
            width: '102%',
          }}
          options={parent}
          placeholder='Party code / name to search'
          filterOption={true}
        />
      </Col>
      <Col className='box'>
        <h4 className='text'>Fraction Allowed</h4>
        <Checkbox> </Checkbox>
      </Col>
      <Col className='box'>
        <h4 className='text'>Decimal Places</h4>
        <Select defaultValue='1' style={{ width: 120 }}>
          <Option value='1'>1</Option>
          <Option value='2'>2</Option>
          <Option value='3'>3</Option>
        </Select>
      </Col>
      <Col className='box'>
        <Button className='button' type='primary'>Clear</Button>
        <Button className='button' type='primary'>Reset</Button>
        <Button className='button' type='primary'>Submit</Button>
      </Col>

    </Col>
  );

};

export class Unit extends Component {

  render() {

    return (
      <div>
        <Row style={{ display: 'flex'}}>
          <InputArea/>
          <Col span={24}>
            <Table
              dataSource={dataSource}
              columns={columns}
              scroll={{ y: 240 }}
              pagination={{
                total: dataSource.length,
                pageSize: dataSource.length,
                hideOnSinglePage: true,
              }}
            />
          </Col>
        </Row>
      </div>
    );

  }

}

export default Unit;