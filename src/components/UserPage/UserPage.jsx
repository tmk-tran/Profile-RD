import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

import { Card, CardContent, Typography } from "@mui/material";
import Resume from '../Resume/Resume';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      </div>
      <Card elevation={6}>
        <CardContent>
          <Resume />
        </CardContent>
      </Card>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
