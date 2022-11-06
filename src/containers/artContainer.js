import React from "react"
import {
    Box,
    Grid,
    Card, Typography,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Paper,
    useMediaQuery
} from "@mui/material"
import SquareGallery from "../components/squareGallery"
import coupleCommission from '../images/2_13_ThatRiasLover_commission.png'
import catCommission from '../images/IMG_1641.PNG'
import shiroCommission from '../images/2_20_pandancookie-commission.gif'
import greenCommission from '../images/3_13_benui-animated-icon.gif'
import { green } from "@mui/material/colors"
import PageHolder from "../components/pageHolder"
import snakeGirl from '../images/10_23_snakegirlshirtcopy.jpg'

const ArtContainer = () => {
    const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
    const SQUARE_ARTWORK = [
        {
            alt: 'A girl with brown curly hair and man with long straight hair and wide brim hat make a heart shape with their hands',
            image: coupleCommission
        },
        {
            alt: 'A cat in a taco costume and a grey cat with one eye jump with a rainbow in the background',
            image: catCommission
        }
    ]

    const ANIMATED = [
        {
            alt: 'shiwo',
            image: shiroCommission
        },
        {
            alt: 'green',
            image: greenCommission
        }
    ]

    const SHIRTS = [
        {
            alt: 'snake girl',
            image: '10_23_snakegirlshirtcopy.jpg'
        },
        {
            alt: 'mushroom girl',
            image: '10_23_mushroomgirlshirtcopy.jpg'
        },
        {
            alt: 'skeleton girl',
            image: '10_23_skullgirlshirtICONcopy.jpg'
        }
    ]

    return (
        <PageHolder id='art' title='ART'>
            <Typography variant='h2' sx={{marginTop: '20px'}}>Merch</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '100%', sm: 'repeat(3, auto)' } }}>
                {SHIRTS.map((shirt, index) => {
                    return (
                        <React.Fragment key={shirt.alt}>
                            <Box sx={{ marginLeft: index > 0 && !mobile ? '15px' : null }}>
                                <img alt={shirt.alt}
                                    src={require(`../images/${shirt.image}`)}
                                    style={{ objectFit: 'cover', width: '100%', height: mobile ? 300 : 500, borderRadius: '8px' }} />
                            </Box>
                        </React.Fragment>
                    )
                })}
            </Box>
            <Typography variant='h2'>Animation</Typography>
            {/* <SquareGallery
                images={ANIMATED}
            /> */}
            <Typography variant='h2'>Other Work</Typography>
            <SquareGallery
                images={SQUARE_ARTWORK} />

        </PageHolder>
    )
}

export default ArtContainer
