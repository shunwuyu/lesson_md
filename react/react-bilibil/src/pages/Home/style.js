import styled from 'styled-components'
import globalStyle from '@/assets/global-style'

export const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    max-width: 640px;
    background-color: #ffffff;
    z-index: 10;
    padding-bottom: ${globalStyle.px2rem(2)};
    .partition {
        position: relative;
    }
    .tab-bar {
        margin-right: px2rem(56);
    }
    .switch {
        position: absolute;
        top: 0;
        bottom: 0;
        right: px2rem(22);
        line-height: px2rem(40);
        font-size: px2rem(18);
    }
      
`