export default function HeroSection() {
    return (
      <div id="first">
        <div id="headerRow">
          <h2 id="logo">Personal Website</h2>
          <div id="headerIcons">
            <div id="headerIcon">Home</div>
            <div id="headerIcon">Projects</div>
            <div id="headerIcon">About</div>
            <div id="headerIcon">Contact Information</div>
          </div>
        </div>
        <div id="main">
          <div id="leftContainer">
            <h1 id="hero" data-aos="fade-up">
              Learn about <span id="ai" style={{color: '#8affb9', textShadow: '0 10px 30px rgb(92, 182, 129)', display: 'inline'}}>Dhruv Dodda!</span>
            </h1>
            <p id="description" data-aos="fade-up">
              Dhruv Dodda is a CS major from New Jersey currently attending Georgia Tech. In his free time, he enjoys playing chess where he plays chess on the n
            </p>
            <div id="startButton" data-aos="fade-up"></div>
          </div>
        </div>
      </div>
    );
  }
  