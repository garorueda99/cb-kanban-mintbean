import React from "react";
// import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { FiUser } from "react-icons/fi";

const date = moment(new Date()).format("MMM Do");

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
//   orange: {
//     color: theme.palette.getContrastText(deepOrange[500]),
//     backgroundColor: deepOrange[500],
//   },
// }));

export default function Header({ title = "Set a Title", setTitle }) {
  // const classes = useStyles();

  return (
    <div>
      <Wrapper>
        {/* <Avatar
          alt='user'
          src='/static/images/avatar/avatar1.png'
          className={classes.orange}
        /> */}
        <Avatar />
        <div style={{ marginLeft: "8px" }}>
          <TextField
            id="standard-basic"
            label="Title"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TimeStamp>{date}</TimeStamp>
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Avatar = styled(FiUser)`
  color: #fff;
  background: deepskyblue;
  border: 5px solid deepskyblue;
  border-radius: 50%;
  font-size: 48px;
`;

const TimeStamp = styled.div`
  margin-top: 6px;
  font-style: italic;
  font-size: 0.7rem;
  color: rgb(101, 119, 134);
`;
