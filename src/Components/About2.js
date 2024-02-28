import React from "react";

const About2 = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between mb-6">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 p-2">
           providing stable employment for daily wage workers is not just a matter of economic justice but a crucial step towards creating a more inclusive and resilient society. By breaking the cycle of uncertainty, enhancing skill development, improving economic resilience, and fostering community building, we can empower daily wage workers to lead more fulfilling lives. It is a collective responsibility to advocate for and implement policies that prioritize job security for these essential contributors to our economies.

          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
          Enhancing Skill Development:
Stable employment opens up opportunities for skill development among daily wage workers. Instead of constantly moving between short-term jobs, they can invest time and effort in acquiring new skills that can lead to career advancement. This not only benefits the individuals but also contributes to a more skilled and competent workforce, fostering economic growth.

Improving Economic Resilience:
Providing daily wage workers with stable jobs strengthens their economic resilience. A steady income allows them to build savings, prepare for emergencies, and invest in education and healthcare. As these workers become more financially secure, the overall resilience of communities increases, reducing vulnerability to economic shocks.

Social Impact and Community Building:
Stable employment for daily wage workers also has a broader social impact. It strengthens the social fabric of communities by fostering a sense of belonging and stability. When individuals have a secure source of income, they are more likely to engage actively in community activities, contribute to local development, and participate in initiatives that enhance the overall well-being of the community.

          </p>
        </div>
      </div>
      <hr className="mb-6" />
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4">Product Solutions</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
            <li>Product 4</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Basic Plan: $10/month</li>
            <li>Pro Plan: $50/month</li>
            <li>Enterprise Plan: Contact Us</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Phone: 123-456-7890</li>
            <li>Email: info@mockupcompany.com</li>
            <li>Address: 123 Main St, Anytown USA</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About2;