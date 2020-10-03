import React, { Component } from "react";

interface IProps {
    children: JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
    const activeSlide = children.map(slide => (
        <>
            {slide}
        </>
    ));

    return (
        <div>
            <SCarouselWrapper>
                {activeSlide}
            </SCarouselWrapper>
        </div>
    );
};
