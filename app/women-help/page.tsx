// pages/women-help.tsx

const WomenHelpPage: React.FC = () => {
    return (
      <div className="max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-semibold mb-6">Women&apos;s Help</h1>
  
        {/* Section 1: Contact Information of Police */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Information of Police</h2>
          <p className="mb-2">Emergency Number: 100</p>
          <p className="mb-2">Local Police Station: 1234567</p>
          <p className="mb-2">Women Helpline: 1122</p>
        </section>
  
        {/* Section 2: General Women Safety Tips */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">General Women Safety Tips</h2>
          <ul className="list-disc list-inside">
            <li>Avoid walking alone at night.</li>
            <li>Stay aware of your surroundings.</li>
            <li>Trust your instincts.</li>
            <li>Keep emergency contacts handy.</li>
            <li>Learn self-defense techniques.</li>
          </ul>
        </section>
  
        {/* Section 3: File a Complaint */}
        <section>
          <h2 className="text-xl font-semibold mb-4">File a Complaint</h2>
          <p className="mb-4">If you have been a victim of harassment or violence, you can file a complaint by contacting the police or using the online complaint form below:</p>
          <form>
            <div className="mb-4">
              <label htmlFor="complaint">Complaint Description:</label>
              <textarea id="complaint" className="block w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" rows={4}></textarea>
            </div>
            <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300">Submit Complaint</button>
          </form>
        </section>
      </div>
    );
  };
  
  export default WomenHelpPage;
  