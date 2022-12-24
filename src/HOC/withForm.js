import {
    CForm, CCol, CButton
 } from "@coreui/react";
import { useEffect, useCallback } from "react";

import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useMounted } from "../hooks/useMounted";
import { makeContact, getContact } from "../thunks/contact";
import { makeEducation, getEducation } from "../thunks/education";
import { makeEmployment, getEmployment } from "../thunks/employment";


 const thunks = {
    getContact,
    makeContact,
    getEmployment,
    makeEmployment,
    getEducation,
    makeEducation,
 }
 

export const withForm = (Component) => {
    return (props) => {

        const dispatch = useDispatch();
        const navigate = useNavigate();
        const { values, valuesExist, className, ...rest } = props;
        const isMounted = useMounted();
        let { pathname } = useLocation();

        if(pathname === '/') {
            pathname = 'Contact';
        } else {
            pathname = pathname.slice(1,2).toUpperCase() + pathname.slice(2);
        }

        const getData = useCallback(async () => {
            const func = thunks['get' + pathname];
            try {
                if(func && typeof func === 'function' && isMounted()) {
                    await dispatch(func());
                }
            } catch (err) {
                console.error('Something went wrong', err);
            }
        }, [pathname, dispatch, isMounted]);

        useEffect(()=>{
            getData();
        }, [getData]);

        const submitHandler = async (e) => {
            e.preventDefault();
            const func = thunks['make' + pathname];
            try {
                const status = await dispatch(func(values, valuesExist));
                if (status ) navigate('/');
            } catch (err) {
                console.error('Something went wrong', err);
            }
        }
        return (
            <CForm onSubmit={submitHandler} className={className}>
                <>
                    <Component values={values} {...rest}/>
                    <CCol className="mt-4">
                        <CButton type="submit" color="blue">Continue</CButton>
                    </CCol>
                </>
            </CForm>
        )
    }
}