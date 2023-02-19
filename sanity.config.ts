import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme'
import StudioNavbar from './components/StudioNavbar'
import Logo from './components/Logo'

const projectId = process.env.NEXT_PUBLIC_SANTIY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANTIY_DATASET!

export default defineConfig({
  basePath: '/studio',
  name: 'Live_Fickle_Content_Studio',
  title: 'Live Fickle Content Studio',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme
})
