import { useState, useEffect } from 'react'
import WeUI from 'react-weui'
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
    Dialog
} = WeUI

const Address = () => {
    const address = [{
        id: 1,
        name: '家',
        address: '莲塘澄碧湖'
    }]
    const [showDialog, setShowDialog] = useState(false)
    const delAddress = () => {
        setShowDialog(true)
    }

    return (
        <Page>
            <Panel>
                <PanelHeader>地址</PanelHeader>
                <PanelBody>
                    {address.map(item => <MediaBox key={item.id} type="text">
                        <MediaBoxDescription>
                            {item.address}
                        </MediaBoxDescription>
                        <MediaBoxTitle>{item.name}</MediaBoxTitle>
                    </MediaBox>)}
                </PanelBody>
            </Panel>
            <ButtonArea>
                <Button>新增地址</Button>
            </ButtonArea>
            <ButtonArea>
                <Button type="warn" onClick={delAddress}>删除地址</Button>
            </ButtonArea>
            <Dialog show ={showDialog} type="ios" title="确定删除地址吗？"></Dialog>
        </Page>
    )
}

export default Address