import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  },
  homepage: {
      margin: "0",
      padding: "0",
      height: "100%",
      fontFamily: "sans-serif",
     
      margin: "0 auto",
  },
  images: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    
  },
  skdjkr:{
    '& img':{
        objectFit: "cover",
        height: "calc(50vw - 50px)",
        width: "calc(50vw - 50px)",
        filter: "drop-shadow(rgba(0, 0, 0, 0.2) 0px 4px 30px)",
        willChange: "filter",
    }

  },
  banner: {
    // minHeight: "50vh",
    // maxHeight: "50vh",
    // marginBottom: "3rem"

  },
  link:
  {
    underline:'none',
  },
  gridBanner: {
    // margin: 0,
    // width: '100%',
  },
  topblock:{
    backgroundColor: "white",
    display: "flex",
    height: "auto",
    justifyContent: "center",
    flexWrap: "nowrap",
    fontFamily: "sans-serif"
  },
  topblocks:{
    marginLeft: "0px",
    width: "48%",
    maxWidth: "650px",
    display:"flex",
    '& section':{
        paddingLeft: "13.4rem",
        paddingRight: "11rem",
        padding: "0px 11em 0px 11%",
        marginLbottom: "4.9rem"
    }
  },
  main: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
    '& img': {
      width: "55%"
    },
    '& p': {
      margin: "3rem 8rem 4rem 8.5rem",
      fontSize: "1.2rem",
      textAlign: "center"
    },
    '& button': {
      textTransform: 'none',
      fontSize: "1.2rem",
      fontWeight: "400",
      background: '#3F51B5'
    }

  },
  allNfts: {
    marginTop: "2rem",
    padding: "0 2rem",
  },
  title: {
    fontFamily: "sans-serif",
    fontSize: "1.8rem",
    fontWeight: "600",
    marginBottom: "1rem",
  }
});

export { useStyles };
