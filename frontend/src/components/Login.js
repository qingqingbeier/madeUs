import React from 'react';
import styles from './Login.css'
import { Form, Icon, Input, Button } from 'antd';
import { message, notification } from 'antd'
const FormItem = Form.Item;


class NormalLoginForm extends React.Component {

  showMessage(data){
    if(data.success){
      notification['success']({
        message: "登录成功",
        description:data.message,
        duration: 2
      })
    }else{
      notification['error']({
        message: "登录失败",
        description:data.message,
        duration: 2
      })
    }
  }

  handleSubmit = (e) => {
    // e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const hide = message.loading('登录中...', 0);
        this.props.login(values,hide,this.showMessage);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.normal}>
        <div className={styles.formpanel}>
          <Form className={styles.loginform}>
            <FormItem>
              <h3>MadeUS</h3>
            </FormItem>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入帐号' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={()=>this.handleSubmit()} className={styles.submitbtn}>立即登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

const Login = Form.create()(NormalLoginForm);
export default Login;
