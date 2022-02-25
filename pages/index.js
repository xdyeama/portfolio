import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  ListIcon,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { FaRegHeart, FaReact, FaPython } from 'react-icons/fa'
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5'
import { BiBookOpen } from 'react-icons/bi'
import Layout from '../components/layouts/article'


const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I&apos;m self taught developer from Kazakhstan!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Barlykov Beket
            </Heading>
            <p>WannaBe Dev (Data Science | Frontend Dev | Voxel Art)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/avatar.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Beket is a enthusiastic guy who studies Data Science and Frontend Web Development. In a free time he likes to create some cool 3D Voxel Models using MagicaVoxel, Blender and Photoshop.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/ds_projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                My Data Science Pet projects
              </Button>
            </NextLink>
          </Box>
          <Box align="center" my={4}>
            <NextLink href="/voxel_projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                My Voxel models
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Aktobe, Kazakhstan
          </BioSection>
          <BioSection>
            <BioYear>2013 - 2019</BioYear>
            Completed Nazarbayev Intellectual School of Physics and Mathematics in Aktobe
          </BioSection>
          <BioSection>
            <BioYear>2019-2020</BioYear>
            Studied in Seoul National University
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            IBM Data Science Professional Certificate on Coursera
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Applying for Nazarbayev University and hopefully will get there :)
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <List>
            <ListItem>
              <ListIcon as={FaRegHeart} color={useColorModeValue('grayAlpha.200', 'whiteAlpha.900')}/>Reading books📚
            </ListItem>
            <ListItem>
              <ListIcon as={FaRegHeart} color={useColorModeValue('grayAlpha.200', 'whiteAlpha.900')}/>Watching anime 📺
            </ListItem>
            <ListItem>
              <ListIcon as={FaRegHeart} color={useColorModeValue('grayAlpha.200', 'whiteAlpha.900')}/>Web Development <Icon as={FaReact} color={useColorModeValue('grayAlpha.200', 'whiteAlpha.900')} w={5} h={5}/>
            </ListItem>
            <ListItem>
              <ListIcon as={FaRegHeart} color={useColorModeValue('grayAlpha.200', 'whiteAlpha.900')}/>Data Science <Icon as={FaPython} color={useColorModeValue('grayAlpha.200', 'whiteAlpha.900')} w={5} h={5}/>
            </ListItem>
            <ListItem>
              <ListIcon as={FaRegHeart} color={useColorModeValue('grayAlpha.200', 'whiteAlpha.900')}/>VoxelArt 🎨
            </ListItem>
          </List>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I am learning
          </Heading>
          <List>
            <ListItem>
              <ListIcon as={BiBookOpen} color={useColorModeValue('grayAlpha.200', 'whiteAlpha.900')}/>
              Web Development
            </ListItem>
            <ListItem>
              <ListIcon as={BiBookOpen} color={useColorModeValue('grayAlpha.200', 'whiteAlpha.900')}/>
              Data Science 
            </ListItem>
            <ListItem>
              <ListIcon as={BiBookOpen} color={useColorModeValue('grayAlpha.200', 'whiteAlpha.900')}/>
              MagicaVoxel 🎨
            </ListItem>
          </List>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contact with Me!
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/xdyeama" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @xdyeama
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/xdyeama" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @xdyeama
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home