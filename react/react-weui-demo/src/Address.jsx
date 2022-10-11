import React, { useState  } from 'react'
import WeUI from 'react-weui';
const {
    Page,
    Panel,
    PanelHeader,
    PanelBody,
    MediaBox,
    MediaBoxDescription,
    MediaBoxTitle,
    ButtonArea,
    Button,
    Dialog,
    Toast
} = WeUI

const Address = () => {
    const [showConfirm, setShowConfirm] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const hideDialog = () => {
        setShowConfirm(false)
    }
    const operate = () => {
        hideDialog();
        setShowToast(true)
        setTimeout(()=> {
            setShowToast(false)
        }, 800);
    }
    const  confirmConfig =  {
        title: '确认删除',
        buttons: [
            {
                type: 'default',
                label: '取消',
                onClick: hideDialog
            },
            {
                type: 'primary',
                label: '确认',
                onClick: operate
            }
        ]
    }
    const delAddress = () => {
        setShowConfirm(true)
    }
    
    return (
        <Page>
            <Panel>
                <PanelHeader>
                    地址
                </PanelHeader>
                <PanelBody>
                    <MediaBox type="text">
                        <MediaBoxDescription>
                            贵州省实盘水农家小院3990号
                        </MediaBoxDescription>
                        <MediaBoxTitle>熊二</MediaBoxTitle>
                    </MediaBox>
                    <MediaBox type="text">
                        <MediaBoxTitle>熊二</MediaBoxTitle>
                        <MediaBoxDescription>
                            贵州省实盘水农家小院3990号
                        </MediaBoxDescription>
                    </MediaBox>
                </PanelBody>
            </Panel>
            <ButtonArea>
                <Button>新增地址</Button>
            </ButtonArea>
            <ButtonArea>
                <Button type="warn" onClick={delAddress}>删除地址</Button>
            </ButtonArea>
            <Dialog type="ios" title={confirmConfig.title} buttons={confirmConfig.buttons} show={showConfirm}>
            确认要删除此地址吗？
            </Dialog>
            <Toast icon="success-no-circle" show={showToast}>操作成功</Toast>
        </Page>
    )
}

export default Address