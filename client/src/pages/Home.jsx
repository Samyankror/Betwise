import Body from '../components/Body';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LiveMatchPanel from './../components/LiveMatchPanel';


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Header />
      <LiveMatchPanel/>
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
