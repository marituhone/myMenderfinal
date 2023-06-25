
import Breadcrumb from '../components/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import TableTwo from '../components/TableTwo';

const Bidders = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Shop bid" />
      <div className="flex flex-col gap-10">
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default Bidders;
