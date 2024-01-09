import '../index.css'
import { Header, About, TodaySpecialComp, WhatWeBelieve, VideoComp, Awards, PhotoGallery, Contact, Subscribe, Footer } from '../components';


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

            <Subscribe />

            <Footer />

            <p className='text-center text-dimBlack pb-2'>
                2021 Gerícht. All Rights reserved.
            </p>

        </div>
    )
}

export default Home;