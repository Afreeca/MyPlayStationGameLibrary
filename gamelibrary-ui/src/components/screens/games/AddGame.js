import React, { Component } from 'react';
import { uploadFile } from 'helper/fireStorage';
import { Layout, Form, DatePicker, Button, Input, Alert } from 'antd';
import Upload from 'components/common/Upload';
import { PostGame } from 'helper/api';

const { Content } = Layout;

class AddGame extends Component {
  state={ image: [], file:'', alert: false }

  setImage = (image, file) => {
    this.setState({image: image[0], file: file[0]})
  }

  onCloseAlert = () => {
    this.setState({alert:false})
  }

  handleAddGame = (gameDetails, gameImage) => {
    console.log('Received values of form: ', gameDetails);
    console.log('uploaded: ', gameImage, ' :: ', gameImage);
    const game = {
      boxArtUrl: 'gameDetails',
      genre: gameDetails.genre,
      name: gameDetails.name,
      nrPlayers: 0,
      platform: gameDetails.platform,
      publisher: gameDetails.publisher,
      releaseDate: gameDetails.releaseDate.format()
    }

    AddGame(game);
    
    // uploadFile(gameImage.file, gameImage.image.name, gameDetails.name)
    // .then((url) => {
    //   AddGame({
        
    //   })
    // })

    

  }

  handleSubmit = e => {
    e.preventDefault();

    const {file, image } = this.state;

    this.props.form.validateFields((err, values) => {
      if (err) return;      
      if (!file || !image) {
         this.setState({alert: true});
        return;
      }

      this.handleAddGame(values, {image, file}) ;
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {  xs: { span: 24 }, sm: { span: 8 } },
      wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
    };
    const dateConfig = {
      rules: [{ type: 'object', required: true, message: 'Select release date!' }],
    };
  
    return (
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
          {getFieldDecorator('releaseDate', dateConfig)(<DatePicker />)}
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

        <Upload setImage={this.setImage}/>
        { this.state.alert && <Alert
          message="game Image Missing"
          description="Please upload image to proceed"
          type="error"
          closable
          showIcon
          onClose={this.onCloseAlert}
        />}
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

    );
  }
}

const WrappedTimeRelatedForm = Form.create({ name: 'add game' })(AddGame);

export default WrappedTimeRelatedForm;