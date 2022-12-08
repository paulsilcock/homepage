import Head from "next/head";
import { PropsWithChildren } from "react";
import { Appbar } from "./appbar";

type Props = PropsWithChildren<{
  title: string;
}>;

export const Layout: React.FC<Props> = ({ title, children }) => (
  <div className="flex flex-col md:mx-auto mx-4 max-w-2xl bg-opacity-60 bg-base-200 items-center">
    <Head>
      <title>{title}</title>
      <link rel="canonical" href="https://pauljs.io" />
      <meta name="description" content="Software engineer & hands-on technical leader" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Paul Silcock" />
      <meta property="og:description" content="Software engineer & hands-on technical leader" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content="http://pauljs.io/static/images/banner.png" />
    </Head>
    <Appbar />
    <main className="items-start w-full bg-base-200 px-3">
      {children}
    </main>
  </div>
);
