---
title: 'Overview of Information Retrieval'
description: '??????'
date: '2020-09-12'
tags: ['search', 'algorithms', 'nlp']
path: '/blog/information-retrieval-overview'
draft: true
---

## Information Retrieval

Information retrieval is the academic discipline that encompasses search. Here's a more formal definition:

> Information retrieval is the science of searching for information in a document, searching for documents themselves, and also searching for the metadata that describes data, and for databases of texts, images or sounds.

Search is hard. Search is valuable. Google built a business that earned 160 billion dollars on the backbone of. IR is a dense and complicated subject that I've barely scratched the surface of.

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

## Search UX

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

### Case Studies

- Google
- Amazon
- Slack
- Algolia Doc Search
