import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const DsProject = () => (
  <Layout title="California housing value predictor">
    <Container>
      <Title>
        California Housing value estimation <Badge>2021</Badge>
      </Title>
      <P>
        Data Science pet project of predicting California housing prices based on the numerous features such as: area, number of bedrooms and etc. The various ML regressors were observed to identify the best performing model.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Google Colab link</Meta>
          <Link href="https://colab.research.google.com/drive/1ugmDfD-2tDyilelw6eRwWwOplDBeuMpn?usp=sharing">
            https://colab.research.google.com/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Colab</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python: NumPy, Sci-Kit, MathPlotLib, ...</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default DsProject
