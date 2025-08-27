import {defineField} from 'sanity'

export const buttonFields = [
  defineField({
    name: "text",
    title: "Text",
    description: "You must provide text and a link for it to show up on the page",
    type: "string",
  }),
  defineField({
    name: "url",
    title: "URL",
    type: "string",
    validation: (Rule) => Rule.required(),
  }),
  defineField({
    title: 'Button Style',
    name: 'style',
    type: 'string',
    initialValue: 'primary',
    options: {
      list: [
        { title: 'Primary', value: 'primary' },
        { title: 'Secondary', value: 'secondary' },
        { title: 'Gradient', value: 'gradient' },
      ],
    },
  })
]

