import React from 'react';
import { Carousel } from 'react-bootstrap';
import ProjectPic1 from '../.../../../../images/project01.png'

const ProjectDetail1 = () => {
    return (
        <div>
            <h1>Welcome to project details 01</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ProjectPic1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ProjectPic1}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ProjectPic1}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail1;
       