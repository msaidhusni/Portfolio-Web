// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'msaidhusni', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Portfolio',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['msaidhsuni/portfolio-msaidhusni',], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Es Pisang Ijo',
          description:
            'Es Pisang Ijo Badjo adalah proyek untuk mempromosikan produk kuliner khas Indonesia. Website ini bertujuan untuk memberikan informasi mengenai produk, lokasi penjualan, dan memberikan pengalaman pengguna yang menarik melalui desain modern dan responsif.',
          imageUrl:
            'https://es-pisang-ijo-badjo.netlify.app/img/es-pisang-ijo-place.png',
          link: 'https://es-pisang-ijo-badjo.netlify.app/',
        },
        {
          title: 'MARTABAK KU',
          description:
            'Martabakku adalah toko yang menyajikan berbagai varian martabak dan terang bulan dengan cita rasa khas dan bahan berkualitas. Dengan kombinasi topping yang melimpah dan tekstur yang sempurna, Martabakku menghadirkan kenikmatan yang tak terlupakan bagi pecinta martabak.Cocok untuk ngemil bersama keluarga atau teman! 😊',
          imageUrl:
            'https://martabakku.com/wp-content/uploads/2022/11/Martabakku_Happiness-in-evry-Bites.jpg',
          link: 'https://martabakku.com/',
        }
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'M Said Husni',
    description: '',
    imageURL: '',
  },
  social: {
    instagram: 'msaidhusni',
    linkedin: 'muhammad-said-husni-al-tafsir-867021219',
    medium: 'msaidhusni',
    website: 'https://msaidhusni.vercel.app',
    phone: '0812-2154-5604',
    email: 'msaidhusni1208@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1uYxOEnqwlXazRvZ46oiTp1tbVN7qaLlS/view?usp=drivesdk', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'PT Akur Pratama Yogya Subang',
      position: 'Crew Store',
      from: 'Januari 2020',
      to: 'Maret 2020 ( Internship )',
    },
    {
      company: 'PT JAGRAWA BIRU',
      position: 'Runner Food',
      from: 'Januari 2024',
      to: 'Desember 2024 ( Contract )',
    },
  ],
  certifications: [
    {
      name: 'Udemy',
      body: 'The Complete Full-Stack Web Development Bootcamp ',
      year: 'Oct 2024',
      link: 'https://www.udemy.com/certificate/UC-c0f5acdf-fcd7-4cbd-b3a3-ba9a1a0cb588/',
    },
    {
      name: 'My Skill',
      body: 'Microsoft Excel - Word - PowerPoint',
      year: 'Jan 2025',
      link: 'https://storage.googleapis.com/myskill-v2-certificates/learning-path-kpIIH7ZvWgW3muNNmC1V/80uQWtmKOSWRSLZdRCTdJh810hg1-etW9VeBA5WMVoeHiLfHc.pdf',
    },
  ],
  educations: [
    {
      institution: 'SMK Negeri 1 Subang',
      degree: 'Bisnis Daring Dan Pemasaran',
      from: '2018',
      to: '2021',
    },
    {
      institution: 'Universitas Terbuka',
      degree: 'Sistem Informasi Manajemen',
      from: '2023',
      to: 'Now',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'msaidhusni', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'synthwave',
      'retro',
      'forest',
      'aqua',
      'lofi',
      'night',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/msaidhusni"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
      target="_blank"
      rel="noreferrer"
    >msaidhusni</a>`,
};

export default CONFIG;
