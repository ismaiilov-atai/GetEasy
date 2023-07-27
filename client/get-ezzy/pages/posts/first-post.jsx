import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Post</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <h1>
        Here
        <Link href='/'> Take it back!</Link>
      </h1>
      <Image
        src="/images/img_dubai.jpeg"
        height={300}
        width={300}
        alt="Dubai"
      />

    </>
  );
}