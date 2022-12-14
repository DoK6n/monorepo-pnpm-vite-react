import React from 'react';
import { useState } from 'react';

interface ChildProps {
  name: string;
  age: number;
}

const Child = React.memo(({ name, age }: ChildProps) => {
  console.log('πΆπ» μλ μ»΄ν¬λνΈλ λ λλ§μ΄ λμλ€μ.');

  return (
    <div style={{ border: '2px solid tomato', padding: '10px' }}>
      <h3>πΆπ» μλ</h3>
      <p>name: {name}</p>
      <p>age: {age}μ΄</p>
    </div>
  );
});

function ExampleReactMemoOne() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log('π¨βπ©βπ§ λΆλͺ¨ μ»΄ν¬λνΈκ° λ λλ§μ΄ λμμ΄μ.');

  return (
    <div style={{ border: '2px solid navy', padding: '10px' }}>
      <h1>π¨βπ©βπ§ λΆλͺ¨</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>λΆλͺ¨ λμ΄ μ¦κ°</button>
      <button onClick={incrementChildAge}>μλ λμ΄ μ¦κ°</button>
      <Child name={'νκΈΈλ'} age={childAge} />
    </div>
  );
}

export default ExampleReactMemoOne;
