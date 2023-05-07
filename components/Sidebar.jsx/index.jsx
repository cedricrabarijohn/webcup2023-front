import React from 'react'
import Div from '../Div'
import AuthorWidget from '../Widget/AuthorWidget'
import RecentPost from '../Widget/RecentPost'
import SearchWidget from '../Widget/SearchWidget'
import SideMenuWidget from '../Widget/SideMenuWidget'
import TagWidget from '../Widget/TagWidget'

export default function Sidebar() {
  const tagData = [
    {
    title: 'Psychologie',
    url: '/',
    },
    {
    title: 'Rêves',
    url: '/',
    },
    {
    title: 'Interprétation',
    url: '/',
    },
    {
    title: 'Cauchemars',
    url: '/',
    },
    {
    title: 'Rêves lucides',
    url: '/',
    },
    {
    title: 'Rêves récurrents',
    url: '/',
    },
    {
    title: 'Symboles',
    url: '/',
    },
    ];
    
    const archiveData = [
    {
    title: 'Archives',
    url: '/',
    },
    {
    title: '07 Mar 2022',
    url: '/',
    },
    {
    title: '05 Mar 2022',
    url: '/',
    },
    {
    title: '04 Mar 2022',
    url: '/',
    },
    {
    title: '03 Mar 2022',
    url: '/',
    },
    ];
    
    const categoryData = [
    {
    title: 'Psychologie du sommeil',
    url: '/',
    },
    {
    title: 'Types de rêves',
    url: '/',
    },
    {
    title: 'Techniques de rêve lucide',
    url: '/',
    },
    {
    title: 'Gestion des cauchemars',
    url: '/',
    },
    {
    title: 'Résolution de problèmes',
    url: '/',
    },
    ];
    
    const recentPostData = [
    {
    title: 'Les rêves et leur signification : une introduction',
    thumb: '/images/recent_post_1.jpeg',
    href: '/blog/blog-details',
    date: '07 Mar 2022',
    },
    {
    title: "Rêves récurrents : pourquoi nous reviennent-ils et comment les comprendre ?",
    thumb: '/images/recent_post_2.jpeg',
    href: '/blog/blog-details',
    date: '05 Mar 2022',
    },
    {
    title: 'Rêves lucides : comment les provoquer et en tirer profit',
    thumb: '/images/recent_post_3.jpeg',
    href: '/blog/blog-details',
    date: '04 Mar 2022',
    },
    {
    title: 'Les symboles communs dans les rêves et leur signification',
    thumb: '/images/recent_post_4.jpeg',
    href: '/blog/blog-details',
    date: '03 Mar 2022',
    },
    ];
  return (
    <>
      <Div className="cs-sidebar_item">
        <SearchWidget title='Search'/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Categories' data={categoryData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <RecentPost title='Archives' data={recentPostData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <SideMenuWidget title='Archives' data={archiveData}/>
      </Div>
      <Div className="cs-sidebar_item">
        <TagWidget title='Tags' data={tagData}/>
      </Div>
    </>
  )
}
