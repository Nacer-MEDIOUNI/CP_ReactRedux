import React, { useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { editTodo } from "../JS/Actions/actions";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Edit = ({ task }) => {
  //UseState
  const [open, setOpen] = React.useState(false);
  const [newDescription, setText] = useState(task.description);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handelTextChange = (e) => {
    setText(e.target.value);
  };

  //UseDispatch
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(editTodo(task.id, newDescription));
    handleClose();
  };

  return (
    <div>
      <button class="block" onClick={handleOpen}>
        Edit
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            type="text"
            onChange={handelTextChange}
            value={newDescription}
          />
          <button onClick={handleClose}>Close</button>
          <button onClick={handleSave}>Save</button>
        </Box>
      </Modal>
    </div>
  );
};

export default Edit;
