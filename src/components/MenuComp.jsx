import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';



const useStyle = makeStyles({
  
   hambicon: {
    position: "absolute",
    backgroundColor: "#000", /*dark*/
    color: "#fff", /*light*/
    stroke: "#fff",
    fontSize: "70px",
    right: "15px",
    top: "15px",
    padding: "20px",
    borderRadius: "50%",
    border: "2px solid #000",
    borderColor: "#000",
       '&:hover': {
      backgroundColor: "#fff",
      color: "#000",
      stroke: "#000",
       border: "2px solid #000",
    },
    '@media (min-width: 50em)': { 
      fontSize: "90px",
    }
    
  },
});



function MenuComp() {
  const classes = useStyle();
  
  return <MenuIcon className={classes.hambicon}></MenuIcon>;

}
export default MenuComp