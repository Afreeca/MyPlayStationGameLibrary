import React, { Component } from 'react';
import { Layout, Form, DatePicker, Button, Input, Upload, Icon } from 'antd';

const { Content } = Layout;

class AddGame extends Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const config = {
      rules: [{ type: 'object', required: true, message: 'Select release date!' }],
    };

    const upload = (e) => {
      console.log('vida: ', e);
    };
  
    return (
      <Layout>
      <Content style={{margin: '16px 16px', padding: 20,backgroundColor:  '#e0e4eb', display: 'inline-flex', justifyContent: 'center' }}>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Enter game name'} ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Platform">
          {getFieldDecorator('platform', {
            rules: [{ required: true, message: 'Enter game platform'} ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Genre">
          {getFieldDecorator('genre', {
            rules: [{ required: true, message: 'Enter game genre'} ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Release Date">
          {getFieldDecorator('releaseDate', config)(<DatePicker />)}
        </Form.Item>

        <Form.Item label="Nr of players">
          {getFieldDecorator('nrplayers', {
            rules: [{ required: true, message: 'Enter number of players'} ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Publisher">
          {getFieldDecorator('publisher', {
            rules: [{ required: true, message: 'Enter game publisher'} ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Game Image"> 
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" customRequest={upload} listType="picture">
              <Button>
                <Icon type="upload" />upload
              </Button>
            </Upload>,
          )}
        </Form.Item>
        
        <Form.Item
          wrapperCol={{
            xs: { span: 1, offset: 0 },
            sm: { span: 1, offset: 13 },
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </Content>
      </Layout>
    );
  }
}

const WrappedTimeRelatedForm = Form.create({ name: 'add game' })(AddGame);

export default WrappedTimeRelatedForm;