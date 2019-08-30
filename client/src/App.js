import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import useSocket from 'use-socket.io-client';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#cfe8fc',
    height: '30vh',
  },
});


function App() {
  const classes = useStyles();

  const [socket] = useSocket('ws://192.168.202.189:2999',{
    autoConnect: true,
    secure: false
  });

  // connect to socket
  //socket.connect();

  // on event, do something
  socket.on('new message', (text)=>{
    console.log(text);
  });

  // send data to server
  socket.emit('new message', 'this is demo..');

  return (
    <div className="App">
      <header>
        <h1>Chat App</h1>
      </header>
      <body>
        <div>
          <Container maxWidth="sm">
            <Typography className={classes.root}></Typography>
          </Container>
          <TextField></TextField>
        </div>
      </body>
    </div>
  );
}

export default App;
