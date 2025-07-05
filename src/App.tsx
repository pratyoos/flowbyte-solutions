import { RouterProvider } from 'react-router-dom';
import routes from './routes';

const App = (): JSX.Element => {
  return <RouterProvider router={routes} />;
};

export default App;