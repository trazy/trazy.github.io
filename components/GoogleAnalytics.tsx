import { FunctionComponent } from 'react';

export const GA_TRACKING_ID = 'G-S3CDH8XL82';

export const dispatchPageViewEvent = (page_path: string) => {
  (window as unknown as Window & { gtag: (eventName: string, id: string, params: Record<string, unknown>) => unknown }).gtag(
    'config',
    GA_TRACKING_ID,
    {
      page_path,
    }
  );
};

export const GoogleAnalytics: FunctionComponent = () => (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
    <script
      dangerouslySetInnerHTML={{
        __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${GA_TRACKING_ID}');
`,
      }}
    ></script>
  </>
);
