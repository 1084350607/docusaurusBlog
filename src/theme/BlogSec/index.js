import React from 'react';
import {
    SecWrapper,
    Title
} from './style'
import { TextLine } from '../BlogFir/style';
import BlogWrapper from '../BlogWrapper/index'

function BlogSec(props){
    const {
        title='My Blog',
    } = props

    return (
        <SecWrapper>
            <div data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration='1000'
            ><Title>{title}</Title><TextLine width='12rem'/></div>
            <BlogWrapper />
        </SecWrapper>
    )
}

export default BlogSec