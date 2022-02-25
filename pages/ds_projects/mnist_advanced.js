import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, ProjectImage } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const DsProject = () => (
  <Layout title="Advanced handwritten digits recognizer">
    <Container>
      <Title>
        Advanced handwritten digits recognizer <Badge>2021</Badge>
      </Title>
      <P>
        Advanced data science project of recognizing handwritten digits using Complex Convolutional Neural Networks trained on MNIST dataset. Simple gui app which allows to user to write digits by mouse and implemented CNN model will recognize the handwritten digit.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/xdyeama/handwritten_digit_recognizer_advanced/tree/main/Documents/GitHub/handwritten_digit_recognizer">
            https://github.com//<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>VSCode: Python</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python: Pandas, NumPy, Sci-Kit, Tensorflow, Keras, Matplotlib, Tkinter</span>
        </ListItem>
      </List>
      <ProjectImage src="/images/ds_projects/mnist-advanced-1.png" alt="gui app" />
      <ProjectImage src="/images/ds_projects/mnist-advanced-2.png" alt="gui app" />
      <ProjectImage src="/images/ds_projects/mnist-advanced-3.png" alt="gui app" />
    </Container>
  </Layout>
)

export default DsProject
