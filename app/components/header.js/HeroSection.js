export default function HeroSection() {
    return (
      <div id="first">
        <div id="main">
          <div id="leftContainer">
            <h1 id="hero" data-aos="fade-up">
              Learn about{' '}
              <span
                id="ai"
                style={{
                  color: '#8affb9',
                  textShadow: '0 10px 30px rgb(92, 182, 129)',
                  display: 'inline',
                }}
              >
                Dhruv Dodda!
              </span>
            </h1>
            <p id="description" data-aos="fade-up">
              Dhruv Dodda is a CS major from New Jersey currently attending Georgia Tech...
            </p>
            <div id="startButton" data-aos="fade-up">
              <div id="link">
                <a className="back" id="back1" href="/">
                  Back to Home!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  