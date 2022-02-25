import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const DsProject = () => (
  <Layout title="New Korean Restaurant opening location in Toronto">
    <Container>
      <Title>
        New Korean Restaurant opening location in Toronto  <Badge>2021</Badge>
      </Title>
      <P>
        Data Science pet project of Machine Learning classification model for finding out the best neighborhood for opening new Korean restaurant based on multiple features.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Google Colab link</Meta>
          <Link href="https://github.com/xdyeama/Coursera_Capstone/blob/main/final_project.ipynb">
            Github Link for the project<ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Jupyter Notebook</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python: Pandas, NumPy, Sci-Kit, MathPlotLib, FoursquareAPI, BeautifulSoup</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default DsProject
