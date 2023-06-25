// import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

import DefaultLayout from '../layout/DefaultLayout';

import TableOne from '../components/TableOne';

const Feedback = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Feedback" />
      <div className="flex flex-col gap-10">
        <TableOne />
      </div>
    </DefaultLayout>
  );
};

export default Feedback;
