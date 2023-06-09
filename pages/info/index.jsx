import Head from 'next/head';
import React from 'react';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import Pagination from '../../components/Pagination';
import PostStyle2 from '../../components/Post/PostStyle2';
import Sidebar from '../../components/Sidebar.jsx/index.jsx';
import Spacing from '../../components/Spacing';
import { useRouter } from 'next/router';


export default function Blog({props}) {

  const router = useRouter();
  const { key1, key2, thumb, title, subtitle ,  date , category , categoryHref , href } = router.query;
  console.log({ key1, key2 });

  return (
    <>
      <Head>
        <title>Information</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Notre blog"
          bgSrc="/images/blog_hero_bg.jpeg"
          pageLinkText="Blog"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-8">
              
            <Div >
                  <PostStyle2
                    thumb={thumb}
                    title={title}
                    subtitle={subtitle}
                    date={date}
                    category={category}
                    categoryHref={categoryHref}
                    href={href}
                  />
                </Div>
              
              <Spacing lg="60" md="40" />
              <Pagination />
            </Div>
            
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        
      </Layout>
    </>
  );
}
