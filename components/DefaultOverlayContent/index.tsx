import React from 'react'

import { Container, Heading, Buttons } from './styles'

interface Props {
    children?: React.ReactNode
    className?: string
    label: string
    description: string
}

export const DefaultOverlayContent = function DefaultOverlayContent(props: Props) {
    
    const { label, description, ...rest } = props;
    return (
        <Container>
            <Heading>
                <h1>{label}</h1>
                <h2>{description}</h2>
            </Heading>

            <Buttons>
                <button>Proximo</button>
                <button className="white">Ler</button>
            </Buttons>
        </Container>
    );
}