import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const TopWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    z-index: 10;
    padding-bottom: 0.1rem;
    .partition{
        position: relative;
        .tab-bar {
            margin-right: 1.0rem;
        }
        .switch {
            position: absolute;
            top: 0;
            bottom: 0;
            right: ${px2rem(22)};
            line-height: ${px2rem(40)};
            font-size: ${px2rem(18)};
        }
    }
    .drawer-position {
        position: absolute;
        width: 100%;
        top: ${px2rem(44)};
        z-index: 2;
    }
`