import { createAsyncThunk } from '@reduxjs/toolkit';

// Dummy login thunk - replace with actual API call later
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Dummy validation - accept any email/password for now
      if (email && password) {
        const user = {
          id: 1,
          name: 'Sarah Johnson',
          email: email,
          avatar: 'SJ',
        };
        
        return user;
      } else {
        throw new Error('Email and password are required');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

