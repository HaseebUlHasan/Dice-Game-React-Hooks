import  React , {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Button ,Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function DenseAppBar() {
    const [show, setShow] = useState(false);
    const [playerName , setPlayerName] = useState("")
    const navigate = useNavigate();
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
      <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            General Game
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <>
      <Button variant="primary" onClick={handleShow}>
        Game Start
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Player Name </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label> First Player Name :  </label> {""}
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => navigate("./game" , {state : {playerName}})}>
            Start
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </>
  );
}
