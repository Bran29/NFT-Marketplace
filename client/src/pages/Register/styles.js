import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  label: {
    display: "block",
    marginTop: "10px",
    },

  pageItem: {
    maxWidth: "350px",
    margin: "auto",
  
  },  
  
  card:{
  background: "#f7f7f7",
  padding: "20px 25px 30px",
  margin: "0 auto 25px",
  marginTop: "50px",
  borderRadius: "2px",
  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.3)",
  },

  img:{
    width: "96px",
    height: "96px",
    margin: "0 auto 10px",
    display: "block",
    borderRadius: "50%",
  },


});

export { useStyles };