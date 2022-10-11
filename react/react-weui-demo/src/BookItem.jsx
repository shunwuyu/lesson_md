import React, { useState  } from 'react'
import WeUI from 'react-weui';
const {
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription
} = WeUI   
const BookItem = () => {
    return (
        <MediaBox type="appmsg">
            <MediaBoxHeader><img src="http://img53.ddimg.cn/2310311665003.jpg" /></MediaBoxHeader>
            <MediaBoxBody>
                <MediaBoxTitle> 浪潮之巅 </MediaBoxTitle>
                <MediaBoxDescription>
                    一本颠覆人们对信息时代的认识、对创新和创业的理解的好书。作者吴军通过介绍硅谷成功的秘诀，揭示了信息时代的特点和方法论。
                </MediaBoxDescription>
            </MediaBoxBody>
        </MediaBox>
    )
}

export default BookItem