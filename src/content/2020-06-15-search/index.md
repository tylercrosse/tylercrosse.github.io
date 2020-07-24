---
title: 'Static Search'
description: 'Adding search to a static site with accessibility in mind using Fuse.js and Downshift'
date: '2020-06-14'
tags: ['typescript', 'search', 'algorithms', 'tailwindcss', 'react']
path: '/blog/adding-static-search'
draft: true
---

## Case Studies

- Google
- Amazon
- Slack
- Algolia Doc Search

## Alternative solutions

https://baymard.com/blog/autocomplete-design

- Algolia
- [swiftype](https://swiftype.com/) elasic site search
- [searhcspring](https://searchspring.com/)
- [Apache Lucene](https://lucene.apache.org/) derived searches - [Solr](https://lucene.apache.org/solr/) & [Elasticsearch](https://www.elastic.co/elasticsearch/)
- [Lunr](https://lunrjs.com/)
- [js-search](https://github.com/bvaughn/js-search) Brian Vaughn alternative to Lunr
- [Stork search](https://github.com/jameslittle230/stork) WebAssembly search written in rust
- [tinysearch](https://github.com/mre/tinysearch)
- [minisearch](https://github.com/lucaong/minisearch) Tiny and powerful JavaScript full-text search engine for browser and Node
- [fuzzy](https://github.com/mattyork/fuzzy) + [fuzzaldrin](https://github.com/atom/fuzzaldrin) + [fuzzaldrin-plus](https://github.com/jeancroy/fuzz-aldrin-plus)

## Background on Search

### Data structures & algorithms

- tokenization
- stemming & lemmatization
- stop words
- indexing - TF-IDF
- bitmap algorithm + [compressed bitmaps](https://roaringbitmap.org/)
- bloom filters - space efficient probabilistic data structures used to test whether an element is a member of a set [calculator](https://hur.st/bloomfilter/?n=1000000&p=0.01)
  - [Writing a full-text search engine using Bloom filters](https://www.stavros.io/posts/bloom-filter-search-engine/)
- hash tables

- Fuzzy search with Fuse.js

> "Generally speaking, fuzzy searching (more formally known as approximate string matching) is the technique of finding strings that are approximately equal to a given pattern (rather than exactly)." - [Fuse.js docs](https://fusejs.io/)

- Fuse.js uses a [bitmap algorithm](https://en.wikipedia.org/wiki/Bitap_algorithm)

- Scoring - relevance score in Fuse.js is determined by 3 factors:
- Fuzziness score - location, distance, threshold
- Key weight
- Field-length Norm

## Implementing Fuse.js

## Creating the UI

- [Designing Multiple Layers into Search](https://www.thoughtspot.com/thoughtspot-blog/designing-multiple-layers-search)

- [react-modal](http://reactcommunity.org/react-modal/) https://github.com/reactjs/react-modal

## Accessibility

- [Downshift](https://www.downshift-js.com/) vs [React Select](https://react-select.com/home)
- Modal Dialog https://www.w3.org/TR/wai-aria-practices/#dialog_modal
  example https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html
- Combobox https://www.w3.org/TR/wai-aria-practices/#combobox
  example https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html

## Fuse.js + Downshift
