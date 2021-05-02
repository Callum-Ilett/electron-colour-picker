import { useState } from "react";
import { toast } from "react-toastify";

type Message = string;

const useToast = () => {
  const [copyStatus, setCopyStatus] = useState(false);

  const showNotification = (message: Message) => {
    toast.dismiss();

    toast(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      onOpen: () => setCopyStatus(true),
      onClose: () => setCopyStatus(false),
    });
  };

  return { showNotification, copyStatus };
};

export default useToast;
