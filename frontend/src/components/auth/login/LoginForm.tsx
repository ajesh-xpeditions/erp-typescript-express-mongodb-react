import React from 'react';
import axios from 'axios';
import { Button, Form, Input, message } from 'antd';
import { setSession } from '../../../session';

import './LoginForm.scss';
import { AuthUris } from 'fivebyone';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

interface Props {
  authSuccessHandler: () => void;
}
export class LoginForm extends React.Component<Props, {}> {

  public render() {

    return (
      <Form
        {...layout}
        name='basic'
        initialValues={{
          remember: true,
        }}
        size='small'
        onFinish={this.handleLogin}
        // OnFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          label='Email'
          name='email'
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );

  }

  private handleLogin = async(values: any): Promise<void> => {

    const ERROR_MESSAGE_DISPLAY_TIME = 5;
    const { email, password } = values;
    const hideLodingMessage = message.loading('Checking credential...');
    try {

      this.setState({
        error: '',
      });
      this.setState({
        isRequesting: true,
      });
      const response = await axios.post<{ token: string; expiry: string }>(`${AuthUris.USER_URI}/login`, {
        email,
        password,
      });
      const { token, expiry } = response.data;
      setSession(token, expiry);
      this.setState({
        isLoggedIn: true,
      });
      this.props.authSuccessHandler();

    } catch (error) {

      this.setState({
        error: 'Something went wrong',
      });
      message.error('Login failed, please try again', ERROR_MESSAGE_DISPLAY_TIME);

    } finally {

      hideLodingMessage();
      this.setState({
        isRequesting: false,
      });

    }

  };

}

export default LoginForm;