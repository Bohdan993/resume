import {
    CForm
 } from "@coreui/react";

export const withForm = (Component) => {
    return (props) => {
        const { handleSubmit, ...rest } = props;
        return (
            <CForm onSubmit={handleSubmit} className="row r-gap-30 mt-4">
                <Component {...rest}/>
            </CForm>
        )
    }
}