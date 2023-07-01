import React, { useEffect } from 'react';
import './main.css';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import img from '../../Images/img(1).jpg';
import img2 from '../../Images/img(2).jpg';
import img3 from '../../Images/img(3).jpg';
import img4 from '../../Images/img(4).jpg';
import img5 from '../../Images/img(5).jpg';
import img6 from '../../Images/img(6).jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Olhahali',
        location: 'Maldives',
        grade: 'CULTURAL RELAX',
        fees: '$1500',
        description: ' Olhahali is a picturesque island located in the Maldives, a tropical paradise in the Indian Ocean. It is a part of the Kaafu Atoll, which is situated near the capital city of Malé. Olhahali offers a serene and tranquil environment, surrounded by crystal-clear turquoise waters, pristine white sandy beaches, and lush greenery.'
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Machu Picchu is an ancient Inca citadel located high in the Andes Mountains of Peru. It is one of the most famous and iconic archaeological sites in the world. Built during the 15th century, Machu Picchu was abandoned and hidden from the outside world until its rediscovery in 1911 by Hiram Bingham, an American explorer.'
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The Great Barrier Reef is an extraordinary natural wonder located off the northeastern coast of Australia. It is the largest coral reef system in the world, stretching over 2,300 kilometers (1,400 miles) along the Queensland coastline. The reef is a UNESCO World Heritage Site and is renowned for its remarkable biodiversity and stunning marine ecosystems.'
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'Cappadocia is a captivating region located in central Turkey known for its unique and otherworldly landscapes. What sets Cappadocia apart is its extraordinary rock formations, often referred to as "fairy chimneys." These surreal rock formations were created over millions of years through volcanic activity and erosion.'
    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: "Bali is a captivating island located in Indonesia, known for its stunning natural beauty, vibrant culture, and warm hospitality. It is often referred to as the 'Island of the Gods' due to its numerous temples and spiritual significance. The island's natural beauty provides a picturesque backdrop for relaxation, adventure, and exploration."
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Kyoto',
        location: 'Japan',
        grade: 'CULTURAL RELAX',
        fees: '$1000',
        description: 'Kyoto is a historic and culturally rich city located in the Kansai region of Japan. It served as the capital of Japan for over a thousand years, from 794 to 1868, and is renowned for its preserved traditions, temples, shrines, and stunning natural beauty. Kyoto is also famous for its seasonal beauty, especially during the cherry blossom season in spring and the vibrant autumn foliage season.'
    }


]

const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">

                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {

                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">

                                <div className="imageDiv">
                                    <img src={imgSrc} alt="{destTitle}" />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className='icon' />
                                    </button>
                                </div>

                            </div>
                        )
                    })
                }


            </div>
        </section>
    )
}

export default Main