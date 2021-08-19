export default {
    cms_manual_init: true,
    backend: {
      name: 'git-gateway',
      branch: 'main',
    },
    media_folder: '/public/images',
    public_folder: 'images',
    collections: [
      {
        name: 'Projetos',
        label: 'Projetos',
        folder: "/public/posts/projetos",
        create: true,
        format: "json",
        extension: "json",
        slug: "{{year}}-{{month}}-{{day}}-{{titulo}}",
        fields: [
            {
                label: "Titulo",
                name: "titulo",
                widget: "string",
            },
            {
                label: "Texto",
                name: "texto",
                widget: "markdown",
            }
        ]
      },
      {
        name: 'Empreendimentos',
        label: 'empreendimentos',
        folder: "/public/posts/empreendimentos",
        create: true,
        format: "json",
        extension: "json",
        slug: "{{year}}-{{month}}-{{day}}-{{titulo}}",
        fields: [
            {
                label: "Titulo",
                name: "titulo",
                widget: "string",
            },
            {
                label: "Texto",
                name: "texto",
                widget: "markdown",
            }
        ] 
      }
    ],
  };