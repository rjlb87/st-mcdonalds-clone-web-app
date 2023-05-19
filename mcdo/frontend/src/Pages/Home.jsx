import {
  Box,
  Image,
  Flex,
  Grid,
  GridItem,
  // Spacer,
  HStack,
  VStack,
  StackDivider,
  // Show,
  Hide,
  Center,
  Heading,
  Text,
  // Wrap,
  // Stack,
  // Input,
  Button,
  Stack,
  Tab,
  Tabs,
  TabList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import loader_gif from "../Assets/images/loader_gif.gif";
import { Link, NavLink } from "react-router-dom";
import PickUpLocaton from "../Components/PickUpLocaton";



const browseCategoriesDataFromApi = () => {
  return fetch(`https://vfc-database.vercel.app/browseCategories`).then((res) =>
    res.json()
  );
};

const Home = () => {
  const [index, setIndex] = useState(0);
  const [categoriesData, setCategoriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
 

  // COROUSEL FUNCTON START
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  // COROUSEL FUNCTON END

  useEffect(() => {
    getdatafromBrowseCategories();
  }, []);

  const getdatafromBrowseCategories = () => {
    setIsLoading(true);
    setIsError(false);
    browseCategoriesDataFromApi()
      .then((res) => {
        // setIsLoading(false)
        setCategoriesData(res);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // if (isLoading) {
  //   return (
  //     <Center>
  //       <Image z-index="10" src={loader_gif} />
  //     </Center>
  //   );
  // }

  return (
    <>
      <Hide below="sm">
        <PickUpLocaton />
        <Center>
        </Center>

        <Box h="50px">
          <Center gap={3}>
            <Heading as="h4" size="md">
              SELECT YOUR ORDER TYPE TO START
            </Heading>
          </Center>
        </Box>

        <Box mb="50px">
          <Center m="10px" gap={5}>
            <Button>DELIVERY</Button>
            <Button>PICK UP</Button>
            <Button>DINE IN</Button>
          </Center>
        </Box>
      </Hide>
      {/* corousel start */}
      <Box>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.lionheartv.net/wp-content/uploads/2021/05/Luck-is-on-your-ride-with-McDonalds-Lucky-Ride-Promo.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.rappler.com/tachyon/2023/02/mcdo.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://pbs.twimg.com/media/EylDw8_W8AInzOg.jpg"
              alt="Third slide"
            />
          </Carousel.Item>

          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/e7163ee02d91d59d81a20ecf606f707b/Biryani_Banner_1440x396px.jpg?w=988&fit=fill&fm=webp"
              alt="Forth slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.ctfassets.net/wtodlh47qxpt/4w2NU51eNqAlF0S4k3YLTB/0d9dd4031fc40bd266a2b4ac49834491/1440_x_396_Value_Burger.jpg?w=988&fit=fill&fm=webp"
              alt="Fifth slide"
            />
          </Carousel.Item> */}

          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.ctfassets.net/wtodlh47qxpt/jxsYEVgrAX6liDnW8gxdW/17c8a5387706c5b3af41df18ab39361d/Express_pick_up_app_banner_1440x396.jpg?w=988&fit=fill&fm=webp"
              alt="Fifth slide"
            />
          </Carousel.Item> */}
        </Carousel>
      </Box>
      {/* corousel end */}
      <Hide below="sm">
        <Box p="0 150px">
          <Box h="50px">
          </Box>
          <Box>
            {/* <VStack> */}
            <Heading fontWeight="bolder" as="h1" size="lg">
              WELCOME TO MCDONALDS!
            </Heading>
            {/* </VStack> */}
          </Box>
        </Box>
      </Hide>
      <Box p="5% 8% 0" mb="50px" mt="50px">
        <Heading as="h1" size="lg">
          BROWSE CATEGORIES
        </Heading>
      </Box>

      {/* Browse Categories Start */}

      <Grid
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(4,1fr)",
        }}
        m="auto auto"
        // width="80%"
        p="0 10%"
        gap={5}
        rowGap={10}

       
        // width={{md:"80%"}}
      >
        {categoriesData?.map((item) => (
          <GridItem justifyContent="center" height="fit-content"   m="auto auto" borderRadius="8px" key={item.id} w="90%" boxShadow="base">
            <NavLink to={`/${item.cate}`}>
            {/* <a href={`${item.cate}`}> */}
              <Image w="100%" borderRadius="8px 8px 0 0"  src={item.image} />
              <Heading m="15px auto" size="sm">
                {item.name}
              </Heading>
              {/* </a> */}
            </NavLink>
          </GridItem>
        ))}
      </Grid>

      {/* Browse Categories end */}
      <Box h="40px" ></Box>
    </>
  );
};

export default Home;
