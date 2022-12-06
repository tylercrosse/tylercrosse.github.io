---
title: 'Search Engine Fundamentals'
description: 'Simple'
date: '2022-11-20'
tags: ['algorithms', 'information-retrieval', 'search', 'seedling-🌱']
path: '/ideas/search-engine-fundamentals'
hero:
  alt: 'The Persistence of Memory by Salvador Dalí'
  src: 'the-persistence-of-memory-1931.jpg'
draft: false
audience: 'All'
---

![Low cost air lines by Jacek Yerka](low-cost-air-lines-jacek-yerka.jpg)

The use of search has become ubiquitous. It's been more than twenty years since the American Dialect Society chose the verb "Google" as the most useful word of 2002. Yet I've found in practice that the fundamental vocabulary of search lacks a shared understanding of how it is expected to function.

Users want to enter a vague bit of text into a search box and get back a list of relevant results. But what does "relevant" mean? How does the search engine decide what is relevant? How does the user decide what is relevant? How does a user even know what they are looking for or decide what text to put in the search box in the first place?

There is a rift between the universal usage of search engines and the academic topics of how they work.

This article aims at establishing a basic understanding of search engines by attempting to make the underlying concepts more approachable. It is not meant to be a comprehensive guide. Rather, it is a starting point for a conversation about search and I try to provide links to more in-depth resources.

## Defining terms

There are three basic components of a search engine, the query, the document, and the index.

**Query** - The text entered into the search box. This is the front door to how users interact with search engines. Queries represent an intent for information and the way a user decides to form the query is a topic of its own.

**Document** - The thing returned from the search engine. Each result is a document. This is also the basic piece of information that gets fed into the search engine. Documents can be anything from a web page to a PDF to a Word document. Documents are the building blocks of the index.

**Index** - The place where the magic happens. Indexes can be thought of abstractly like the index in the back of a book - it's the thing that holds references to all the documents and is the thing that gets searched. Indexes are the reason that
search engines can return results so quickly.

**Search Engine** - A tool for informatin retrieval that takes a query and returns a list of documents from an index. This broad definition encompasses systems that operate at very different scales and includes systems like Google that have billions of documents, to ones that span a single website or organization's data with often tens of thousands to millions of documents, to the local search on your single computer or phone.

## How Search Engines Work

The user journey we're all familiar with is:

1. User enters a query into a search box
2. Search engine returns a list of documents
3. User interacts with the results.

But what happens in between? How does the search engine know what documents to return? How does it know what documents to index in the first place?

### Building the Index

Search engines do a lot of work before users start searching. Getting results quickly when a query is entered takes a lot of heavy lifting upfront. The first step is to build the index.

Work is done on each document as it is added to figure out what it's about and how to store it in a way that will allow it to be quickly found again later. This is called indexing. It often involves cleaning up data, normalizing it, enriching it with metadata, and breaking it down into smaller pieces. There are many different strategies for how to do this and I'll touch on a few of the common approaches later.

How documents get into the index and the type of metadata that gets stored in the index varies from one search engine to the next. Some search engines, like Google, crawl the web and index every page they find. They have programs that are constantly covering as much of the web as they can get their digital hands on and sucking up everything they can find. Other search engines require that documents are manually added or added as new documents are created.

### Querying the Index

Assuming the heavy lifting was done up-front, the query is the easy part. The search engine takes the query and looks up the documents that match. The search engine then ranks the documents based on how well they match the query and returns the top results. Exactly how it uses the query to find documents and how it ranks the results depends on the type of index and how it was created.

Search engines often have functionality that helps try to intuit what a user meant to type, like typo tolerance, spelling correction, and autocomplete. These are all ways to help the user get the results they want.

Some search engines also provided advanced ways to structure queries to provide users with a way to get more precise results. Many allow the use of `and` and `or` as well as quoting text. Databases, while not strictly search engines, are very similar and include ways to index their data. The most common way of interacting with databases is through structured query language or SQL.
