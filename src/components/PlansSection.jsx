import React, { useState } from 'react';

const plansData = {
  allTypesWebsites: [
    {
      id: '01',
      title: 'Starter Website Plan - ₹4,999',
      description:
        'Perfect for individuals, startups, or small businesses needing a basic online presence.',
      features: [
        '1-Page Static Website (Landing Page)',
        'Mobile-Friendly Design',
        'Basic SEO Optimization',
        'Contact Form Integration',
        'Social Media Links',
        'Free Domain & Hosting (1 Year)',
        'WhatsApp Chat Integration',
        'Website Speed Optimization',
        'Delivery: 5 Days',
      ],
      bonus: ['FREE Logo Design (Simple)'],
    },
    {
      id: '02',
      title: 'Professional Website Plan - ₹9,999',
      description: 'Ideal for growing businesses looking for a modern, multi-page website.',
      features: [
        '5-Page Dynamic Website',
        'Custom Mobile-Friendly Design',
        'CMS Integration (WordPress)',
        'SEO-Friendly Setup',
        'Contact Forms & Google Maps Integration',
        'Image Slider & Gallery',
        'Social Media Integration + Share Buttons',
        'Basic Content Writing (500 words/page)',
        'Free Domain & Hosting (1 Year)',
        'Delivery: 7-10 Days',
      ],
      bonus: ['Google My Business Setup', '2 Revisions Included'],
    },
    {
      id: '03',
      title: 'Advanced Corporate Website Plan - ₹19,999',
      description: 'For established businesses and professionals needing custom design & advanced features.',
      features: [
        'Custom 10-Page Website',
        'Responsive Design with Custom Branding',
        'CMS (Admin Panel)',
        'Advanced SEO Setup',
        'Contact Forms & Lead Capture Tools',
        'Google Analytics & Search Console Setup',
        'Live Chat & WhatsApp Integration',
        'SSL Certificate for Security',
        'Delivery: 10-14 Days',
      ],
      bonus: ['FREE Logo Design (Advanced)', '3 Months Free Maintenance'],
    },
  ],
  eCommercePlans: [
    {
      id: '01',
      title: 'E-Commerce Starter Plan - ₹14,999',
      description: 'Great for small businesses starting to sell products online.',
      features: [
        'Up to 20 Products',
        'Custom 5-Page Design',
        'WooCommerce Integration',
        'Basic Payment Gateway Integration',
        'Mobile-Friendly Store Design',
        'Stock Management System',
        'Free Domain, Hosting & SSL (1 Year)',
        'Delivery: 7-10 Days',
      ],
      bonus: ['FREE Logo Design (Basic)', '1 Hour E-Commerce Training'],
    },
    {
      id: '02',
      title: 'E-Commerce Growth Plan - ₹24,999',
      description: 'Designed for growing stores needing more features and scalability.',
      features: [
        'Up to 100 Products',
        'Custom 8-Page Store Design',
        'Advanced Payment Gateway Integration',
        'Product Search & Filters',
        'Coupons & Discounts Setup',
        'Abandoned Cart Recovery',
        'Free Domain, Hosting & SSL (1 Year)',
        'Delivery: 10-14 Days',
      ],
      bonus: ['Google My Business Setup', '3 Months Free Maintenance'],
    },
    {
      id: '03',
      title: 'E-Commerce Premium Plan - ₹39,999',
      description: 'For large businesses requiring a full-fledged online store with advanced functionality.',
      features: [
        'Unlimited Products',
        'Custom 10-Page Design',
        'Advanced Payment Gateway Integration',
        'Product Variants',
        'Advanced Search & Filtering',
        'Abandoned Cart Recovery System',
        'Coupons, Discounts & Gift Cards',
        'Free Domain, Hosting & SSL (1 Year)',
        'Delivery: 14-20 Days',
      ],
      bonus: ['FREE Logo Design (Advanced)', 'Google Ads Setup & Guidance'],
    },
  ],
};

const PlansSection = () => {
  const [activeTab, setActiveTab] = useState('allTypesWebsites');

  return (
    <section className="plans-section mt-5">
      <div className="container">
      <div className="section-heading mb-3 text-center">
        <h4
          className="sub-heading"
          data-text-animation="fade-in"
          data-duration="1.5"
        >
          Our Plans
        </h4>
        <h2
          className="section-title"
          data-text-animation="fade-in-right"
          data-split="char"
          data-duration="0.6"
          data-stagger="0.03"
        >
          Our Website & E-Commerce Plans
        </h2>
        <p className="lead text-muted">Choose the perfect plan to take your business online!</p>
      </div>
        {/* Tabs Navigation */}
        <div className="tabs-nav text-center mb-5 align-self-center">
          <div className="">
            <button
              className={`btn rounded-pill ${activeTab === 'allTypesWebsites' ? 'btn-primary' : 'btn-secondary'} btn-lg mx-2`}
              onClick={() => setActiveTab('allTypesWebsites')}
            >
              All Types of Websites
            </button>
            <button
              className={`btn rounded-pill ${activeTab === 'eCommercePlans' ? 'btn-primary' : 'btn-secondary'} btn-lg mx-2`}
              onClick={() => setActiveTab('eCommercePlans')}
            >
              E-Commerce Website Plans
            </button>
          </div>
        </div>
        {/* Tab Content */}
        {activeTab === 'allTypesWebsites' && (
          <div className="row gy-4 d-flex align-items-stretch">
            {plansData.allTypesWebsites.map((plan) => (
              <div className="col-lg-4 col-md-6 d-flex" key={plan.id}>
                <div
                  className="plan-box p-4 plan-box-bg flex-grow-1"
                  style={{
                    transition: 'transform 0.3s ease-in-out',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <h3 className="title mb-3">
                    <i className="fas fa-laptop-code"></i> {plan.title}
                  </h3>
                  <p className="text-muted mb-3">{plan.description}</p>
                  <ul className="list-unstyled mb-3">
                    {plan.features.map((feature, index) => (
                      <li key={index}>☑️ {feature}</li>
                    ))}
                  </ul>
                  <p className="text-success">
                    <strong>Bonus:</strong> {plan.bonus.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'eCommercePlans' && (
          <div className="row gy-4 d-flex align-items-stretch">
            {plansData.eCommercePlans.map((plan) => (
              <div className="col-lg-4 col-md-6 d-flex" key={plan.id}>
                <div
                  className="plan-box p-4 plan-box-bg flex-grow-1"
                  style={{
                    transition: 'transform 0.3s ease-in-out',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  
                  <h3 className="title mb-3"><i className="fas fa-store"></i> {plan.title}</h3>
                  <p className="text-muted mb-3">{plan.description}</p>
                  <ul className="list-unstyled mb-3">
                    {plan.features.map((feature, index) => (
                      <li key={index}>✅ {feature}</li>
                    ))}
                  </ul>
                  <p className="text-success">
                    <strong>Bonus:</strong> {plan.bonus.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlansSection;
