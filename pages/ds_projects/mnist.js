import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const DsProject = () => (
  <Layout title="MNIST dataset number identificator">
    <Container>
      <Title>
        MNIST dataset number identificator <Badge>2021</Badge>
      </Title>
      <P>
        Data Science pet project of Machine Learning classification model for identifiying handwritten digits from 0 to 9. This ML model uses KNeighbours classification algorithm and trained on MNIST handwritten digits dataset which contains 60000 records.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Google Colab link</Meta>
          <Link href="https://colab.research.google.com/drive/11Ava4BHANi3-KmizZ2q5PPDrkCKHu0uA?usp=sharing">
            https://colab.research.google.com/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Colab</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python: Pandas, NumPy, Sci-Kit, MathPlotLib</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default DsProject
