// write your custom hook here to control your checkout form
// import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useForm = (initialValues, key) => {
    const [values, setValues] = useLocalStorage(initialValues, key);

    const handleChanges = e => {
        console.log(e.target.name, e.target.value);
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        });
    };

    return [values, handleChanges];
   
}



//   const clearForm = e => {
//     e.preventDefault();
//     setValues(initialValues);
//   };


