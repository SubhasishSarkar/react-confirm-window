const Alert = (props) => {
  const {
    isOpen,
    onClose,
    onConfirm,
    header,
    title,
    confirmButtonLable,
    closeButtonLable
  } = props;
  return (
    <>
      {isOpen && (
        <div className="confirm-modal-container confirmationDialog">
          <div className="modal-content">
            <div>{header}</div>
            <p>{title}</p>
            <div className="confirm-modal-button-container">
              <button className="cancelConfirmBtn" onClick={onClose}>
                {closeButtonLable}
              </button>
              <button className="confirmChangesBtn" onClick={onConfirm}>
                {confirmButtonLable}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
