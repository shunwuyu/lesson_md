import * as React from "react";

const setSatisfactionClass = (level) => {
    if (level < 100) {
      return "very-dissatisfied";
    }
  
    if (level < 200) {
      return "somewhat-dissatisfied";
    }
  
    if (level < 300) {
      return "neither";
    }
  
    if (level < 400) {
      return "somewhat-satisfied";
    }
  
    return "very-satisfied";
  };

interface Props {
    level: number;
}

const isSameRange = (prevValue, nextValue) => {
    const prevValueClass = setSatisfactionClass(prevValue.level);
    const nextValueClass = setSatisfactionClass(nextValue.level);

    return prevValueClass === nextValueClass;
};
  
// useMemo返回缓存的变量
export const MyComponent: React.FC<Props> = React.memo((props) => {
    const { level } = props;
  
    return <div className={setSatisfactionClass(level)} />;
  }, isSameRange);