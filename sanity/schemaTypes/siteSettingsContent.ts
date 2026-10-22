import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'إعدادات الفرع المحلي',
  type: 'document',
  fields: [
    defineField({
      name: 'gymName',
      title: 'اسم الفرع أو الجمعية',
      type: 'string',
      initialValue: 'الفرع المحلي للرابطة الوطنية للقرآن الكريم بسيدي بوضاوي — قليبية',
    }),
    defineField({name: 'shortName', title: 'الاسم المختصر', type: 'string'}),
    defineField({name: 'tagline', title: 'الشعار', type: 'string'}),
    defineField({name: 'description', title: 'نبذة عن الفرع', type: 'text', rows: 4}),
    defineField({name: 'shortDescription', title: 'نبذة قصيرة', type: 'text', rows: 2}),
    defineField({name: 'foundedYear', title: 'Année de création', type: 'number'}),
    defineField({name: 'logo', title: 'Logo principal', type: 'image', options: {hotspot: true}}),
    defineField({name: 'phone', title: 'رقم الهاتف', type: 'string'}),
    defineField({name: 'whatsapp', title: 'رقم واتساب', type: 'string'}),
    defineField({name: 'email', title: 'البريد الإلكتروني', type: 'string'}),
    defineField({name: 'address', title: 'العنوان', type: 'string'}),
    defineField({name: 'city', title: 'المدينة', type: 'string'}),
    defineField({name: 'country', title: 'البلد', type: 'string'}),
    defineField({name: 'mapsUrl', title: 'رابط الموقع على الخريطة', type: 'url'}),
    defineField({
      name: 'social',
      title: 'حسابات التواصل الاجتماعي',
      type: 'object',
      fields: [
        defineField({name: 'facebook', title: 'فيسبوك', type: 'url'}),
        defineField({name: 'instagram', title: 'إنستغرام', type: 'url'}),
        defineField({name: 'youtube', title: 'يوتيوب', type: 'url'}),
        defineField({name: 'tiktok', title: 'تيك توك', type: 'url'}),
        defineField({name: 'linkedin', title: 'LinkedIn', type: 'url'}),
      ],
    }),
  ],
  preview: {prepare: () => ({title: 'Informations du site'})},
})
