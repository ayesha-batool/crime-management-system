import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";

export default function Home() {
  return (
    <div>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Explore More</h2>
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
