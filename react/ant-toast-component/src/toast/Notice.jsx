import React, { Component } from 'react'

class Notice extends Component {
    render() {
        const icons = {
            info: 'icon-info-circle-fill',
            success: 'icon-check-circle-fill',
            warning: 'icon-warning-circle-fill',
            error: 'icon-close-circle-fill',
            loading: 'icon-loading'
        }
        const { type, content } = this.props
        // console.log(icons[type]);
        return (
            <div className={`toast-notice ${type}`}>
              <svg style={{display:'none'}}>
                <symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M960 447.008q-11.008-152.992-120-261.504t-260.992-120.512q-16-0.992-27.488 9.504t-11.488 26.496q0 14.016 9.504 24.512t23.488 11.488q55.008 4 107.008 26.016 60.992 26.016 108.992 73.504t74.016 109.504q22.016 51.008 26.016 106.016 0.992 14.016 11.488 23.488t24.512 9.504q15.008 0 26.016-11.008 11.008-12 8.992-27.008z"  ></path></symbol><symbol id="icon-check-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m193.5 301.7l-210.6 292c-12.7 17.7-39 17.7-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"  ></path></symbol><symbol id="icon-close-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"  ></path></symbol><symbol id="icon-info-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272z m-32-344c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"  ></path></symbol><symbol id="icon-warning-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296z m32 440c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"  ></path></symbol></svg>
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref={`#${icons[type]}`} />
                </svg>
                <span>{content}</span>
            </div>
        )
    }
}

export default Notice