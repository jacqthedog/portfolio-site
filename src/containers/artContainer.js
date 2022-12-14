import React from "react"
import {
Typography,
    useMediaQuery
} from "@mui/material"
import Gallery from "../components/squareGallery"
import PageHolder from "../components/pageHolder"

const ArtContainer = () => {
    const mobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    const styles = {
        headers: {
            marginTop: '20px'
        }
    }
    const SQUARE_ARTWORK = [
        {
            alt: 'A witch and her cat familiar stretching',
            image: '10_6_costober_witch.jpg'
        },
        {
            alt: 'A woman in a mermaid dress sitting a person with a fish head',
            image: '10_2_costober_mermaid.jpg'
        },
        {
            alt: '3 werewolves protecting a werewolf in the center with a cheeseburger',
            image: '10_4_costober_werewolf.jpg'
        },
        {
            alt: 'A girl with purple hair using a ouija board',
            image: '10_1_costober_ghost.jpg'
        },
        {
            alt: 'A girl with brown curly hair and man with long straight hair and wide brim hat make a heart shape with their hands',
            image: '2_13_ThatRiasLover_commission.png'
        },
        {
            alt: 'A cat in a taco costume and a grey cat with one eye jump with a rainbow in the background',
            image: 'IMG_1641.PNG'
        },
        {
            alt: '',
            image: '3_14_brandyncommission1.png'
        },
        {
            alt: '',
            image: '3_14_brandyncommission2.png'
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

    const MERCHS = [
        {
            alt: 'Me and My Boyfriend\'s Zine',
            image: 'meandboyfriends.jpeg'
        },
        {
            alt: 'Gay shiro charm',
            image: 'gayshiro.jpeg'
        },
        {
            alt: 'Trans keith charm',
            image: 'transkeith.jpeg'
        }
    ]

    const SQUARE_MERCHS = [
        {
            alt: 'Shiro Protection',
            image: 'shiroprotection.jpeg'
        },
        {
            alt: 'Tiger Sticker',
            image: 'tigersticker.jpeg'
        }
    ]

    return (
        <PageHolder id='art' title='ART'>
            <Typography variant='h2' sx={styles.headers}>Merch</Typography>
            <Gallery type='triplet' content={SHIRTS} />
            <Gallery type='one to two' content={MERCHS} />
            <Gallery type={'square'} content={SQUARE_MERCHS} style={{ marginTop: '15px' }} />
            <Typography variant='h2' sx={styles.headers}>Other Work</Typography>
            <Gallery
                type='square'
                content={SQUARE_ARTWORK}
                style={{ marginTop: '15px' }} />
        </PageHolder>
    )
}

export default ArtContainer
