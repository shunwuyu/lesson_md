import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const DrawerWrapper = styled.div`
    overflow: hidden;
    .drawer-wrapper {
        display: none;
        padding: 0 ${px2rem(5)};
        background-color: #ffffff;
        transition: transform .4s;
        transform: translate3d(0, -100%, 0);
        .drawer-item-container {
            display: flex;
            flex-wrap: wrap;
            .drawer-item {
                flex: 0 0 auto;
                width: ${px2rem(60.82)};
                padding: ${px2rem(6)} 0;
                text-align: center;
                span {
                    display: inline-block;
                    font-size: ${px2rem(14)};
                    line-height: ${px2rem(30)};
                    padding: 0 ${px2rem(2)};
                    color: #757575;
                    border-bottom: ${px2rem(2.2)} solid transparent;
                }
                &.current {
                    span {
                        color: #fb7299;
                        border-bottom: ${px2rem(2.2)} solid #fb7299;
                    }
                }
            }
        }
    }
    .drawer-switch {
        text-align: center;
        font-size: px2rem(18);
        i {
            display: inline-block;
            width: px2rem(24);
        }
    }   
`