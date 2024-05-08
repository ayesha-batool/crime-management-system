import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="my-10 container mx-auto">
      <div className="md:flex md:-mx-4 mt-12 md:pt-4">
      <div className="px-4 md:w-1/3 mt-6 md:mt-0">
        <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
          <div className="text-xl p-4 w-16 h-16 mx-auto">
            <i className="fas fa-eye text-indigo-600"></i>
          </div>
          <h5 className="text-xl font-medium mb-4">View Crime Reports</h5>
          <p className="text-gray-600 mb-3">Stay informed with detailed crime reports in your area.</p>
        </div>
      </div>
      <div className="px-4 md:w-1/3 mt-6 md:mt-0">
        <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
          <div className="text-xl p-4 w-16 h-16 mx-auto">
            <i className="fas fa-plus text-indigo-600"></i>
          </div>
          <h5 className="text-xl font-medium mb-4">Add, Update, and Manage Crime Data</h5>
          <p className="text-gray-600 mb-3">Easily add, update, and manage crime data for better organization.</p>
        </div>
      </div>
      <div className="px-4 md:w-1/3 mt-6 md:mt-0">
        <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
          <div className="text-xl p-4 w-16 h-16 mx-auto">
            <i className="fas fa-user-secret text-indigo-600"></i>
          </div>
          <h5 className="text-xl font-medium mb-4">Check User Criminal Records</h5>
          <p className="text-gray-600 mb-3">Effortlessly access and verify user criminal records when needed.</p>
        </div>
      </div>
    </div>

      </section>
        <section className="bg-neutral-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-100 mb-8">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* FAQ Card */}
              <Card
                imageUrl="/ps-icn-faq.png"
                altText="Frequently Asked Questions"
                title="FAQ"
                description="Find answers to common questions."
                link="/faq"
              />

              {/* Safety Tips Card */}
              <Card
                imageUrl="/ps-icn-st.png"
                altText="Safety Tips"
                title="Safety Tips"
                description="Stay safe with our helpful tips."
                link="/safety-tips"
              />

              {/* Women Help Card */}
              <Card
                imageUrl="/ps-icn-wh.png"
                altText="Women Help"
                title="Women Help"
                description="Support and assistance for women."
                link="/women-help"
              />
            </div>
          </div>
        </section>

    </div>
  );
}
