// pages/safety-tips.tsx

const SafetyTipsPage: React.FC = () => {
    return (
      <div className="max-w-2xl mx-auto py-8 px-4 text-white">
        <h1 className="text-3xl font-semibold mb-4">Safety Tips</h1>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Fire Safety Tips</h2>
            <ul className="list-disc list-inside">
              <li>Install smoke alarms on every level of your home.</li>
              <li>Create a fire escape plan and practice it regularly with your family.</li>
              <li>Keep flammable items away from heat sources.</li>
              <li>Never leave cooking unattended.</li>
              <li>Teach children about fire safety.</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Home Security Tips</h2>
            <ul className="list-disc list-inside">
              <li>Install deadbolt locks on all exterior doors.</li>
              <li>Keep windows locked when not in use.</li>
              <li>Install motion-sensor lights outside your home.</li>
              <li>Do not advertise your absence on social media.</li>
              <li>Get to know your neighbors and look out for each other.</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Personal Safety Tips</h2>
            <ul className="list-disc list-inside">
              <li>Stay aware of your surroundings.</li>
              <li>Avoid walking alone at night.</li>
              <li>Keep your phone charged and easily accessible.</li>
              <li>Trust your instincts and avoid risky situations.</li>
              <li>Take self-defense classes to empower yourself.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default SafetyTipsPage;
  