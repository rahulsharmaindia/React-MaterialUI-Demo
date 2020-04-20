import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  TablePagination,
  TextField,
  Popover,
  Button,
} from "@material-ui/core";

import { fetchUserInvestment } from "../APIService";
import { simplifyDate, simplifyUserData } from "../Util";

import "./UserDetails.scss";

const UserDetails = (props) => {
  const userId = props.history.location.state.userId;
  const details = props.history.location.state.userDetails;
  const [userDetails, setUserDetails] = useState([]);
  const [allUserData, setAllUserData] = useState([]);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [additionDetails, setAdditionDetails] = React.useState({});

  const handleClick = (event, rowId) => {
    const tempData = dimensions.allData.find(
      (userData) => userData.id === rowId
    );
    console.log(tempData);
    setAdditionDetails(tempData);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const search = (event) => {
    const searchedValue = event.target.value.toLowerCase();
    if (searchedValue.length !== 0) {
      let tempDetails = userDetails.filter((details) => {
        const accountHolderTypeString = details.accountHolderType.toString();
        const nameString = details.name.toString();
        const accountTypeString = details.accountType.toString();
        const balanceString = details.balance.toString();
        const accountState = details.accountState.toString();
        const rowString = details.id.concat(
          " ",
          accountHolderTypeString,
          " ",
          nameString,
          " ",
          accountTypeString,
          " ",
          balanceString,
          " ",
          accountState
        );
        return rowString.toLowerCase().includes(searchedValue);
      });
      setUserDetails(tempDetails);
    } else {
      setUserDetails(allUserData);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetchUserInvestment(userId);
      setUserDetails(response);
      setAllUserData(response);
    }
    fetchData();
  }, [userId]);

  const dimensions = simplifyUserData(userDetails);

  return (
    <div>
      <div>
        <AppBar position="static">
          <Toolbar className="toolbar">
            <Typography variant="h6">UserId: {details.id}</Typography>
            <Typography variant="h6">
              Hello {details.firstName} {details.lastName}!
            </Typography>
            <Typography variant="h6">Email: {details.emailAddress}</Typography>
            <Typography variant="h6">
              Preferred Language: {details.preferredLanguage}
            </Typography>
            <Typography
              variant="h6"
              style={
                details.state === "ACTIVE"
                  ? { backgroundColor: "darkgreen", padding: 10 }
                  : null
              }
            >
              {details.state}
            </Typography>
            <Typography variant="h6" onClick={props.history.goBack}>
              Logout
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <div className="user-details">
        <span>Creation Date: {simplifyDate(details.creationDate)}</span>
        <span>
          Last Modified Date: {simplifyDate(details.lastModifiedDate)}
        </span>
        <span>Approved Date: {simplifyDate(details.approvedDate)}</span>
        <span>Activation Date: {simplifyDate(details.activationDate)}</span>
        <span>Birth Date: {simplifyDate(details.birthDate)}</span>
      </div>
      <Paper className={classes.root}>
        <div align="left">
          <TextField
            id="outlined-search"
            label="Search Account"
            type="search"
            variant="outlined"
            onChange={(e) => search(e)}
          />
        </div>

        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {dimensions.columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: 800 }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dimensions.rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {dimensions.columns.map((column) => {
                        const value = row[column.id];
                        const rowId = column.id === "id" ? value : null;
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value !== undefined ? (
                              value
                            ) : (
                              <Button
                                variant="contained"
                                color="primary"
                                onClick={(e) => handleClick(e, row.id)}
                              >
                               View Details
                              </Button>
                            )}
                          </TableCell>
                        );
                      })}

                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                      >
                        <div style={{margin: 10}}>
                          <Typography><b>ID:</b> {additionDetails.id}</Typography>
                          <Typography>
                          <b>Balance:</b> {additionDetails.balance}
                          </Typography>
                          <Typography>
                          <b>Locked Balance:</b> {additionDetails.lockedBalance}
                          </Typography>
                          <Typography>
                          <b>Hold Balance:</b> {additionDetails.holdBalance}
                          </Typography>
                          <Typography>
                          <b>Activation Date:</b> {additionDetails.activationDate}
                          </Typography>
                          <Typography>
                            <b>Currency Code:</b> {additionDetails.currencyCode}
                          </Typography>
                          <Typography>
                            <b>Accrued Interest:</b> {additionDetails.accruedInterest}
                          </Typography>
                          <Typography>
                          <b>Interest Due:</b> {additionDetails.interestDue}
                          </Typography>
                          <Typography>
                          <b>Technical Interest Due:</b> {additionDetails.technicalInterestDue}
                          </Typography>
                          <Typography>
                          <b>Fees Due:</b> {additionDetails.feesDue}
                          </Typography>
                          <Typography>
                          <b>Overdraft Limit:</b> {additionDetails.overdraftLimit}
                          </Typography>
                          <Typography >
                          <b>Overdraft amount:</b> {additionDetails.overdraftAmount}
                          </Typography>
                          <Typography>
                          <b>Overdraft Interest Accrued:</b> {additionDetails.overdraftInterestAccrued}
                          </Typography>
                          <Typography>
                          <b>Technical Overdraft Amount:</b> {additionDetails.technicalOverdraftAmount}
                          </Typography>
                          <Typography>
                          <b>Technical Overdraft Interest Accrued:</b> {additionDetails.technicalOverdraftInterestAccrued}
                          </Typography>
                        </div>
                      </Popover>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={dimensions.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: 50,
  },
  container: {
    maxHeight: 600,
  },
});

export default withRouter(UserDetails);
