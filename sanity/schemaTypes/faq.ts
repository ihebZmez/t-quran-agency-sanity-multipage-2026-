import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'الأسئلة الشائعة حول القرآن والتسجيل',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'السؤال',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'الإجابة',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'المجال',
      type: 'string',
      options: {
        list: [
          {title: 'البرامج', value: 'البرامج'},
          {title: 'التسجيل', value: 'التسجيل'},
          {title: 'الفرع', value: 'الفرع'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'active',
      title: 'نشر على الموقع',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'إبراز السؤال',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'ترتيب العرض',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [{title: 'Ordre', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'question', subtitle: 'category', media: 'category'}},
})
