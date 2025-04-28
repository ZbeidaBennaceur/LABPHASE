import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { clearError } from '../JS/actions/authAction';
import { clearErrorUser } from '../JS/actions/userAction';

const ToastError = ({ error }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (error && error.length > 0) {
      error.forEach((err) => {
        toast.error(err.msg, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: err.msg,
        });
      });

    
      const timer = setTimeout(() => {
        dispatch(clearError());
        dispatch(clearErrorUser());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  return <ToastContainer limit={1} />;
};

export default ToastError;
