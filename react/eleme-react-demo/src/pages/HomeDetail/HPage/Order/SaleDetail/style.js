import styled from 'styled-components'

export const Wrapper = styled.div`
.sale-box{
    height: 550px;
    // overflow: hidden;
    padding-bottom: 1.28rem;
    padding-bottom: 12.8vw;
    background-color: #fff;
    background: #fff!important;
    .sale-main{
        display: -webkit-flex;
        display: flex;
        height: 100%;
        .sale-left{
            overflow-y: auto;
            height: 100%;
            background-color: #f8f8f8;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 1.066667rem;
            padding-bottom: 10.666667vw;
            ul{
                flex: none;
                position: relative;
                z-index: 0;
                list-style: none;
                a{
                    display: block;
                    position: relative;
                    padding: .466667rem .2rem;
                    padding: 4.666667vw 2vw;
                    font-size: .128rem;
                    color: #333;
                    background-color: #fff;
                    span{
                        font-size: .128rem;
                        color: #000;
                    }
                }
            }
        }
    }
        

}
        

.sale-detail-box{
    position: relative;
    height: 100%;
    width: 3.18rem;
    // width: 31.8vw;
    .sale-detail{
        height: 100%;
        padding-bottom: 0.424rem;
        padding-bottom: 4.24vw;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
}
.menu-box{
    height: 100%;
    padding-bottom: 0.424rem;
    padding-bottom: 4.24vw;
    overflow-y: auto;
    .menu-detail{
        margin: 0;
        padding: 0;
        display: block;
        margin-block-start: 0.25em;
        margin-block-end: 0.25em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
}
.menu-top{
    position: relative;
    margin-left: .1rem;
    margin-left: 1vw;
    padding: .08rem .32rem .08rem 0;
    padding: 0.8vw 0.32vw 0.8vw 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    overflow: hidden;
    .top-title{
        margin-right: .05rem;
        margin-right: 0.5vw;
        font-weight: 700;
        font-size: .128rem;
        color: #666;
        -webkit-flex: none;
        flex: none;
    }
    span{
        display: block;
        -webkit-flex: 1;
        flex: 1;
        color: #999;
        font-size: .1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
.menu-item{
    height: auto!important;
    display: flex;
    section{
        -webkit-flex: 1;
        flex: 1;
        position: relative;
        padding-bottom: .666667rem;
        padding-bottom: 6.666667vw;
        padding-right: .4rem;
        padding-right: 4vw;
        .fooddetail-info{
            position: relative;
            padding-right: .4rem;
            padding-right: 4vw;
            display: -webkit-flex;
            display: flex;
            -webkit-align-items: start;
            align-items: start;
            span{
                font-weight: 700;
                overflow: hidden;
                font-size: .14rem;
                white-space: nowrap;
                width: 1.6rem;
                width: 16vw;
                text-overflow: ellipsis;
            }
        }
        .fooddetail-sale{
            margin: .173333rem 0!important;
            margin: 1.733333vw 0!important;
            color: #999;
            font-size: .1rem;
            line-height: 1;
            min-height: 1em;
            span:nth-of-type(1){
                vertical-align: middle;
            }
            span:nth-of-type(2){
                margin-left: 1.066667vw;
                vertical-align: middle;
            }
        }
        .fooddetail-sale{
            display: flex;
        }
        .sale_price{
            font-size: .16rem;
            line-height: .426667rem;
            line-height: 4.266667vw;
            color: #ff5339;
            padding-bottom: .093333rem;
            padding-bottom: .933333vw;
            display: -webkit-flex;
            display: flex;
            -webkit-align-items: baseline;
            align-items: baseline;
            position: absolute;
            bottom: 0;
            span{
                margin-right: .266667vw;
            }
        }
        .food-btn{
            position: absolute;
            right: .4rem;
            right: 4vw;
            bottom: .066667rem;
            bottom: .666667vw;
            span{
                display: inline-flex;
                font-size: .18rem;
                width: 0.2rem;
                height: 0.2rem;
                -webkit-align-items: center;
                align-items: center;
                justify-content: center;
                background: rgb(35, 149, 255);
                border-radius: 50%;
                color:#fff;
            }
        }
    }
}
.img-box{
    width: 2.533333rem;
    width: 25.333333vw;
    height: 2.8rem!important;
    height: 28vw!important;
    -webkit-flex: none;
    flex: none;
    margin-right: .266667rem;
    margin-right: 2.666667vw;
    position: relative;
}
.sale-img{
    width: 100%;
    border-radius: .053333rem;
    border-radius: .533333vw;
}


//footer
.footer-box{
    z-index: 11;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding-left: 2.106667rem;
    padding-left: 21.066667vw;
    background-color: rgba(61,61,63,.9);
    -webkit-backdrop-filter: blur(.266667rem);
    -webkit-backdrop-filter: blur(2.666667vw);
    height: 1.28rem;
    height: 12.8vw; 
        a{
            text-decoration: none;
            height: 100%;
            width: 2.8rem;
            width: 28vw;
            color: #fff;
            text-align: center;
            text-decoration: none;
            font-size: .2rem;
            font-weight: 700;
            -webkit-user-select: none;
            user-select: none;
            line-height: 1.28rem;
            line-height: 12.8vw;
           
        }
    }

.footer-text{
    flex: 1;
    p:nth-of-type(1){
        font-size: .2rem;
        line-height: normal;
        color: #fff;
        margin: 0;
        font-weight: 400;
        span{
            font-size: .7em;
             color: #999;
        }
    }
    p:nth-of-type(2){
        color: #999;
        font-size: .1rem;
        margin: 0;
        font-weight: 400;
    }
}
.detail-send{    
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: .16rem;
    font-weight: 700;
    -webkit-user-select: none;
    user-select: none;
    line-height: 1.28rem;
    line-height: 12.8vw;
}
.footer-top{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease,-webkit-transform .3s ease;
    -webkit-transform: translate3d(0,100%,0);
    transform: translate3d(0,100%,0);
    bottom: 1.8rem;
    bottom: 18vw;
    z-index: 11;
    section{
        background-color: #fffad6;
        border-top: .013333rem solid #f9e8a3;
        border-top: .133333vw solid #f9e8a3;
        opacity: .96;
        line-height: .533333rem;
        line-height: 5.333333vw;
        font-size: .1rem;
        text-align: center;
        span{
            color: #333333;
        }
    }
}
`