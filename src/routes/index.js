import  {createBrowserRouter}  from "react-router-dom"
import { Dashboard } from "../modules/dashboard/pages"
import { UserIndex } from "../modules/users/pages"
import { Create } from "../modules/users/pages/create"
import { Layout } from "../layouts/main"
import { Update } from "../modules/users/pages/update"
//nhận vào 1 mảnh các route trong app/web
//
export const router = createBrowserRouter([
    {
        path: '',
        element: <Layout />, 
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'users',
                children: [
                    {
                        index: true,
                        element: <UserIndex />
                    },
                    {
                        path: 'create',
                        element: <Create />
                    },
                    {
                        path: ':userId/edit',
                        element: <Update />
                    }
                ]
            }
        ]
    }
])       