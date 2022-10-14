import styled from 'styled-components'
import globalStyle from '@/assets/global-style'
const {px2rem} = globalStyle
// console.log(globalStyle.px2rem, '////')
export const Wrapper = styled.div`
    height: ${px2rem(28)};
    padding: ${px2rem(8)} 0;
    background-color: #ffffff;
    .logo {
        display: inline-block;
        width: ${px2rem(62)};
        margin-left: ${px2rem(18)};
    }
    .avatar {
        display: inline-block;
        width: ${px2rem(24)};
        height: ${px2rem(24)};
        svg {
            border-radius: 50%;
        }
    }
    
    .search-icon{
        display: inline-block;
        font-size: ${px2rem(24)};
        margin-left: ${px2rem(210)};
        margin-right: ${px2rem(22)};
    }
    
`