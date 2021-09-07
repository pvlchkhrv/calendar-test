import React, {FC} from 'react';
import {Layout, Menu, Row} from 'antd';
import {useHistory} from 'react-router-dom';
import {RouteNames} from '../routes';
import {useTypedSelector} from '../hooks/useTypedSelector';

const Navbar: FC = () => {
    const router = useHistory();
    const {isAuth} = useTypedSelector(state => state.auth);

    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth ?
                    <>
                        <div style={{color: 'white'}}>
                            Pistoletik666
                        </div>
                        <Menu theme='dark' mode='horizontal' selectable={false}>
                            <Menu.Item onClick={() => console.log('LOGOUT')}
                                       key='1'
                            >
                                Sign Out
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme='dark' mode='horizontal' selectable={false}>
                        <Menu.Item onClick={() => router.push(RouteNames.LOGIN)}
                                   key='1'
                        >
                            Sign In
                        </Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
