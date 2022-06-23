import * as React from "react";

interface Props {
    userName: string;
}

export const HelloComponent: React.FC<Props> = (props) => {
  return <h2>Hello component {props.userName}  !</h2>;
};