export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string' 
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string' 
          },
          {
            name: 'imgageurl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            }
          },
          {
            name: 'feedback',
            title: 'FeedBack',
            type: 'string' 
          },
    ],
}