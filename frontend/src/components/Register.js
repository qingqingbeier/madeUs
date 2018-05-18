import React from 'react';
import styles from './Register.css'
import { Form, Icon, Input, Button } from 'antd';
import { message, notification } from 'antd'
const FormItem = Form.Item;

let Stopwatch;

class NormalRegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      second:30,
      showCountdown:false
    };
  }

  handleSubmit = (e) => {
    // e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const hide = message.loading('注册中...', 0);
        setTimeout(()=>{
          let rigisterUser = JSON.parse(window.localStorage.registeredUsers||'[]');
          rigisterUser.push({
            userName:values.userName,
            password:values.password
          });
          window.localStorage.registeredUsers = JSON.stringify(rigisterUser);
          hide();
          notification['success']({
            message: "注册成功",
            duration: 2
          });
          this.props.goLogin()
        },1000)
      }
    });
  };

  confirmPwd = () =>{
  };

  captcha(){
    this.setState({
      showCountdown:true
    });
    clearInterval(Stopwatch);
    Stopwatch = setInterval(()=>{
      this.setState({
        second:this.state.second-1
      },()=>{
        if(this.state.second===0){
          clearInterval(Stopwatch);
          this.setState({
            showCountdown:false
          })
        }
      })
    },1000)
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.normal}>
        <div className={styles.formpanel}>
          <Form className={styles.Registerform}>
            <FormItem>
              <h3>MadeUS</h3>
            </FormItem>
            <FormItem>
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: '请输入手机号' }],
              })(
                <Input prefix={<Icon type="phone" style={{ fontSize: 13 }} />} placeholder="请输入手机号" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: '请输入验证码' }],
              })(
                <Input prefix={<Icon type="key" style={{ fontSize: 13 }} />} placeholder="请输入验证码" />
              )}
              <Button onClick = {()=>this.captcha()} disabled={this.state.showCountdown}>
              {this.state.showCountdown?`剩余${this.state.second}秒`:"收取验证码"}</Button>
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
              {getFieldDecorator('confirmpwd', {
                rules: [{ required: true, message: '请再次输入密码' }],
              })(
                <Input onBlur={()=>{this.confirmPwd()}}
                  prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                  type="password" placeholder="请再次输入密码" />
              )}
            </FormItem>

            <FormItem>
              <Button type="primary" onClick={()=>this.handleSubmit()} className={styles.submitbtn}>立即注册</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

const Register = Form.create()(NormalRegisterForm);
export default Register;
