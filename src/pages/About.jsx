import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Title */}
        <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-8">About MegaMart</h1>

        {/* Introduction */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Welcome to MegaMart</h2>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to MegaMart, your one-stop online shop for everything you need! Founded in 2024, MegaMart offers an extensive
            range of high-quality products from various categories, including electronics, fashion, home essentials, and more.
          </p>
          <p className="text-lg text-gray-700">
            Our goal is to provide our customers with an exceptional shopping experience—affordable prices, a broad product
            selection, and fast, reliable delivery. At MegaMart, we believe in making online shopping convenient, fun, and easy for
            everyone.
          </p>
        </section>

        {/* Mission and Vision Section */}
        <section className="bg-indigo-100 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our mission at MegaMart is simple: to deliver an unparalleled online shopping experience that combines convenience,
            affordability, and exceptional customer service. We aim to make shopping for everyday essentials and trendy items a
            seamless experience for all of our customers.
          </p>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700">
            We envision MegaMart as a global leader in e-commerce, offering a vast range of products that meet the ever-changing
            needs and desires of our customers. We strive to build long-lasting relationships based on trust, quality, and service.
          </p>
        </section>

        {/* Founder Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Meet Our Founder</h2>
          <p className="text-lg text-gray-700">
            MegaMart was founded by Hudiair, a passionate entrepreneur with a strong vision for making online shopping better for
            everyone. Hudiair's commitment to customer satisfaction and innovation has led MegaMart to grow into a trusted brand in
            the e-commerce industry.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            With a focus on quality, affordability, and convenience, Hudiair and the team at MegaMart are dedicated to continuously
            improving our offerings and ensuring that our customers always have a great experience.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
