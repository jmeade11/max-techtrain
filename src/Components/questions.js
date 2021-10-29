import styled from 'styled-components';

function importFolder(modules) {
	return modules.keys().map(modules);
}

const images = importFolder(
	require.context('../images', false, /\.(png|jpe?g|svg)$/)
);

const PageContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	height: calc(100% + 2rem);
	margin: -1rem;
`;

const ImageContainer = styled.div`
	background-image: url(${(props) => props.imgSrc});
	background-position: center;
	background-size: cover;
	min-height: 100%;
`;

const QuestionsContainer = styled.div`
	padding: 1rem;
`;

const Input = styled.input`
	border: 1px solid;
	padding: 0.5rem 0.75rem;
	width: 100%;
`;

const Questions = () => {
	const randomImage = images[Math.floor(Math.random() * images.length)].default;
	console.log(randomImage);
	return (
		<PageContainer>
			<ImageContainer imgSrc={randomImage} />
			<QuestionsContainer>
				<h1>Ask Max a Question...</h1>
				<form>
					<Input type="text" />
				</form>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
					quae esse. Deserunt, illo ipsa? Soluta voluptatem aut impedit dolore,
					recusandae molestias voluptatum ut. Maxime molestias voluptate
					incidunt saepe blanditiis reprehenderit?
				</p>
				<p>
					Libero ut vel, incidunt similique ipsum natus autem voluptas, minima
					nulla iste beatae culpa itaque at, cupiditate voluptates rerum!
					Doloremque consequuntur ipsam minima vel modi deserunt ad vitae, ullam
					excepturi.
				</p>
				<p>
					Non reiciendis aperiam earum totam ullam! Aliquid accusamus quae
					facilis minus doloribus ea ex odio ad cum harum esse, aspernatur
					officiis nulla quaerat nam vero tempore. Quod expedita ut eos.
				</p>
				<p>
					Harum doloribus, asperiores quae consequatur molestias similique
					nostrum vero quas alias rem distinctio? Voluptas, vitae neque.
					Perferendis porro, sapiente recusandae omnis eos rem quasi autem, quis
					animi aut, at neque?
				</p>
				<p>
					Doloribus molestiae illo quas. Esse, eaque, in mollitia pariatur sunt
					voluptas quam debitis repellendus quis distinctio quos aut soluta sit
					amet reprehenderit ducimus tenetur ipsa iste necessitatibus autem?
					Optio, nostrum.
				</p>
			</QuestionsContainer>
		</PageContainer>
	);
};

export default Questions;
