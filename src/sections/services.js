import { useTranslation } from "react-i18next";

export default function Services(params) {
  const { t } = useTranslation();

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>{t("products.title")}</h2>
          <p>{t("products.desc")}</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-briefcase"></i></div>
              <h4>Corporate Events</h4>
              <p>At Roze Yammy Catering, we elevate corporate gatherings with thoughtfully curated menus and seamless service, fueling productivity and fostering collaboration. Let us make your event inspiring and memorable.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-glass-cheers"></i></div>
              <h4>Weddings</h4>
              <p>Celebrate your special day with Roze Yammy Catering. From intimate gatherings to grand receptions, we craft elegant menus and deliver personalized service, ensuring unforgettable flavors and cherished moments.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-birthday-cake"></i></div>
              <h4>Private Parties</h4>
              <p>Make your gathering unforgettable with Roze Yammy Catering. From birthdays to anniversaries, we provide custom menus and exceptional service, so you can relax and savor every moment with your guests.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
