import styled from "styled-components";

const ItemContainer = styled.div`
    width: 80%;
    height: auto;
    margin-top: 20px;

    h3 {
        font-size: 32px;
        color: #E6EDF3;
    }

    p {
        font-size: 16px;
        color: #E6EDF360;
        margin-bottom: 20px;
    }

    a {
        color: #E6EDF3;
    }

    a.remove {
        margin-left: 20px;
    }

    hr {
        margin: 20px 0;
    }
`;

export default ItemContainer;