import React, { useState, useEffect } from 'react'

import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardBody from "components/Card/CardBody.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import UserTable from 'components/Table/UserTable';
import LessonColumn from 'components/Table/Columns/Lessons'
import Button from 'components/CustomButtons/Button.js'
import { LessonService } from '../../../../Services/LessonService'



export default function SearchLesson(prop) {
    const { classes } = prop;
    //------------
    const [search, setSearch] = useState();
    const [column, setColumn] = useState(LessonColumn);
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false)
  
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    //-------------------

    useEffect(() => {
            setLoading(true)
           LessonService.getLessonByName(search, (lesson) => {
              setResult(lesson)
              setLoading(false)
             
          })
    }, [search])
    return (

        <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>جستجوی درس</h4>
            </CardHeader>
            <CardBody>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={3} >
                        <CustomInput
                            labelText="جستجو"
                            id="typeOfuser"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            // endAdornment={<InputAdornment position="end"><SearchIcon/></InputAdornment>}
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                disabled: false,
                                startAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>

                            }}
                        />
                    </GridItem>
                  <GridItem xs={12} sm={12} md={12} justifyContentCenter>
                    <UserTable columns={column}data={result} loading={loading} />

                       
                    </GridItem>
                </GridContainer>
            </CardBody>
        </Card>
    )
}
