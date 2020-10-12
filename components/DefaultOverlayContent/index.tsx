import React from 'react'

import { Container, Heading, Buttons } from './styles'

interface Props {
    children?: React.ReactNode
    className?: string
    label: string
    description: string
    nextImage?: any
    previousImage?: any
}

export const DefaultOverlayContent = function DefaultOverlayContent(props: Props) {
    
    const { label, description, ...rest } = props;
    return (
        <Container style={{display: 'flex'}}>
            <Heading>
                <h1>{label}</h1>
                <h2>{description}</h2>
            </Heading>

            <Buttons>
                <button onClick={props.nextImage}>Proximo</button>
                <button className="white" >Ler</button>
            </Buttons>
        </Container>
    );
}