import Profile from './ProfileImage';
import HeroStory from './HeroStory';
import Bar from './Bar';

export default function HeroSection() {
    return (
        <div id="first">
          <Bar />
            <div
            id="contentContainer"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', 
                gap: '250px',
              }}
            >
          <HeroStory />
          <Profile />
        </div>

        </div>
    );
}
