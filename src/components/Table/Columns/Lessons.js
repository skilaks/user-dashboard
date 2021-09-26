import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Tag, Button } from "antd"
import {
    SyncOutlined,
    ClockCircleOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom'
const CustomTag = withStyles({
    root: { borderRadius: '10px', }

})((props) => <Tag  {...props} />);
export default function Columns(lessons) {

    const columns = '';
    const All = [
        {
            title: "کد",
            dataIndex: "code",
            key: "code",
            sorter: (a, b) => a.code - b.code,
        },
        {
            title: "نام درس",
            dataIndex: "lessonName",
            key: "lessonName",
            filters:
                lessons.map((lesson, index) => { return { text: lesson.name, value: lesson.name } })

            ,
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.lessonName.length - b.lessonName.length,
            sortDirections: ['descend'],
        },
        {
            title: "نام استاد",
            dataIndex: "teacherName",
            key: "teacherName",
            sorter: (a, b) => a.teacherName.length - b.teacherName.length,
        },
        {
            title: "ظرفیت",
            dataIndex: "capacity",
            key: "capacity",
            sorter: (a, b) => a.capacity - b.capacity,
        },
        {
            title: "وضعیت",
            key: "status",
            dataIndex: "status",
            sorter: (a, b) => a.status.length - b.status.length,
            render: (text, record) => (
                <CustomTag color={text === 'درحال برگزاری' ? 'success' : 'warning'} icon={text === 'درحال برگزاری' ? <SyncOutlined spin /> : <ClockCircleOutlined />} >

                    {text}
                </CustomTag>

            ),

        },
        {
            title: "نوع کلاس",
            key: "typeOfCourse",
            dataIndex: "typeOfCourse",
            sorter: (a, b) => a.typeOfCourse.length - b.typeOfCourse.length,
            render: (text, record) => (
                <CustomTag color={text === 'حضوری' ? 'blue' : 'green'} >
                    {text}
                </CustomTag>
            ),

        },

        {
            title: "عملیات",
            key: "action",
            render: (text, record) =>

                // <Button type="primary" onClick={  <Redirect  to="/userProfile" /> }>پروفایل</Button>
                <Link
                    to={"/lessonProfile/" + text.code}

                >
                    مشاهده درس
                </Link>


            ,
        },
    ];




    // switch (type) {
    //     case 'All': return All;

    //         break;
    //     case 'Student-collegian': return StudentCollegian;

    //         break;
    //     case 'Student': return Student;

    //         break;
    //     case 'Teacher': return Teacher;

    //         break;
    //     case 'Admin': return Admin;

    //         break;


    // }
    return All;
}