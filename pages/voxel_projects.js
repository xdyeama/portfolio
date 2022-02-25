import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { VoxelGridItem } from '../components/grid-item'

import thumbCat from '../public/images/voxel_projects/cat.png'
import thumbTree from '../public/images/voxel_projects/tree.png'
import thumbTemple from '../public/images/voxel_projects/temple.png'
import thumbDog from '../public/images/voxel_projects/dog.png'
import thumbViking from '../public/images/voxel_projects/viking.png'


const VoxelModels = () => (
  <Layout title="Voxel Models">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Voxel Models
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <VoxelGridItem id="cat-model" title="Cat-developer" thumbnail={thumbCat}>
          </VoxelGridItem>
        </Section>
        <Section>
          <VoxelGridItem id="sakura-model" title="Sakura Tree" thumbnail={thumbTree}>
          </VoxelGridItem>
        </Section>
        <Section>
          <VoxelGridItem id="temple-model" title="Japanese Mini Temple" thumbnail={thumbTemple}>
          </VoxelGridItem>
        </Section>
        <Section>
          <VoxelGridItem id="dog-model" title="Dog-developer" thumbnail={thumbDog}>
          </VoxelGridItem>
        </Section>
        <Section>
          <VoxelGridItem id="viking-model" title="Little viking" thumbnail={thumbViking}>
          </VoxelGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default VoxelModels