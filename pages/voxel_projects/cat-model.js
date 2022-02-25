import { Container } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import VoxelModel from '../../components/voxel-model-all'


const VoxelModelPage = () => (
  <Layout title="cat-developer">
    <Container maxW="container.md" mt={14}>
      <VoxelModel model='cat-baked'/>
    </Container>
  </Layout>
)

export default VoxelModelPage
