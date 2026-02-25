import styled from 'styled-components'
import { skills } from '../../content/skills'
import { useEffect, useRef } from 'react';
import { schools } from '../../content/school';

const ContainerKnowledge = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	place-items: center;
`;

const ContainerSkills = styled.div`
	display: flex; 
	flex-direction: row;
	flex-wrap: wrap;
	gap: 40px;

	padding: 20px;
`;

const ContainerStudies = styled.div`

`;

const Skill = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;

	& div {
		border-radius: 50%;
		width: 80px;
		height: 80px;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;

		padding: 13px;
	}


	& img {

	}

	& p {
		font-size: 15px;
		align-self: center;
	}
`;

const Study = styled.div`

`;

const Knowledge = () => {
	const divRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		// Function to extract color from the image and set it as the background of the corresponding div
		const setBackgroundColorFromImage = (index: number) => {
			const divElement = divRefs.current[index];
			if (!divElement) return;
			const imgElement = divElement.querySelector('img');
			if (!imgElement) return;

			// Creating a canvas to extract the color
			const canvas = document.createElement('canvas');
			canvas.width = 1;
			canvas.height = 1;
			const ctx = canvas.getContext('2d');
			if (!ctx) return;

			// Wait for the image to load
			imgElement.onload = () => {
				ctx.drawImage(imgElement, 0, 0, 1, 1);
				const pixelData = ctx.getImageData(0, 0, 1, 1).data;
				const color = `rgba(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]}, 0.1)`;
				divElement.style.backgroundColor = color;
			};
		};

		// Loop through each skill and set the background color
		skills.forEach((_, index) => {
			setBackgroundColorFromImage(index);
		});
	}, []);



	return (
		<ContainerKnowledge className='container'>
			<ContainerSkills>
				{skills.map((skill, index) => (
					<Skill >
						<div key={index} ref={(el) => (divRefs.current[index] = el)}>
							<img src={skill.img} alt="" />
						</div>
						<p>{skill.title}</p>
					</Skill>
				))}
			</ContainerSkills>
			<ContainerStudies>
				{schools.map((school) => (
					<Study>
						<p>{school.date}</p>
						<h4>{school.title}</h4>
						<p>{school.name}</p>
					</Study>
				))}
			</ContainerStudies>
		</ContainerKnowledge>
	)
}

export default Knowledge