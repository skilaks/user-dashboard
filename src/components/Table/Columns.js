import React from "react";
import { Tag, Badge,Space } from "antd"
import { withStyles } from '@material-ui/core/styles';
import PN from "persian-number"
import { Link } from 'react-router-dom'
const CustomTag = withStyles({
    root: { borderRadius: '10px', }

})((props) => <Tag  {...props} />);
export default function Columns(type) {

    const columns = '';
    const All = [
        {
            title: "نام",
            // dataIndex: "firstName",
            key: "firstName",
            render: (text, record) => {
                return (<>
  
                    <Badge dot={text.newTasks} />

                    {text.firstName}
           
                </>


                )
            }
        },
        {
            title: "نام خانوادگی",
            dataIndex: "lastName",
            key: "lastName",
        },
        {
            title: "سن",
            dataIndex: "age",
            key: "age",
            render: (age) =>
                    <>
                        {PN.convertEnToPe(age)}
                    </>
            
        },
        {
            title: "نوع کاربری",
            key: "typeOfUser",
            dataIndex: "typeOfUser",
            render: (typeOfUsers) => (
                <>
                    {typeOfUsers.map((typeOfUser) => {
                        let color = typeOfUser.length > 4 ? "blue" : "green";

                        if (typeOfUser === "دانشجو") {
                            color = "volcano";
                        }
                        return (<>
                            <Tag color={color} key={typeOfUser}>
                                {typeOfUser}
                            </Tag>

                        </>
                        );
                    })}
                </>
            ),

        },
        {
            title: "عملیات",
            key: "action",
            render: (text, record) =>
                    <>
                <Link
                    to={"/userProfile/" + text.id}
                >
                    پروفایل
                    {  ! text.confirmation &&   <Tag color="red" >نیاز به تایید</Tag>}

                </Link>
               
                  </>
                    
            ,
        },
    ];
    const StudentCollegian = [
        {
            title: "نام",
            // dataIndex: "firstName",
            key: "firstName",
            render: (text, record) => {
                return (<>
                    <Badge dot={text.newTasks} />

                    {text.firstName}
                </>


                )
            }
        },
        {
            title: "نام خانوادگی",
            dataIndex: "lastName",
            key: "lastName",
        },
        {
            title: "سن",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "دروس",
            key: "lessons",
            dataIndex: "lessons",
            render: (lessons) => (
                <>
                    {lessons.map((lesson) => {
                        let color = lesson.length > 4 ? "blue" : "green";
                        return (
                            <Tag color={color} key={lesson}>
                                {lesson}
                            </Tag>
                        );
                    })}
                </>
            ),

        },
        {
            title: "عملیات",
            key: "action",
            render: (text, record) =>

                <Link
                    to={"/userProfile/" + text.id}

                >
                    پروفایل
                </Link>


            ,
        },
    ];
    const Student = [
        {
            title: "نام",
            // dataIndex: "firstName",
            key: "firstName",
            render: (text, record) => {
                return (<>
                    <Badge dot={text.newTasks} />

                    {text.firstName}
                </>


                )
            }
        },
        {
            title: "نام خانوادگی",
            dataIndex: "lastName",
            key: "lastName",
        },
        {
            title: "سن",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "دروس",
            key: "lessons",
            dataIndex: "lessons",
            render: (lessons) => (
                <>
                    {lessons.map((lesson) => {
                        let color = lesson.length > 4 ? "blue" : "green";
                        return (
                            <Tag color={color} key={lesson}>
                                {lesson}
                            </Tag>
                        );
                    })}
                </>
            ),

        },
        {
            title: "عملیات",
            key: "action",
            render: (text, record) =>

                <Link
                    to={"/userProfile/" + text.id}

                >

                    پروفایل
                </Link>

            ,
        },
    ];
    const Teacher = [
        {
            title: "نام",
            // dataIndex: "firstName",
            key: "firstName",
            render: (text, record) => {
                return (<>
                    <Badge dot={text.newTasks} />

                    {text.firstName}
                </>


                )
            }
        },
        {
            title: "نام خانوادگی",
            dataIndex: "lastName",
            key: "lastName",
        },
        {
            title: "سن",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "دورس ارائه شده",
            key: "lessons",
            dataIndex: "lessons",
            render: (lessons) => (
                <>
                    {lessons.map((lesson) => {
                        let color = lesson.length > 4 ? "blue" : "green";
                        return (
                            <Tag color={color} key={lesson}>
                                {lesson}
                            </Tag>
                        );
                    })}
                </>
            ),

        },
        {
            title: "عملیات",
            key: "action",
            render: (text, record) =>

                <Link
                    to={"/userProfile/" + text.id}

                >

                    پروفایل
                </Link>

            ,
        },
    ];
    const Admin = [
        {
            title: "نام",
            // dataIndex: "firstName",
            key: "firstName",
            render: (text, record) => {
                return (<>
                    <Badge dot={text.newTasks} />

                    {text.firstName}
                </>


                )
            }
        },
        {
            title: "نام خانوادگی",
            dataIndex: "lastName",
            key: "lastName",
        },
        {
            title: "سن",
            dataIndex: "age",
            key: "age",
        },

        {
            title: " میزان دسترسی",
            dataIndex: "accessRate",
            key: "accessRate",
        },

        {
            title: "عملیات",
            key: "action",
            render: (text, record) =>

                <Link
                    to={"/userProfile/" + text.id}

                >
                    پروفایل
                </Link>

            ,
        },
    ];
    const BestUser = [
        {
            title: "نام",
            // dataIndex: "firstName",
            key: "firstName",
            render: (text, record) => {
                return (<>
                    <Badge dot={text.newTasks} />

                    {text.firstName}
                </>


                )
            }
        },
        {
            title: "نام خانوادگی",
            dataIndex: "lastName",
            key: "lastName",
        },
        {
            title: "سن",
            dataIndex: "age",
            key: "age",
        },

        {
            title: "نوع کاربری",
            dataIndex: "typeOfUser",
            key: "typeOfUser",
            render: (text, record) => (
                <CustomTag color={text === 'مدیر' ? 'blue' : 'green'} >
                    {text}
                </CustomTag>
            ),
        }
    ]
    switch (type) {
        case 'All': return All;

            break;
        case 'Student-collegian': return StudentCollegian;

            break;
        case 'Student': return Student;

            break;
        case 'Teacher': return Teacher;

            break;
        case 'Admin': return Admin;

            break;
        case 'BestUser': return BestUser;

            break;


    }
}