import Bar from './Bar'
export default function AboutSection() {
    return (
      <div id="second" className="snap">
        <Bar></Bar>
        <h1 id="secondHero">More Information</h1>
        <div id="demoContent">
          <div id="left">
            <div id="frame" className="firstFrame" data-aos="fade-up">
              <div className="imageBox">
                <img src="/images/ai.png" id="ai" style={{ display: 'block', margin: '0 auto' }} alt="AI Illustration" />
              </div>
              <div className="imageBox">
                <img src="/images/cs.png" id="cs" style={{ display: 'block', margin: '0 auto' }} alt="CS Illustration"/>
              </div>
            </div>
            <div id="textBlock" data-aos="fade-right">
              <h1>Chess</h1>
              <p>
                ____
              </p>
              <h1>Soccer</h1>
              <p>
                ______
              </p>
            </div>
          </div>
          <div id="right">
            <div id="textBlock" data-aos="fade-left">
              <h1>Career Aspirations</h1>
              <p>
                ______
              </p>
            </div>
            <div id="frame" className="firstFrame" data-aos="fade-up">
              <div className="imageBox">
                <img src="/images/chess.png" id="ai" style={{ display: 'block', margin: '0 auto' }} alt="Chess" />
              </div>
          </div>
          </div>
        </div>
      </div>
    );
  }

