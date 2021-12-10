import React from "react";
import { Tag, Badge, Space } from "antd"
import { withStyles } from '@material-ui/core/styles';
import PN from "persian-number"
import { Link } from 'react-router-dom'
const CustomTag = withStyles({
    root: { borderRadius: '10px', }

})((props) => <Tag  {...props} />);
export default function PersonOfLesson(users) {
    console.log('here is a person of lessons')
    const columns = '';
    const All = [
        {
            title: "نام",
            // dataIndex: "firstName",
            key: "firstName",
            render: (text, record) => {
                return (<>

                    {users.map(user => {
                        if (user.nationalCode == text.nCode) {
                            return user.firstName
                        }
                    })}

                </>


                )
            }
        },
        {
            title: "نام خانوادگی",
            key: "lastName",
            render: (text, record) => {
                return (<>
                    {users.map(user => {
                        if (user.nationalCode == text.nCode) {
                            return user.lastName
                        }
                    })}
                </>)
            }
        },
        {
            title: "سن",
            key: "age",
            render: (text, record) => {
                return <>
                    {users.map(user => {
                        if (user.nationalCode == text.nCode) {
                            return PN.convertEnToPe(user.age)
                        }
                    })}
                </>
            }


        },
        {
            title: "نمره درس",

            key: "scoreLesson",
            sorter: (a, b) => { console.log(a, b) },
            render: (text) => {
                return (<>{
                    PN.convertEnToPe(text.scoreLesson)
                }</>)
            }
        },

        {
            title: "تعداد جلسات غایب",

            key: "scoreLesson",
            sorter: (a, b) => { console.log(a, b) },
            render: (text) => {
                return (<>{

                    PN.convertEnToPe(text.numberOfAbsences)

                }</>)
            }

        },

        {
            title: "عملیات",
            key: "action",
            render: (text, record) =>
                <>
                      {users.map(user => {
                        if (user.nationalCode == text.nCode) {
                            return (<Link
                                to={"/userProfile/" + user.id}
                            >
                                پروفایل
                                {!user.confirmation && <Tag color="red" >نیاز به تایید</Tag>}
        
                            </Link>)
                        }
                    })}

                </>

            ,
        },
    ];
    return All;
}