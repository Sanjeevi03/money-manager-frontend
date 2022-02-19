import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
const columns = [
  { id: "sno", label: "S.NO" },
  { id: "income", label: "Income", minWidth: 80 },
  { id: "expense", label: "Expenditure", minWidth: 80 },
  { id: "date", label: "Date",minWidth: 140 },
  { id: "time", label: "Time",minWidth: 80 },
];

function Weekly() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      var response = await axios.get("http://localhost:8000/get");
      setData(response.data);
    };
    loadData();
  }, []);
  //table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <Dashboard />
      <Container>
        <Typography>Weekly</Typography>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, i) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row._id}
                      >
                        <TableCell>{i + 1}</TableCell>
                        <TableCell>{row.income}</TableCell>
                        <TableCell>{row.expense}</TableCell>
                        <TableCell>{row.date}</TableCell>

                        <TableCell>
                          <>{new Date(row.time).toLocaleString("en-US",{timeZone: 'Asia/Kolkata'}).split(',')[1]}</>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5,10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
    </>
  );
}

export default Weekly;
