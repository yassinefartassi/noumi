import React from 'react';
import './AboutUs.css';



const AboutUs = () => {
  return (
    <div className='about'>
      <h1>About-us</h1>
      <div className='container' >

        <div class="image">
          <img src="https://jidamarket.com/wp-content/uploads/elementor/thumbs/BANNIERE-DATTE-MEDJOOL-2-pt5urey7pfs1c1iwmbo6aug77pkmiviy0ge8bknv3u.jpg" />
        </div>
        {/* <h2>Dattes</h2> */}
        <div className="text">
          <p>tout le monde connaît les dattes, ces fruits à la chair tendre et sucrée. Fraîches ou sèches, en pâte, fourrées ou dégustées telles quelles, les dattes sont bien plus qu’une simple gourmandise. Récoltées sur des palmiers dattiers, elles possèdent en effet une certaine richesse nutritionnelle, les rendant très intéressantes pour notre santé ! Découvrons sans plus attendre leurs nombreux bienfaits….</p>
        </div>


        
      </div>
    </div>
  );
};

export default AboutUs;
