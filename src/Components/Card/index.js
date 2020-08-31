import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './Header';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { saveCardInfo, deleteCard } from '../../actions';
import Dialog from '@material-ui/core/Dialog';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const close = keyframes`
0%{
  transform: translate(-50%, -50%) scale(0.25);
}
55% {
  transform: translate(-50%, -50%) scale(1.15);
}
`;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Card({ columnId, item, cardStatus, setCardStatus }) {
  const [info, setInfo] = useState(item.task);
  const [title, setTitle] = useState(item.content);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [priority, setPriority] = React.useState('Low');

  const handleChange = (event) => {
    setPriority(event.target.value);
    // TO DO: Send priority value to state
  };

  return (
    <Dialog open={cardStatus} aria-labelledby='form-dialog-title'>
      {item !== null ? (
        <CardWrapper>
          <Header title={item.content} setTitle={setTitle} />
          <ContentWrapper>
            <TextField
              id='outlined-multiline-static'
              label='Description'
              multiline
              rows={4}
              defaultValue={item.task}
              variant='outlined'
              onChange={(e) => {
                setInfo(e.target.value);
              }}
              style={{ marginTop: 10 }}
            />

            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>
                Priority Level
              </InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={priority}
                onChange={handleChange}
              >
                <MenuItem value={'Low'}>Low</MenuItem>
                <MenuItem value={'Medium'}>Medium</MenuItem>
                <MenuItem value={'High'}>High</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant='contained'
              onClick={() => {
                setCardStatus((n) => !n);
                dispatch(saveCardInfo(columnId, item, info, title));
              }}
              style={{ color: 'white', background: '#296d98' }}
            >
              SAVE
            </Button>
            <Button
              variant='contained'
              onClick={() => {
                setCardStatus((n) => !n);
                dispatch(deleteCard(columnId, item.id));
              }}
              style={{ color: 'white', background: '#296d98' }}
            >
              DELETE
            </Button>
          </ContentWrapper>
        </CardWrapper>
      ) : (
        'LOADING'
      )}
    </Dialog>
  );
}

const CardWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  transform: translate(-50%, -50%) scale(1);
  width: 300px;
  height: 400px;
  background: white;
  /* background: rgb(246, 243, 33);
  background: linear-gradient(
    225deg,
    rgba(246, 243, 33, 1) 0%,
    rgba(233, 231, 19, 1) 56%,
    rgba(251, 224, 2, 1) 94%,
    rgba(255, 226, 0, 1) 100%
  ); */
  box-shadow: 0 10px 15px 0 #888888;
  border-radius: 12px;
  animation: ${close} 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  /* animation-fill-mode: forwards; */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
