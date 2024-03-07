import React from 'react';

const Banner = () => {
  return (
    <div className='relative min-h-screen'>
      {/* Rest of the banner content */}
      <div className='absolute inset-0 bg-cover bg-center bg-fixed' style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        filter: 'brightness(0.5)' // to darken the image a bit
      }} />
      <div className='absolute inset-0 bg-black opacity-50' />
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl lg:text-6xl font-bold text-white mb-6'>Welcome to my Grid Website</h1>
          <p className='text-lg lg:text-xl text-white mb-8 px-6 lg:px-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo efficitur mi eu viverra.</p>
          <a className='my-4 py-3 px-6 lg:px-8 rounded text-white bg-orange-500 font-bold hover:bg-orange-600 transition duration-300 ease-in-out mx-2' href='#'>Get Started</a>
          <a className='py-3 px-6 lg:px-8 rounded text-white bg-transparent font-bold hover:bg-white hover:text-black hover:border-none transition duration-300 ease-in-out mx-2  border-2 border-slate-400' href='#'>Create Account</a>
          
        </div>
      </div>

      {/* Start of wave-container */}
      <div className="wave-container bg-transparent absolute bottom-0 left-0 w-full" style={{
        height: '40vh',
      }}>
        <div style={{
          position: 'relative',
          height: '100%'
        }}>
          <div className="wave" style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: '135px',
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat no-repeat',
            backgroundPosition: '50vw bottom',
            backgroundImage: 'url("data:image/svg+xml;utf8,<svg viewBox=\'0 0 1200 88\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M0 0C22.4434 -1 28.9842 1 55 15C94.1849 36 121.997 37 158.5 38C198.5 39 200 29 240 34C280 39 320 58 360 58C400 58 440 39 480 36C520 32 560 45 600 55C640 65 680 72 720 75C760 78 800 78 840 68C880 58 920 39 960 40C1000 42 1040 65 1080 62C1120 58 1127.5 39 1147.5 24C1171.48 7 1185.65 0 1200 0V88H1180C1160 88 1120 88 1080 88C1040 88 1000 88 960 88C920 88 880 88 840 88C800 88 760 88 720 88C680 88 640 88 600 88C560 88 520 88 480 88C440 88 400 88 360 88C320 88 280 88 240 88C200 88 160 88 120 88C80 88 40 88 20 88H0V0.0103865Z\' fill=\'%23ffffff\'/></svg>")'
          }}></div>
        </div>
      </div>
      {/* End of wave-container */}
    </div>
  );
};

export default Banner;
