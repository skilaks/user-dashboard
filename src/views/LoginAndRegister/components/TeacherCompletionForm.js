import React, { useState, useEffect } from 'react'
import PN from 'persian-number'

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from 'components/CustomInput/CustomInput';
import SelectItem from "components/SelectItem/SelectItem.js";
import CustomRadioButton from 'components/CustomRadioButton/CustomRadioButton.js';
export default function TeacherCompletionForm(prop) {
    const {FieldOfStudy,Dergee ,WorkExperience } = prop;
    //------------------------------------------
    const degree = [
        {
            value: 'Diploma',
            label: 'دیپلم',
        },
        {
            value: 'Bachelor',
            label: 'کارشناسی',
        },
        {
            value: 'ma',
            label: 'کارشناسی ارشد',
        },
    ]
    const workExperience = [
        {
            value: true,
            label: 'دارم'
        },
        {
            value: false,
            label: 'ندارم'
        },
    ]
    //-------------------------
    return (
        <>



            <GridItem xs={12} sm={12} md={12} justifyContentCenter  >

                <SelectItem
                    label="مدرک تحصیلی"
                    id='degree'

                    onChange={(e) =>Dergee.setDergee(e.target.value)}
                    value={Dergee.degree}
                    items={degree}
                    variant='outlined'
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                <CustomInput
                    labelText="رشته تحصیلی"
                    type=""
                    id=''
                    name=""
                    onChange={(e) =>FieldOfStudy.setFieldOfStudy(e.target.value)}
                    value={FieldOfStudy.fieldOfStudy}
                  
                    formControlProps={{
                        fullWidth: true,
                    }}
                    inputProps={{
                        disabled: false,
                    }}
                />
            </GridItem>


            <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                <CustomRadioButton Radios={workExperience} labelText='سابقه کاری' onChange={(e) => WorkExperience.setWorkExperience(e.target.value)} value={WorkExperience.workExperience} />
            </GridItem>



        </>
    )

}
