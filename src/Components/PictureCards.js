import styled from "styled-components";

const IMAGES = [
    "images/Cape_Kiwanda_42x42.jpeg",
    "images/GoldRush_36x48.jpeg",
    "images/McDonald_Creek_Falls_8_x_10.jpeg",
    "images/Old_Man_Montana_11x14.jpeg",
    "images/Montana_Symphony_2048x.jpeg",
    "images/McDonald_Creek_Falls_8_x_10.jpeg",
    "images/Spring_on_the_Clearwater_24x36.jpeg",
    "images/The_Snow_Makes_Its_Escape_24x30.jpeg",
    "images/Cape_Kiwanda_42x42.jpeg",
    "images/GoldRush_36x48.jpeg",
    "images/McDonald_Creek_Falls_8_x_10.jpeg",
    "images/Montana_Symphony_2048x.jpeg",
    "images/Old_Man_Montana_11x14.jpeg",
    "images/Spring_on_the_Clearwater_24x36.jpeg",
    "images/The_Snow_Makes_Its_Escape_24x30.jpeg",
    "images/Cape_Kiwanda_42x42.jpeg",
    "images/Spring_on_the_Clearwater_24x36.jpeg",
    "images/The_Snow_Makes_Its_Escape_24x30.jpeg"
];

const PictureCardContainer = styled.div`
    columns: 3 200px;
    column-gap: 0;
`;

const PictureCard = styled.div`
    padding: 2px;
`;

const Picture = styled.img`
    display: block;
    width: 100%;
    height: 100%;
`;

const PictureCards = () => {
    return (
        <PictureCardContainer>
            {IMAGES.map(image => (
                <PictureCard>
                    <a href="http://www.google.com" target="_blank" rel="noreferrer">
                        <Picture src={image} alt="pic" key={image}/>
                    </a>
                </PictureCard>
            ))}
        </PictureCardContainer>
    )
}

export default PictureCards;