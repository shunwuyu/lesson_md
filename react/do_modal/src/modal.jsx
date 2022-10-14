import React, { useState, useEffect } from 'react'
import './modal.css';

// const Modal = () => {
//     return (
//         // <div className="modal">
//         //     这是一个modal组件
//         // </div>
//         <div className="modal-wrapper">
//             <div className="modal">
//                 <div className="modal-title">这是modal标题</div>
//                 <div className="modal-content">这是modal内容</div>
//                 <div className="modal-operator">
//                     <button className="modal-operator-close">取消</button>
//                     <button className="modal-operator-confirm">确认</button>
//                 </div>
//             </div>
//             <div className="mask"></div>
//         </div>
//     )
// }

// const Modal = ({ visible }) => {
//     return visible && <div className="modal-wrapper">
//         <div className="modal">
//         <div className="modal-title">这是modal标题</div>
//         <div className="modal-content">这是modal内容</div>
//         <div className="modal-operator">
//             <button className="modal-operator-close">取消</button>
//             <button className="modal-operator-confirm">确认</button>
//         </div>
//         </div>
//         <div className="mask"></div>
//     </div>
// }

// const Modal = ({ visible, title, children }) => {
//     return visible && <div className="modal-wrapper">
//         <div className="modal">
//         {/* 这里使用父组件的title*/}
//             <div className="modal-title">{title}</div>
//             <div className="modal-content">{children}</div>
//             <div className="modal-operator">
//                 <button className="modal-operator-close">取消</button>
//                 <button className="modal-operator-confirm">确认</button>
//             </div>
//         </div>
//         <div className="mask"></div>
//     </div>
// }

const Modal = ({ visible, title, children, onClose }) => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        setVisible()
    }, [])
    const closeModal = () => {
        console.log('大家好，我叫取消，听说你们想点我？傲娇脸👸')
        onClose && onClose()
    }
    const confirm = () => {
    }
    const maskClick = () => {
    }

    return visible && <div className="modal-wrapper">
        <div className="modal">
        {/* 这里使用父组件的title*/}
            <div className="modal-title">{title}</div>
            <div className="modal-content">{children}</div>
            <div className="modal-operator">
                <button 
                    onClick={closeModal}
                    className="modal-operator-close">取消</button>
                <button 
                    onClick={confirm}
                    className="modal-operator-confirm">确认</button>
            </div>
        </div>
        <div 
            className="mask"
            onClick={maskClick}
        ></div>
    </div>
}

export default Modal