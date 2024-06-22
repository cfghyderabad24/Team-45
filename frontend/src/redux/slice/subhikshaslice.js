import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const subhikshaLoginThunk = createAsyncThunk(
  'parent-instructor-admin-login',
  async (userCredObj, thunkApi) => {
    try {
      let res;
      if (userCredObj.role === 'Parent') {
        res = await axios.post('http://localhost:8000/parent-api/login', userCredObj);
      } else if (userCredObj.role === 'Instructor') {
        res = await axios.post('http://localhost:8000/instructor-api/login', userCredObj);
      } else {
        res = await axios.post('http://localhost:8000/admin-api/login', userCredObj);
      }
      
      if (res.data.message === 'Login Success') {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        return res.data;
      } else {
        console.log(res.data.message);
        return thunkApi.rejectWithValue(res.data.message);
      }
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const subhikshaSlice = createSlice({
  name: 'parent-instructor-admin-login',
  initialState: {
    isPending: false,
    loginUserStatus: false,
    currentUser: {},
    errorOccurred: false,
    errMsg: ''
  },
  reducers: {
    resetState: (state) => {
      state.isPending = false;
      state.loginUserStatus = false;
      state.currentUser = {};
      state.errorOccurred = false;
      state.errMsg = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(subhikshaLoginThunk.pending, (state) => {
        state.isPending = true;
      })
      .addCase(subhikshaLoginThunk.fulfilled, (state, action) => {
        state.isPending = false;
        state.currentUser = action.payload.user;
        state.loginUserStatus = true;
        state.errMsg = '';
        state.errorOccurred = false;
      })
      .addCase(subhikshaLoginThunk.rejected, (state, action) => {
        state.isPending = false;
        state.currentUser = {};
        state.loginUserStatus = false;
        state.errMsg = action.payload;
        state.errorOccurred = true;
      });
  }
});

export const { resetState } = subhikshaSlice.actions;

export default subhikshaSlice.reducer;
