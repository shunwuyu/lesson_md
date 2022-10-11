import React, { useState  } from 'react'
import { useNavigate } from 'react-router-dom'
import WeUI from 'react-weui';
const {
    Tab,
    TabBody,
    Cells,
    Cell,
    CellHeader,
    CellBody,
    Badge,
    CellFooter
} = WeUI
// import IconHome from '../img/home.png';
import IconUser from './img/user.png';

const User = () => {
    let navigate = useNavigate();
    const gotoPage = (page) => {
        navigate('/address')
    }
    return (
        <Tab>
            <TabBody>
                <div>
                    <Cells>
                        <Cell>
                            <CellHeader style={{ position: 'relative', marginRight: '10px' }}>
                                <img src={IconUser} style={{ width: '50px', display: 'block' }} />
                            </CellHeader>
                            <CellBody>
                                <p>光头强</p>
                                <p style={{ fontSize: '13px', color: '#888888' }}>欢迎来到图书漂流！</p>
                            </CellBody>
                        </Cell>
                        <Cell  access>
                            <CellBody>
                             订单 <Badge preset="body">8</Badge>
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                        <Cell  access>
                            <CellBody>
                                发出的申请 <Badge preset="body">8</Badge>
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                        <Cell  access>
                            <CellBody>
                                收到的申请 <Badge preset="body">8</Badge>
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                        <Cell access>
                            <CellBody>
                                收藏
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                        <Cell access>
                            <CellBody onClick={gotoPage.bind(null, 'address')}>
                                地址
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                    </Cells>
                    <Cells>
                        <Cell access>
                            <CellBody>
                                帮助
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                        {/* <CellFooter/> */}
                        <Cell access>
                            <CellBody>
                                关于
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                        <Cell>
                            <CellBody>
                                版本
                            </CellBody>
                            <CellFooter>
                                V2.2.1
                            </CellFooter>
                        </Cell>
                    </Cells>
                </div>
            </TabBody>
        </Tab>
    )
}

export default User