import React, { useRef, useState } from 'react'
import { PartitionType } from "@/models";
import classNames from 'classnames';
import { TabBarWrapper } from './style'
interface TabBarProps {
    type: string;
    data: PartitionType[];
    onClick?: any;
    currentIndex?: number;
}

const TabBar:React.FC<TabBarProps> = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const { data, type } = props;
    const { onClick } = props
    const ref = useRef();
    const tabs = data.map((tab, i) => {
        const tabClassnames = classNames('tab', 
            {indicate: type=="indicate" && currentIndex == i}, 
            {indicate: type=="highlight" &&  currentIndex == i}
        )
        const handleClick = (tab:any, index: number) => {
            setCurrentIndex(index)
            onClick(tab)
        }
        return  (
            <div className={tabClassnames} key={tab.id} onClick={handleClick.bind(null, tab, i)}>
                <span>{tab.name}</span>
            </div>
        )
    })
    return (
        <TabBarWrapper>
            <div className="tab-bar" ref={ref}>
            {tabs}
            </div>
        </TabBarWrapper>
    )
}

export default TabBar;
