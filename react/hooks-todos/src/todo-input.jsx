import React, { useState } from "react";
import { Input } from "antd";


const TodoInput = ({ onSetQuery, placeholder }) => {
  const [value, setValue] = useState("");
  const onAdd = () => onSetQuery(value);

  return (
    <section className="input-wrap">
      <Input
        onPressEnter={onAdd}
        value={value}
        onChange={e => setValue(e.target.value)}
        className="input"
        placeholder={placeholder}
      />
    </section>
  );
};

export default TodoInput;
