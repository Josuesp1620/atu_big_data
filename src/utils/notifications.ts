import { ToastOptions, toast } from 'react-toastify';

const commonOptions : ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
};

export const useNotifications = () => {


    const toastSuccess = (response) => {
        toast.success(response, {
            ...commonOptions,
        });
    };

    const toastWarning = (response) => {
        toast.warning(response, {
            ...commonOptions,
        });
    };
    const toastError = (response) => {
        toast.error(response, {
            ...commonOptions,
        });
    };

    return { toastSuccess,toastWarning, toastError, };
};