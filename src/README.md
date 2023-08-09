
# react-confirm-window

react-confirm is a lightweight library that simplifies the implementation of window confirmation dialogs in React applications by offering a Promise-based API that works seamlessly with async/await syntax, similar to window.confirm.

It provides various customization options and can be used just by calling the useConfirm hook.


## Features

- Modal header can be passed as props
- Modal title can be passed as props
- Confirm Button Label can be passed as props
- Confirm Button Label can be passed as props


## Usage/Examples
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

    const handleDelete = ()=>{
        const choice = await confirm({
            header: "Please Confirm",
            title: "Are you sure you want to delete?",
            closeButtonLable: "No",
            confirmButtonLable: "Yes",
        });

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
