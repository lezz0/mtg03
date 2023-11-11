import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
    width: 22px;
    height: 22px;   
`;

export const RestaurantCard = styled(Card)`
    border-radius: 10px;
    margin: ${(props) => props.theme.space[3]};
    margin-top: ${(props) => props.theme.space[5]};
     
    padding-bottom: ${(props) => props.theme.space[3]};

    width: 250px;
    height: 330px;
    
    background-color: ${(props) => props.theme.colors.bg.primary};   
`;
//why tf does it double overlap for below card when removing 320px



export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[0]};
    border-radius: 0px;
    background-color: ${(props) => props.theme.colors.bg.primary};    
`;

export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-right: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
  
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  
`;

export const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    
`;

// export const Name = styled.View`
//     font-family: ${(props) => props.theme.fonts.body };
//     font-size: ${(props) => props.theme.fontSizes.caption };
// `;