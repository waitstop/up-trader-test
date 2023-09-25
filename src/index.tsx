import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import HomePage from './pages/Home';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Tasks from "@/pages/Tasks";
import Layout from "@/layout";
import {Provider} from "react-redux";
import {store} from "@/store";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "projects/:projectId/tasks",
        element: <Tasks/>
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Layout>
                <RouterProvider router={router}/>
            </Layout>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
