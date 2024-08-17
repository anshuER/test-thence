import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomeDecorBanner from './components/HomeDecorBanner';
import ProjectPlanCards from './components/ProjectPlanCards';
import AboutUs from './components/AboutUs';
import StatsSection from './components/StatsSection';

function App() {
  return (
    <div className='flex flex-col gap-28 my-8 mx-24'>
      <Header />
      <HomeDecorBanner />
      <ProjectPlanCards />
      <AboutUs />
      <StatsSection />
    </div>
  );
}

export default App;
