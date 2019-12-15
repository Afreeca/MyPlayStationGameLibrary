import React, { Component } from 'react';
import { UploadFile } from 'helper/fireStorage';
import { Layout, Form, DatePicker, Button, Input, Alert } from 'antd';
import Upload from 'components/common/Upload';
import { PostGame } from 'helper/api';
import { MESSAGES } from 'helper/message';

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
 
    UploadFile(gameImage.file, gameImage.image.name, gameDetails.name)
    .then((url) => {
      const game = {
        boxArtUrl: url,
        genre: gameDetails.genre,
        name: gameDetails.name,
        nrPlayers: gameDetails.nrPlayers,
        platform: gameDetails.platform,
        publisher: gameDetails.publisher,
        releaseDate: gameDetails.releaseDate.format()
      }
      PostGame(game).then(() => {
        this.props.history.push('/gameLibrary')
      })
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const {file, image } = this.state;

    this.props.form.validateFields((err, values) => {
      if (err) 
        return;      
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
      rules: [{ type: 'object', required: true, message: MESSAGES.ENTER_DATE }],
    };
  
    return (
      <Content style={{margin: '16px 16px', padding: 20,backgroundColor:  '#e0e4eb', display: 'inline-flex', justifyContent: 'center' }}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Name">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: MESSAGES.ENTER_NAME} ],
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Platform">
            {getFieldDecorator('platform', {
              rules: [{ required: true, message: MESSAGES.ENTER_PLATFORM} ],
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Genre">
            {getFieldDecorator('genre', {
              rules: [{ required: true, message: MESSAGES.ENTER_GENRE} ],
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Release Date">
            {getFieldDecorator('releaseDate', dateConfig)(<DatePicker />)}
          </Form.Item>

          <Form.Item label="Nr of players">
            {getFieldDecorator('nrPlayers', {
              rules: [{ required: true, message: MESSAGES.ENTER_NR_PLAYERS} ],
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Publisher">
            {getFieldDecorator('publisher', {
              rules: [{ required: true, message: MESSAGES.ENTER_PUBLISHER} ],
            })(<Input />)}
          </Form.Item>

          <Upload setImage={this.setImage}/>
          { this.state.alert && <Alert
            message={MESSAGES.IMAGE_MISSING}
            description={MESSAGES.UPLOAD_IMAGE_ERROR}
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