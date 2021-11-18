import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
// core components
import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

const useStyles = makeStyles(styles);

export default function Tasks(props) {
  const { TasksIndexes, Tasks, rtlActive } = props;
  const classes = useStyles();
  const [checked, setChecked] = React.useState([...props.checkedIndexes]);
  const [tasks, setTasks] = React.useState([...props.Tasks])
  const [tasksIndexes, setTasksindex] = React.useState([...props.TasksIndexes])

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const handleRemoveTasks = (value) => {
    if (value !== -1) {
      Tasks.splice(value, 1);
      TasksIndexes.pop();
      setTasks([...Tasks]);
      setTasksindex([...TasksIndexes])
    }
  }

  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive,
  });
  return (
    <Table className={classes.table}>
      <TableBody>
        {tasksIndexes.length > 0 ?
          tasksIndexes.map((value) => (
            <TableRow key={value} className={classes.tableRow}>
              <TableCell className={tableCellClasses}>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  onClick={() => handleToggle(value)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.root,
                  }}
                />
              </TableCell>
              <TableCell className={tableCellClasses}>{tasks[value]}</TableCell>
              <TableCell className={classes.tableActions}>
                <Tooltip
                  id="tooltip-top-start"
                  title="حذف"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    aria-label="Close"
                    className={classes.tableActionButton}
                    onClick={(e) => handleRemoveTasks(value)}

                  >
                    <Close
                      className={
                        classes.tableActionButtonIcon + " " + classes.close
                      }
                    />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))
          : <h3 className={classes.notTasksMsg}>وظیفه ای صادر نشده است</h3>}
      </TableBody>
    </Table>
  );
}

Tasks.propTypes = {
  TasksIndexes: PropTypes.arrayOf(PropTypes.number),
  Tasks: PropTypes.arrayOf(PropTypes.node),
  rtlActive: PropTypes.bool,
  checkedIndexes: PropTypes.array,
};
