import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

/* ---ButtonStyled = Button with styled components----  */

const ButtonStyled = styled(Button)({
  background: 'linear-gradient(45deg, #242d38 30%, #242d38 90%)',
  border: 0,
  borderRadius: "5%",
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 3em',
  borderRadius: "50px",
  padding: "20px 60px",
  fontSize: "0.8rem",
  letterSpacing: "3px",
  marginLeft: "15px",

});

function ButtonComp() {


  return (
    <div>
    <ButtonStyled>Read more</ButtonStyled>
    </div>
  )
}

export default ButtonComp



