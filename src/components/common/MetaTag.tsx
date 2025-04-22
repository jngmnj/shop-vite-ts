interface MetaTagProps {
  title?: string;
  keywords?: string;
  description?: string;
  robots?: string;
  siteName?: string;
  imgsrc?: string;
  imgAlt?: string;
  imgType?: string;
  url?: string;
  type?: string;
}

const MetaTag = ({
  title = 'cyber - shop for all your needs',
  keywords = 'cyber, shop, online, shopping, store',
  description = 'cyber에서 다양한 정보와 제품을 만나 보세요.',
  robots = 'index, follow',
  siteName = 'cyber',
  imgsrc = '/assets/images/common/img_og.png',
  imgAlt = 'cyber - shop for all your needs',
  imgType = 'image/png',
  url,
  type = 'website',
}: MetaTagProps) => {
  return (
    <>
      <title>{title}</title>
      {/* meta */}
      <meta name="title" content={title} />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {/* open graph */}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={imgsrc} />
      <meta property="og:image:secure_url" content={imgsrc} />
      <meta property="og:image:type" content={imgType} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imgAlt} />

      {/* twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgsrc} />
    </>
  );
};

export default MetaTag;
