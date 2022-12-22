import {
   CFormInput,
} from "@coreui/react";
import React, { memo, useState } from 'react'

const Input = ({ handleChange, value, index }) => {

   return (
      <CFormInput type="text" onChange={handleChange} value={value} placeholder={`Licence / Certification ${index + 1}#`} />
   )
}
export default memo(Input);