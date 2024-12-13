import React, { useRef } from 'react'
import './IntroEducationComponent.scss'
import { motion, useInView } from 'framer-motion'

export const IntroEducationComponent = () => {
    const ref1 = useRef(null);

    const inView = useInView(ref1, { margin: "-10%", once: true });

    return (
        <section className='IntroEducation'>
            <motion.h2
                ref={ref1}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
            >
                Education
            </motion.h2>

            <div className='IntroEducation__Content'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
                    className='IntroEducation__Content__Title'>
                    <h3>UDA University of Information Technology</h3>
                    <h4>Bachelor of Information Technology</h4>
                    <p style={{ fontSize: '0.9rem' }}>2020 - 2024</p>
                    <p>Knowledge at Dong A University is my valuable experience. Through the subjects I have accumulated knowledge, experience, experience as well as a professional working environment. Grateful for the knowledge, opportunities, and guidance that shaped my path to becoming a software engineer.</p>
                </motion.div>
            </div>
        </section>
    )
}
