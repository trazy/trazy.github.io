import { PostLayout } from '../components/layouts/PostLayout';
import { FunctionComponent } from 'react';
import Link from 'next/link';

const NotFoundPage: FunctionComponent = () => {
  return (
    <PostLayout>
      <div className="w-full bg-white p-6 drop-shadow-xl">
        <main className="mt-12 px-12">
          <article className="max-w-full prose prose-gray">
            <header>
              <h1 className="text-3xl font-bold uppercase">page not found</h1>
            </header>
            <hr />
            <div className="p-16 text-2xl">
              <p>페이지를 찾지 못하였어유..</p>
              <p>
                <Link href="/" passHref>
                  일단 홈으로 돌아가는게 좋겠어유...
                </Link>
              </p>
            </div>
          </article>
        </main>
      </div>
    </PostLayout>
  );
};

export default NotFoundPage;
