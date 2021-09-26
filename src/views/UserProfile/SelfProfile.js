import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
// sample data for test
import { DataSample } from '../../data/dataSample'
// import avatar from "assets/img/faces/marc.jpg";
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
// const styles = {
//   cardCategoryWhite: {
//     color: "rgba(255,255,255,.62)",
//     margin: "0",
//     fontSize: "14px",
//     marginTop: "0",
//     marginBottom: "0",
//   },
//   cardTitleWhite: {
//     color: "#FFFFFF",
//     marginTop: "0px",
//     minHeight: "auto",
//     fontWeight: "300",
//     fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//     marginBottom: "3px",
//     textDecoration: "none",
//   },
// };

const useStyles = makeStyles(styles);

export default function SelfProfile() {

  useEffect( () => {
    setData(DataSample[1]);
    console.log(data);
  });
  const [data, setData] = useState(DataSample[1]);
  const classes = useStyles();
  const [editMode, setEditeMode] = useState(true);
  const [lastName, setLastName] = useState(data.lastName);
  const [firstName, setFirstName] = useState(data.firstName);
  const [email, setEmail] = useState(data.email);
  const [username, setUsername] = useState(data.username || 'تعیین نشده');
  const [age, setAge] = useState(data.age);
  const [phone, setPhone] = useState(data.phone);
  const [address, setAddress] = useState(data.address);
  const [discription, setDiscription] = useState(data.discription);
  const [userPost] = useState(data.post)
  const [image] = useState(
    "https://i.ibb.co/7YXgg5t/photo-2021-08-20-23-12-48-Copy.jpg"
  );
  const [typeofuser, setTypeofuser] = useState(data.typeOfUser);
  const [grade, setGrade] = useState(data.Grade);
  const editProfileHandler = () => {
    setEditeMode(false);
  };

  return (
    <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
          <Card profile>
            <CardAvatar profile>
          
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={image} alt="..." />
              </a>
         
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>{userPost}</h6>
              <h4 className={classes.cardTitle}>{firstName + " " + lastName}</h4>
              {!editMode ? (
                <CustomInput
                  id="discription"
                  onChange={(e) => setDiscription(e.target.value)}
                  value={discription}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                    disabled: editMode,
                  }}
                />
              ) : (
                <p className={classes.description}>
                  {discription}
                </p>
              )}
              {/* 
              <Button className={classes.btn} color="primary" round>
                Follow
              </Button> */}
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>پروفایل</h4>
              <p className={classes.cardCategoryWhite}>اطلاعاتتون رو کامل کنید!</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="نوع کاربری"
                    id="typeOfuser"
                    onChange={(e) => setTypeofuser(e.target.value)}
                    value={typeofuser}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="نام کاربری"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: editMode,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="آدرس ایمیل"
                    id="email-address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: editMode,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="نام"
                    id="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: editMode,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="نام خانوادگی"
                    id="last-name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: editMode,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="سن"
                    id="age"
                    type="number"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: editMode,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="شماره تماس"
                    id="phone"
                    type="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: editMode,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="مدرک تحصیلی"
                    id="grade"
                    onChange={(e) => setGrade(e.target.value)}
                    value={grade}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: editMode,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>آدرس</InputLabel>
                  <CustomInput
                    id="address"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      disabled: editMode,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button className={classes.btn} color="primary">
                بروز رسانی
              </Button>
              <Button
                className={classes.btn}
                color="primary"
                onClick={editProfileHandler}
              >
                تغییر مشخصات
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
