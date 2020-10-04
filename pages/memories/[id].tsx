import console from 'console';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
    Memories,
    getMemorie
} from '../../assets/data/memories'
import { MemorieCard } from "../../components/Card"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Moment from 'react-moment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

type PropsButton = {
    nextImage?: any
    previousImage?: any
}

export default function Member({ memorie }) {
    const [currentSlide, setCurrentSlide] = useState(0)

    const classes = useStyles();

    const { isFallback } = useRouter();

    if (isFallback) {
        return <p>Carregando...</p>;
    }

    // State transitions
    var actions = {
        toggleNext: function (): void {

            var current = currentSlide;
            var next = current + 1;
            if (next > memorie.sentences.length - 1) {
                next = 0;
            }
            setCurrentSlide(next);
        },
        togglePrev: function (): void {
            var current = currentSlide;
            var prev = current - 1;
            if (prev < 0) {
                prev = memorie.sentences.length - 1;
            }
            setCurrentSlide(prev);
        },
        toggleSlide: function (id: string): void {

            var index = memorie.sentences.map(function (el) {
                return (
                    el.id
                );
            });
            var currentIndex = index.indexOf(id);
            setCurrentSlide(currentIndex);
        }
    }

    const BackArrow = (props: PropsButton) => (
        <div onClick={props.previousImage} style={{ fontSize: '2em', marginLeft: '12px' }}>
            <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
        </div>
    )

    const NextArrow = (props: PropsButton) => (
        <div onClick={props.nextImage} style={{ fontSize: '2em', marginLeft: '12px' }}>
            <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
        </div>
    )
    
    const dateToFormat = new Date(memorie.date);

    return (
        <Container maxWidth="sm">
            <form className={classes.container} noValidate>
                <Typography variant="subtitle1">
                    Memoria: {memorie.id}
                </Typography>
                {memorie.date}
                <Moment format="YYYY/MM/DD">
                    {memorie.date}
                </Moment>
                <Moment date={dateToFormat} />

                <p>Dia: {memorie.id}</p>
                <p>Tema: {memorie.searchTerm}</p>

                <p><b>Frase do Dia</b></p>

                <Typography paragraph>
                    {memorie.sourceContentSanitized}
                </Typography>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '30px' }}>
                    {currentSlide !== 0 ? <BackArrow previousImage={actions.togglePrev} /> : ''}
                    {memorie.sentences.map((sentence, key) => {
                        if (memorie.sentences.indexOf(sentence) === currentSlide) {
                            return (
                                <div key={sentence.id} style={{ display: 'md4' }}>
                                    <MemorieCard
                                        title={sentence.keywords[0]}
                                        resume={sentence.keywords[1]}
                                        text={sentence.text}
                                        image={sentence.images[0]}
                                        keyword={sentence.keywords[0]}
                                    ></MemorieCard>
                                </div>
                            )
                        } else {
                            return ''
                        }
                    })}
                    {currentSlide !== (memorie.sentences.length - 1) ? <NextArrow nextImage={actions.toggleNext} /> : ''}
                </div>
            </form>
        </Container>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    //const response = await fetch(`https://api.github.com/orgs/rocketseat/members`);
    //const data = await response.json();

    const paths = Memories.map(memories => {
        return { params: { id: memories.id.toString(), } }
    });

    return {
        paths,
        fallback: true
    }


}

export const getStaticProps: GetStaticProps = async (context) => {

    const { id } = context.params;

    //const response = await fetch(`https://api.github.com/users/${login}`);
    //const data = await response.json();

    const memorie = getMemorie(id);

    return {
        props: {
            memorie: memorie
        },
        revalidate: 10,
    }
}



