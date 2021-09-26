import React from "react";
import { Tag, Button } from "antd"
import { Link } from 'react-router-dom'
export default function Columns(type) {

    const columns = '';
    const All = [
        {
            title: "نام",
            dataIndex: "firstName",
            key: "firstName",
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
            key: "typeOfUser",
            dataIndex: "typeOfUser",
            render: (typeOfUsers) => (
                <>
                    {typeOfUsers.map((typeOfUser) => {
                        let color = typeOfUser.length > 4 ? "blue" : "green";

                        if (typeOfUser === "دانشجو") {
                            color = "volcano";
                        }
                        return (
                            <Tag color={color} key={typeOfUser}>
                                {typeOfUser.toUpperCase()}
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

                // <Button type="primary" onClick={  <Redirect  to="/userProfile" /> }>پروفایل</Button>
                <Link
                    to={"/userProfile/" + text.id}

                >
                                                                                

                    پروفایل
                </Link>


            ,
        },
    ];
    const StudentCollegian = [
        {
            title: "نام",
            dataIndex: "firstName",
            key: "firstName",
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
                                {lesson.toUpperCase()}
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
            dataIndex: "firstName",
            key: "firstName",
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
                                {lesson.toUpperCase()}
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
            dataIndex: "firstName",
            key: "firstName",
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
                                {lesson.toUpperCase()}
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
            dataIndex: "firstName",
            key: "firstName",
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


    }
}