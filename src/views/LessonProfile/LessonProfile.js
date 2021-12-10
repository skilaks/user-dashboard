import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from 'antd'
import PN from 'persian-number'
//-----icons---------------
import AddIcon from "@material-ui/icons/Add";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import InputAdornment from '@material-ui/core/InputAdornment';
import CustomChip from "components/Chip/CustomChip.js"
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomFab from 'components/Fab/CustomFab.js';
import CustomModal from 'components/Modal/CustomModal.js';
import AddScheduleModal from "./components/AddScheduleModal";
// sample data for test
import Columns from "components/Table/Columns/PersonOfLesson.js";
import { lessonsDataSample } from '../../data/lessonDataSample'
// import avatar from "assets/img/faces/marc.jpg";
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
import { TableTags } from "components/Tag/TableTags.js";
import UserTable from "components/Table/UserTable";
//-----services--------------------------------
import { UserService } from "../../Services/UserService.js"
import AddStudentModal from "./components/AddStudentModal";
import { ContactsOutlined } from "@material-ui/icons";

const useStyles = makeStyles(styles);
export default function UserProfile(prop) {
    const daysOfWeek = ['شنبه', 'یک شنبه', 'دو شنبه', 'سه شنبه', 'چهار شنبه', 'پنج شنبه']
    const [loading, setLoading] = useState(true)
    const [lessonCode, setLessonCode] = useState(prop.match.params.id)
    const [users, setUsers] = useState();
    const [dataStudentTable, setDataStudentTable] = useState();
    useEffect(() => {

        // use of services for get data from server
    console.log('reload')
        UserService.getAllUsers(users => setUsers(users))

        lessonsDataSample.forEach((lesson) => {
            if (lesson.code === lessonCode) {


                setData(lesson)
            }

        })
        // setData(lessonsDataSample.filter(lesson => lesson.code === lessonCode))

    }, [lessonCode,students]);

    const classes = useStyles();
    const [openScheduleModal, setOpenScheduleModal] = useState(false);
    const [openStudentModal,setOpenStudentModal] = useState(false);
    const [columns, setColumns] = useState(Columns(users))
    const [profileEditMode, setProfileEditeMode] = useState(true);
    const [scheduleEditMode, setScheduleEditeMode] = useState(true);
    const [financialEditMode, setFinancialEditeMode] = useState(true);
    const [code, setCode] = useState();
    const [lessonName, setLessonName] = useState();
    const [teacherName, setTeacherName] = useState();
    const [capacity, setCapacity] = useState();
    const [price, setPrice] = useState();
    const [grossProfit, setGrossProfit] = useState();
    const [teachingRights, setTeachingRights] = useState();
    const [interestRates, setInterestRates] = useState();
    const [netProfit, setNetProfit] = useState();
    const [depositTeacher, setDepositTeacher] = useState();
    const [typeOfCourse, setTypeOfCourse] = useState();
    const [schedule, setSchedule] = useState();
    const [students, setstudents] = useState();
    const [scoin, setScoin] = useState();
    const [startDate, setStartDate] = useState();
    const [status, setStatus] = useState();
    const [numberOfSessions, setNumberOfSessions] = useState();
    const [grade, setGrade] = useState();
    const [confirmation, setConfirmation] = useState();
    const [alert, setAlert] = useState({ show: false });

    const editProfileHandler = () => {
        setEditeMode(false);
    };


    const setData = (le) => {
        setCode(le.code || 'تعیین نشده')
        setLessonName(le.lessonName || 'تعیین نشده')
        setTeacherName(le.teacherName || 'تعیین نشده')
        setCapacity(le.capacity || 'تعیین نشده')
        setPrice(le.price || 'تعیین نشده')
        setTypeOfCourse(le.typeOfCourse || 'تعیین نشده')
        setScoin(le.scoin || 'تعیین نشده')
        setSchedule(le.schedule || 'تعیین نشده')
        setstudents(le.students || 'تعیین نشده')
        setStartDate(le.startDate || 'تعیین نشده')
        setStatus(le.status || 'تعیین نشده')
        setInterestRates(le.interestRates || 'تعیین نشده')
        setNumberOfSessions(le.numberOfSessions || 'تعیین نشده')
        setTeachingRights(le.teachingRights || 'تعیین نشده')
        setNetProfit(le.netProfit || 'تعیین نشده')
        setDepositTeacher(le.depositTeacher || 'تعیین نشده')
        setConfirmation(le.confirmation)
        
        students ? setGrossProfit(students.length * price) : setGrossProfit(le.grossProfit || 'تعیین نشده');

    }
    const handleChangeProfile = () => {
        setProfileEditeMode(false);
    }
    const handleChangeShedule = () => {
        setScheduleEditeMode(false);
    }
    const handleChangeFinancial = () => {
        setFinancialEditeMode(false);
    }
    const handleSubmitProfile = () => {
        if (!profileEditMode) {
            const updatedProfile = { code, lessonName, teacherName, capacity, typeOfCourse, scoin, status, numberOfSessions, }
            // send to service 
            console.log(updatedProfile);
            setProfileEditeMode(true)
        }
    }
    const handleSubmitSchedule = () => {
        if (!scheduleEditMode) {
            const updatedSchedulandStudent = { schedule, students }
            //send to service
            console.log(updatedSchedulandStudent)
            setScheduleEditeMode(true)
        }
    }
    const handleSubmitFinancial = () => {
        if (!financialEditMode) {

            const updatedFinancial = { netProfit, depositTeacher, teachingRights, interestRates, grossProfit, price }
            // sene to service 

            console.log(updatedFinancial)
            setFinancialEditeMode(true)
        }
    }
    const handlerconfirmation = (confrim) => {
        if (confrim) {
            //send to service true
            setConfirmation(!confirmation)
            setAlert({ show: true, message: 'کلاس با موفقیت تایید شد', variant: 'fill', severity: "success" })
        }


        else {
            //send to service false
            setConfirmation(!confirmation)
            setAlert({ show: true, message: 'کلاس مورد تایید قرار نگرفت', variant: 'fill', severity: "warning" })



        }
    }
    const addStudentHandler = (nCode) => {
        let student = {}
        UserService.getUserByNationalCode(nCode,(user) => {
            student = {nCode: nCode, scoreLesson: '0', scoreTeacher: '0', numberOfAbsences: '0' }
            students.push(student);
            console.log(students);
        })
    }
    return (
        (
            <div>
            
                <GridContainer>
                    {/************************** confirmation container  *********************/}
                    {!confirmation && <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="danger">
                                <h4 className={classes.cardTitleWhite}>تاییدیه کلاس</h4>
                            </CardHeader>
                            <CardBody>
                                <h4>آیا این کلاس با مشخصات زیر مورد تایید میباشد ؟</h4>
                                <GridContainer>
                                    <GridItem xs={6} sm={2} md={2}>
                                        <CustomInput
                                            labelText="امتیاز این کلاس "
                                            id="scoin"

                                            onChange={(e) => setScoin(e.target.value)}
                                            endAdornment={scoin > 0 ? <InputAdornment position="end">Scoin</InputAdornment> : ''}

                                            value={PN.convertEnToPe(scoin)}
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                disabled: false,
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                                <GridItem xs={12} sm={12} md={12}>
                                    <Button
                                        className={classes.btn}
                                        color="info"
                                        onClick={() => handlerconfirmation(true)}
                                    >
                                        بله
                                    </Button>
                                    <Button
                                        className={classes.btn}
                                        color="danger"
                                        onClick={() => handlerconfirmation(false)}
                                    >
                                        خیر!!!
                                    </Button>
                                </GridItem>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    }
                    {/* --------------------------------------------------------------------------- */}
                    <GridItem xs={12} sm={12} md={12}>
                        <Card profile>
                            <CardBody profile color="primary">
                                <h4 className={classes.cardTitle}>{PN.convertEnToPe(lessonName)}</h4>
                            </CardBody>
                        </Card>
                    </GridItem>

                    {/******************************* Profile container **********************/}
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>پروفایل درس</h4>
                                {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={6} sm={2} md={1}>
                                        <CustomInput
                                            labelText="کد درس"
                                            id="code"
                                            onChange={(e) => setCode(e.target.value)}
                                            value={PN.convertEnToPe(code)}
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                disabled: profileEditMode,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={4} md={2}>
                                        <CustomInput
                                            labelText="نام درس"
                                            id="lessonName"
                                            onChange={(e) => setLessonName(e.target.value)}
                                            value={PN.convertEnToPe(lessonName)}
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                disabled: profileEditMode,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={4} md={2}>
                                        <CustomInput
                                            labelText="نام استاد"
                                            id="teacherName"
                                            onChange={(e) => setTeacherName(e.target.value)}
                                            value={teacherName}
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                disabled: profileEditMode,
                                            }}
                                        />
                                    </GridItem>

                                    <GridItem xs={4} sm={2} md={1}>
                                        <CustomInput
                                            labelText="ظرفیت"
                                            id="capacity"
                                            value={PN.convertEnToPe(capacity)}
                                            onChange={(e) => setCapacity(e.target.value)}
                                            endAdornment={capacity > 0 ? <InputAdornment position="end">نفر</InputAdornment> : ''}

                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                disabled: profileEditMode,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={4} sm={2} md={1}>
                                        <CustomInput
                                            labelText="امتیاز"
                                            id="scoin"

                                            onChange={(e) => setScoin(e.target.value)}
                                            value={PN.convertEnToPe(scoin)}
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                disabled: profileEditMode,
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={4} md={2}>
                                        <CustomInput
                                            labelText="وظعیت"
                                            id="status"
                                            onChange={(e) => setStatus(e.target.value)}
                                            value={status}
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                disabled: profileEditMode,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={4} md={2}>
                                        <CustomInput
                                            labelText="نوع تدریس"
                                            id="typeOfCourse"
                                            onChange={(e) => setTypeOfCourse(e.target.value)}
                                            value={typeOfCourse}
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                disabled: profileEditMode,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={4} md={2}>
                                        <CustomInput
                                            labelText="تعداد جلساد"
                                            id='numberOfSessions'
                                            onChange={(e) => setNumberOfSessions(e.target.value)}
                                            value={PN.convertEnToPe(numberOfSessions)}
                                            endAdornment={numberOfSessions > 0 ? <InputAdornment position="end">جلسه</InputAdornment> : ''}

                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{


                                                disabled: profileEditMode,
                                            }}
                                        />
                                    </GridItem>

                                </GridContainer>
                                <GridContainer>


                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                                <Button className={classes.btn} color="primary" onClick={handleSubmitProfile}>
                                    بروزرسانی
                                </Button>
                                <Button
                                    className={classes.btn}
                                    color="primary"
                                    onClick={handleChangeProfile}
                                >
                                    تغییر مشخصات
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    {/******************** Schedule and Person List Container *****************************/}
                    <GridItem xs={12} ys={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="success">
                                <h4 className={classes.cardTitleWhite}>برنامه کلاسی و لیست افراد </h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <h5 className={classes.cardTitle}>برنامه کلاسی</h5>

                                    <GridItem xs={12} sm={12} md={12}>
                                        <div className={classes.tableResponsive}>
                                            {daysOfWeek.map((day, key) => {
                                                return <GridItem xs={12} sm={12} md={12} key={key}  >
                                                    <GridItem xs={12} sm={12} md={12} justifyContentStart>
                                                        <h5 className={classes.cardTitle}>{day}</h5>
                                                        {schedule && schedule.map((sche, key) => {
                                                            if (sche.day == day) {
                                                                return <CustomChip className={classes.customChips} label={PN.convertEnToPe(sche.time)} key={key} color="primary" />
                                                            }
                                                        })}
                                                    </GridItem>
                                                    <hr />
                                                </GridItem>
                                            })}
                                        </div>
                                        <CustomFab size="small" color="secondary" label="add" onClick={() => setOpenScheduleModal(true)}>
                                            <AddIcon />
                                        </CustomFab>
                                        <CustomModal open={openScheduleModal} close={() => setOpenScheduleModal(false)}>
                                            <AddScheduleModal classes={classes} schedule={(s)=>{schedule.push(s);setOpenScheduleModal(false)}}/>
                                        </CustomModal>
                                    </GridItem>
                                    <Divider />
                                    <h5 className={classes.cardTitle}>لیست افراد</h5>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <div className={classes.tableResponsive}>
                                            <UserTable columns={Columns(users)} data={students} />
                                        </div>
                                        <CustomFab size="small" color="secondary" label="add" onClick={() => setOpenStudentModal(true)}>
                                            <AddIcon />
                                        </CustomFab>
                                        <CustomModal open={openStudentModal} close={() => setOpenStudentModal(false)}>

                                            <AddStudentModal classes={classes} submit={(nCode) =>{addStudentHandler(nCode);setOpenStudentModal(false)}}/>
                                        </CustomModal>

                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                                <Button className={classes.btn} color="success" onClick={handleSubmitSchedule}>
                                    بروزرسانی
                                </Button>
                                <Button
                                    className={classes.btn}
                                    color="success"
                                    onClick={handleChangeShedule}
                                >
                                    تغییر مشخصات
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                    {/********************************** Fianancial Container *************************/}
                    <GridItem xs={12} ys={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="rose">
                                <h4 className={classes.cardTitleWhite}>مالی  </h4>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={4} md={2}>
                                        <CustomInput
                                            labelText="  قیمت کل دوره"
                                            id="price"
                                            onChange={(e) => setPrice(e.target.value)}
                                            value={PN.convertEnToPe(PN.sliceNumber(price))}
                                            endAdornment={price > 0 ? <InputAdornment position="end">تومان</InputAdornment> : ''}

                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                disabled: financialEditMode,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={4} md={2}>
                                        <CustomInput
                                            labelText="درامد ناخالص"
                                            id="grossProfit"
                                            onChange={(e) => setGrossProfit(e.target.value)}
                                            value={PN.convertEnToPe(PN.sliceNumber(grossProfit))}
                                            endAdornment={grossProfit > 0 ? <InputAdornment position="end">تومان</InputAdornment> : ''}

                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                disabled: financialEditMode,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={4} md={2}>
                                        <CustomInput
                                            labelText="درصد سود خالص"
                                            id="interestRates"
                                            onChange={(e) => setInterestRates(e.target.value)}
                                            value={PN.convertEnToPe(PN.sliceNumber(interestRates))}
                                            endAdornment={interestRates > 0 ? <InputAdornment position="end">%</InputAdornment> : ''}

                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                disabled: financialEditMode,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={4} md={2}>
                                        <CustomInput
                                            labelText="حق تدریس استاد "
                                            id="teachingRights"
                                            onChange={(e) => setTeachingRights(e.target.value)}
                                            value={PN.convertEnToPe(PN.sliceNumber(teachingRights))}
                                            endAdornment={teachingRights > 0 ? <InputAdornment position="end">تومان</InputAdornment> : ''}

                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                disabled: financialEditMode,
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={4} md={2}>
                                        <CustomInput
                                            labelText="مبلغ واریز شده به استاد"
                                            id="depositTeacher"
                                            onChange={(e) => setDepositTeacher(e.target.value)}

                                            value={PN.convertEnToPe(PN.sliceNumber(depositTeacher))}
                                            endAdornment={depositTeacher > 0 ? <InputAdornment position="end">تومان</InputAdornment> : ''}

                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                disabled: financialEditMode,
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={4} md={2}>
                                        <CustomInput
                                            labelText="سود خالص "
                                            id="netProfit"
                                            onChange={(e) => setNetProfit(e.target.value)}
                                            value={PN.convertEnToPe(PN.sliceNumber(netProfit))}
                                            endAdornment={netProfit > 0 ? <InputAdornment position="end">تومان</InputAdornment> : ''}

                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                disabled: financialEditMode,
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                                <Button className={classes.btn} color="rose" onClick={handleSubmitFinancial}>
                                    بروزرسانی
                                </Button>
                                <Button
                                    className={classes.btn}
                                    color="rose"
                                    onClick={handleChangeFinancial}
                                >
                                    تغییر مشخصات
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>

                </GridContainer>
            </div>)
    );
}
