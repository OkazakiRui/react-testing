import { ChangeEventHandler, useState, VFC } from 'react';

const Todo: VFC = () => {
  const [input, setInput] = useState<string>('');
  const [list, setList] = useState<string[]>(['タスクA', 'タスクB', 'タスクC']);
  const updateValue: ChangeEventHandler<HTMLInputElement> = ({
    currentTarget,
  }) => setInput(currentTarget.value);

  const addNew = () => {
    let copyList = [...list];
    copyList.push(input);
    setList(copyList);
    setInput('');
  };

  return (
    <div>
      <input type="text" onChange={updateValue} value={input} />
      <button disabled={!input} onClick={addNew}>
        Todoを追加
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
