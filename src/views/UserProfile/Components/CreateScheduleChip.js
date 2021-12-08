import React from 'react'
import { Chip } from '@material-ui/core';
import PN from "persian-number"

export default function CreateScheduleChip(prop) {
    const { currentDay, schedules, classes } = prop;

    
    return (
        <>
            {schedules && schedules.map((sche) => {
                sche.schedule.map((sch, key) => {
                    if (sch.day == currentDay) {
                        console.log(sch)
                        return <Chip className={classes.cardTitleWhite} label={PN.convertEnToPe(sche.lesson + " - " + sch.time)} key={key} color="primary" />

                    }
                })
            })}
        </>)


}
