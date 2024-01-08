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

export function ConfirmDialogProvider({ children,dialogComponent }) {
    const [state, setState] = useState(false);
    const fn = useRef();
    const DialogComponent = dialogComponent
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
            {state.isOpen && DialogComponent ? (
                <DialogComponent
                {...state}
                isOpen={state.isOpen}
                onClose={() => fn.current(false)}
                onConfirm={() => fn.current(true)}
                />
            ) : (
                <Alert
                {...state}
                isOpen={state.isOpen}
                onClose={() => fn.current(false)}
                onConfirm={() => fn.current(true)}
                />
            )}
        </ConfirmDialog.Provider>
    );
}
 
export function useConfirm() {
    return useContext(ConfirmDialog);
}
