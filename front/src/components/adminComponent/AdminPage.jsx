import React from 'react';
import {useNavigate} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import Box from "@mui/material/Box";
import {centerBoxSx} from "./AdminPage.styles";

const AdminPage = () => {
    const navigate = useNavigate();

    return (
      <div className="adminPage" style={{ height: '100vh', overflowY: 'auto' }}>
          <CssBaseline />
          <Box sx={centerBoxSx}>
              <Box>

              </Box>
          </Box>
      </div>
    );
};

export default AdminPage;