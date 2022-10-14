import { Link } from 'react-router-dom'
import { FooterWrapper } from './style'
import { useLocation} from 'react-router-dom'

const AppFooter = () => {
    // console.log(useLocation())
    const { pathname } = useLocation()
    if (['/cities'].indexOf(pathname) >= 0) return;
    return (
        <FooterWrapper>
            <Link to="/home">
                <i className = {"fa fa-home"}></i>
                <span>首页</span>
            </Link>
            <Link to="/find">
                <i className = {"fa fa-podcast"}></i>
                <span>发现</span>
            </Link>
            <Link to="/find">
                <i className = {"fa fa-book"}></i>
                <span>订单</span>
            </Link>
            <Link to="/mine">
                <i className = {"fa fa-user"}></i>
                <span>我的</span>
            </Link>
        </FooterWrapper>
    )
}

export default AppFooter