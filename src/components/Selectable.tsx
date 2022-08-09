import useStore from "../store";

type PropsType = {
  className?: string;
  elementName: string;
  children: React.ReactNode;
};

export default function Selectable(props: PropsType) {
  const state = useStore();

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    state.setCurrentElement(props.elementName);
  }

  return (
    <div className={`cursor-pointer ${props.className}`} onClick={handleClick}>
      {props.children}
    </div>
  );
}
