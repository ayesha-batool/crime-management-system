import Accordion, { FaqItem } from "../components/accordion";

const faqs: FaqItem[] = [
  {
    question: 'How can I have a First Information Report (FIR) registered at a Police station?',
    answer: 'An FIR is an account of a cognizable (i.e. over which police has jurisdiction) offence that is entered in a particular format in a register at the police station. Every person has a right to report any matter at the concerned police station and have a case registered in the form of an FIR. The matter may be reported orally or in writing to an officer at a police station or on patrol. An officer who receives an oral report shall reduce it to writing and cause it to be recorded in the FIR register. A certified copy of the FIR, signed by an officer bearing the stamp of the police station is to be provided to the person who reports the crime. No police officer has the authority to refuse registration of a case. In case a crime is reported and a case is not registered, the person who reports the crime must inform the Sub-Divisional Police Officer or the Superintendent of Police or the District Police Officer responsible for law and order in that particular area.',
  },
  {
    question: 'How can a person obtain a driving license?',
    answer: 'A driving license is issued by the Superintendent or Deputy Superintendent of Police in charge of traffic office in each district. A person must obtain a learner permit, issued by the same licensing authority mentioned above, and complete the mandatory 6-week training period before he or she can apply for a regular license to drive. Three recent passport-size photographs, a copy of the computerized national ID card, the original learner permit and revenue stamps of the prescribed value have to be enclosed with the application form of regular license before its submission. The person would then need to appear for a test on the date assigned and a regular license will be issued for a period of 5 years upon successful completion of the driving test.',
  },
  {
    question: 'How can one pay the fine for a driving offence?',
    answer: 'When a driver violates traffic rules, then Traffic Officer takes his relevant documents and issues him a challan ticket. This ticket contains information about the bank where the fine has to be paid, and particulars of the traffic sector office for the collection of documents. The different possible ways of making the fine payment are listed below: The violator can take his documents back from the Traffic Officer on the same day, after paying fine in the designated bank. If the violator does not collect his documents on the same day, his documents are sent to concerned traffic sector office from where they can be collected after payment of fine. In the case contrary to the above, after 10 days, the documents will be sent to concerned Judicial Magistrate. If the violator has paid fine within 10 days, then he would be in a position to receive his documents. Otherwise he will pay an amount which will be twice the original fine to receive his documents.',
  },
  {
    question: 'What is the procedure for transfer of Investigation in case a party is not satisfied with investigation?',
    answer: 'Police Order, 2002, provides for two transfers of investigation. Either of the parties to a case may request a transfer of investigation. In case a party is not satisfied with the quality of an investigation or the conduct of an investigating officer, it may approach the district’s Superintendent of Police, Investigation, or the concerned District Police Officer, the Regional Police Officer (DIG or Addl IGP), or the Addl. IGP, Investigation who has his office in the Central Police Office (CPO), Punjab. The complaint should preferably be made in writing with a copy of the complainant’s National Identity Card attached to it. The complaint must contain the FIR no. of the case and the name of the concerned police station and district.',
  },
  {
    question: 'What is section 182 about the punishment for having a false case registered?',
    answer: 'Section 182 of the Pakistan Penal Code provides for a maximum penalty of six months in prison or fine or both in case a person deliberately has a false case registered. The section is however non-cognizable, i.e. the police cannot automatically register a case under section 182. A court has to order police to proceed against a person under section 182; in case a complaint has been brought to the court by the police or another person.',
  },
  {
    question: 'What is section 144 and what does it imply?',
    answer: 'Section 144 of the Code of Criminal Procedure (CrPC) empowers district administration to issue orders in public interest that may place a ban on an activity for a specific period of time. Such a ban is enforced by the police who register cases under section 188 of the Pakistan Penal Code for violations of the ban. Section 188 carries a maximum penalty of six months in prison or fine or both.',
  },
];

const FAQPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h1>
      <Accordion faqs={faqs} />
    </div>
  );
};

export default FAQPage;
