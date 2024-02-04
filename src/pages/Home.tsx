import Header from '../components/Header/Header';
import HomeSection from '../components/HomeSection/HomeSection';
import Challenge from '../components/Challenge/Challenge';
import Service from '../components/Service/Service';

const Home = () => {
  return (
    <>
    <div className='flex flex-col gap-2'>
      <Header/>
      <HomeSection/>
      <Challenge/>
      <Service/>
    </div>
    </>
  );
};

export default Home;
