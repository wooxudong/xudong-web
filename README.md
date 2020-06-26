[![Netlify Status](https://api.netlify.com/api/v1/badges/8ec719ad-c2f8-4529-b97d-e7561a9eaf33/deploy-status)](https://app.netlify.com/sites/wooxudong/deploys)

---

### JAMstack

- Fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers.
- Gatsby.js is used in this project.

### Artifact 
- Prismic.io for headless CMS
- Netlify for static site server
- Gatsby for the static site generator

### Setup 

Find the **gatsby-config.js** file and make sure to replace the prismic token and repository name:

```
{
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        previews: false,
        ...
      }
    },
}
```

### Development
```bash
gatsby develop
```
It should start the the project locally and you could check the site at [localhost](http://localhost:8000/) and graphql for prismic data at [here](http://localhost:8000/___graphql).


```bash
gatsby clean
```
If you suspect something is not working, try run this command and it will delete the **.cashe/** folder and **public/** folder. Then hit `gatsby develop` should fix most of the issues.

```bash
gatsby build
```
This will build the project locally. You could try this before deploying to netlify. 


