import Profile from './/ProfileImage'
import HeroStory from './/HeroStory'
import Bar from './/Bar'
export default function HeroSection() {
    return (
      <div id="first">
        <Bar></Bar>
        <HeroStory></HeroStory>
        <Profile></Profile>
      </div>
    );
  }