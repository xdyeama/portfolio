import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbHouse from '../public/images/ds_projects/housing.jpg'
import thumbMovies from '../public/images/ds_projects/beket-movies-1.png'
import thumbCsgo from '../public/images/ds_projects/csgo.jpg'
import thumbMnist from '../public/images/ds_projects/mnist.png'
import thumbCharMnist from '../public/images/ds_projects/char_mnist.png'
import thumbRestaurant from '../public/images/ds_projects/restaurant.jpg'
import thumbCreditCard from '../public/images/ds_projects/credit-card-fraud.png'
import thumbFakeNews from '../public/images/ds_projects/fake_news.jpg'



const Projects = () => (
  <Layout title="Pet Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Pet Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectGridItem id="mnist_advanced" title="Advanced handwritten digits recognizer" thumbnail={thumbMnist}>
            Advanced data science project of recognizing handwritten digits using Convolutional Neural Networks trained on MNIST dataset and simple GUI app on Python
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="char_recognizer" title="Advanced handwritten english alphabetic letters" thumbnail={thumbCharMnist}>
            Advanced data science project of english alphabet handwritten characters A-Z recognition using Convolutional Neural Networks
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="fake_news" title="Fake News detection" thumbnail={thumbFakeNews}>
            Data Science project of detecting Fake News using Machine Learning classification models.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="housingestimation" title="California housing esimation Data Science pet project" thumbnail={thumbHouse}>
            Data Science project of estimating housing price in California using Machine learning models
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="csgo" title="CSGO round winner prediction" thumbnail={thumbCsgo}>
            Data Science pet project of predicting the outcome of the round in Counter-Strike: Global Offensive using huge number of round features using Neural Network based MLP classification model.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="mnist" title="MNIST dataset number identifier" thumbnail={thumbMnist}>
            Data Science pet project of Machine Learning classification model for identifiying handwritten digits from 0 to 9.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="beket-movies" title="Beket-Movies movie preview website" thumbnail={thumbMovies}>
            Frontend web project for searching for movie by title and displaying main information about the movie. Written using ReactJS.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="restaurant_location" title="Korean Restaurant location identifier" thumbnail={thumbRestaurant}>
            Data Science pet project of Machine Learning classification model for finding out the best neighborhood for opening new Korean restaurant based on multiple features
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="creditcard_fraud" title="Credit Card fraud detection" thumbnail={thumbCreditCard}>
            Data Science pet project of detecting credit card fraudulent operations using Machine Learning classification model
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects