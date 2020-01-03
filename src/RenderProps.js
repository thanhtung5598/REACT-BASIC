import React from 'react';
import List from "./components/RenderProps/List";

const data = ["A","B","C"];

function RenderProps() {
  return (
    <div className="RenderProps">
      <List data={data} render={(item)=><div>{item}</div>}/>
      <List data={data} render={(item)=><div>+{item}</div>}/>
      <List data={data} render={(item)=><div>-{item}</div>}/>
    </div>
  );
}

export default RenderProps;
