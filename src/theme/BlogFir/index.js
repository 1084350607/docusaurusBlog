import React, { useEffect } from 'react';
import { 
    FirstWrapper, 
    FirstWrapperImage, 
    FirstWrapperText,
    AnimitedImg,
    AnimitedTitle,
    AnimitedIntro,
    TextLine
} from './style';
//Import script, styles and initialize AOS:
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useSpring } from 'react-spring';
const MONTHS = [
    "",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];



function BlogFir(props){
    const {
        a
    } = props

    useEffect(()=>{
        AOS.init()
    })
    const discription = `Hello,I'm JiuRan.A collage student in Northeastern University at Qinhuangdao`
    const lineSpring = useSpring({
        opacity: 1,
        from:{opacity: 0},
        delay: 300,
    })


    return (
        <FirstWrapper>
            <FirstWrapperImage>
            <div
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            ><AnimitedImg src='../../static/img/2.jpg'></AnimitedImg></div>
                
            </FirstWrapperImage>
            <FirstWrapperText>
                <div 
                    data-aos='fade-down'
                    data-aos-delay="350"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                ><AnimitedTitle>Profile</AnimitedTitle></div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                ><TextLine></TextLine></div>
                
                <div 
                    data-aos='fade-up'
                    data-aos-delay="650"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                ><AnimitedIntro>Hello,I'm JiuRan.<br />A collage student in Northeastern University at Qinhuangdao.
                Welcome to my Channel.
                </AnimitedIntro></div>
            </FirstWrapperText>
        </FirstWrapper>
    )
}

export default BlogFir