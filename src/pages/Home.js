import HeadImg from './images/Hero-img.png'
import Knife from './images/knife.png'
import Design from './images/Vector.svg'
import G from './images/G.png';
import Jug from './images/jug.png'
import TodaySpecial from './TodaySpecial';
import ListGroup from './ListGroup';
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
        <div className="home bg-black text-white h-full md:pb-44">

            {/* Header Section */}
            <section className="header flex flex-col md:flex-row gap-14 md:gap-0 justify-evenly mb-10 px-10 md:px-30 py-14">
                <div >
                    <p>Chase The New Flavour</p>
                    <img alt='' src={Design} className='w-5 h-5'></img>
                    <h1 className='text-goldcolor text-5xl w-auto md:w-80 tracking-wider leading-tight mt-6'>The Key To Fine Dining</h1>
                    <p className='w-auto md:w-80 mt-8'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                    <button className='bg-goldcolor px-4 py-1 mt-8 text-black hover:opacity-75 hover:text-white'>Explore Menu</button>
                </div>
                <div className='shrink-0 relative'>
                    <img alt='' src={yellowBg} className = 'h-64 w-64 absolute -top-3 -right-3 z-10' />
                    <img alt='' src={HeadImg} className = 'h-96 w-96 z-40 relative' />
                    <img alt='' src={yellowBg} className = 'h-64 w-64 absolute -bottom-3 -left-3 z-10' />
                </div>
            </section>

            {/* About Us and Our History Section */}
            <section className='bg-bgColor w-full block md:flex justify-betweeen p-20 md:justify-center md:items-center md:h-screen'>
                    {/* About Us */}
                    <div className='text-center md:text-right z-10 relative'>
                        <h3 className='text-goldcolor text-3xl'>About Us</h3>
                        <img alt='' src={Design} className='block w-5 h-5 absolute right-1/2 md:right-0'></img>
                        <p className='w-full md:w-96 mt-10 md:mt-8 text-dimBlack'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                        <button className='bg-goldcolor px-4 py-1 mt-8 text-black hover:opacity-75 hover:text-white'>Read More</button>
                    </div>

                    <img alt='' src={G} className='hidden md:block absolute w-64 h-64 opacity-50'></img>

                    {/* Knife Image */}
                    <div className='z-10'>
                        <img alt='' className='hidden md:block w-fit h-96 mx-14' src={Knife}></img>
                    </div>

                    {/* Our History */}
                    <div className='text-center md:text-left mt-16 md:mt-0 z-10 relative'>
                        <h3 className='text-goldcolor text-3xl'>Our History</h3>
                        <img alt='' src={Design} className='block absolute w-5 h-5 left-1/2 md:left-0'></img>
                        <p className='w-full md:w-96 mt-10 md:mt-8 text-dimBlack'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                        <button className='bg-goldcolor px-4 py-1 mt-8 text-black hover:opacity-75 hover:text-white'>Read More</button>
                    </div>
            </section>

            {/* Today's Special */}
            <section className='p-10 md:p-20 pb-0'>
                        <p className='text-center'>Menu That Fits Your Palatte</p>
                        <img alt='' src={Design} className='w-5 h-5 absolute left-1/2'></img>
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
                                <img className='w-full' alt='' src={Jug}></img>
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
            <section className='bg-bgColor p-10 md:px-56 md:p-20 md:flex justify-around'>

                <div className=''>
                    <img alt='' src={RonLach} className='w-96 md:w-80 h-96'></img>
                </div>

                <div className='text-center md:text-left mt-10 md:mt-0'>
                    <p>Chef's Word</p>
                    <img alt='' src={Design} className='absolute left-1/2 w-5 h-5 md:relative md:left-0'></img>
                    <h2 className='text-goldcolor text-4xl mt-5 mb-10'>What We Believe In</h2>
                    <blockquote className="border-l-2 border-goldcolor pl-4 italic text-gray-600">
                        <p className="mb-2 w-auto md:w-96">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
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
                <div className=' md:w-4/5'>
                    <video alt='' src={Video} controls></video>
                </div>
                
            </section>

            {/* Our Laurels */}
            <section className='bg-bgColor p-10 md:px-56 md:p-20 md:flex justify-around'>
                
                <div className='text-center md:text-left mt-10 md:mt-0'>
                        <p>Awards & recognition</p>
                        <img alt='' src={Design} className='absolute left-1/2 w-5 h-5 md:relative md:left-0'></img>
                        <h2 className='text-goldcolor text-4xl mt-5 mb-10'>Our Laurels</h2>
                        <div className='flex justify-between'>
                            <ListGroup name='Rising Star' desc='Lorem ipsum dolor sit amet, consectetur.' />
                            <ListGroup name='Outstanding Chef' desc='Lorem ipsum dolor sit amet, consectetur.' />   
                        </div>
                        <div className='flex mt-10'>
                            <ListGroup name='Bib Gourmond' desc='Lorem ipsum dolor sit amet, consectetur.' />
                            <ListGroup name='AA Hospitality ' desc='Lorem ipsum dolor sit amet, consectetur.' />   
                        </div>
                </div>

                <div className=''>
                    <img alt='' src={Food1} className='hidden md:block w-96 md:w-80 h-96'></img>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className='p-10 md:px-20 md:flex md:justify-between'>
                <div className='text-left relative'>
                    <p>Instagram</p>
                    <img alt='' src={Design} className='block w-5 h-5'></img>
                    <h3 className='text-goldcolor text-3xl mt-2'>Photo Gallery</h3>
                    <p className='w-full md:w-auto mt-5 text-dimBlack'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <button className='bg-goldcolor px-4 py-1 mt-8 text-black hover:opacity-75 hover:text-white'>View More</button>
                </div>

                <div className='md:flex mt-5 md:mt-0 shrink-0'>
                    <img src={Food2} alt='' className='w-full md:w-40 md:h-64 md:ml-4 '></img>
                    <img src={Food3} alt='' className='w-full md:w-40 md:h-64 md:ml-4 mt-5 md:mt-0'></img>
                    <img src={Food4} alt='' className='w-full md:w-40 md:h-64 md:ml-4 mt-5 md:mt-0'></img>
                    <img src={Food5} alt='' className='w-full md:w-40 md:h-64 md:ml-4 mt-5 md:mt-0'></img>
                </div>
            </section>

            {/*  Contact Us */}
            <section className='p-10 md:px-72 md:flex md:justify-between'>
                <div className='text-left'>
                    <p>Contact</p>
                    <img alt='' src={Design} className='block w-5 h-5'></img>
                    <h3 className='text-goldcolor text-3xl mt-2'>Find Us</h3>
                    <p className='w-full md:w-96 mt-5 text-dimBlack '>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                    <p className='text-goldcolor text-lg mt-3'>Opening Hours</p>
                    <p className='mt-2'>Mon - Fri: 10:00 am - 02:00 am</p>
                    <p className='mt-2'>Sat - Sun: 10:00 am - 03:00 am</p>
                    <button className='bg-goldcolor px-4 py-1 mt-8 text-black hover:opacity-75 hover:text-white'>Visit Us</button>
                </div>

                <div className='shrink-0'>
                    <img src={ContactImg} alt='' className='w-full md:w-64 md:h-96 md:ml-4 mt-5 md:mt-0'></img>
                </div>
            </section>

            {/* Subscribe to Our Newsletter */}
            <section className='text-center bg-subscribeBg p-10 pb-20 shadow-xl'>
                <p>Newsletter</p>
                <img alt='' src={Design} className='block w-5 h-5 absolute left-1/2'></img>
                <h3 className='text-goldcolor text-3xl mt-5'>Subscribe To Our Newsletter</h3>
                <p className=' text-xs mt-7'>And never miss latest updates</p>
                
                <div className="flex justify-center mt-5">
                    <form className="flex items-center" action='#'>
                        <input type="email" placeholder="Email Address" className=" w-60 md:w-96 p-2 border mr-5 border-gray-400 bg-transparent focus:outline-none" />
                        <button type="submit" className="bg-goldcolor hover:opacity-75 hover:text-white text-black px-4 py-2">Subscribe</button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <section className='md:flex text-center items-center justify-around pt-20 pb-10 md:px-20'>
                <div>
                    <h2 className='text-xl mb-5'>Contact Us</h2>
                    <p>9 W 53rd St, New York, NY 10019, USA</p>
                    <p>+1 212-344-1230</p>
                    <p>+1 212-555-1230</p>
                </div>

                <div className='mt-7 md:mt-0 relative md:right-10'>
                    <h1 className='text-goldcolor text-4xl'>GERICHT</h1>
                    <p className='w-full md:w-72'>"The best way to find yourself is to lose yourself in the service of others.”</p>
                    <img alt='' src={Design} className='block w-5 h-5 absolute left-1/2'></img>

                </div>

                <div className='mt-10 md:mt-0 relative md:right-10'>
                    <h2 className='text-xl mb-5'>Working Hours</h2>
                    <p>Monday-Friday:</p>
                    <p>08:00 am -12:00 am</p>
                    <p className=' mt-2'> Saturday-Sunday:</p>
                    <p>07:00am -11:00 pm</p>
                </div>
            </section>

            <p className='text-center text-dimBlack pb-2'>2021 Gerícht. All Rights reserved.</p>

        </div>
    )
}

export default Home;