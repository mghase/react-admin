import React, { createContext, useContext, useState } from "react";
import Toast, { ToastVariant } from "../components/Toast";

interface ToastContextInterface {
  error: (newMessage: string) => void;
  success: (newMessage: string) => void;
}

export const ToastContext = createContext({} as ToastContextInterface);

type ToastProviderProps = {
  children: React.ReactNode;
};

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [variant, setVariant] = useState<ToastVariant | undefined>(undefined);

  const handleClose = () => {
    setOpen(false);
  };

  const error = (newMessage: string) => {
    setTitle("Error!");
    setMessage(newMessage);
    setVariant("error");
    setOpen(true);
  };

  const success = (newMessage: string) => {
    setTitle("Success!");
    setMessage(newMessage);
    setVariant("success");
    setOpen(true);
  };

  return (
    <ToastContext.Provider value={{ error, success }}>
      {children}
      <Toast
        message={message}
        open={open}
        onClose={handleClose}
        title={title}
        variant={variant}
      />
    </ToastContext.Provider>
  );
};

export function useToast() {
  return useContext(ToastContext);
}

export default ToastProvider;
