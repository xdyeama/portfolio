import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const DsProject = () => (
  <Layout title="Handwritten Character Recognition">
    <Container>
      <Title>
        Handwritten Character Recognizer <Badge>2021</Badge>
      </Title>
      <P>
        Advanced data science project of english alphabet handwritten characters A-Z recognition using Convolutional Neural Networks trained on huge MNISt Handwritten english characters dataset with 372450 images of handwritten english alphabetical letters.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Google Colab link</Meta>
          <Link href="https://colab.research.google.com/drive/1VS_QW7s9WM8PBTKs3wxxRSwyF-Cyfej3?usp=sharing">
            https://colab.research.google.com/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Colab</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python: Pandas, NumPy, Matplotlib, Tensorflow, Keras, OpenCV</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default DsProject
