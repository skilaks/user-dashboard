import React from 'react'
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import Danger from "components/Typography/Danger.js";
import Warning from "@material-ui/icons/Warning";
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
const useStyles = makeStyles(styles);

export default function DetailCard({title}) {
    const classes = useStyles();

    return (
        <div>
            <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>فضا مصرف شده</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  فضای بیشتری داشته باشید...
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>
    )
}
