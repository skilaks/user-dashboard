/*eslint-disable*/
import React,{ useState} from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import InstagramIcon from '@material-ui/icons/Instagram';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import HistoryIcon from "@material-ui/icons/History";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Quote from "components/Typography/Quote.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import UserTable from "components/Table/UserTable.js";
import Columns from "components/Table/Columns"
//Services 
import {DashboardService} from '../../Services/Dashboard'
import {DataSample} from '../../data/dataSample'
//Charts
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";
//Styles
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";



let classesTask = [
  "طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن؟",
  "	نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟",
  "همان حال کار آنها به نوعی وابسته به متن می‌باشد",
  "	آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند",
];
let website = [
  "بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته",
  "اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید؟",
  "اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید؟",
  "اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید؟",
  "اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید؟",
];


const useStyles = makeStyles(styles);

const setDataCurentOnTable = (data, typeofTable, callback) => {
  fillterdata(data, typeofTable, callback);
}
console.log(DashboardService.getChartsInformation())
export default function RTLPage() {
  const classes = useStyles();
  const [bestUserData,setBestUserData]= useState([])
  const [detailedInformation , setDetailedInformation] = useState(DashboardService.getDetailedInformation)
  const [chartsInformation,setChartsInformation] = useState(DashboardService.getChartsInformation)
  return (
    <div>
      {/*-------------------------- detail Cards-------------------------------- */}
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <EmojiPeopleIcon />
              </CardIcon>
              <p className={classes.cardCategory}>اساتید</p>
              <h3 className={classes.cardTitle}>{detailedInformation.teachers}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                توسط گیت‌هاب
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <EmojiPeopleIcon />
              </CardIcon>
              <p className={classes.cardCategory}>دانشجو</p>
              <h3 className={classes.cardTitle}>{detailedInformation.students}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                توسط گیت‌هاب
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <InstagramIcon />
              </CardIcon>
              <p className={classes.cardCategory}>دنبال‌کنندها</p>
              <h3 className={classes.cardTitle}>{detailedInformation.followers}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                هم‌اکنون
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="rose">
                <PersonAddIcon />
              </CardIcon>
              <p className={classes.cardCategory}>ثبت نام استعداد یابی</p>
              <h3 className={classes.cardTitle}>{detailedInformation.talentRegistered}</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                هم‌اکنون
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <MeetingRoomIcon />
              </CardIcon>
              <p className={classes.cardCategory}>کلاس های درخواست داده شده</p>
              <h3 className={classes.cardTitle}>
                {detailedInformation.requestedClasses}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                مجموع کل
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <MeetingRoomIcon />
              </CardIcon>
              <p className={classes.cardCategory}>کلاس های ارائه داده شده</p>
              <h3 className={classes.cardTitle}>
                {detailedInformation.classesProvided}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                مجموع کل
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <HistoryIcon />
              </CardIcon>
              <p className={classes.cardCategory}>کلاس های برگزار شده</p>
              <h3 className={classes.cardTitle}>
                {detailedInformation.classesHeld}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                ۲۴ ساعت اخیر
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <HistoryIcon />
              </CardIcon>
              <p className={classes.cardCategory}>کلاس های در حال اجرا</p>
              <h3 className={classes.cardTitle}>
                {detailedInformation.classesBeingHeld}
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                ۲۴ ساعت اخیر
              </div>
            </CardFooter>
          </Card>
        </GridItem>

      </GridContainer>
      {/* -----------------------------charts ---------------------------------*/}
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success" >
              <ChartistGraph
                className="ct-chart"
                data={chartsInformation.Registrants}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>ثبت نام کنندگان</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                رشد در ثبت نام امروز.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <Button color="success" size="sm" round  >هفته</Button>
                <Button color="success" size="sm" round >ماه</Button>
                <Button color="success" size="sm" round >سال</Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={chartsInformation.VisitSocialMedia}
                type="Line"
                options={emailsSubscriptionChart.options}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>بازدید صفحات مجازی</h4>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <Button color="warning" size="sm" round  >هفته</Button>
                <Button color="warning" size="sm" round >ماه</Button>
                <Button color="warning" size="sm" round >سال</Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={chartsInformation.GrossProfit}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>مالی</h4>
              <p className={classes.cardCategory}>سود ناخالص</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <Button color="danger" size="sm" round  >هفته</Button>
                <Button color="danger" size="sm" round >ماه</Button>
                <Button color="danger" size="sm" round >سال</Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="وظایف:"
            headerColor="primary"
            rtlActive
            tabs={[
              {
                tabName: "کلاس ها",
                tabIcon: MeetingRoomIcon,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    TasksIndexes={[0, 1, 2, 3]}
                    Tasks={classesTask}
                    rtlActive
                  />
                ),
              },
              {
                tabName: "وبسایت",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    TasksIndexes={[0, 1, 2, 3]}
                    Tasks={website}
                    rtlActive
                  />
                ),
              },

            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="rose">
              <h4 className={classes.cardTitleWhite}>فعال ترین</h4>
              <p className={classes.cardCategoryWhite}>
              فعال ترین های سایت 
              </p>
            </CardHeader>
            <CardBody>
              {/* <Table
                tableHeaderColor="rose"
                tableHead={["کد", "نام", "حقوق", "استان"]}
                tableData={[
                  ["1", "احمد حسینی	", "$36,738", "مازندران"],
                  ["2", "مینا رضایی	", "$23,789", "گلستان"],
                  ["3", "مبینا احمدپور	", "$56,142", "تهران"],
                  ["4", "جلال آقایی	", "$38,735", "شهرکرد"],
                ]}
              /> */}
              <UserTable columns={Columns('BestUser')} data={DataSample}/>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer >
        {/* <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>اعلان ها</h4>
              <p className={classes.cardCategoryWhite}>
                يدويا من قبل أصدقائنا من{" "}
                <a
                  target="_blank"
                  href="https://material-ui-next.com/?ref=creativetime"
                >
                  واجهة المستخدم المادية
                </a>{" "}
                ونصب من قبل{" "}
                <a
                  target="_blank"
                  href="https://www.creative-tim.com/?ref=mdr-rtl-page"
                >
                  الإبداعية تيم
                </a>
                . يرجى التحقق من{" "}
                <a href="#pablo" target="_blank">
                  وثائق كاملة
                </a>
                .
              </p>
            </CardHeader>
            <CardBody>
              <SnackbarContent
                message={
                  'این یک اعلان است که با کلاس color="warning" ایجاد شده است.'
                }
                close
                rtlActive
                color="warning"
              />
              <SnackbarContent
                message={
                  'این یک اعلان است که با کلاس color="primary" ایجاد شده است.'
                }
                close
                rtlActive
                color="primary"
              />
              <SnackbarContent
                message={"این یک اعلان با دکمه بستن و آیکن است"}
                close
                rtlActive
                color="info"
              />
            </CardBody>
          </Card>
        </GridItem> */}
        {/* <GridItem xs={12} sm={12} md={6}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>مدیرعامل / مدیرفنی</h6>
              <h4 className={classes.cardTitle}>خداداد عزیزی</h4>
              <p className={classes.description}>
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن
                صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده
                می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و
                ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از
                متن‌های آزمایشی و بی‌معنی استفاده می‌کنند ...
              </p>
              <Button className={classes.btn} color="primary" round>
                دنبال‌کردن
              </Button>
            </CardBody>
          </Card>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}
