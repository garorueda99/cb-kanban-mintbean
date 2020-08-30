import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const date = moment(new Date()).format('MMM Do');

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function Header({ title = 'Set a Title' }) {
  const classes = useStyles();

  return (
    <div>
      <Wrapper>
        <Avatar
          alt='user'
          src='/static/images/avatar/avatar1.png'
          className={classes.orange}
        />
        <div style={{ marginLeft: '8px' }}>
          <TextField id='standard-basic' label='Title' defaultValue={title} />
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

const TimeStamp = styled.div`
  margin-top: 6px;
  font-style: italic;
  font-size: 0.7rem;
  color: rgb(101, 119, 134);
  ::before {
    content: '•';
    margin: 0 5px;
  }
`;
