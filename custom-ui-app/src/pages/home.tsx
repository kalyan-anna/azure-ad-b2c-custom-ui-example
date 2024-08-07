import { Link } from 'react-router-dom';
import { RootLayout } from '../components/RootLayout';

export const HomePage = () => {
  return (
    <RootLayout>
      <div className='text-center'>
        <h1 className='text-4xl font-extrabold mb-4'>Home page - Custom UI Tester</h1>
        <nav>
          <ul>
            <li>
              <Link to='/unified' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                Unified Page
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </RootLayout>
  );
};
