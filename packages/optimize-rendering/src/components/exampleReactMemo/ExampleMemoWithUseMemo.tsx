import { memo, useMemo } from 'react';
import { useState } from 'react';

type NameType = {
  lastName: string;
  firstName: string;
};

interface ChildProps {
  name: NameType;
}

const Child = memo(({ name }: ChildProps) => {
  console.log('πΆπ» μλ μ»΄ν¬λνΈλ λ λλ§μ΄ λμλ€μ.');

  return (
    <div style={{ border: '2px solid tomato', padding: '10px' }}>
      <h3>πΆπ» μλ</h3>
      <p>μ±: {name.lastName}</p>
      <p>μ΄λ¦: {name.firstName}</p>
    </div>
  );
});

function ExampleMemoWithUseMemo() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log('π¨βπ©βπ§ λΆλͺ¨ μ»΄ν¬λνΈκ° λ λλ§μ΄ λμμ΄μ.');

  const name = useMemo(() => {
    return {
      lastName: 'ν',
      firstName: 'κΈΈλ',
    };
  }, []);

  return (
    <div style={{ border: '2px solid navy', padding: '10px' }}>
      <h1>π¨βπ©βπ§ λΆλͺ¨</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>λΆλͺ¨ λμ΄ μ¦κ°</button>
      <Child name={name} />
    </div>
  );
}

export default ExampleMemoWithUseMemo;
