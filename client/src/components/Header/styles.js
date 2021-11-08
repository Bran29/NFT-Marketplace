import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headpage:{
    // boxShadow: "none",
    // backgroundColor: "rgb(255, 255, 255)",
    // top: "0px",
    // maxwidth: "1440px",
    // margin: "0 auto",
    // left: "0",
    // position: "fixed",
    // right: "0",
    // top: "0",
    // zIndex: "15",
    // height: "64px",
    // width: "120%",
    // maxWidth: "1440px",
    // margin: "0 auto",

  },
  header: {
    background: '#3F51B5'
  },
  logo: {
    width: "10rem"
  },
  account: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
  },
  walletIcon: {
    marginRight: "0.4rem",
  }
});

export { useStyles };