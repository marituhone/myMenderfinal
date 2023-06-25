import { Link } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumb';
// import Breadcrumb from '../../components/Breadcrumb';
// ;
// import DefaultLayout from '../../layout/DefaultLayout';

const AnnouncmentForm = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Create Announcement" />

      

            <div className="flex flex-col  items-center ">
              <div className="rounded-sm border border-stroke px-6.5 bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                      New Announcment
                    </h3>
                  </div>
                <div className="flex flex-col  gap-5.5 px-7.5 py-7">
                <div>
                    <label className="mb-3 block  text-black dark:text-white">
                      Title
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-11 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                </div>
                <div>
                    <label className="mb-3 block text-black dark:text-white">
                      Description
                    </label>
                    <textarea
                      rows={6}
                      
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3.5 px-11 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    ></textarea>
                </div>
                  <Link to="#"
                      className="inline-flex items-center justify-center rounded-md  bg-primary py-2 px-8 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10"
                      >
                        Button
                  </Link>
              </div>
              </div>

            </div>
      
    </DefaultLayout>
  );
};

export default AnnouncmentForm;
