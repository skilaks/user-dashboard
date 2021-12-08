import React from "react";
import { Tag, Badge,Space } from "antd"
import { withStyles } from '@material-ui/core/styles';
import PN from "persian-number"
import { Link } from 'react-router-dom'
const CustomTag = withStyles({
    root: { borderRadius: '10px', }

})((props) => <Tag  {...props} />);
export default function PersonOfLesson(user) {

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
            title: "نمره درس",

            key: "scoreLesson",
            sorter: (a, b) => {console.log(a,b)},
            render: (text) =>

            (<>{

                // text.students.map((student) => {
                //     if (student.nCode == nationalCodeUser) {
                //         return <h5>{PN.convertEnToPe(student.scoreLesson)}</h5>
                //     }
                // })

            }</>)

        },

        {
            title: "تعداد جلسات غایب",

            key: "scoreLesson",
            sorter: (a, b) => {console.log(a,b)},
            render: (text) =>

            (<>{

                // text.students.map((student) => {
                //     if (student.nCode == nationalCodeUser) {
                //         return <h5>{PN.convertEnToPe(student.numberOfAbsences)}</h5>
                //     }
                // })

            }</>)

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
}