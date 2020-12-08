import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css'
import { useSpring,animated , useTrail } from 'react-spring'
import BlogFir from '../theme/BlogFir/index';
import BlogSec from '../theme/BlogSec/index';
 
function Home() {

  const props = useSpring({
    opacity: 1,transform: "translateY(0)",
    from: {opacity: 0, transform: "translateY(3em)"},
    delay: 0,
  })

  const props2 = useSpring({
    opacity: 1,transform: "translateY(0)",
    from: {opacity: 0, transform: "translateY(3em)"},
    delay: 300,
  })

  const props3 = useSpring({
    opacity: 1,transform: "translateY(0)",
    from:{opacity: 0, transform: "translateY(3em)"},
    delay: 600,
  })

  return (
    <Layout>
      <div className={styles.index_wrapper}>
        <animated.h1 style={props}>Welcome to <span className={styles.fontActive}>JiuRan's Channel</span></animated.h1>
        <animated.p style={props2}>Make things as simple as possible but no simpler.</animated.p>
        <animated.a 
          href='/' 
          className={styles.blogHome_btn} 
          style={props3}
        >Get Started</animated.a>
      </div>
      <BlogFir />
      <BlogSec />
    </Layout>
  );
}

export default Home;