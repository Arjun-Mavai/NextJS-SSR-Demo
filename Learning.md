https://www.youtube.com/watch?v=UN9RvXIL_Dk&list=PLg79Vr4nET-YJs4hxaK0B-h9zVNI-fpyv&index=5

how to integrate redux toolkit in next js application

Let's go through a hands-on experience of integrating Redux into a Next.js application, from the initial setup to implementing hydration and state management.

### Step 1: Initialize Next.js Project

First, create a new Next.js project:

```bash
npx create-next-app@latest my-next-app
cd my-next-app
```

### Step 2: Install Redux and React Redux

Install necessary packages:

```bash
npm install @reduxjs/toolkit react-redux
```

### Step 3: Setup Redux Store

Create a directory and file for the Redux store:

- **/store/index.js**:

  ```javascript
  import { configureStore } from "@reduxjs/toolkit";

  export const store = configureStore({
    reducer: {
      // Your reducers here
    },
  });
  ```

### Step 4: Wrap the Application with Provider

Modify `/pages/_app.js` to include the Redux provider:

```javascript
import { Provider } from "react-redux";
import { store } from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
```

### Step 5: Create a Simple Redux Slice

In the `/store` directory, create a simple slice:

- **/store/sampleSlice.js**:

  ```javascript
  import { createSlice } from "@reduxjs/toolkit";

  const sampleSlice = createSlice({
    name: "sample",
    initialState: {
      value: 0,
    },
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
    },
  });

  export const { increment } = sampleSlice.actions;
  export default sampleSlice.reducer;
  ```

### Step 6: Add the Slice to the Store

Update `/store/index.js` to include the slice reducer:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./sampleSlice";

export const store = configureStore({
  reducer: {
    sample: sampleReducer,
  },
});
```

### Step 7: Use Redux State in a Component

Create a component that uses the Redux state:

- **/components/Counter.js**:

  ```javascript
  import { useSelector, useDispatch } from "react-redux";
  import { increment } from "../store/sampleSlice";

  export default function Counter() {
    const count = useSelector((state) => state.sample.value);
    const dispatch = useDispatch();

    return (
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <p>Count: {count}</p>
      </div>
    );
  }
  ```

### Step 8: Testing and Running the App

- Run the app using `npm run dev` and test the functionality.

### Conclusion

This setup provides a basic structure for using Redux Toolkit in a Next.js application, demonstrating how to manage global state and integrate Redux. This example can be expanded with more complex state logic and additional components as needed.
