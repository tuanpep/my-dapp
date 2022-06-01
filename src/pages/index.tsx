import Seo from 'components/Seo';
import Welcome from 'components/Welcome';
import Layout from 'core/layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Welcome />
    </Layout>
  );
};

export default Home;
