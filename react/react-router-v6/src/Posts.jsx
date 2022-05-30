import React from "react";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>博客：</h2>
      <Outlet />
    </div>
  );
}

export default Posts;
