import React from 'react';
// import List from "./components/RenderProps/List";
import Counter from "./components/CounterProps/CounterProps";

// const data = ["A","B","C"];

function RenderProps() {
  return (
    <div className="RenderProps">
      {/* <List data={data} render={(item)=><div>{item}</div>}/>
      <List data={data} render={(item)=><div>+{item}</div>}/>
      <List data={data} render={(item)=><div>-{item}</div>}/> */}
      <Counter>
        {
          ({count}) => <h1>{count}</h1>
        }
        </Counter>
    </div>
  );
}

export default RenderProps;
