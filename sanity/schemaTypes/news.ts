import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'news',
  title: 'الأنشطة والإعلانات ومعرض الوسائط',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'العنوان',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'الوصف',
      type: 'text',
      rows: 3,
    }),
    defineField({name: 'category', title: 'نوع الفعالية أو الموضوع', type: 'string'}),
    defineField({name: 'date', title: 'تاريخ الفعالية', type: 'date'}),
    defineField({name: 'location', title: 'مكان الفعالية', type: 'string'}),
    defineField({
      name: 'registrationInstructions',
      title: 'معلومات التسجيل',
      type: 'text',
      rows: 3,
    }),
    defineField({name: 'link', title: 'رابط خارجي أو منشور اجتماعي', type: 'url'}),
    defineField({
      name: 'mediaType',
      title: 'نوع المحتوى',
      type: 'string',
      options: {
        list: [
          {title: 'إعلان أو فعالية', value: 'announcement'},
          {title: 'صورة', value: 'photo'},
          {title: 'فيديو أو منشور اجتماعي', value: 'video'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'featured',     title: 'إبراز في الصفحة الرئيسية', type: 'boolean', initialValue: false}),
    defineField({name: 'order', title: 'ترتيب العرض', type: 'number', initialValue: 0}),
    defineField({
      name: 'image',
      title: 'الصورة أو الملصق',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'publishedAt',
      title: 'تاريخ النشر',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'active',
      title: 'نشر على الموقع',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Plus récentes',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', subtitle: 'category', media: 'image'},
  },
})
