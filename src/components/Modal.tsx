import ReactDOM from "react-dom";

type Props = {
  onClose?: () => void;
  children: React.ReactNode;
};

function Modal(props: Props) {
  function handleBackdropOnClick() {
    props.onClose && props.onClose();
  }

  function handleChildrenOnClick(e: React.MouseEvent) {
    e.stopPropagation();
  }

  return ReactDOM.createPortal(
    <div
      className="absolute inset-0 bg-slate-500/60 flex justify-center items-center"
      onClick={handleBackdropOnClick}
    >
      <div
        className="bg-white rounded-lg shadow"
        onClick={handleChildrenOnClick}
      >
        {props.children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
