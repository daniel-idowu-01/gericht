import Design from './images/Vector.svg'
import '../index.css'
import { Header, About, TodaySpecialComp, WhatWeBelieve, VideoComp, Awards, PhotoGallery, Contact } from '../components';


function Home() {

    return (
        <div className="home bg-black text-white">
            <Header />

            <About />

            <TodaySpecialComp />

            <WhatWeBelieve />

            <VideoComp />

            <Awards />

            <PhotoGallery />

            <Contact />

            {/* Subscribe to Our Newsletter */}
            <section className='text-center bg-subscribeBg p-10 pb-20 shadow-xl'>
                <p>Newsletter</p>
                <img alt='' src={Design} className='block w-5 h-5 absolute left-1/2' />
                <h3 className='text-goldcolor text-4xl mt-5'>Subscribe To Our Newsletter</h3>
                <p className=' text-base mt-7'>And never miss latest updates</p>
                
                <div className="flex justify-center mt-5">
                    <form className="flex items-center" action='#'>
                        <input type="email" placeholder="Email Address" className=" w-60 md:w-96 p-2 px-4 border mr-5 border-gray-400 bg-transparent focus:outline-none" />
                        <button type="submit" className="bg-goldcolor hover:opacity-75 hover:text-white text-black px-4 py-2">Subscribe</button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <section className='flex flex-col sm:flex-row text-center items-start justify-center sm:justify-between px-10 py-20 sm:p-40 gap-10 sm:gap-0'>
                <div className='w-full sm:w-auto'>
                    <h2 className='text-2xl mb-5'>Contact Us</h2>
                    <div className='text-xl'>
                        <p>9 W 53rd St, New York, NY 10019, USA</p>
                        <p>+1 212-344-1230</p>
                        <p>+1 212-555-1230</p>
                    </div>
                </div>

                <div className='w-full sm:w-auto'>
                    <h1 className='text-goldcolor text-4xl sm:text-5xl'>GERICHT</h1>
                    <p className='w-full text-xl'>"The best way to find yourself is to lose yourself</p>
                    <p className='w-full text-xl'> in the service of others.”</p>
                    <img alt='' src={Design} className='block w-5 h-5 mx-auto' />

                </div>

                <div className='w-full sm:w-auto'>
                    <h2 className='text-2xl mb-5'>Working Hours</h2>
                    <div className='text-xl'>
                        <p>Monday-Friday:</p>
                        <p>08:00 am -12:00 am</p>
                        <p className='mt-5'> Saturday-Sunday:</p>
                        <p>07:00am -11:00 pm</p>
                    </div>
                </div>
            </section>

            <p className='text-center text-dimBlack pb-2'>2021 Gerícht. All Rights reserved.</p>

        </div>
    )
}

export default Home;