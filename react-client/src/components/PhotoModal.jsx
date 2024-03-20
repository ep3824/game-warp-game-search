import React from 'react';
import {
  Modal, Card, CardContent, CardActionArea, CardMedia, Button,
} from '@mui/material';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     maxWidth: '110vh',
//     maxHeight: 800,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

export default function SimpleModal(props) {
  // const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cardStyle = {
    display: 'block',
    width: '100vh',
    transitionDuration: '.3s',
  };

  const body = (
    <div style={modalStyle}>
      <Card style={cardStyle}>
        <CardActionArea>
          <CardContent>
            <CardMedia
              component="iframe"
              height="600vh"
              width="100vh"
              src={props.game.clip ? props.game.clip.clips['640'] : ''}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Button
        color="primary"
        size="small"
        onClick={handleOpen}
      >
        Show promo video
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
