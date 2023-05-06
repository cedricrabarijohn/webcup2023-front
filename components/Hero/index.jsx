import parse from 'html-react-parser';
import Button from '../Button';
import Div from '../Div';
import VerticalLinks from '../VerticalLinks';
import dynamic from 'next/dynamic';


const WaterWave = dynamic(
  () => {
    return import('react-water-wave');
  },
  { ssr: false },
);

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  return (
    <WaterWave
        className="cs-hero_bg cs-bg cs-ripple_version cs-center"
        imageUrl={bgImageUrl}
      >
        {()=>(
          <Div
          className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
          // style={{ backgroundImage: `url(${bgImageUrl})` 
        >
        <Div className="cs-shape_1" />
        <Div className="cs-shape_1" />
        <Div className="cs-shape_1" />
        <Div className="container">
          <Div className="cs-hero_text">
            <h1 className="cs-hero_title">{parse(title)}</h1>
            <Div className="cs-hero_info">
              <Div>
                <Button btnLink={btnLink} btnText={btnText} />
              </Div>
              <Div>
                <Div className="cs-hero_subtitle">{subtitle}</Div>
              </Div>
            </Div>
          </Div>
        </Div>
        <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
        <a href={scrollDownId} className="cs-down_btn">
          .
        </a>
      </Div>
        )}
    </WaterWave>
  );
}
