import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
// import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
// import ChartTwo from '../../components/ChartTwo.tsx';
// import ChatCard from '../../components/ChatCard.tsx';

// import TableOne from '../../components/TableOne.tsx';
import DefaultLayout from '../../layout/DefaultLayout.tsx';

const Home = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1  gap-4 md:grid-cols-2 md:gap-6  xl:grid-cols-3 2xl:gap-7.5">
        <CardFour />
        <CardOne />
        <CardTwo />
        {/* <CardThree /> */}
        
      </div>

      <div className="mt-4 grid grid-cols-6 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        {/* <ChartTwo /> */}
        
        
        <div className="col-span-12 xl:col-span-8">
          {/* <TableOne /> */}
        </div>
        {/* <ChatCard /> */}
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <ChartThree /> 
      </div>

    </DefaultLayout>
  );
};

export default Home;
