import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
// import TableOne from '../components/TableOne';
// import TableThree from '../components/TableThree';
// import TableTwo from '../components/TableTwo';
import DefaultLayout from '../layout/DefaultLayout';
import TableFive from '../components/TableFive';

const BidList = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="BidList" />
        <Link
              to="/announcement/createannouncment"
              className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary py-4 mb-7 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8  xl:px-10"
            >
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

              </span>
              create New bid
            </Link>
      <div className="flex flex-col gap-10">
            

        <TableFive />
      </div>
    </DefaultLayout>
  );
};

export default BidList;
