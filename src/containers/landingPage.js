import React from "react"
import {
    Box,
    Container,
    Typography
} from '@mui/material'
import { motion } from "framer-motion"

const LandingPage = () => {
    return (
        <>
            <Box
                component='div'
                id='landing-page'
                style={{
                    // backgroundColor: 'orange',
                    height: '95vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >

                <div style={{ textAlign: 'center' }}>
                    <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 3, type: 'spring' }}>JACQ KIRKMAN</motion.h1>
                    <Typography variant='h1'>JACQ KIRKMAN</Typography>
                    <Typography variant='h3'>welcome to my fucking page</Typography>
                </div>
            </Box>
        </>
    )
}

export default LandingPage