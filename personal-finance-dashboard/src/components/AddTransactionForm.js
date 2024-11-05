
import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  Paper,
} from "@mui/material";

const AddTransactionForm = ({ addTransaction }) => {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && !isNaN(amount)) {
      addTransaction({ type, amount: parseFloat(amount) });
      setAmount("");
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
          <InputLabel>Type</InputLabel>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            label="Type"
          >
            <MenuItem value="income">Income</MenuItem>
            <MenuItem value="expense">Expense</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Amount"
          type="number"
          fullWidth
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Add Transaction
        </Button>
      </Box>
    </Paper>
  );
};

export default AddTransactionForm;
