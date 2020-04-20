import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import Container from "@material-ui/core/Container";
import { Typography, TextField, Button } from "@material-ui/core";

import { fetchUserDetails } from "./APIService";
import "./App.scss";

const App = (props) => {
  const [userId, setUserId] = useState(145127236);
  const onChange = (e) => {
    setUserId(e.target.value);
  };

  const onClick = async () => {
    const response = await fetchUserDetails(userId);
    console.log("response", response);
    if (response != null) {
      props.history.push(`/user/${userId}/`, { userId: userId, userDetails: response });
    }
  };
  return (
    <Container maxWidth="sm" className="app-container">
      <div className="app">
        <Typography>Enter UserId</Typography>
        <TextField
          id="outlined-helperText"
          label="User ID"
          defaultValue={userId}
          helperText="Enter User ID"
          variant="outlined"
          onChange={(e) => onChange(e)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={onClick}
        >
          Submit
        </Button>
      </div>
    </Container>
  );
};

export default withRouter(App);
