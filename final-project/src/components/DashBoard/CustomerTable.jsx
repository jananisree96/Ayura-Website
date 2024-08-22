import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Table } from "antd";
import { useGetCustomersQuery } from "../../services/api";

const CustomerTable = () => {
  const { data = [], error, isLoading } = useGetCustomersQuery();
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    let timer;
    if (progress <= 100) {
      timer = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 100));
      }, 50); 
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [progress]);

  console.log("Data", data);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Phone Number",
      dataIndex: "PhoneNumber",
      key: "PhoneNumber",
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "Address",
    },
  ];

  if (isLoading) {
    return (
      <Box position="relative" width="100%" height="100%">
        <Box
          mb={2} 
          p={2}  
        >
          <Typography variant="h6" component="div" align="left">
            Customer Details
          </Typography>
        </Box>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 8 }}
          rowKey="id"
          style={{ opacity: 0.2 }} 
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "4px",
            padding: "16px",
          }}
        >
          <CircularProgress variant="determinate" value={progress} />
          <Typography variant="body2" color="textSecondary" mt={2}>
            Processing... {progress}%
          </Typography>
        </Box>
      </Box>
    );
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <Box width="100%">
      <Box mb={2} p={2}>
        <Typography variant="h6" component="div" align="left">
          Customer Details
        </Typography>
      </Box>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 7 }}
        rowKey="id"
      />
    </Box>
  );
};

export default CustomerTable;
