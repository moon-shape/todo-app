export const InputTodo = (props) => {
  const { inputText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={inputText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
