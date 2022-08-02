import { Route, Routes } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import TodoListPage from "../pages/TodoListPage";
import LoginPage from "../pages/LoginPage";

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<HomePage/>}/>
                <Route path="todo-app" element={<TodoListPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
            </Route>
        </Routes>
    );
}