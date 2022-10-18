import React from 'react';

export default function DecreaseButton({showDeleteDialog, hideDeleteDialog, deleteCartItem, decreaseAmount}) {
  if (showDeleteDialog) {
    return (
      <div className="cartDeleteDialog">
        <p>Удалить?</p>
        <button
          onClick={() => {
            hideDeleteDialog();
            deleteCartItem();
          }}
        >Да</button>
        <button
          onClick={() => hideDeleteDialog()}
        >Нет</button>
      </div>
    )
  } else {return (
    <button className="cartUnitControlButton orangeCircle"
      onClick={() => decreaseAmount()}
    >-</button>
  )}
}
