import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Tag, Button } from "antd"
import PN from "persian-number"
import {
    SyncOutlined,
    ClockCircleOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom'
const CustomTag = withStyles({
    root: { borderRadius: '10px', }

})((props) => <Tag  {...props} />);
export default function FinancialUserColumn() {

    const columns = '';
    const All = [
        {
            title: "کد درس",
            dataIndex: "lCode",
            key: "lCode",
            sorter: (a, b) => a.lCode - b.lCode,
            render: (text) => PN.convertEnToPe(text)

        },
        {
            title: "تاریخ",
            dataIndex: "date",
            key: "date",
            render: (text) => PN.convertEnToPe(text)


        },
        {
            title: "مبلغ",
            dataIndex: "amount",
            key: "amount",
            sorter: (a, b) => a.amount - b.amount,
            render: (text) => PN.convertEnToPe(text)
        },

    ];




    return All;
}