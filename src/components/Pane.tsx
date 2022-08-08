type PropsType = {
  className?: string;
  children?: React.ReactNode;
};

function Pane(props: PropsType) {
  return <div className={`h-96 p-2 ${props.className}`}>{props.children}</div>;
}

Pane.defaultProps = {
  className: "",
};

export default Pane;
