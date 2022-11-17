import React from "react";
import ContactInfo from "../../components/ContactInfo";

const Contact = () => {
  return (
    <div className=" md:py-20 md:px-16 p-4">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        تواصل معنا
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        نسعد جدا بتواصلك معنا, جاهزون للبناء احلامك
      </h3>
      <div className="md:flex md:m-4 md:p-16 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <div className="flex-1 mb-8">
          <iframe
            title="our-location"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
            width="100%"
            height="360px"
            style={{ border: 0, width: "100%" }}
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex-1 md:px-8 p-4">
          <h6 className="md:text-4xl text-3xl mb-8 font-extrabold">
            ارقام التواصل
          </h6>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
