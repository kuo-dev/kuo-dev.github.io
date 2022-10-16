import './Welcome.css'
import React from "react";
import { motion } from "framer-motion";

import {profile_clear, circle   } from '../../../assets/images'

const Welcome = () =>{

    const titles = [
        "Amateur Guitarist",
        "Software Developer",
        "Data Engineer",
        "Web Developer",
        "Blogger"
    ]

    return (
        <div className='main-container welcome'> 
            <div className='welcome-text-wrapper'>
                
                <motion.div
                    whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                    viewport={{once:true}}
                    transition={{ duration: 0.75 }}
                    className='welcome-header'
                >
                    <p className='welcome-text-big'>
                        Hi!&nbsp;
                    </p>
                    <motion.span
                        whileInView={{ opacity: [0, 1] }}
                        viewport={{once:true}}
                        transition={{ duration:0.75 , delay:1 }}
                        className='welcome-text-big'
                    >
                        I'm Eric 
                    </motion.span>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.75, delay:2 }}
                    viewport={{once:true}}
                    className="welcome-iam"
                >
                    <p className='welcome-text'>I am a:&nbsp;</p>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    delay:2,
                                    staggerChildren: 2
                                }
                            }
                        }}
                        initial="hidden"
                        animate="show"
                    >
                        {titles.map((item,index) => (
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: { 
                                        opacity: [0, 1, 1, 0], 
                                        // y: [-50, 0, 0, 50],
                                        transition: {
                                            duration:2,
                                            times:[0,0.25,0.75,1],
                                            repeat:Infinity,
                                            repeatDelay:(titles.length-1)*2
                                        }
                                    }
                                }}
                                className='welcome-text'
                            >
                                {item}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div 
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.75, delay:2 }}
                    viewport={{once:true}}
                    className='welcome-iam-line'
                />

                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.75, delay: 2}}
                    viewport={{once:true}}
                    className='welcome-header'
                >
                    <p className='welcome-text'>
                        Welcome to my website!
                    </p>
                </motion.div>
            
            </div>

            
        </div>
    );
}

export default Welcome;
