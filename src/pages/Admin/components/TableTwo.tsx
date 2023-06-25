const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[180px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Name
              </th>
              <th className="min-w-[150px] py-4 px-11 font-medium text-black dark:text-white">
                Identification number
              </th>

              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                  Maritu
                </h5>
                
              </td>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                   bole/34545/9999
                </h5>
                
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div className="flex items-center space-x-3.5">
               
                  <p className=" p-1.5 rounded-md">Open</p>
                  
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                  Abebe
                </h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                 bole/66677/0000
                </h5>
                
              </td>
            
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div>
                   <p>Open</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                  kbede
                </h5>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                 bole/90907/12341
                </h5>
                
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <div>
                  <p>open</p>
                </div>
              </td>
            </tr>
            <tr>
              
            
  
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTwo;
