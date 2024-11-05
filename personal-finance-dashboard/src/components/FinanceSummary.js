
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const FinanceSummary = ({ totalIncome, totalExpenses, savingsGoal }) => {
  const savings = totalIncome - totalExpenses;
  const savingsProgress = ((savings / savingsGoal) * 100).toFixed(2);

  const data = {
    labels: ["Income", "Expenses", "Savings"],
    datasets: [
      {
        data: [totalIncome, totalExpenses, savings],
        backgroundColor: ["#4caf50", "#f44336", "#2196f3"],
        hoverBackgroundColor: ["#66bb6a", "#e57373", "#64b5f6"],
      },
    ],
  };

  return (
    <Box my={4}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Financial Summary</Typography>
            <Typography>Total Income: ${totalIncome.toFixed(2)}</Typography>
            <Typography>Total Expenses: ${totalExpenses.toFixed(2)}</Typography>
            <Typography>Savings Goal: ${savingsGoal}</Typography>
            <Typography>Savings Achieved: ${savings.toFixed(2)}</Typography>
            <Typography>Progress Toward Goal: {savingsProgress}%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Pie data={data} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FinanceSummary;
