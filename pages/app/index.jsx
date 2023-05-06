import Head from "next/head";
import Layout from "../../components/Layout";
import Spacing from "../../components/Spacing";
import Div from "../../components/Div";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { FaBed } from "react-icons/fa";
import ReactLoading from "react-loading";
import Typewriter from "typewriter-effect/dist/core";

const GENDERS = {
  HOMME: "homme",
  FEMME: "femme",
};
const DREAM_TYPES = {
  GOOD_DREAM: "0 - 18 ans",
  BAD_DREAM: "18 ans +",
};

export default function App() {
  const typewriterRef = useRef(null);
  const dreamTypeRef = useRef(null);
  const [gender, setGender] = useState("");
  const [dreamType, setDreamType] = useState("");
  const [description, setDescription] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [loadingResult, setLoadingResult] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (result !== "") {
      const typewriter = new Typewriter(typewriterRef.current, {
        delay: 1, // Delay between each character
      });
      const dreamTypeWriter = new Typewriter(dreamTypeRef.current, {
        delay: 1,
      });

      typewriter
        .pauseFor(0) // Pause for 1 second before starting
        .typeString(result?.interpretation) // Text to be typed
        .start(); // Start the typewriter animation

      dreamTypeWriter
        .pauseFor(0) // Pause for 1 second before starting
        .typeString(result?.cauchemar ? "Cauchemar" : "Bon rêve") // Text to be typed
        .start(); // Start the typewriter animation

      return () => {
        // Cleanup if necessary
        typewriter.stop(); // Stop the typewriter animation
      };
    }
  }, [result]);
  const formatDatas = () => {
    return {
      gender: gender,
      age: dreamType,
      description: description,
      firstname: firstname,
      lastname: lastname,
    };
  };
  const handleSubmit = () => {
    setLoadingResult(true);
    const callApi = async () => {
      const apiUrl = "https://api.openai.com/v1/chat/completions";
      const data = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `
            Récupérez le contenu émotionnel de mon rêve,
            puis agissez en tant que médium pour prédire mon avenir:
            Ajoutez ces options json :
             - "interpretation" : commencera par "après avoir analysé votre rêve, voici ce qui se passera dans votre avenir.", faites une assez longue interpretation
             - "cauchemar" :  booleen qui indiquera si c'est un cauchemar ou pas
             - "emotions" : les emotions venant du reve
             Voici mon rêve : ${description}
              `,
          },
        ],
      };

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        setLoadingResult(false);
        // console.log(result);
        try {
          const message = result.choices[0].message;
          const content = JSON.parse(message.content);
          const interpretation = content.interpretation;
          const cauchemar = content.cauchemar;
          const emotions = content.emotions;
          console.log(content);
          setResult({
            interpretation: interpretation,
            cauchemar: cauchemar,
            emotions: emotions,
          });
        } catch (err) {}
      } catch (error) {
        console.error("Error:", error);
      }
    };

    callApi();
    console.log(formatDatas());
  };
  const FORMULAIRE = [
    {
      label: "Etes-vous un homme ou une femme",
      content: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          data-aos="fade-right"
        >
          <Div>
            <h5 style={{}}>
              <Icon
                style={{
                  marginRight: 10,
                }}
                icon="bi:gender-ambiguous"
              />
              Etes-vous un homme ou une femme ?
            </h5>
            <Spacing lg="25" md="25" />
            <Div className="gender-selector">
              <Div
                onClick={() => {
                  setGender(GENDERS.HOMME);
                }}
                className={`gender-selector-select ${
                  gender === GENDERS.HOMME ? "btn btn-success" : "btn btn-light"
                }`}
              >
                Homme
              </Div>
              <Div
                onClick={() => {
                  setGender(GENDERS.FEMME);
                }}
                className={`gender-selector-select ${
                  gender === GENDERS.FEMME ? "btn btn-success" : "btn btn-light"
                }`}
              >
                Femme
              </Div>
            </Div>
          </Div>
        </div>
      ),
    },
    {
      label: "Quel est le type de votre rêve ?",
      content: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          data-aos="fade-right"
        >
          <Div>
            <h5>
              <Icon
                style={{
                  marginRight: 10,
                }}
                icon={FaBed}
              />
              Quel est votre tranche d'âge ?
            </h5>
            <Spacing lg="25" md="25" />
            <Div className="gender-selector">
              <Div
                onClick={() => {
                  setDreamType(DREAM_TYPES.GOOD_DREAM);
                }}
                className={`gender-selector-select ${
                  dreamType === DREAM_TYPES.GOOD_DREAM
                    ? "btn btn-success"
                    : "btn btn-light"
                }`}
              >
                0 à 18 ans
              </Div>
              <Div
                onClick={() => {
                  setDreamType(DREAM_TYPES.BAD_DREAM);
                }}
                className={`gender-selector-select ${
                  dreamType === DREAM_TYPES.BAD_DREAM
                    ? "btn btn-success"
                    : "btn btn-light"
                }`}
              >
                18 +
              </Div>
            </Div>
          </Div>
        </div>
      ),
    },
    {
      label: "Quel est votre nom ?",
      content: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          data-aos="fade-right"
        >
          <Div>
            <h5>
              <Icon
                style={{
                  marginRight: 10,
                }}
                icon={FaBed}
              />
              Entrez votre nom
            </h5>
            <Spacing lg="25" md="25" />
            <Div className="">
              <input
                type="text"
                className="cs-form_field"
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    navigateForm();
                  }
                }}
              />
            </Div>
          </Div>
        </div>
      ),
    },
    {
      label: "Quel est votre prenom ?",
      content: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          data-aos="fade-right"
        >
          <Div>
            <h5>
              <Icon
                style={{
                  marginRight: 10,
                }}
                icon={FaBed}
              />
              Entrez votre prénom
            </h5>
            <Spacing lg="25" md="25" />
            <Div className="">
              <input
                type="text"
                className="cs-form_field"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    navigateForm();
                  }
                }}
              />
            </Div>
          </Div>
        </div>
      ),
    },
    {
      label: "Racontez votre reve",
      content: (
        <div style={{}} data-aos="fade-right">
          <Div>
            <h5>Racontez votre rêve ({description.length}/400)</h5>
            <textarea
              style={{}}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
              maxLength={400}
              cols="30"
              placeholder="Racontez votre rêve en details afin de pouvoir vous donner des résultats plus concrets ..."
              rows="7"
              className="cs-form_field"
            ></textarea>
            <Spacing lg="25" md="25" />
            <small>
              Exemple : Cauchemar effrayant où les ombres sinistres dansent
              autour de moi, me faisant frissonner d'angoisse. Des murmures
              lugubres et des cris stridents résonnent dans l'obscurité. Je me
              sens piégé dans un labyrinthe sans fin, poursuivi par mes pires
              peurs. Chaque pas est un combat contre l'horreur, mon cœur bat la
              chamade. Je me réveille en sueur, soulagé que ce ne soit qu'un
              cauchemar.
            </small>
          </Div>
        </div>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigateForm = () => {
    try {
      setCurrentIndex(currentIndex + 1);
    } catch {}
  };

  return (
    <>
      <Head>
        <title>IA Onirix - Application</title>
      </Head>
      <Layout>
        <Div
          className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
          style={{ backgroundImage: `url(/images/hero_bg.jpeg)` }}
        >
          <Div className="cs-shape_1" />
          <Div className="cs-shape_1" />
          <Div className="cs-shape_1" />
          <Div className="container">
            {!loadingResult && !result && (
              <>
                <Div className="cs-hero_text">
                  <h3 className="cs-hero_title" data-aos="fade-right">
                    {"Décrivez votre rêve"}
                  </h3>
                  {FORMULAIRE[currentIndex].content}
                  <Spacing lg="50" md="50" />
                  {currentIndex < FORMULAIRE.length - 1 ? (
                    <Div
                      className="col-sm-12"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        className="btn"
                        style={{
                          color: "grey",
                          display: currentIndex > 0 ? "block" : "none",
                        }}
                        onClick={() => {
                          navigateForm();
                        }}
                      >
                        <Icon icon="bi:arrow-left" />
                        <span>Retour</span>
                      </button>
                      <button
                        className="cs-btn cs-style1"
                        style={{
                          borderRadius: 0,
                        }}
                        onClick={() => {
                          setCurrentIndex(currentIndex + 1);
                        }}
                      >
                        <span>Continuer</span>
                        <Icon icon="bi:arrow-right" />
                      </button>
                    </Div>
                  ) : (
                    <>
                      <Div
                        className="col-sm-12"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <button
                          className="btn"
                          style={{
                            color: "grey",
                            display: currentIndex > 0 ? "block" : "none",
                          }}
                          onClick={() => {
                            setCurrentIndex(currentIndex - 1);
                          }}
                        >
                          <Icon icon="bi:arrow-left" />
                          <span>Retour</span>
                        </button>
                        <button
                          className="cs-btn cs-style1 btn btn-success"
                          style={{
                            borderRadius: 0,
                            backgroundColor: "green",
                          }}
                          onClick={() => {
                            handleSubmit();
                          }}
                        >
                          <span>Terminer</span>
                          <Icon icon="bi:check-circle-fill" />
                        </button>
                      </Div>
                    </>
                  )}
                </Div>
              </>
            )}
            {loadingResult && (
              <Div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "50vh",
                  flexDirection: "column",
                }}
              >
                <h5>Analyse de vos resultats ...</h5>
                <br />
                <ReactLoading
                  type={"spin"}
                  color={"white"}
                  height={100}
                  width={100}
                />
              </Div>
            )}

            {result && (
              <Div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "50vh",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <h5
                    style={{
                      marginRight: 15,
                    }}
                  >
                    Type de rêve :
                  </h5>
                  <div ref={dreamTypeRef} />
                </div>
                <br />
                <h5>Interpretation de votre rêve</h5>
                <div style={{
                  lineHeight: 1.7,
                }} ref={typewriterRef} />
              </Div>
            )}
          </Div>
        </Div>
      </Layout>
    </>
  );
}
