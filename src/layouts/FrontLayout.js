import * as React from 'react';
import './assets_front/lib/bootstrap/css/bootstrap.min.css';
import './assets_front/lib/font-awesome/css/font-awesome.min.css';
import './assets_front/lib/animate/animate.min.css';
import './assets_front/lib/venobox/venobox.css';
import './assets_front/lib/owlcarousel/assets/owl.carousel.min.css';
import './assets_front/css/style.css';
function FrontLayout({children}) {
  return (
    <>{children}</>
  );
}

export default FrontLayout;
