import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Homepage title',
      type: 'string',
      description: "What's the title of the homepage hero?",
    }),
    defineField({
      name: 'hero',
      title: 'Homepage hero image',
      type: 'image',
      description: "Main image on the homepage hero.",
    }),
    defineField({
      name: 'hero_overlay',
      title: 'Homepage overlay image',
      type: 'image',
      description: 'Overlay image on top of the hero.'
    }),
    defineField({
      name: 'feature_image',
      title: 'Mid-page image',
      type: 'image',
      description: 'Image in the middle of the page.'
    }),
    // defineField({
    //   name: 'cta',
    //   description: "What's URL for the homepage CTA?",
    //   title: 'CTA',
    //   type: 'slug',
    //   options: {
    //     maxLength: 200,
    //   },
    //   validation: (Rule) => [Rule.required().error('Field cannot be empty')],
    // }),
  ],
})