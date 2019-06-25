# gatsby-talk

Draft of talk about Gatsby JS.

## Problem Statement

- monolithic CMS is dying

  - just like on server side the trend is going from a single monolithic application to many micro-services, CMS are going through the same trend where contents are managed by many applications specializing in one thing.
  - Wordpress and Drupal also exposing their data via API

- build a website with good performance requires many work and investment

  - need a checklist, need a build the "performance culture"
  - talk about performance budget

## Gatsby JS

- using GraphQL, it aggregate all your data in **build time** and create **static assets**.
- because it has most data/assets required for your site in build time, it could do many optimization such as image resizing, critical asset inlining.
- the asset page will be hydrated as React application, thus you could still have dynamic behavior of a modern frontend application.
- because it's just static pages, the page is very scaleable!
