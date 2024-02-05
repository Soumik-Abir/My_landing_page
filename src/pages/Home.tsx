import Header from '../components/Header/Header';
import HomeSection from '../components/HomeSection/HomeSection';
import Challenge from '../components/Challenge/Challenge';
import Service from '../components/Service/Service';
import Organization from '../components/Organization/Organization';
import TeamMember from '../components/TeamMember/TeamMember';

const Home = () => {
  return (
    <>
    <div className='flex flex-col gap-2 max-sm:w-full'>
      <Header/>
      <HomeSection/>
      <Challenge/>
      <Service/>
      <Organization/>
      <TeamMember/>
    </div>
    </>
  );
};

export default Home;
