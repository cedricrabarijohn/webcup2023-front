import React, { useEffect, useState } from "react";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import Div from "../Div";
import DropDown from "./DropDown";
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);


  const router = useRouter();

  const dataArray = [
    {
      key1: 'value1',
      key2: 'value2',
      thumb: '/images/OIG.jfif',
      title: 'ejfbejf',
      subtitle: 'wjbfjefb',
      date: 'jwbjfdwbfw',
      category: 'dkwbfkwbf',
      categoryHref: 'wjbfwjf',
      href: 'bgjdbjg',
    },
    {
      key1: 'value11',
      key2: 'value22',
      thumb: '/images/OIG.jfif',
      title: 'ejfbejf2',
      subtitle: 'wjbfjefb',
      date: 'jwbjfdwbfw',
      category: 'dkwbfkwbf',
      categoryHref: 'wjbfwjf',
      href: 'bgjdbjg',
    },
    {
      key1: 'value13',
      key2: 'value23',
      thumb: '/images/OIG.jfif',
      title: 'ejfbejf3',
      subtitle: 'wjbfjefb3',
      date: 'jwbjfdwbfw',
      category: 'dkwbfkwbf',
      categoryHref: 'wjbfwjf',
      href: 'bgjdbjg',
    },
    // Add more objects here if needed
  ];


  const handleClick = (e, dataToSend) => {
    e.preventDefault();
    setMobileToggle(false);
    router.push({
      pathname: '/info',
      query: dataToSend,
    });
  };
  

  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </Head>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ""
        } cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <h5>At-Hack</h5>
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? "block" : "none"}` }}
                  >
                     <li className="menu-item-has-children">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Disctionaire de reve 
                      </Link>
                      <DropDown>
                        <ul>
                        {dataArray.map((data, index) => (
                          <li>
                              <a
                                key={index}
                                href="/info"
                                className="commencer"
                                style={{ borderRadius: 20 }}
                                onClick={(e) => handleClick(e, data)}
                              >
                                {data.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </DropDown>
                    </li> 
                     <li>
                      <a href="/" onClick={() => setMobileToggle(false)}>
                        Accueil
                      </a>
                    </li>
                    {/* <li>
                      <a href="about" onClick={() => setMobileToggle(false)}>
                        A propos
                      </a>
                    </li> */}
                    {/* <li className="menu-item-has-children">
                      <Link
                        href="/service"
                        onClick={() => setMobileToggle(false)}
                      >
                        Services
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/service"
                              onClick={() => setMobileToggle(false)}
                            >
                              Services
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/service/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Service Details
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <Link
                        href="/portfolio"
                        onClick={() => setMobileToggle(false)}
                      >
                        Portfolio
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/portfolio"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/portfolio/portfolio-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portfolio Details
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/blog" onClick={() => setMobileToggle(false)}>
                        Blog
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/blog"
                              onClick={() => setMobileToggle(false)}
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/blog/blog-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Pages
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="/contact"
                              onClick={() => setMobileToggle(false)}
                            >
                              Contact
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/team"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/team/team-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Team Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/case-study-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Case Study Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/faq"
                              onClick={() => setMobileToggle(false)}
                            >
                              FAQ
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li> */}
                    <li>
                       
                      <a href="app" className="commencer" style={{
                        borderRadius: 20
                      }} onClick={() => setMobileToggle(false)}>
                        Commencez maintenant
                      </a>
                    </li>
                    <li>
                      <a href="blog" className="commencer" style={{ borderRadius: 20 }} onClick={() => setMobileToggle(false)}> Blog </a>
                    </li>
                   
                    <li>
                      <a href="/ai" onClick={() => setMobileToggle(false)}>
                        Onirix
                      </a>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs-toggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? "cs-side_header active" : "cs-side_header"
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
            {/* <img src="/images/footer_logo.svg" alt="Logo" /> */}
            <h5>At-Hack XPerience</h5>
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Avez-vous une question à poser ? Contactez-nous.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contactez-nous" withIcon />
          </Div>
          {/* <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
              placeholder="example@gmail.com"
            />
          </Div> */}
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
