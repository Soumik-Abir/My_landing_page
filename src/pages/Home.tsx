import Header from '../components/Header/Header';
import HomeSection from '../components/HomeSection/HomeSection';

const Home = () => {
  return (
    <>
    <div className='flex flex-col gap-2'>
      <Header/>
      <HomeSection/>
    </div>
    </>
  );
};

export default Home;
