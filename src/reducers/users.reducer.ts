import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../app/model";
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
    const response = await fetch(
      " https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users "
    ).then((response) => response.json());

    return response;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    // We got validation errors, let's return those so we can reference in our component and set form errors
    return err.response.data;
  }
});

export const getUserByIdAsync = createAsyncThunk(
  "User/get",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        ` https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      ).then((response) => response.json());

      return response;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response);
    }
  }
);

export const UserSlice = createSlice({
  name: "Users",
  initialState,

  reducers: {
    selectUser: (state, action: PayloadAction<User | undefined>) => {
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
