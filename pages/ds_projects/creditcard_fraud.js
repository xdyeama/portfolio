import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const DsProject = () => (
  <Layout title="Credit Card fraud detection">
    <Container>
      <Title>
        Credit Card fraud detection <Badge>2021</Badge>
      </Title>
      <P>
        Data Science pet project of detecting credit card fraud transactions using Machine Learning model RandomForest Classifier
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Google Colab link</Meta>
          <Link href="https://colab.research.google.com/drive/1qQR46PvurJpgfgzy7AIekyaPMiFWi6Su?usp=sharing">
            https://colab.research.google.com/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Colab</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python: NumPy, Sci-Kit, MathPlotLib, RandomForest Classifier</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default DsProject