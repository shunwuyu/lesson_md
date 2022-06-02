import React, { useState } from 'react'
import WeUI from 'react-weui'
const {
    Tab,
    TabBody,
    Panel,
    PanelBody,
    SearchBar,
    TabBar,
    TabBarItem
} = WeUI;
import BDBookItem from './BookItem'
import IconHome from './img/home.png';
import IconUser from './img/user.png';

const BDTab = () => {
    const [curTab, setCurTab] = useState('book')
    let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6]
    const changeTabBarItem = (type) => {
        setCurTab(type)
    }
    const onSearch = () => {
        console.log(event.target[0].value)
    }
    return (
        <Tab>
            <TabBody>
                <Panel>
                    <PanelBody>
                        <SearchBar placeholder="请输入您要查找的图书" lang={{ cancel: '取消' }} onSubmit={onSearch}/>
                        {
                            items.map((item, i) => {

                                return (
                                    <BDBookItem  key={i}  />
                                )
                            })
                        }
                    </PanelBody>
                </Panel>
            </TabBody>
            <TabBar>
                <TabBarItem active={curTab == 'book'} icon={<img src={IconHome}/>} label="书单"
                    onClick={changeTabBarItem.bind(null, 'book')}
                />
                <TabBarItem icon={<img src={IconUser}/>} label="我"  active={curTab == 'my'}
                    onClick={changeTabBarItem.bind(null, 'my')}
                />
            </TabBar>
        </Tab>
    )
}

export default BDTab