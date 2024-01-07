import HeadImg from './images/Hero-img.png'
import Knife from './images/knife.png'
import Design from './images/Vector.svg'
import G from './images/G.png';
import Jug from './images/jug.png'
import ListGroup from './ListGroup';
import TodaySpecial from './TodaySpecial';
import RonLach from './images/ron-lach.png'
import Video from './images/restaurant-1192.mp4'
import Food1 from './images/food-1.jpg'
import Food2 from './images/food-2.png'
import Food3 from './images/food-3.png'
import Food4 from './images/food-4.png'
import Food5 from './images/food-5.png'
import yellowBg from './images/yellowBg.png'
import ContactImg from './images/contact-img.png'
import '../index.css'

function Home() {

    return (
        /* Whole Home Content */
        <div className="home bg-black text-white">

            {/* Header Section */}
            <section
                className="flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between items-center p-10 sm:py-20 sm:px-32"
            >
                <div className='flex flex-col gap-5 sm:gap-10'>
                    <div>
                        <p>Chase The New Flavour</p>
                        <img alt='' src={Design} className='w-5 h-5' />
                    </div>
                    <h1 className='text-goldcolor text-4xl sm:text-6xl w-auto tracking-wider leading-tight'>
                        The Key To Fine Dining
                    </h1>
                    <p className='w-auto sm:w-[70%] text-xl sm:text-2xl leading-relaxed'>
                        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
                    </p>
                    <button className='w-1/2 sm:w-[20%] bg-goldcolor px-4 py-3 text-black hover:bg-opacity-80'>
                        Explore Menu
                    </button>
                </div>

                <div className='shrink-0 relative'>
                    <img alt='' src={yellowBg} className = 'h-64 w-64 absolute -top-3 -right-3 z-10' />
                    <img alt='' src={HeadImg} className = 'h-96 w-96 z-40 relative' />
                    <img alt='' src={yellowBg} className = 'h-64 w-64 absolute -bottom-3 -left-3 z-10' />
                </div>
            </section>

            {/* About Us and Our History Section */}
            <section
                className='mt-10 sm:mt-0 bg-bgColor w-full block md:flex justify-betweeen md:justify-center md:items-center p-10 sm:py-40 sm:px-32'
            >
                {/* About Us */}
                <div className='text-center md:text-right z-10 relative'>
                    <h3 className='text-goldcolor text-4xl'>About Us</h3>
                    <img alt='' src={Design} className='block w-5 h-5 absolute right-1/2 md:right-0' />
                    <p className='w-full md:w-96 mt-10 md:mt-8 text-dimBlack text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                    </p>
                    <button className='bg-goldcolor px-8 py-2 mt-8 text-black hover:bg-opacity-80'>
                        Read More
                    </button>
                </div>

                <img alt='' src={G} className='hidden md:block absolute w-64 h-64 opacity-50' />

                {/* Knife Image */}
                <div className='z-10'>
                    <img alt='' className='hidden md:block w-fit h-96 mx-14' src={Knife} />
                </div>

                {/* Our History */}
                <div className='text-center md:text-left mt-16 md:mt-0 z-10 relative'>
                    <h3 className='text-goldcolor text-4xl'>Our History</h3>
                    <img alt='' src={Design} className='block absolute w-5 h-5 left-1/2 md:left-0 rotate-180' />
                    <p className='w-full md:w-96 mt-10 md:mt-8 text-dimBlack text-xl'>
                        Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
                    </p>
                    <button
                        className='bg-goldcolor px-8 py-2 mt-8 text-black hover:bg-opacity-80'
                    >
                        Read More
                    </button>
                </div>
            </section>

            {/* Today's Special */}
            <section className='p-10 sm:py-40 sm:px-32'>
                <p className='text-center'>Menu That Fits Your Palatte</p>
                <img alt='' src={Design} className='w-5 h-5 absolute left-1/2' />
                <h2 className='text-goldcolor text-center text-4xl mt-7 mb-7'>Today's Special</h2>

                <div>                        
                    {/* Div to flex the contents */}
                    <div className='block md:flex justify-evenly'>
                        {/* Div for each row */}
                        <div className='md:w-1/3 mt-10'>
                            <h3 className='text-center md:w-full text-2xl'>Wine & Beer</h3>
                            <TodaySpecial name='Chapel Hill Shiraz' desc='AU | Bottle' price='$56'/>
                            <TodaySpecial name='Catena Malbec' desc='AR | Bottle' price='$59'/>
                            <TodaySpecial name='La Vieille Rosé' desc='FR | 750 ml' price='$44'/>
                            <TodaySpecial name='Rhino Pale Ale' desc='CA | 750 ml' price='$31'/>
                            <TodaySpecial name='Irish Guinness' desc='IE | 750 ml' price='$26'/>
                        </div>

                        <div className=' mt-10 md:mt-0 md:w-1/3'>
                            <img className='w-full' alt='' src={Jug} />
                        </div>

                        <div className='md:w-1/3 mt-10 '>
                            <h3 className='text-center md:w-full text-2xl'>Cocktails</h3>
                            <TodaySpecial name='Aperol Spritz' desc='Aperol | Villa Marchesi prosecco | soda | 30ml' price='$20'/>
                            <TodaySpecial 
                            name='Catena Malbec' desc='Dark rum | Ginger beer | Slice of lime. ' price='$16'/>
                            <TodaySpecial 
                            name='Daiquiri' desc='Rum | Citrus juice | Sugar' price='$10'/>
                            <TodaySpecial 
                            name='Old Fashioned' desc='Bourbon | Brown sugar | Angostura Bitters' price='$31'/>
                            {/* <TodaySpecial name='Negroni' desc='Gin | Sweet Vermouth | Campari | Orange garnish' price='$26'/>  */}       
                        </div>
                    </div>
                    {/* End of div to flex the contents */}
                </div>
            </section>

            {/* What We Believe In */}
            <section
                className='bg-bgColor flex flex-col sm:flex-row gap-5 sm:gap-0 justify-around p-10 sm:py-40 sm:px-32'
            >

                <div className='shrink-0 relative grid place-items-center'>
                    <img alt='' src={yellowBg} className = 'h-64 w-64 absolute -top-3 sm:-right-5 right-5 z-10' />
                    <img alt='' src={RonLach} className='w-96 h-96 relative z-40' />
                    <img alt='' src={yellowBg} className = 'h-64 w-64 absolute -bottom-3 sm:-left-5 left-5 z-10' />
                </div>

                <div className='text-center md:text-left mt-10 md:mt-0'>
                    <p>Chef's Word</p>
                    <img alt='' src={Design} className='absolute left-1/2 w-5 h-5 md:relative md:left-0' />
                    <h2 className='text-goldcolor text-4xl mt-5 mb-10'>What We Believe In</h2>
                    <blockquote className="border-l-2 border-goldcolor pl-4 italic text-gray-600">
                        <p className="mb-2 text-xl w-auto md:w-96">
                            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
                        </p>
                        <footer className="text-gray-500">
                            <p className='text-2xl text-goldcolor opacity-75'>Kevin Luo</p>
                            <h6>Chef & Founder</h6>
                        </footer>
                    </blockquote>
                    <p className='signature text-5xl opacity-50 mt-7'>Kevin Luo</p>
                </div>
            </section>

            {/* Video Section */}
            <section className='flex justify-center items-center'>
                <video alt='' src={Video} controls></video>
            </section>

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