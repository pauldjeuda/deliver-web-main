"use client"

import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="demo-page">
        <div className="demo-page-navigation">
          <nav>
            <ul>
              <li>
                <a href="#installation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-tool">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                  Installation</a>
              </li>
              <li>
                <a href="#structure">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layers">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                  Structure</a>
              </li>
              <li>
                <a href="#input-types">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-align-justify">
                    <line x1="21" y1="10" x2="3" y2="10" />
                    <line x1="21" y1="6" x2="3" y2="6" />
                    <line x1="21" y1="14" x2="3" y2="14" />
                    <line x1="21" y1="18" x2="3" y2="18" />
                  </svg>
                  Input types</a>
              </li>
              <li>
                <a href="#checkbox-and-radio">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-square">
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  Checkbox and Radio</a>
              </li>
              <li>
                <a href="#fieldset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-columns"
                    style={{ transform: 'rotate(90deg)' }}
                  >
                    <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18" />
                  </svg>
                  Fieldset</a>
              </li>

              <li>
                <a href="#icons">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-feather">
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                    <line x1="16" y1="8" x2="2" y2="22" />
                    <line x1="17.5" y1="15" x2="9" y2="15" />
                  </svg>
                  Icons</a>
              </li>
              <li>
                <a href="#validation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-alert-triangle">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  Validation</a>
              </li>
              <li>
                <a href="#date">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Date input</a>
              </li>
              <li>
                <a href="#other">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-server">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                  Other input types</a>
              </li>
              <li>
                <a href="#reset">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-power">
                    <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                    <line x1="12" y1="2" x2="12" y2="12" />
                  </svg>
                  Reset only</a>
              </li>
              <li>
                <a href="#customization">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sliders">
                    <line x1="4" y1="21" x2="4" y2="14" />
                    <line x1="4" y1="10" x2="4" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="3" />
                    <line x1="20" y1="21" x2="20" y2="16" />
                    <line x1="20" y1="12" x2="20" y2="3" />
                    <line x1="1" y1="14" x2="7" y2="14" />
                    <line x1="9" y1="8" x2="15" y2="8" />
                    <line x1="17" y1="16" x2="23" y2="16" />
                  </svg>
                  Customization</a>
              </li>
              <li>
                <a href="#contribute">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  Contribute</a>
              </li>
            </ul>
          </nav>
        </div>
        <main className="demo-page-content">

          <section>
            <div className="href-target" id="icons"></div>
            <h1>
              Renseigner les informations du colis !
            </h1>

            <div className="nice-form-group">
              <label>Poids</label>
              <input type="text" placeholder="Poids du colis" value="" />
            </div>

            <div className="nice-form-group">
              <label>Dimensions</label>
              <input type="text" placeholder="Largeur du colis" value="" />
            </div>

            <div className="nice-form-group">
              <label>Dimensions</label>
              <input type="text" placeholder="Longueur du colis" value="" />
            </div>

            <div className="nice-form-group">
              <label>Dimensions</label>
              <input type="text" placeholder="Hauteur du colis" value="" />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-60">
            <Link href="#" className="bg-primary text-white text-center hover:bg-primary-300 py-2 px-6 rounded text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"  data-aos="fade-up" data-aos-delay="250">Ajouter</Link>
         
            <Link href="#" className="bg-primary text-white text-center hover:bg-primary-300 py-2 px-6 rounded text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg btn-right" data-aos="fade-up" data-aos-delay="250"> Suivant </Link>
            </div>

          </section>

          <section>
            <div className="href-target" id="icons"></div>
            <h1>
              Renseigner les informations du destinataire !
            </h1>

            <div className="nice-form-group">
              <label>Nom</label>
              <input type="text" placeholder="Her name" value="" />
            </div>

            <div className="nice-form-group">
              <label>Prénom</label>
              <input type="text" placeholder="Her surname" value="" />
            </div>

            <div className="nice-form-group">
              <label>Numéro de téléphone</label>
              <input type="tel" placeholder="Her phonenumber" value="" className="icon-left" />
            </div>

            <div className="nice-form-group">
              <label>Adresse</label>
              <input type="text" placeholder="Her adress" value="" />
            </div>

            <div className="nice-form-group">
              <label>Ville</label>
              <input type="text" placeholder="Her town" value="" />
            </div>

            <div className="nice-form-group">
              <label>Quartier</label>
              <input type="text" placeholder="Her quarter" value="" />
            </div>

            <div className="nice-form-group">
              <label>Email</label>
              <input type="email" placeholder="Her email" value="" className="icon-left" />
            </div>

           <div className="mt-5">
            <Link href="#" className="bg-primary text-white hover:bg-primary-300 py-2 px-6 rounded text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"  data-aos="fade-up" data-aos-delay="250">Valider</Link>
            </div>

          </section>

          <section>
            <div className="href-target" id="icons"></div>
            <h1>
              Renseigner vos informations !
            </h1>

            <div className="nice-form-group">
              <label>Nom</label>
              <input type="text" placeholder="Your name" value="" />
            </div>

            <div className="nice-form-group">
              <label>Prénom</label>
              <input type="text" placeholder="Your surname" value="" />
            </div>

            <div className="nice-form-group">
              <label>Numéro de téléphone</label>
              <input type="tel" placeholder="Your phonenumber" vjalue="" className="icon-left" />
            </div>

            <div className="nice-form-group">
              <label>Adresse</label>
              <input type="text" placeholder="Your adress" value="" />
            </div>

            <div className="nice-form-group">
              <label>Ville</label>
              <input type="text" placeholder="Your town" value="" />
            </div>

            <div className="nice-form-group">
              <label>Quartier</label>
              <input type="text" placeholder="Your quarter" value="" />
            </div>

            <div className="nice-form-group">
              <label>Email</label>
              <input type="email" placeholder="Your email" value="" className="icon-left" />
            </div>

            <div className="nice-form-group">
              <label>Mot de passe</label>
              <input type="password" placeholder="Your password" className="icon-left" />
            </div>

            <div className="mt-5">
            <Link href="#" className="bg-primary text-white hover:bg-primary-300 py-2 px-6 rounded text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"  data-aos="fade-up" data-aos-delay="250">Valider</Link>
            </div>

          </section>

          <footer>Made by ♥ Delivers</footer>
        </main>
      </div>
    </>
  )
}