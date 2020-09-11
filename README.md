# Craft CMS 3 + (Laravel Mix, TailwindCSS+purge, PostCss, AlpineJS, ESLint, AirBnb, Prettier)

A lightly opinionated Craft CMS setup, packed with commonly used FREE packages.

Use this [Craft CMS 3.x](https://github.com/craftcms/cms) boilerplate to kickstart Craft + Twig projects.

Made with the idea of reducing overkill builds when using VueJS or ReactJS for simple brochure websites, while still keeping the simplicity and advantages of a modern Javascript lightweight framework by using AlpineJs instead.

See [Tailwind CSS](https://tailwindcss.com) and [AlpineJS](https://github.com/alpinejs/alpine) for more details.

## What is included?

- [Craft CMS 3.x](https://github.com/craftcms/cms)
- Templates
   - [Blocks](https://github.com/k0d3rR/craft-startup-kit#blocks)
   - [Components](https://github.com/k0d3rR/craft-startup-kit#components)
   - Pages (With dynamic page types)
   - Email
   - Exception pages (404, 410, 503)
- Configuration
   - Custom `.env` file
   - Custom `config/general.php`
   - Craft Project Configuration using `config/project.yaml`
- Craft Plugins
   - Essentials
     - [Super Table](https://github.com/verbb/super-table)
     - [Redactor](https://github.com/craftcms/redactor)
     - [Redactor Custom Styles](https://github.com/carlcs/craft-redactorcustomstyles)
     - [Olive Menus](https://github.com/OliveStudio/olivemenus)
     - [Link Field](https://github.com/sebastian-lenz/craft-linkfield)
   - Images
     - [Imager (forked version)](https://github.com/k0d3rR/Imager-Craft)
     - [Image Resizer](https://github.com/verbb/image-resizer)
   - Optimization
     - [Minify](https://github.com/nystudio107/craft-minify)
   - SEO
     - [SEO](https://github.com/ethercreative/seo)
   - Twig Utilities
     - [Retcon 2](https://github.com/mmikkel/Retcon-Craft)
   - Email & Forms
     - [SendGrid](https://github.com/putyourlightson/craft-sendgrid)
     - [Wheel Form](https://github.com/xpertbot/craft-wheelform)
   - Customization
     - [Control Panel Nav](https://github.com/verbb/cp-nav)
 - Shell Scripts `scripts/*.sh`
 
## Tailwind Configuration
Used a few plugins to speed up the development of common tasks such as styling typography, forms, aspect ratios.

- [@tailwindcss/ui](https://www.npmjs.com/package/@tailwindcss/ui)
- [tailwindcss-aspect-ratio](https://github.com/webdna/tailwindcss-aspect-ratio)
- [benface/tailwindcss-typography](https://github.com/benface/tailwindcss-typography)
- [verlok/vanilla-lazyload](https://github.com/verlok/vanilla-lazyload)
   
## How to install

