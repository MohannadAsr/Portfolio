import WebsiteDetails from '@/components/WebsiteDetails';
import { myProjects } from '@/data/myProjectsData';
import { projectTypes } from '@/types/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

export default function Websites(props: { website: projectTypes }) {
  return (
    <>
      <WebsiteDetails website={props.website} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = myProjects.map((item) => {
    return { params: { website: item.bg_src } };
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const data = (params as ParsedUrlQuery).website;

  const theWebsite = myProjects.find((item) => {
    return item.bg_src === data ? item : null;
  });

  return {
    // Passed to the page component as props
    props: { website: theWebsite },
  };
};
