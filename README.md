
# react-confirm-window

react-confirm-window is a lightweight library that simplifies the implementation of window confirmation dialogs in React applications by offering a Promise-based API that works seamlessly with async/await syntax, similar to window.confirm.

It provides various customization options and can be used just by calling the useConfirm hook.


## Features

- Modal header can be passed as props
- Modal title can be passed as props
- Confirm Button Label can be passed as props
- Confirm Button Label can be passed as props


## Usage/Examples
For default modal component provide by the library : 
Wrapper your App with the ConfirmDialogProvider
```javascript
import ConfirmDialogProvider from 'react-confirm-window'
function App() {
  return (
      <ConfirmDialogProvider>
        <Component />
      </ConfirmDialogProvider>
      )
}
```
Import useConfirm hook and call it using async/await
```javascript
import {useConfirm} from 'react-confirm-window'

function Component() {
  const confirm = useConfirm();
    const handleDelete = ()=>{
        const choice = await confirm({
            header: "Please Confirm",
            title: "Are you sure you want to delete?",
            closeButtonLable: "No",
            confirmButtonLable: "Yes",
        });

        // returns true if confirmed else false
        if(choice){
            // do something
        }
    }
  return (
      <div>
        Component
      </div>
      )
}
```

For custom modal component :
Create a modal commonent with props onClose and onConfirm. Use these two props in your onClick of close and confirm buttons respectively 
```javascript
function MyConfirmWindow({ onClose, onConfirm, title }) {
  return (
      <div className="confirm-modal-container confirmationDialog">
        <div className="modal-content">
          <div>My Confirm Window</div>
          <p>{title}</p>
          <div className="confirm-modal-button-container">
            <button className="cancelConfirmBtn" onClick={onClose}>
              No
            </button>
            <button className="confirmChangesBtn" onClick={onConfirm}>
              Yes
            </button>
          </div>
        </div>
      </div>
  );
}
```
Now provide this component to ConfirmDialogProvider as props
```javascript
import ConfirmDialogProvider from 'react-confirm-window'
import MyConfirmWindow from './MyConfirmWindow'

function App() {
  return (
      <ConfirmDialogProvider dialogComponent={MyConfirmWindow}>
        <Component />
      </ConfirmDialogProvider>
      )
}
```
Import useConfirm hook and call it using async/await
```javascript
import {useConfirm} from 'react-confirm-window'

function Component() {
  const confirm = useConfirm();
    const handleDelete = ()=>{
        const choice = await confirm({
            title: "Are you sure you want to delete?",
        });
        // returns true if confirmed else false
        if(choice){
            // do something
        }
    }
  return (
      <div>
        Component
      </div>
      )
}
```


## Screenshots
<img width="739" alt="Screenshot 2023-08-09 at 11 09 14 PM" src="https://github.com/SubhasishSarkar/react-confirm-window/assets/30510392/e27446b2-3184-47b0-927c-7486c1e32912">


