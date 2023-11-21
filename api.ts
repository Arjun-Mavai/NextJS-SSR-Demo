// import { IType } from "./types/tasks";

// const baseURL ="http://localhost:3000";
//     console.log({baseURL});


// export const getAllTodos = async (): Promise<IType[]> => {
//   try {
//     const res = await fetch(`${baseURL}/tasks`);
//     console.log({baseURL});
    
//     if (!res.ok) {
//       // Handle non-successful response (e.g., 404 Not Found)
//       throw new Error(`Request failed with status: ${res.status}`);
//     }
    
//     const todos = await res.json();
//     console.log({ todos });
//     return todos;
//   } catch (error) {
//     // Handle network or other errors
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

  