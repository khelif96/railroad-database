import styled from 'styled-components';
import Card , { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';

export const Container = styled.div`
    flex-grow : 1;
    display: flex;
    justify-content: center;
`;

export const Station = styled(Card)`
    width : 500px;    
`;

export const StationHeader = styled(CardHeader)`
    max-height : 100px;
`;