import React, { useContext } from "react";
import linkedin from './images/linkedin.svg';
import telegram from './images/telegram.svg';
import github from './images/github.svg';
import foto from './images/foto.jpg'; 
import ThemeContext from './ThemeContext';



function AboutUs() {
	const { theme } = useContext(ThemeContext); 
    return (
   
   
        // <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white md:shadow-[5px_5px_50px_5px_rgba(60,60,60,0.3)] rounded-md text-[#333] font-[sans-serif]"></div>



<body className={`w-full h-full font-sans antialiased leading-normal tracking-wider bg-slate-100 text-center bg-cover Theme ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>  
  <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto md:my-32 lg:my-0">	
	<div id="profile" className={`w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none md:shadow-2xl bg-white opacity-75 md:mx-6 lg:mx-0 Theme ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
		<div className="p-4 md:p-12 text-center lg:text-left">
			<div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>
			<h1 className="text-3xl font-bold pt-8 lg:pt-0">Good afternoon, my name is Viktor Trunov</h1>
			<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
			<p className="pt-4 text-base flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg>I am a 2nd year student at SNU im.V.Dal</p>
			<p className="pt-2 text-base  lg:text-sm flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg> I live near the town of Severodonetsk, Russia</p>
			<p className="pt-8 text-sm">I enjoy drawing, traveling, spending time with my family, and programming.</p>

			
			<div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
            <a  href="https://www.linkedin.com/in/viktor-trunov-0923971b7" className="opacity-80 transition-opacity hover:opacity-100">
  
              <img className="h-8 w-8 opacity-80" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" src={linkedin} alt="LinkedIn" />
            </a>
            
            <a  href="https://t.me/viktortr2e3" className="opacity-80 transition-opacity hover:opacity-100">

              <img className="h-8 w-8 opacity-80" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" src={telegram} alt="Telegram" />
            </a>

            <a  href="https://github.com/" className="opacity-80 transition-opacity hover:opacity-100">
             
              <img className="h-8 w-8 opacity-80" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" src={github} alt="GitHub" />
            </a>
			</div>
		</div>
	</div>
	<div className="w-full lg:w-2/5">
		<img src={foto} alt="foto" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>

	</div>
</div>
</body>
     );
 }
 
 export default AboutUs;