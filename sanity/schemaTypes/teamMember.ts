import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'المعلمون والمشرفون',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'الاسم',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'position', title: 'الصفة أو الدور', type: 'string'}),
    defineField({name: 'biography', title: 'نبذة تعريفية', type: 'text', rows: 4}),
    defineField({name: 'photo', title: 'الصورة', type: 'image', options: {hotspot: true}}),
    defineField({name: 'linkedin', title: 'LinkedIn', type: 'url'}),
    defineField({name: 'email', title: 'Email', type: 'email'}),
    defineField({name: 'expertise', title: 'Expertises', type: 'array', of: [{type: 'string'}]}),
    defineField({
      name: 'assignedPrograms',
      title: 'البرامج والحلقات المشرف عليها',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'service'}]}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({name: 'order', title: 'ترتيب العرض', type: 'number', initialValue: 0}),
    defineField({name: 'active', title: 'نشر الملف على الموقع', type: 'boolean', initialValue: true}),
  ],
  orderings: [{title: 'Ordre', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]}],
  preview: {select: {title: 'name', subtitle: 'position', media: 'photo'}},
})
