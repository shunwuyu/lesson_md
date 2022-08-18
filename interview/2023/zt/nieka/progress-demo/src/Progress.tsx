import React from 'react'
import './progressbar.css'
export interface IProgressProps {
    step?: number;
    total?: number;
    showInfo?: boolean;
    width?: number;
    barWidth?: number;
    color?: string;
    prefixCls?: string;
}

/**
 * @desc 除法处理成0-100的整数
 * @param step
 * @param total
 */
 const percentDeal = (step: number | undefined, total: number | undefined) => {
    if (!step || !total) {
      return 0;
    }
  
    return (step / total) * 100;
  };

  /**
 * @desc  处理 progressNumber
 */
const validProgress = (progress: number | undefined) => {
    if (!progress || progress < 0) {
      return 0;
    } else if (progress > 100) {
      return 100;
    }
  
    return progress;
  };

/**
 *
 * @param text 百分比显示
 */
 const parseIntPrecent = (text: number): string => `${Math.ceil(text)}%`;

const ProgressBar:React.FC<IProgressProps> = (props) => {
    const {
        prefixCls,
        //  wsidth,
        barWidth,
        step,
        total,
        showInfo,
        color,
        ...restProps
      } = props;

      let percent,
        text,
        progressInfo,
        progress
      ;

      percent = percentDeal(step, total);
      text = parseIntPrecent(validProgress(percent));
      const fixTipsStyle = {
        // text 12%
        left: text
      };
      if (showInfo) {
        progressInfo = (
          <div className={`${prefixCls}-show-info`}>
            <span className={`${prefixCls}-text`}>{text}</span>
          </div>
        );
      }

      const percentStyle = {
        // text 12%
        width: text,
        height: "12px",
        background: color,
        borderRadius: "100px"
      };
      const fixOuterStyle = {
        marginTop: "30px"
      };

      progress = (
        <div>
          <div className={`${prefixCls}-outer`} style={fixOuterStyle}>
            <div className={`${prefixCls}-inner`}>
              <div className={`${prefixCls}-bg`} style={percentStyle}>
                {progressInfo || null}
              </div>
            </div>
          </div>
        </div>
      );
      progress = (
      <div>
        <div className={`${prefixCls}-outer`} style={fixOuterStyle}>
          <div className={`${prefixCls}-inner`}>
            <div className={`${prefixCls}-bg`} style={percentStyle}>
              {progressInfo || null}
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div {...restProps} className="tiger-progress">
        {progress}
    </div>
  )
}

export default ProgressBar
