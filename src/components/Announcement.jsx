import styled from "styled-components";
const Container  = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 14px;
    font-weight: 500;
`;
const Announcement = () => {
    return (
        <Container>
            Deal OP
        </Container>
    )
}

export default Announcement
