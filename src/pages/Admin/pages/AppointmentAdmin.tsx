import Breadcrumb from '../components/Breadcrumb';
import TableThree from '../components/TableThree';
import DefaultLayout from '../layout/DefaultLayout';

const AppointmentAdmin = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Appointmnet" />

      <div className="flex flex-col gap-10">
        {/* <TableOne /> */}
        {/* <TableTwo /> */}
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default AppointmentAdmin;
