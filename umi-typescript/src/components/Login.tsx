import * as React from "react";
import { connect } from "dva"
import styles from "./Login.css"
import { Form, Icon, Input, Button } from 'antd';
interface IProps {
    form: any,
}
interface IState {
    loading: boolean,
}
class Login extends React.Component<IProps, IState>{
    public state = {
        loading: false,
    }
    handleSubmit = (e: any) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            console.log(values)
        })
        this.setState({ loading: true })
    }
    public render() {
        const { loading } = this.state
        const { getFieldDecorator } = this.props.form
        return (
            <div className={styles.login}>
                <Form className={styles.loginMain} id="form" onSubmit={this.handleSubmit}>
                    <span className={styles.loginTitle}>Kaaden Blog</span>
                    <Form.Item style={{ width: "100%" }}>
                        {getFieldDecorator('user', {
                            rules: [{ required: true, message: '请输入账号!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="userName" ref={this.titleIpt = (titleIpt) => titleIpt && titleIpt.focus()} />
                        )}
                    </Form.Item>
                    <Form.Item style={{ width: "100%" }}>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </Form.Item>
                    <Button loading={loading} type="primary" htmlType="submit" className={styles.loginButton}>登录</Button>
                </Form>
            </div>

        )
    }
}
const LogForm = Form.create()(Login)

export default connect()(LogForm)
// function mapStateToProps(state) {
//     const { count } = state.admin
//     return { count }
// }
// export default connect(mapStateToProps)(Login)
