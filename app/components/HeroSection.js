import Profile from './ProfileImage';
import HeroStory from './HeroStory';
import StickyBar from './StickyBar';

export default function HeroSection() {
    return (
        <div id="first">
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
