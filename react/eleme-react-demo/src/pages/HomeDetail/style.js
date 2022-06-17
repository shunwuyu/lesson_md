import styled from 'styled-components'

export const Wrapper = styled.div`
  .detail-left{
    height: 0.5rem;
    background: blue;
    }
    .detail-title{
        padding: .8rem 0 0;
        padding: 8vw 0 0;
        position: relative;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        align-items: center;
        background-color: #fff;
    }
    .detail-title-box{
    padding: .8rem 0 0;
    padding: 8vw 0 0;
    position: relative;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    background-color: #fff;
    .detail-title-img{
        width: 2rem;
        width: 20vw;
        height: 2rem;
        height: 20vw;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -1rem;
        margin-left: -10vw;
        margin-top: -1.6rem;
        margin-top: -16vw;
        img{
            width: 100%;
            height: 100%;
            border-radius: .08rem;
            border-radius: .8vw;
            box-shadow: 0 0 0.04rem 0 rgba(0,0,0,.2);
            box-shadow: 0 0 0.4vw 0 rgba(0,0,0,.2);
        }
    }
    .title-detail{
        -webkit-flex: 1;
        flex: 1;
        width: 7.2rem;
        width: 72vw;
        h2{
            font-size: .22rem;
            font-weight: 700;
            white-space: nowrap;
            position: relative;
            padding-right: .266667rem;
            padding-right: 2.666667vw;
            display: -webkit-flex;
            display: flex;
            -webkit-align-items: center;
            align-items: center;
            -webkit-justify-content: center;
            justify-content: center;
            span{
                text-align: left;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            i{
                width: .4rem;
                width: 4vw;
                position: relative;
                height: .653333rem;
                height: 6.533333vw;
                ::after{
                    content: "";
                    border-style: solid;
                    border-width: .146667rem 0 .146667rem .173333rem;
                    border-width: 1.466667vw 0 1.466667vw 1.733333vw;
                    border-color: transparent transparent transparent rgba(0,0,0,.67);
                    position: absolute;
                    left: .16rem;
                    left: 1.6vw;
                    top: .213333rem;
                    top: 2.133333vw;
                }
            }
        }
    }
    .detail-box{
        white-space: nowrap;
        height: .4rem;
        height: 4vw;
        margin-top: .173333rem;
        margin-top: 1.733333vw;
        font-size: .1rem;
        color: #666;
        text-align: center;
        span{
            display: inline-block;
            white-space: nowrap;
            height: .35rem;
            height: 3.5vw;
            margin-top: .0692rem;
            margin-top: 0.692vw;
            font-size: .1rem;
            color: #666;
            text-align: center;
            margin-left: 0.1rem
        }
    }
        .sum-detail{
            display: -webkit-flex;
            display: flex;
            color: #333;
            margin: .15rem auto 0;
            margin: 1.5vw auto 0;
            -webkit-align-items: center;
            align-items: center;
            width: 3rem;
            .img-detail{
                flex: 1;
                overflow: hidden;
                align-items: center;
                .sale-detail{
             
                    margin-right: .1rem;
                    margin-right: 1vw;
                    font-size: .01rem;
                    padding: .001rem .001rem;
                    padding: .01vw 0.01vw;
                    height: .34rem;
                    height: 3.4vw;
                    display: inline-block;
                    box-sizing: border-box;
                    // border-radius: .026667rem;
                    // border-radius: .266667vw;
                    background-color: rgb(240, 115, 115);
                    top:0.05rem;
                    position: relative;
                    font-size: .212rem;
                    color: transparent;
                    white-space: nowrap;
                    width: 0.3rem;
                    span{
                        display: inline-block;
                        color: rgb(255, 255, 255);
                        position: absolute;
                        left: 0;
                        top: 0;
                        right: -100%;
                        bottom: -100%;
                        -webkit-transform: scale(.5);
                        transform: scale(.5);
                        -webkit-transform-origin: 0 0;
                        transform-origin: 0 0;
                        display: -webkit-flex;
                        display: flex;
                        -webkit-align-items: center;
                        align-items: center;
                        -webkit-justify-content: center;
                        justify-content: center;
                        font-size: .212rem;
                       
                    }
                }
                .num-detail{
                    display: inline-block;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 0.1rem;
                    flex: 1;
                    height: .4rem;
                    height: 4vw;
                }
            }
            .sale{
                width: 1.826667rem;
                width: 18.266667vw;
                -webkit-flex-shrink: 0;
                flex-shrink: 0;
                position: relative;
                padding-right: .293333rem;
                padding-right: 2.933333vw;
                text-align: right;
                color: #999;
                font-size: 0.1rem;
                height: .4rem;
                height: 4vw;
            }
        
    }
    p{
        width: 8rem;
        width: 80vw;
        font-size: .1rem;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: .1rem auto .1rem;
        margin: 1vw auto 1vw;
        padding: 0;
        white-space: nowrap;
    }

`