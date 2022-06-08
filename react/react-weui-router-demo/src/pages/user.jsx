import React from 'react'
import WeUI from 'react-weui';
import { useNavigate } from 'react-router-dom'
const {
    Tab, TabBarItem, Article, SearchBar, TabBar, TabBarLabel, TabBody,
    Panel, PanelHeader, PanelBody, PanelFooter, CellMore,
    MediaBox, MediaBoxHeader, MediaBoxBody, MediaBoxTitle, MediaBoxDescription,
    CellsTitle, Cells,
    Cell,
    CellBody,
    CellFooter,
    CellHeader,
    iconSrc,
    Badge,
    TabBarIcon
} = WeUI;

import IconHome from '../assets/images/home.png';
import IconUser from '../assets/images/user.png';

const BDUser = () => {
    const navigate = useNavigate();
    const gotoPage = (page) => {
        navigate(page)
    }
    return (
        <Tab>
                <TabBody>
                    <div>
                        <Cells style={{marginTop:0}}>

                            <Cell onClick={gotoPage.bind(null, '/login')}>
                                <CellHeader style={{ position: 'relative', marginRight: '10px' }}>
                                    <img src={IconUser} style={{ width: '50px', display: 'block' }} />

                                </CellHeader>
                                <CellBody>
                                    <p>光头强</p>
                                    <p style={{ fontSize: '13px', color: '#888888' }}>欢迎来到图书漂流！</p>
                                </CellBody>
                            </Cell>


                            <Cell  access onClick={gotoPage.bind(null, '/order')}>
                            <CellBody>
                             订单 <Badge preset="body">8</Badge>
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                            <Cell  access >
                                <CellBody>
                                    发出的申请 <Badge preset="body">8</Badge>
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                            <Cell  access >
                                <CellBody>
                                    收到的申请 <Badge preset="body">8</Badge>
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                            <Cell access >
                                <CellBody>
                                    收藏
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                            <Cell access >
                                <CellBody>
                                    地址
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                        </Cells>

                        <Cells>
                            <Cell access >

                                <CellBody>
                                    帮助
                                </CellBody>
                                <CellFooter/>

                            </Cell>
                            <CellFooter/>

                            <Cell access >
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


                <TabBar>
                    <TabBarItem active={false} icon={<img src={IconHome}/>} label="书单"  
                    onClick={gotoPage.bind(null, '/') }/>

                    <TabBarItem icon={<img src={IconUser}/>} label="我"  active={true}
                    />
                </TabBar>
            </Tab>
    )
}

export default BDUser