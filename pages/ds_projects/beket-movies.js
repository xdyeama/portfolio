import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, ProjectImage } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const BeketMovies = () => (
  <Layout title='"Beket-Movies" website'>
    <Container>
      <Title>
        "Beket-Movies" <Badge>2021</Badge>
      </Title>
      <P>
        "Beket-Movies" - frontend web pet project in the form interactive movie database with title search option, that uses external movie database API and Modern Frontend framework such as ReactJS.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Beket-Movies Link</Meta>
          <Link href="https://beket-movies.netlify.app/">
            https://beket-movies.netlify.app/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Netlify</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JavaScript, React</span>
        </ListItem>
      </List>
      
      <ProjectImage src="/images/ds_projects/beket-movies-1.png" alt="Beket-Movies" />
      <ProjectImage src="/images/ds_projects/beket-movies-2.png" alt="Beket-Movies" />
      <ProjectImage src="/images/ds_projects/beket-movies-3.png" alt="Beket-Movies" />
      <ProjectImage src="/images/ds_projects/beket-movies-4.png" alt="Beket-Movies" />
    </Container>
  </Layout>
)

export default BeketMovies
