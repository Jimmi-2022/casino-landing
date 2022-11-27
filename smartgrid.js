var smartgrid = require("smart-grid");

/* It's principal settings in smart grid project */
var settings = {
  outputStyle: "scss",
  columns: 19,
  offset: "12px",
  //mobileFirst: true,
  container: {
    maxWidth: "1600px",
    fields: "0px",
  },
  breakPoints: {
    mr: {
      width: "1580px",
      fields: "30px",
    },
    mk: {
      width: "1430px",
      fields: "30px",
    },
    ms: {
      width: "1350px",
      fields: "30px",
    },
    szz: {
      width: "1276px",
      fields: "30px",
    },
    sz: {
      width: "1226px",
      fields: "30px",
    },
    sk: {
      width: "1210px",
      fields: "30px",
    },
    mz: {
      width: "1110px",
      fields: "30px",
    },
    md: {
      width: "920px",
      fields: "25px",
    },
    sl: {
      width: "878px",
    },
    sll: {
      width: "836px",
    },
    sm: {
      width: "768px",
    },
    smm: {
      width: "738px",
    },
    xsw: {
      width: "650px",
    },
    xs: {
      width: "576px",
    },
    xsr: {
      width: "530px",
      fields: "15px",
    },
    xss: {
      width: "500px",
    },
    xsss: {
      width: "470px",
    },
    xxs: {
      width: "420px",
      /*
            offset: "10px",
            fields: "5px"
            */
    },
    xxxs: {
      width: "360px",
      /*
            offset: "10px",
            fields: "5px"
            */
    },
    zs: {
      width: "340px",
      /*
            offset: "10px",
            fields: "5px"
            */
    },
  },
};

smartgrid("./src/css", settings);
