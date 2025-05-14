import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { clearError } from '../JS/actions/authAction';

const ToastError = ({ errors }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (Array.isArray(errors)) {
      // Affiche chaque toast pour chaque erreur dans le tableau
      errors.map((error, i) => 
        toast.error(error.msg, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: `${error.msg}-${Date.now()}`
        })
      );
    }

    const timer = setTimeout(() => {
      dispatch(clearError());
    }, 4000);

    return () => clearTimeout(timer);
  }, [errors, dispatch]);

  return <ToastContainer limit={1} />;
};

export default ToastError;

