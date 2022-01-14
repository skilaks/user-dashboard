import React, { useState, useEffect } from 'react'
import PN from 'persian-number'


import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from 'components/CustomInput/CustomInput';
import SelectItem from "components/SelectItem/SelectItem.js";
import CustomRadioButton from 'components/CustomRadioButton/CustomRadioButton.js';

export default function StudentCompletionForm(prop) {
    const {FieldOfStudy,Grade } = prop;
    //--------------------------

    //------------------------------------------
    const grade = [
        {
            value: 'school',
            label: 'دبستان',

        },
        {
            value: 'highSchool',
            label: 'دبیرستان',
        }
        ,
        {
            value: 'university',
            label: 'دانشگاه',
        }

    ]
    //------------------------

    //-------------------------
    return (
        <>



            <GridItem xs={12} sm={12} md={12} justifyContentCenter  >

                <SelectItem
                    label="مقطع تحصیلی"
                    id='grade'
                    onChange={(e) => Grade.setGrade(e.target.value)}
                    value={Grade.grade}
                    items={grade}
                    variant='outlined'
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                <CustomInput
                    labelText="رشته تحصیلی"
                    type="text"
                    name="FieldOfStudy"
                    onChange={(e) => FieldOfStudy.setFieldOfStudy(e.target.value)}
                    value={FieldOfStudy.fieldOfStudy}
                    formControlProps={{
                        fullWidth: true,
                    }}
                    inputProps={{
                        disabled: false,
                    }}
                />
            </GridItem>
        </>
    )

}
