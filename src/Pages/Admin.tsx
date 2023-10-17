// Admin Home 
// When authorities login, this is the first page they see.

import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import { Box,
        Button,
        ButtonGroup,
        Card,
        CardBody,
        CardFooter,
        Divider,
        Grid,
        GridItem,
        Heading,
        Icon,
        Image,
        Stack,
        Text
    } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import NextButtonAdmin from "./NextButtonAdmin";
// import { FaWave } from 'react-icons/fa';

const Admin = () => {
    return(
        <>
            <Header></Header>
            <form action="">
            <Box
                paddingTop={"7%"}
                paddingBottom={"2%"}
                // marginX={"10px"}
                // boxShadow="base"
                paddingX={"10%"}
                display={"block"}
                >
                <Text
                    color={"#00334E"}
                    fontSize={"30px"}
                    fontWeight={"bold"}
                    paddingBottom={"40px"}
                    fontFamily={"Poppins, sans-serif"}
                >
                    Welcome To Project Fund Requests👋
                </Text>
                <Text
                    color={"#00334E"}
                    fontSize={"20px"}
                    fontWeight={"small"}
                    paddingBottom={"10px"}
                    fontFamily={"Poppins, sans-serif"}
                >
                    Latest Requests
                </Text>
            </Box>

            <Grid
                paddingX = {{base: "10%", md: "10%"}}
                paddingY = {{ base: "10px", md: "1%" }}

                templateAreas={{
                    base: `"card1"
                    "card2"`,
                    md: `"card1 card2"`,
                  }}
                //   gridTemplateColumns={{ md: "80% 80%" }}
                  gap={4}
                  marginBottom={5}
                >  
                {/* {{ base: "10px", md: "1%" }} */}
                <GridItem area={"card1"} colSpan={1} alignItems="center">
                <Card maxW='lg'>
                    <CardBody>
                        <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>Living room Sofa</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        {/* <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text> */}
                        </Stack>
                    </CardBody>
                    {/* <Divider /> */}
                    <CardFooter>
                        {/* <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button> */}
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                        {/* </ButtonGroup> */}
                    </CardFooter>
                </Card>
                </GridItem>

                <GridItem area={"card2"} colSpan={1} alignItems="center">
                <Card maxW='lg'>
                    <CardBody>
                        <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>Living room Sofa</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        {/* <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text> */}
                        </Stack>
                    </CardBody>
                    {/* <Divider /> */}
                    <CardFooter>
                        {/* <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button> */}
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                        {/* </ButtonGroup> */}
                    </CardFooter>
                </Card>
                </GridItem>
            </Grid>
            {/* Next Button */}
            <Grid
                paddingX={{ base: "20px", md: "10%" }}
                paddingY={{ base: "10px", md: "1%" }}
                >
                <Link to="/admin1">
                    <NextButtonAdmin currrentStep={0} onStepperChange={function (): void {
                        throw new Error("Function not implemented.");
                    } } />
                </Link>
            </Grid>
            </form>
            <FooterSection></FooterSection>
        </>
    );
}
export default Admin;