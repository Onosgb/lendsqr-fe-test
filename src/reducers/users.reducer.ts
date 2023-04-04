import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { User, ValidationErrors } from "../app/model";
import { RootState } from "../app/store";

interface UserState {
  users: User[];
  user?: User;
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  users: [],
  user: undefined,
  status: "idle",
};

export const loadUserAsync = createAsyncThunk("Users", async (thunkApi) => {
  try {
    const response = await axios.get(
      " https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users "
    );
    return response.data;
  } catch (err: any) {
    let error: AxiosError<ValidationErrors> = err; // cast the error for access
    if (!error.response) {
      throw err;
    }
    // We got validation errors, let's return those so we can reference in our component and set form errors
    return error.response.data;
  }
});

export const getUserByIdAsync = createAsyncThunk(
  "User/get",
  async (id: any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        ` https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      );
      return response.data;
    } catch (err: any) {
      let error: AxiosError<ValidationErrors> = err;

      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

export const UserSlice = createSlice({
  name: "Users",
  initialState,

  reducers: {
    selectUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loadUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        loadUserAsync.fulfilled,

        (state, action: PayloadAction<User[]>) => {
          if (action.payload) {
            state.users = action.payload;
          }
          state.status = "idle";
        }
      )
      .addCase(loadUserAsync.rejected, (state) => {
        state.status = "failed";
      })

      .addCase(getUserByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getUserByIdAsync.fulfilled,

        (state, action: PayloadAction<User>) => {
          state.user = action.payload;
          state.users.push(action.payload);
          state.status = "idle";
        }
      )
      .addCase(getUserByIdAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { selectUser } = UserSlice.actions;
export const userReducer = (state: RootState) => state.userReducer;

export default UserSlice.reducer;
