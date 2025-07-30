import { imageURL } from "../../constants/data";
import { Grid, styled } from "@mui/material";

const Wrapper = styled(Grid)`
  margin-top: 20px;
`;

const Image = styled('img')(({theme})=>({
    marginTop:10,
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:120
    }

}));

const MidSection = () => {
  const URL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  
  return (
    <>
      <Wrapper container spacing={2} wrap="nowrap">
            {imageURL.map((image, idx) => (
             <Grid item xs={12} sm={4} md={4} lg={4} key={idx}>
             <img src={image} alt={`Banner ${idx}`} style={{ width: '100%' }} />
                </Grid>
            ))}
      </Wrapper>
      <Image src={URL} alt="covid"/>
    </>
  );
};

export default MidSection;
