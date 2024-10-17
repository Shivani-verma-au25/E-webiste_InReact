import React from 'react';

// Core Value Component
const CoreValue = ({ iconClass, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
    <i className={`${iconClass} fa-3x text-blue-600 mb-4`} />
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Team Member Component
const TeamMember = ({ image, name, role }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={`${name}, ${role}`} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Crafting Quality for Your Everyday Life</h2>
              <p className="text-lg text-gray-600 mb-8">
                Since 2010, we've been on a mission to bring high-quality products directly to your doorstep. What started as a small family business has blossomed into a trusted online retailer, serving customers nationwide with passion and dedication.
              </p>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
                Learn more about our journey
                <i className="fas fa-chevron-right ml-2" />
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Our team at work"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4">
                <p className="text-4xl font-bold text-blue-600">10+</p>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CoreValue iconClass="fas fa-star" title="Quality" description="We never compromise on the quality of our products." />
            <CoreValue iconClass="fas fa-users" title="Customer First" description="Your satisfaction is our top priority." />
            <CoreValue iconClass="fas fa-shopping-bag" title="Wide Selection" description="Curated products for every need and style." />
            <CoreValue iconClass="fas fa-truck" title="Fast Delivery" description="Swift and secure shipping to your doorstep." />
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <TeamMember
              name="Jane Doe"
              role="Founder & CEO"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
            />
            <TeamMember
              name="John Smith"
              role="Head of Operations"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
            />
            <TeamMember
              name="Emily Brown"
              role="Customer Experience Manager"
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our team. If you're excited about e-commerce and want to make a difference, we'd love to hear from you!
          </p>
          <a
            href=""
            className="inline-block bg-white text-blue-600 text-lg font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            View Career Opportunities
          </a>
        </section>
      </main>
    </div>
  );
};

export default About;
