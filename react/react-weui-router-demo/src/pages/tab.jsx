import { useState } from 'react'
import WeUI from 'react-weui';
import BDBookItem from '../components/bookitem';
import { useNavigate } from 'react-router-dom'
import IconHome from '../assets/images/home.png';
import IconUser from '../assets/images/user.png';

const {
    Tab,
    TabBody,
    Panel,
    PanelBody,
    SearchBar,
    TabBar,
    TabBarItem
} = WeUI;

const BDTab = () => {
    let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6]
    const navigate = useNavigate()
    const gotoUser = () => {
        navigate('/user')
    }

    return (
        <Tab>
            <TabBody>
                <Panel>
                    <PanelBody>
                        <SearchBar placeholder="请输入您要查找的图书" lang={{ cancel: '取消' }} />
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
                <TabBarItem active={true} icon={<img src={IconHome}/>} label="书单"
                    />
                <TabBarItem icon={<img src={IconUser}/>} label="我"  active={false}
                    onClick={gotoUser }/>
            </TabBar>
        </Tab>
    )
}

export default BDTab