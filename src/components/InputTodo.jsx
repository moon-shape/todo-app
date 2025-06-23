export const InputTodo = (props) => {
  const { inputText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={inputText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
