type Props = {
  onChange: (value: string) => void;
  text: string;
};

export default function (props: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.onChange(e.target.value);
  }

  return (
    <div>
      <input
        className="input"
        type="text"
        value={props.text}
        onChange={handleChange}
      />
    </div>
  );
}
