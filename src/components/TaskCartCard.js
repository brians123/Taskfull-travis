import React, { useState } from "react";
import "../App.css";
import { TasksContext } from "./TasksContext";

// Material UI
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import AccountCircle from "@material-ui/icons/AccountCircle";
import PinDropIcon from "@material-ui/icons/PinDrop";
import ScheduleIcon from "@material-ui/icons/Schedule";
import NotesIcon from "@material-ui/icons/Notes";
import { makeStyles } from "@material-ui/core/styles";

// Firebase
import firebase from "firebase/app";
import "firebase/database";

const DialogHeader = (props) => {
  return (
    <Typography className="dialog-header" fontWeight={700} variant="h4">
      {props.children}
    </Typography>
  );
};

const myTasksStyles = makeStyles({
  root: {
    marginTop: 5,
    marginBottom: 5,
    width: 250,
    //height:107,
    background: "#ffecb3",
    // background: '#FFE4C4'
    // background: '#3f51b5',
    // color: 'white'
  },
});

// This will be updated to have more than just a title!
const TaskCartCard = ({ task, user }) => {
  const [open, setOpen] = useState(false);
  const classes = myTasksStyles();

  console.log("TASSKKKK" + JSON.stringify(task));

  const handleCardOpen = () => {
    setOpen(true);
  };

  const handleUnaccept = () => {
    let myTask = task;
    myTask.acceptedBy = null;
    myTask.status = "unstarted";
    const db = firebase.database().ref();
    db.child("tasks/" + myTask.id + "/acceptedBy/").set(null);
    db.child("tasks/" + myTask.id + "/acceptedByEmail/").set(null);
    db.child("tasks/" + myTask.id + "/status/").set("unstarted");
    db.child("users/" + user.uid + "/to_do/" + myTask.id).remove();
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    backgroundColor: "green",
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => handleCardOpen(task)}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5" fontWeight={700}>
            {task.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="p">
            {task.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Dialog
        open={open}
        fullWidth
        maxWidth={"md"}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogHeader>{task.title}</DialogHeader>
        <DialogContent>
          <span className="field-row">
            <AccountCircle className="field-icon" />
            <Typography
              variant="body1"
              component="p"
              color="textSecondary"
              pb={3}
            >
              {task.author}
            </Typography>
          </span>
          <span className="field-row">
            <PinDropIcon className="field-icon" />
            <Typography
              variant="body2"
              component="p"
              color="textSecondary"
              pb={3}
            >
              {task.address}
            </Typography>
          </span>
          <span className="field-row">
            <ScheduleIcon className="field-icon" />
            <Typography
              variant="body2"
              component="p"
              color="textSecondary"
              pb={3}
            >
              {task.completeBy}
            </Typography>
          </span>
          <span className="field-row">
            <NotesIcon className="field-icon" />
            <Typography gutterBottom component="p" variant="body1">
              {task.description}
            </Typography>
          </span>
          <div className="req-row">
            {/* {props.task.requirements.map((req, index) => (
                <Chip label={req} key={index}></Chip>
            ))} */}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUnaccept} color="primary">
            Unaccept Task
          </Button>
          {/* <Button onClick={()=>{props.handleComplete(props.task.id); handleClose();}} disabled={disable} autoFocus>
            Complete Task
          </Button> */}
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default TaskCartCard;
