import React, { useEffect, useState } from 'react';
import DeveloperIntro from './Components/IntroProfile/DeveloperIntro';

import ReactImage from './public/Images/React.png';
import MongoImage from './public/Images/Mongo.png';
import NodeImage from './public/Images/Node.png';
import MySqlImage from './public/Images/MySql.png';
import JsImage from './public/Images/JavaScript.ico';

import './App.scss';
import { HeaderComponent } from './Components/HeaderComponent/HeaderComponent';
import { IntroSkillComponent } from './Components/IntroSkillComponent/IntroSkillComponent';
import { IntroEducationComponent } from './Components/IntroEducationComponent/IntroEducationComponent';
import { FeaturedProjectComponent } from './Components/FeaturedProjectComponent/FeaturedProjectComponent';
import { SendMailComponent } from './Components/SendMailComponent/SendMailComponent';

function App() {

  const [fadeOut, setFadeOut] = useState(false);

  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    setIsAtTop(scrollPosition === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <div className="App">
      {/* Developer Intro */}
      {!fadeOut && (
        <DeveloperIntro
          fadeOut={fadeOut}
          setFadeOut={setFadeOut}
          lines={[
            [
              { text: "const ", color: "rgb(86, 156, 214)" },
              { text: "developer =", color: "white" },
              { text: " {", color: "rgb(176, 176, 176)" },
            ],
            [
              { text: "  name", color: "white" },
              { text: ": ", color: "rgb(176, 176, 176)" },
              { text: "Doan Duy Thuc", color: "pink" },
              { text: ",", color: "rgb(176, 176, 176)" },
            ],
            [
              { text: "  title", color: "white" },
              { text: ": ", color: "rgb(176, 176, 176)" },
              { text: "Software Engineer", color: "pink" },
              { text: ",", color: "rgb(176, 176, 176)" },
            ],
            [
              { text: "  location", color: "white" },
              { text: ": ", color: "rgb(176, 176, 176)" },
              { text: "Da Nang, Viet Nam", color: "pink" },
              { text: ",", color: "rgb(176, 176, 176)" },
            ],
            [
              { text: "  from", color: "white" },
              { text: ": ", color: "rgb(176, 176, 176)" },
              { text: "Da Nang, Viet Nam", color: "pink" },
              { text: ",", color: "rgb(176, 176, 176)" },
            ],
            [
              { text: "  apply", color: "white" },
              { text: ": ", color: "rgb(176, 176, 176)" },
              { text: "Intern Frontend (ReactJs) or Backend(NodeJs)", color: "pink" },
              { text: ",", color: "rgb(176, 176, 176)" },
            ],
            [
              { text: "}", color: "rgb(176, 176, 176)" },
            ]
          ]}
        />
      )}

      <main className='body'>
        {/* BODY */}
        <main className='body__content'>
          {fadeOut && (
            <>
              <HeaderComponent />
              <IntroSkillComponent />
              <IntroEducationComponent />
              <FeaturedProjectComponent />
              <SendMailComponent />
              {isAtTop && (
                <div className='Scroll'>
                  <span>SCROLL</span>
                  <div></div>
                </div>
              )}
            </>
          )}
        </main>
      </main>

      {/* background */}
      <div className={`Background`}>
        <div className="Background__image1">
          <img width={200} height={200} src={ReactImage} alt='ReactImage' />
        </div>
        <div className="Background__image2">
          <img width={200} height={200} src={MongoImage} alt='ReactImage' />
        </div>
        <div className="Background__image3">
          <img width={200} height={200} src={NodeImage} alt='ReactImage' />
        </div>
        <div className="Background__image4">
          <img width={200} height={200} src={MySqlImage} alt='ReactImage' />
        </div>
        <div className="Background__image5">
          <img width={200} height={200} src={JsImage} alt='ReactImage' />
        </div>
      </div>

    </div>
  );
}

export default App;
