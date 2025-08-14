'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
import {presentationTool} from "sanity/presentation";
import {muxInput} from 'sanity-plugin-mux-input';
import {media} from 'sanity-plugin-media'


export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    presentationTool({
      // docs to configure previews: https://www.sanity.io/docs/visual-editing/visual-editing-with-next-js-app-router
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_ORIGIN,
        preview: "/",
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
    media({
      creditLine: {
        enabled: true,
        excludeSources: ['unsplash'],
      },
      maximumUploadSize: 10000000
    }),
    muxInput(),
    ...(process.env.NODE_ENV === 'development' ? [visionTool({defaultApiVersion: apiVersion})] : []),
  ],
  scheduledPublishing: {
    enabled: true, 
    inputDateTimeFormat: 'MM/dd/yyyy h:mm a',
  },
})
