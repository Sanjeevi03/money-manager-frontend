import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      var response = await axios.get("http://localhost:8000/get");
      setData(response.data);
    };
    loadData();
  }, []);
  let income = 0;
  let expense = 0;
  data.map((i) => (income = income + parseInt(i.income)));
  data.map((i) => (expense = expense + parseInt(i.expense)));
  const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 15,
      boxShadow: "0 3px 5px 2px rgba(242, 197, 153, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
    },
    root1: {
      background: "linear-gradient(45deg,  #6683b3 30%, #2e60b0 90%)",
      border: 0,
      borderRadius: 15,
      boxShadow: "0 3px 5px 2px rgba(124, 122, 204, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
    },
  });
  const classes = useStyles();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ p: 0.5 }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, ml: 2.5, fontWeight: "600" }}
            >
              Home
            </Typography>
            <Link
              to="/dashboard"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Button color="inherit" variant="outlined">
                Go To DashBoard
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ mx: "10%" }}>
        <Box
          className={classes.root}
          sx={{
            textAlign: "center",
            minWidth: "200px",
            minHeight: "100px",
            borderRadius: "10px",
            m: 4,
            border: 1,
            float: "left",
          }}
        >
          <Typography
            sx={{
              px: 2,
              m: 1,
              fontWeight: "600",
              fontFamily: "Lato",
              fontSize: "22px",
            }}
          >
            Total Income Added
          </Typography>
          <Typography
            sx={{
              px: 2,
              m: 1,
              fontWeight: "600",
              fontFamily: "Lato",
              fontSize: "22px",
            }}
          >
            {income}
          </Typography>
        </Box>
        <Box
          className={classes.root1}
          sx={{
            textAlign: "center",
            minWidth: "200px",
            minHeight: "100px",
            borderRadius: "10px",
            m: 4,
            border: 1,
            float: "left",
          }}
        >
          <Typography
            sx={{
              px: 2,
              m: 1,
              fontWeight: "600",
              fontFamily: "Lato",
              fontSize: "22px",
            }}
          >
            Total Expense Added
          </Typography>
          <Typography
            sx={{
              px: 2,
              m: 1,
              fontWeight: "600",
              fontFamily: "Lato",
              fontSize: "22px",
            }}
          >
            {expense}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Home;
