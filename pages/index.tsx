import Image from 'next/image';
import { About } from '../components/index/about';
import { Upcoming } from '../components/index/upcoming';
import { Layout } from '../components/layout';
import me from '../public/static/images/me.png';

export default function Home() {
  return (
    <Layout title="Paul Silcock - Software Engineer">
      <div className="flex flex-col-reverse sm:flex-row items-start mb-6">
        <div className="flex flex-col flex-1">
          <h1>Paul Silcock</h1>
          <h2>
            I help people build better products, faster
          </h2>
          <p>
            I have spent over a decade in the software development industry,
            bridging the gap between engineers and users to build better products.
            Along the way I have picked up a thing or two on the technical
            practices that make this easier, and ultimately build teams and
            products that are optimised for change.
          </p>
          <p>
            I decided to build this site to share my thoughts and hopefully help
            others do the same.
          </p>
        </div>
        <Image
          src={me}
          alt="Profile picture"
          className="rounded-full filter grayscale w-24 h-24 relative mb-8 sm:mb-0 mr-auto"
        />
      </div>
      <section>
        <Upcoming />
      </section>
      <section>
        <About />
      </section>
    </Layout>
  );
}
