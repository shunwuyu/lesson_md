import React, {useState} from 'react'
import WeUI from 'react-weui';
import { useNavigate } from 'react-router';
const {Article, Page,
    Button,
    CellsTitle,
    Form,
    FormCell,
    CellHeader,
    CellBody,
    Label,
    Input,
    CellFooter,
    VCode,
    vcodeSrc,
    ButtonArea,
    Toast

} = WeUI;

const BDLogin = () => {
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false)
    const login = () => {
        setShowToast(true)
        setTimeout(() => {
            setShowToast(false)
        }, 2000)
    }
    const gotoReg = () => {
        navigate('/reg')
    }
    return (
        <Page transition={true} infiniteLoader={true} ptr={false}>
            <CellsTitle style={{backgroundColor:'black', color:'white', textAlign: 'center',lineHeight:'44px', marginTop:0}}>登录</CellsTitle>
            <Form>
                <FormCell>
                    <CellHeader>
                        <Label>用户名</Label>
                    </CellHeader>
                    <CellBody>
                        <Input  placeholder="请填写您的用户名"/>
                    </CellBody>
                </FormCell>
                <FormCell>
                    <CellHeader>
                        <Label>密码</Label>
                    </CellHeader>
                    <CellBody>
                        <Input type="password" placeholder="请输入密码"/>
                    </CellBody>
                </FormCell>
            </Form>
            <ButtonArea>
                <Button onClick={login }>登录</Button>
            </ButtonArea>
            <Toast icon="success-no-circle" show={showToast}>登录成功</Toast>   
            <div className="regdiv" onClick={gotoReg}>新用户注册</div>
        </Page>
    )
}

export default BDLogin