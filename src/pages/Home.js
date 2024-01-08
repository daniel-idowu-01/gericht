import Design from './images/Vector.svg'
import ListGroup from './ListGroup';
import Food1 from './images/food-1.jpg'
import Food2 from './images/food-2.png'
import Food3 from './images/food-3.png'
import Food4 from './images/food-4.png'
import Food5 from './images/food-5.png'
import yellowBg from './images/yellowBg.png'
import ContactImg from './images/contact-img.png'
import '../index.css'
import { Header, About, TodaySpecialComp, WhatWeBelieve, VideoComp } from '../components';


function Home() {

    return (
        /* Whole Home Content */
        <div className="home bg-black text-white">
            <Header />

            <About />

            <TodaySpecialComp />

            <WhatWeBelieve />

            {/* Video Section */}
            <VideoComp />

            {/* Awards and Recognition */}
            <section className='bg-bgColor flex flex-col sm:flex-row gap-10 justify-around p-10 sm:py-40 sm:px-32'>
                
                <div className='text-center md:text-left mt-10 md:mt-0'>
                    <p>Awards & recognition</p>
                    <img alt='' src={Design} className='absolute left-1/2 w-5 h-5 md:relative md:left-0' />
                    <h2 className='text-goldcolor text-4xl mt-5 mb-10'>Our Laurels</h2>
                    
                    <div className='flex justify-between gap-5'>
                        <ListGroup name='Rising Star' desc='Lorem ipsum dolor sit amet, consectetur.' />
                        <ListGroup name='Outstanding Chef' desc='Lorem ipsum dolor sit amet, consectetur.' />   
                    </div>
                    <div className='flex mt-10 gap-5'>
                        <ListGroup name='Bib Gourmond' desc='Lorem ipsum dolor sit amet, consectetur.' />
                        <ListGroup name='AA Hospitality ' desc='Lorem ipsum dolor sit amet, consectetur.' />   
                    </div>
                </div>

                <div className='shrink-0 relative grid place-items-center'>
                    <img alt='' src={Food1} className='h-96 w-96 z-40 relative' />
                </div>
            </section>

            {/* Photo Gallery */}
            <section className='p-10 sm:py-40 sm:px-32 md:flex md:justify-between'>
                <div className='text-left relative'>
                    <p>Instagram</p>
                    <img alt='' src={Design} className='block w-5 h-5' />
                    <h3 className='text-goldcolor text-4xl mt-2'>Photo Gallery</h3>
                    <p className='w-full sm:w-[90%] mt-5 text-xl text-dimBlack'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                    </p>
                    <button className='bg-goldcolor px-6 py-2 mt-8 text-black hover:bg-opacity-80'>
                        View More
                    </button>
                </div>

                <div className='flex flex-col sm:flex-row gap-5 mt-5 md:mt-0 shrink-0'>
                    <img src={Food2} alt='' className='w-full md:w-40 md:h-64 ' />
                    <img src={Food3} alt='' className='w-full md:w-40 md:h-64' />
                    <img src={Food4} alt='' className='w-full md:w-40 md:h-64' />
                    <img src={Food5} alt='' className='w-full md:w-40 md:h-64' />
                </div>
            </section>

            {/*  Contact Us */}
            <section className='p-10 sm:px-32 flex flex-col sm:flex-row gap-8 justify-between'>
                <div className='text-left'>
                    <p>Contact</p>
                    <img alt='' src={Design} className='block w-5 h-5' />
                    <h3 className='text-goldcolor text-4xl mt-2'>Find Us</h3>
                    <p className='w-full sm:w-[90%] mt-5 text-dimBlack text-xl'>
                        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
                    </p>
                    <p className='text-goldcolor mt-3 text-xl'>Opening Hours</p>
                    <p className='mt-2 text-xl'>Mon - Fri: 10:00 am - 02:00 am</p>
                    <p className='mt-2 text-xl'>Sat - Sun: 10:00 am - 03:00 am</p>
                    <button className='bg-goldcolor px-6 py-2 mt-8 text-black hover:bg-opacity-80'>
                        Visit Us
                    </button>
                </div>

                <div className='shrink-0 relative grid place-items-center'>
                    <img alt='' src={yellowBg} className = 'h-64 w-64 absolute -top-5 sm:-right-5 right-0 z-10' />
                    <img alt='' src={ContactImg} className='w-96 h-96 relative z-40' />
                    <img alt='' src={yellowBg} className = 'h-64 w-64 absolute -bottom-5 sm:-left-5 left-0 z-10' />
                </div>
            </section>

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