export default function AboutSection() {
    return (
      <div id="second" className="snap">
        <h1 id="secondHero">More Information</h1>
        <div id="demoContent">
          <div id="left">
            <div id="frame" className="firstFrame" data-aos="fade-up">
              <div className="imageBox">
                <img src="/images/ai.png" id="ai" style={{ display: 'block', margin: '0 auto' }} />
              </div>
              <div className="imageBox">
                <img src="/images/cs.png" id="cs" style={{ display: 'block', margin: '0 auto' }} />
              </div>
            </div>
            <div id="textBlock" data-aos="fade-right">
              <h1>Chess</h1>
              <p>
                Dhruv has been playing chess since the age of 8 and has been competing on the national
                level...
              </p>
            </div>
          </div>
          <div id="right">
            <div id="textBlock" data-aos="fade-left">
              <h1>Career Aspirations</h1>
              <p>
                Dhruv is a collaborative and ambitious leader seeking a software engineering...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  