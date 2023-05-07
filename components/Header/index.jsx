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
      title: 'INTERPRÉTATIONS DES RÊVES DU CORPS HUMAIN',
      subtitle: "Les rêve ou les dents sont présentent n’est pas toujours, comme on peut le lire dans les dictionnaires, symbole de mort.L’interprétation des rêves est toujours lié à la personne qui fait le rêve, les interprétations générale suffisent à interpréter un rêve dans la plupart des cas, mais bien souvent, une étude personnelle est nécessaire afin d’avoir la meilleur réponse. Dans cet article nous allons tenter une approche plus précise sur les rêves contenant des dents, nous décomposerons l’analyse pour les cas suivants :Rêver de perdre ses dents.Rêver de dents de substitutions.Rêver de dents malade. Se brosser les dents.Les interprétations suivants les différentes positions des dents.Attention ici on est dans le cas ou c’est les dents du rêveur qui sont touché par les différents cas cité ci dessus. Rêver de perdre ses dents peut indiquer la mort, une maladie grave, un gain d'argent ou un changement radical dans votre vie. Les dents de substitution symbolisent la richesse et l'abondance si elles sont de qualité, sinon elles représentent la mort et la maladie grave. Les dents malades ou sales indiquent des problèmes dans vos projets actuels, mais si vous les nettoyez dans votre rêve, les problèmes seront surmontables. La position des dents est importante pour déterminer la gravité de la situation: les dents du haut symbolisent la perte d'une personne importante, tandis que les dents du bas représentent quelque chose de moins grave ou bénin. Les dents du haut sont également symbole de grandeur et de prospérité.La vue est un sens essentiel qui influence nos rêves. Plusieurs aspects sont analysés, tels que l'état de la vision, l'état des yeux, la couleur et la quantité vue. Les rêves de cécité reflètent un manque de discernement, tandis que les visions floues indiquent un besoin d'aide pour un choix difficile. Un monde en noir et blanc suggère un besoin de repos, une vision double met en garde contre les faux-semblants, et loucher signifie un besoin de changement. Des yeux sans propriétaire indiquent une impression d'être épié, des yeux écrasés suggèrent la résolution de problèmes, en manger symbolise la puissance, et un œil de verre implique méfiance et prudence face à une situation périlleuse.",
      date: '',
      category: 'Interpretation',
      categoryHref: 'wjbfwjf',
      href: 'bgjdbjg',
    },
    {
      key1: 'value11',
      key2: 'value22',
      thumb: '/images/OIG.jfif',
      title: 'INTERPRÉTATIONS DES RÊVE EN RAPPORT AVEC LES ANIMAUX',
      subtitle: "Un poisson ou groupe de poissons dans un rêve représente diverses émotions et situations. Un poisson mort signale des problèmes affectifs, tandis qu'un poisson malade suggère trahison ou tromperie. Un poisson qui saute hors de l'eau symbolise force et vigueur. Des poissons dans un aquarium indiquent que vous êtes observé. Manger un poisson représente la richesse, un poisson volant met en garde contre l'inattention, et pêcher un poisson symbolise puissance et suspicion de trahison. La couleur du poisson est également importante: un poisson rouge signifie stagnation, un bleu annonce ennuis sentimentaux, un vert représente puissance et évolution amoureuse, un noir évoque sagesse et réflexion, et un blanc incarne pureté et mariage.",
      date: 'jwbjfdwbfw',
      category: 'dkwbfkwbf',
      categoryHref: 'wjbfwjf',
      href: 'bgjdbjg',
    },
    {
      key1: 'value13',
      key2: 'value23',
      thumb: '/images/OIG.jfif',
      title: 'L’ARGENT DANS LES RÊVES',
      subtitle: "L'argent dans les rêves peut symboliser réussite ou échec et reflète souvent votre pouvoir de réalisation. Selon la situation, l'argent peut révéler votre ressenti inconscient face à votre situation actuelle. Trouver de l'argent indique une amélioration financière, mais avec prudence face à l'argent facile. Gagner de l'argent signifie chance, mais il faut rester réaliste. Perdre de l'argent suggère des remords ou des placements risqués. Donner de l'argent montre humilité et générosité. Voler de l'argent révèle une volonté d'aider les autres sans mettre en péril votre situation financière. Se faire voler de l'argent est un avertissement pour rester vigilant face à votre entourage. En résumé, l'argent dans les rêves est lié à la réussite de vos projets et à votre capacité à atteindre vos objectifs.",
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
