import styled from 'styled-components'

export const Wrapper = styled.div`
    .home_info_img{
    width:100%;
    height: 2.5rem;
    background: #fff;
    overflow: hidden;
    .home_info_setmeal{
        display: flex;
        justify-content: space-around;
        background: #f4f4f4;
        margin:10px 0;
        .home_info_setmeal_title{
            h3{
                margin-top: 5px;
                font-weight: 900;
                color: black;
                font-size: 18px;
            }
            span{  
                color: rgb(139, 115, 52);
                font-size: 16px;
                padding-top: 10px;
            }
        }
        .home_info_setmeal_img{
            width: 1.4rem;
            height: 0.8rem;
            img{
                width:100%;
                height: 100%;
            }
        }
    }
    .home_info_vip{
        height:0.4rem ;
        display: flex;
        justify-content: space-around;
        background: #f3dda0;
        margin:10px 0;  
        align-items: center;
        .home_info_vip_title{
            display: flex;
            justify-content: start;
            align-items: center;
            img{
                width:0.34rem;
                height: 0.34rem;
            }
            span:first-of-type{
                font-size: 18px;
            }
        }
    }
}
.home_info_banners{
    position: relative;
    .swiper-pagination{
        .swiper-pagination-bullet{
            border-radius: 0;
            height: 4px;
        }
    }
    .getAptitude{
        position: absolute;
        height:20px;
        bottom: 5px;
        right: 5px;
        z-index: 10;
        padding:0 10px;
        border-radius: 10px;
        background: rgba(20, 20, 20,.7);
        color: #fff;
    }
}
`