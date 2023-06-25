import Breadcrumb from '../components/Breadcrumb';
import TableSeven from '../components/TableSeven';
import DefaultLayout from '../layout/DefaultLayout';

const RequiremntsAdmin = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Requirements" />

      <div className="flex flex-col gap-10">
        
        <TableSeven />
      </div>
    </DefaultLayout>
  );
};

export default RequiremntsAdmin;
