import {
    CForm, CCol, CButton
 } from "@coreui/react";
import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useMounted } from "../hooks/useMounted";
import { makeActivity, getActivity } from "../thunks/activity";
import { makeContact, getContact } from "../thunks/contact";
import { makeEducation, getEducation } from "../thunks/education";
import { makeEmployment, getEmployment } from "../thunks/employment";
import { makeCourse, getCourse } from "../thunks/course";



 const thunks = {
    makeContact,
    getEmployment,
    makeEmployment,
    getEducation,
    makeEducation,
    getActivity,
    makeActivity,
    getCourse,
    makeCourse
 }

 const allPathNames = Object.values(ROUTES).map(el => el.slice(0, 1).toLocaleUpperCase() + el.slice(1));

 const getNextPath = (allPathNames, pathname) => {
    const index = allPathNames.indexOf(pathname);

    if(!(~index)) {
        return false
    }

    return '/' + allPathNames[index + 1].slice(0,1).toLowerCase() + allPathNames[index + 1].slice(1);
}
 

export const withForm = (Component) => {

    return (props) => {

        const dispatch = useDispatch();
        const navigate = useNavigate();
        const { values, valuesExist, className, skipButton, ...rest } = props;
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
                console.log(status);
                if (status) {
                    const nextPath = getNextPath(allPathNames, pathname);
                    navigate(nextPath);
                };
            } catch (err) {
                console.error('Something went wrong', err);
            }
        }

        const skipHandler = (e) => {
            const nextPath = getNextPath(allPathNames, pathname);
            navigate(nextPath);
        }

        return (
            <CForm onSubmit={submitHandler} className={className}>
                <>
                    <Component values={values} {...rest}/>
                    {!skipButton ? 
                        (
                            <CCol className="mt-4">
                                <CButton type="submit" color="blue">Continue</CButton>
                            </CCol>
                        ) 
                    : 
                        (
                            <CCol className="gap-4 d-flex mt-4">
                                <CButton className="btn-skip" variant="outline" color="secondary" onClick={skipHandler}>Skip this step</CButton>
                                <CButton type="submit" color="blue">Continue</CButton>
                            </CCol>
                        )
                    }

                </>
            </CForm>
        )
    }
}