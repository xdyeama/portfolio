import { Container } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import VoxelModel from '../../components/voxel-model-all'


const VoxelModelPage = () => (
  <Layout title="Sakura Tree">
    <Container maxW="container.md" mt={14}>
      <VoxelModel model='tree'/>
    </Container>
  </Layout>
)

export default VoxelModelPage
