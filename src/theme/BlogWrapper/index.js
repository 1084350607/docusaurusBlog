import React from 'react';
import { 
    BlogItemWrapper,
    BlogItemLeft,
    BlogItemRight,
 } from './style'

function BlogWrapper(){
    return (
        <BlogItemWrapper>
            <BlogItemLeft>
                <div className='timeCircle'>1</div>
                <div className='timeLine'></div>
            </BlogItemLeft>
            <BlogItemRight></BlogItemRight>
        </BlogItemWrapper>
    )
}

export default BlogWrapper