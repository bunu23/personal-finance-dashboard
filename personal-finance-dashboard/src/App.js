
import React, { useState } from "react";
import AddTransactionForm from "./components/AddTransactionForm";
import FinanceSummary from "./components/FinanceSummary";
import { Container, Typography, Box, Button, Snackbar, Alert, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [goal, setGoal] = useState(2000);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container maxWidth="md">
        <Box my={4} textAlign="center">
          <Typography variant="h4" component="h1" gutterBottom>
            Personal Finance Dashboard
          </Typography>
          <Button onClick={toggleDarkMode} variant="outlined">
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </Button>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <AddTransactionForm addTransaction={addTransaction} />
          </Grid>
          <Grid item xs={12}>
            <FinanceSummary
              totalIncome={totalIncome}
              totalExpenses={totalExpenses}
              savingsGoal={goal}
            />
          </Grid>
        </Grid>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            Transaction added successfully!
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
}

export default App;
