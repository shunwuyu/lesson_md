import React from 'react'
import WeUI from 'react-weui'
const {
    Tab,
    TabBody,
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Badge
} = WeUI
import IconUser from './assets/img/user.png'

const User = () => {
    // 页面 ， 组件化思维
    return (
        <Tab>
            <TabBody>
                <div>
                    <Cells style={{marginTop: '0px'}}>
                        <Cell>
                        {/* react  行内样式 {驼峰式} */}
                            <CellHeader style={{position: 'relative', marginRight: '10px'}}>
                                <img src={IconUser} style={{width: '50px', display:'block'}} />
                            </CellHeader>
                            <CellBody>
                                <p style={{fontSize: '15px', color: '#888888'}}>光头强</p>
                                <p style={{fontSize: '13px', color: '#888888'}}>欢迎来到图书漂流！</p>
                            </CellBody>
                        </Cell>
                        {/* react-weui 文档  props  true */}
                        <Cell access>
                            <CellBody style={{color: 'white'}}>
                                订单 <Badge preset="body">8</Badge>
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                        <Cell access>
                            <CellBody style={{color: 'white'}}>
                                发出的申请<Badge preset="body">8</Badge>
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                        <Cell access>
                            <CellBody style={{color: 'white'}}>
                                收到的申请<Badge preset="body">8</Badge>
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                        <Cell access>
                            <CellBody style={{color: 'white'}}>
                                收藏
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                        <Cell access>
                            <CellBody style={{color: 'white'}}>
                                地址
                            </CellBody>
                            <CellFooter/>
                        </Cell>
                    </Cells>
                </div>
            </TabBody>
        </Tab>
    )
}

export default User