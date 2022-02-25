import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const DsProject = () => (
  <Layout title="Fake News detection">
    <Container>
      <Title>
        Fake News detecting model <Badge>2021</Badge>
      </Title>
      <P>
        Data Science pet project of detecting fake news using Machine Learning classification model - PassiveAggressiveClassifier.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Google Colab link</Meta>
          <Link href="https://colab.research.google.com/drive/1gzcSyaU7ZpUXcFAN3CkJ8ALnRL5zcrXD?usp=sharing">
            https://colab.research.google.com/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Colab</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python: Pandas, NumPy, Sci-Kit, MathPlotLib </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default DsProject
