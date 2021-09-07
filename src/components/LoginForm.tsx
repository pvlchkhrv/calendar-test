import React, {FC, useState} from 'react';
import {Button, Form, Input} from 'antd';
import {rules} from '../utils/rules';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useActions} from '../hooks/useActions';

const LoginForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.auth);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {login} = useActions();

    return (
        <Form
            onFinish={() => login(username, password)}
        >
            {error && <div style={{color: 'red'}}>{error}</div>}
            <Form.Item
                label='Username'
                name='username'
                rules={[rules.required('Please input your username!')]}
            >
                <Input
                    value={username}
                    onChange={e => setUsername(e.currentTarget.value.trim())}
                />
            </Form.Item>
            <Form.Item
                label='Password'
                name='password'
                rules={[rules.required('Please input your password!')]}
            >
                <Input
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.currentTarget.value.trim())}
                />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit' loading={isLoading}>
                    Sign In
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
