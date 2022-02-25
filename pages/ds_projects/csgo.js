import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const DsProject = () => (
  <Layout title="CSGO round winner prediction">
    <Container>
      <Title>
        CSGO round winner prediction <Badge>2021</Badge>
      </Title>
      <P>
        Data Science pet project of predicting the outcome of the round in Counter-Strike: Global Offensive using huge number of round features using Neural Network based MLP classification model.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Google Colab link</Meta>
          <Link href="https://colab.research.google.com/drive/1r4XmPBpp0oFtOVzSHDakurihqp0eQMkq?usp=sharing">
            https://colab.research.google.com/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Colab</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python: NumPy, Sci-Kit, MathPlotLib, NN</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default DsProject
