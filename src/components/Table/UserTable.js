import React,{useState,useEffect} from 'react'
import { Table, Tag, Button } from 'antd'
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import "../../assets/css/antd.css";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const useStyles = makeStyles(styles);
export default function UserTable(prop) {
  const  {data , columns, loading  }= prop;
    const classes = useStyles();

    return (
        <div  className={classes.tableResponsive}>
            <Table columns={columns} dataSource={data}  loading={loading} />
        </div>
    )
}
