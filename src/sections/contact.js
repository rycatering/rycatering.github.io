export const Contacts = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <p>
            At Roze Yammy Catering, we believe every event deserves a unique, flavorful touch that leaves a lasting impression. From weddings and corporate gatherings to intimate family celebrations, our expert team is dedicated to bringing your vision to life with exquisite cuisine and seamless service. We pride ourselves on crafting custom dining experiences that exceed expectations, making your occasion as memorable as it is delicious.

            Our passion lies in culinary innovation, offering versatile menus that cater to any setting, from elegant cocktail receptions with artisanal hors d'oeuvres to themed buffets and family-style feasts. Whether you're planning a refined sit-down dinner or a relaxed brunch gathering, our chefs design dishes that blend creativity with the finest ingredients.

            In need of regular workplace catering? Roze Yammy Catering also offers convenient solutions for daily office meals, as well as café and coffee bar services to keep your team fueled. Reach out to our Workplace Catering team to explore tailored options for your business.

            Trust Roze Yammy Catering to elevate your event, big or small, with flavors and experiences that linger long after the last bite.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Հասցե:</h4>
                <p>ք. Արտաշատ, Բուդաղյան 4/1 </p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>aarbaarmenia@gmail.com</p>
              </div>

              <a href="Հեռ. : +374 44 151654">
                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Հեռ. :</h4>
                  <p>+374 44 151654</p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <div>
              <iframe
                title=" "
                style={{ border: 0, width: "100%", height: "350px" }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d436.13646518483523!2d44.56295787877551!3d39.95001293290504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sam!4v1683972380380!5m2!1sen!2sam"                frameBorder="0"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
