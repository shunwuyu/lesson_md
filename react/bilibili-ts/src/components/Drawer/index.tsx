import React, { useEffect, useState, useRef } from 'react'
import { TabItem } from '@/models/PartitionType'
import { DrawerWrapper } from './style'

interface DrawerProps {
    show: boolean;
    data: TabItem[];
    onClick?: any;
}

const Drawer: React.FC<DrawerProps> = (props) => {
    const {
        show
    } = props
    const drawerWrapperRef = useRef<HTMLDivElement>(null)
    const { data, onClick } = props
    const items = data.map((item, i) => (
        <div className="drawer-item"
            key={item.id}
        >
            <span>{item.name}</span>
        </div>
    ));
    useEffect(() => {
        // drawerWrapperRef.current.
        const drawerWrapperDOM = drawerWrapperRef.current as HTMLDivElement;
        if (show) {
            drawerWrapperDOM.style.display = "block";
            setTimeout(() => {
                drawerWrapperDOM.style.webkitTransform = `translate3d(0, 0, 0)`;
                drawerWrapperDOM.style.transform = `translate3d(0, 0, 0)`;
            }, 0)
            
        } else {
            // 
            // setTimeout(() => {
            drawerWrapperDOM.style.webkitTransform = `translate3d(0, -100%, 0)`;
            drawerWrapperDOM.style.transform = `translate3d(0, -100%, 0)`;
            // }, 0)
            setTimeout(() => {
                drawerWrapperDOM.style.display = "none";
            }, 400)
        }
    }, [show])
  return (
    <DrawerWrapper>
        <div className="drawer-wrapper" ref={drawerWrapperRef}>
            <div className="drawer-item-container">
                {items}
            </div>
            <div className="drawer-switch" onClick={() => { onClick()}}>
                <i className="icon-arrow-up"/>
            </div>
        </div>
    </DrawerWrapper>
  )
}

export default Drawer;
