import Header from '../components/Home/Header'
import styled from 'styled-components';
import Search from '../components/Home/Search'
import TrandingTrack from "../components/Home/TrandingTrack";
import MobileTeaser from "../components/Home/MobileTeaser";
import SoundCloudTeaser from "../components/Home/SoundCloudTeaser";
import SignUpModule from "../components/Home/SignUpModule";
import Footer from "../components/ui/Footer";

const Home = () => {
  return (
    <HomeWrap>
      <Header />
      <Search />
      <TrandingTrack />
      <MobileTeaser />
      <SoundCloudTeaser />
      <SignUpModule />
      <Footer/>
    </HomeWrap>
  );
}

const HomeWrap = styled.div`
  padding-bottom:46px;
`

export default Home
