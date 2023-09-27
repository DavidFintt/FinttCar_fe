import React from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import slide1 from './assets/img/slide1.jpg'
import slide2 from './assets/img/slide2.jpg'
import slide3 from './assets/img/slide3.jpg'
export default function CarouselApp() {
    const items = [
    {
        src: slide1,
        altText: 'Slide 1',
        caption: 'Título do Slide 1',
        description: 'Descrição do Slide 1'
    },
    {
        src: slide2,
        altText: 'Slide 2',
        caption: 'Título do Slide 2',
        description: 'Descrição do Slide 2'
    },
    {
        src: slide3,
        altText: 'Slide 3',
        caption: 'Título do Slide 3',
        description: 'Descrição do Slide 3'
    }
    ];

    const [activeIndex, setActiveIndex] = React.useState(0);

    const next = () => {
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        const previousIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(previousIndex);
    };

    const goToIndex = (index) => {
        setActiveIndex(index);
    };

    const onExiting = () => {
        // Chamado antes de um slide ser ocultado
    };

    const onExited = () => {
        // Chamado após um slide ser ocultado
    };

    const slides = items.map((item) => (
        <CarouselItem
        onExiting={onExiting}
        onExited={onExited}
        key={item.src}
        >
        <img className="d-block w-100" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.description} captionHeader={item.caption} />
        </CarouselItem>
    ));

    return (
        <div className='carouselDiv'>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
    };

