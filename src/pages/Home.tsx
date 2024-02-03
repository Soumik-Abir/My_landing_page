import Header from '../components/Header/Header';
import HomeSection from '../components/HomeSection/HomeSection';
import Challenge from '../components/challenge/challenge';

const Home = () => {
  return (
    <>
    <div className='flex flex-col gap-2'>
      <Header/>
      <HomeSection/>
      <Challenge/>
    </div>
    </>
  );
};

export default Home;
