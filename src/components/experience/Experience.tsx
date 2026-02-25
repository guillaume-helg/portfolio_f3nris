import { experiences } from '../../content/experiences'
import styled, { keyframes } from 'styled-components'

const animations = {
    moveline: keyframes`
        0% {
            height: 0;
        }
        100% {
            height: 100%;
        }
    `,

    movedown: keyframes`
        0% {
            opacity: 1;
            transform: translateY(-30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    `
};

const ContainerExperience = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

const Timeline = styled.ul`
    position: relative;
    max-width: 1200px;
    margin: 100px auto;

    &:after {
        content: '';
        position: absolute;
        width: 6px;
        height: 100%;
        background: #fff;
        top: 0;
        left: 50%;
        margin-left: -3px;
        z-index: -1;
        animation: ${animations.moveline} 6s linear forwards;
    };

    @media screen and (max-width: 600px) {
        margin: 50px auto;

        &:after {
            left: 31px;
        };
    };
`;

const ContainerCards = styled.div`
    padding: 10px 50px;
    position: relative;
    width: 50%;
    animation: ${animations.movedown} 1s linear forwards;
    opacity: 0;

    /* TODO : solve problem to get the index of the card to apply formula and use animation delay */

    &.left-container {
        left: 0;
    }

    &.right-container {
        left: 50%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        padding-left: 80px;
        padding-right: 25px;

        &.right-container {
            left: 0;
        }
    }
`;

const Card = styled.li`
    padding: 20px 30px;
    background: #0c3c9c;
    position: relative;
    border-radius: 20px;
    font-size: 15px;

    @media screen and (max-width: 600px) {
        font-size: 13px;
    }
`;

const Logo = styled.img`
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    right: -20px;
    top: 32px;
    z-index: 10;
    background-color: #fff;

    .right-container & {
        left: -20px;
    }

    @media screen and (max-width: 600px) {
        .right-container &,
        .left-container & {
            left: 10px;
        }
    }
`;

const Title = styled.h4`
    font-weight: 600;
`;

const Date = styled.small`
    display: inline-block;
    margin-bottom: 15px;

    @media screen and (max-width: 600px) {
        margin-bottom: 10px;
    }
`;

const ContainerArrow = styled.span`
    &.left-container-arrow {
        height: 0;
        width: 0;
        position: absolute;
        top: 38px;
        z-index: 1;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 15px solid #0c3c9c;
        right: 36px;

        @media screen and (max-width: 600px) {
            border-right: 15px solid #0c3c9c;
            border-left: 0;
            left: 66px;
        }
    }

    &.right-container-arrow {
        height: 0;
        width: 0;
        position: absolute;
        top: 38px;
        z-index: 1;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-right: 15px solid #0c3c9c;
        left: 36px;

        @media screen and (max-width: 600px) {
            border-right: 15px solid #0c3c9c;
            border-left: 0;
            left: 66px;
        }
    }
`;

const Experience = () => {
    return (
        <ContainerExperience className='container'>
            <Timeline>
                {experiences.map((experience, index) => (
                    <ContainerCards className={`${index % 2 === 0 ? 'left-container' : 'right-container'}`} key={index} >
                        <Logo src={experience.logo} alt={experience.name} />
                        <Card>
                            <Title>{experience.title} @{experience.name}</Title>
                            <Date>{experience.date}</Date>
                            <p>{experience.resume}</p>
                        </Card>
                        <ContainerArrow className={index % 2 === 0 ? 'left-container-arrow' : 'right-container-arrow'} key={index}></ContainerArrow>
                    </ContainerCards>
                ))}
            </Timeline>
        </ContainerExperience>
    )
}

export default Experience