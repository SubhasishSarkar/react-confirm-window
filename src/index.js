import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState
} from "react";
import Alert from "./Alert";
import "./index.css"
const ConfirmDialog = createContext();

export default function ConfirmDialogProvider({ children }) {
  const [state, setState] = useState(false);
  const fn = useRef();

  const confirm = useCallback(
    (props) => {
      return new Promise((resolve) => {
        setState({ ...props, isOpen: true });
        fn.current = (choice) => {
          resolve(choice);
          setState({ isOpen: false });
        };
      });
    },
    [setState]
  );

  return (
    <ConfirmDialog.Provider value={confirm}>
      {children}
      <Alert
        {...state}
        isOpen={state.isOpen}
        onClose={() => fn.current(false)}
        onConfirm={() => fn.current(true)}
      />
    </ConfirmDialog.Provider>
  );
}

export function useConfirm() {
  return useContext(ConfirmDialog);
}
