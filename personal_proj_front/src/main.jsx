import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import './index.css';


createRoot(document.getElementById('root')).render(
  // no hydration provided during initial rendering?
  <RouterProvider router={router} />
)
