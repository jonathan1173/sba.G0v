import React from 'react';

// El componente GuideCard no necesita cambios.
const GuideCard = ({ guide }) => {
  return (
    <div className="flex flex-col border border-gray-300 rounded-md bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      
      <img src={guide.imageUrl} alt="" className="mx-auto mb-6 h-40 w-40" />
      
      <h3 className="mb-3 text-xl font-semibold underline text-blue-900 text-center">
        {guide.title}
      </h3>
      
      <p className="mb-4 text-gray-700 leading-relaxed">
        {guide.description}
      </p>
      
      <ul className="list-disc list-inside space-y-4 text-blue-900">
        {guide.links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              className=" underline hover:text-blue-900 transition-colors"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Contenedor principal
const BusinessGuides = () => {
  const guidesData = [
    // ... (los datos de guidesData no cambian, se mantienen igual)
    {
      imageUrl: 'https://www.sba.gov/sites/default/files/styles/card_icon/public/2022-11/plan_your_business.png.webp?itok=bBa11FII',
      title: 'Plan your business',
      description:
        "You've got a great idea. Now, make a plan to turn it into a great business.",
      links: [
        { text: 'Market research and competitive analysis', url: 'https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis' },
        { text: 'Write your business plan', url: 'https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan' },
        { text: 'Calculate your startup costs', url: 'https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs' },
        { text: 'Establish business credit', url: 'https://www.sba.gov/business-guide/plan-your-business/establish-business-credit' },
        { text: 'Fund your business', url: 'https://www.sba.gov/business-guide/plan-your-business/fund-your-business' },
        { text: 'Buy an existing business or franchise', url: 'https://www.sba.gov/business-guide/plan-your-business/buy-existing-business-or-franchise' },
      ],
    },
    {
      imageUrl: 'https://www.sba.gov/sites/default/files/styles/card_icon/public/2022-11/launch_your_business.png.webp?itok=_qPmkJTa',
      title: 'Launch your business',
      description:
        'Turn your business into a reality. Register, file, and start doing business.',
      links: [
        { text: 'Pick your business location', url: 'https://www.sba.gov/business-guide/launch-your-business/pick-your-business-location' },
        { text: 'Choose a business structure', url: 'https://www.sba.gov/business-guide/launch-your-business/choose-business-structure' },
        { text: 'Choose your business name', url: 'https://www.sba.gov/business-guide/launch-your-business/choose-your-business-name' },
        { text: 'Register your business', url: 'https://www.sba.gov/business-guide/launch-your-business/register-your-business' },
        { text: 'Get federal and state tax ID numbers', url: 'https://www.sba.gov/business-guide/launch-your-business/get-federal-state-tax-id-numbers' },
        { text: 'Apply for licenses and permits', url: 'https://www.sba.gov/business-guide/launch-your-business/apply-licenses-permits' },
        { text: 'Open a business bank account', url: 'https://www.sba.gov/business-guide/launch-your-business/open-business-bank-account' },
        { text: 'Get business insurance', url: 'https://www.sba.gov/business-guide/launch-your-business/get-business-insurance' },
      ],
    },
    {
      imageUrl: 'https://www.sba.gov/sites/default/files/styles/card_icon/public/2022-11/manage_your_business.png.webp?itok=nZslkQke',
      title: 'Manage your business',
      description:
        'Run your business like a boss. Master day-to-day operations and prepare for success.',
      links: [
        { text: 'Manage your finances', url: 'https://www.sba.gov/business-guide/manage-your-business/manage-your-finances' },
        { text: 'Hire and manage employees', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees' },
        { text: 'Pay taxes', url: 'https://www.sba.gov/business-guide/manage-your-business/pay-taxes' },
        { text: 'Stay legally compliant', url: 'https://www.sba.gov/business-guide/manage-your-business/stay-legally-compliant' },
        { text: 'Buy assets and equipment', url: 'https://www.sba.gov/business-guide/manage-your-business/buy-assets-equipment' },
        { text: 'Marketing and sales', url: 'https://www.sba.gov/business-guide/manage-your-business/marketing-sales' },
        { text: 'AI for small business', url: 'https://www.sba.gov/business-guide/manage-your-business/ai-small-business' },
        { text: 'Strengthen your cybersecurity', url: 'https://www.sba.gov/business-guide/manage-your-business/strengthen-your-cybersecurity' },
        { text: 'Prepare for emergencies', url: 'https://www.sba.gov/business-guide/manage-your-business/prepare-emergencies' },
        { text: 'Recover from disasters', url: 'https://www.sba.gov/business-guide/manage-your-business/recover-disasters' },
        { text: 'Close or sell your business', url: 'https://www.sba.gov/business-guide/manage-your-business/close-or-sell-your-business' },
        { text: 'Hire employees with disabilities', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-employees-disabilities' },
      ],
    },
    {
      imageUrl: 'https://www.sba.gov/sites/default/files/styles/card_icon/public/2022-11/grow_your_business.png.webp?itok=dF_IOFHF',
      title: 'Grow your business',
      description:
        "When business is good, it's time to expand. Find new funding, locations and customers.",
      links: [
        { text: 'Get more funding', url: 'https://www.sba.gov/business-guide/grow-your-business/get-more-funding' },
        { text: 'Expand to new locations', url: 'https://www.sba.gov/business-guide/grow-your-business/expand-new-locations' },
        { text: 'Merge and acquire businesses', url: 'https://www.sba.gov/business-guide/grow-your-business/merge-acquire-businesses' },
        { text: 'Become a federal contractor', url: 'https://www.sba.gov/business-guide/grow-your-business/become-federal-contractor' },
        { text: 'Export products', url: 'https://www.sba.gov/business-guide/grow-your-business/export-products' },
        { text: 'Women-owned businesses', url: 'https://www.sba.gov/business-guide/grow-your-business/women-owned-businesses' },
        { text: 'Native American-owned businesses', url: 'https://www.sba.gov/business-guide/grow-your-business/native-american-owned-businesses' },
        { text: 'Veteran-owned businesses', url: 'https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses' },
        { text: 'Military spouse businesses', url: 'https://www.sba.gov/business-guide/grow-your-business/military-spouse-businesses' },
        { text: 'Rural businesses', url: 'https://www.sba.gov/business-guide/grow-your-business/rural-businesses' },
        { text: 'Minority-owned businesses', url: 'https://www.sba.gov/business-guide/grow-your-business/minority-owned-businesses' },
      ],
    },
  ];

  return (
    <section className="bg-white p-4 md:p-3">
      {/* --- CAMBIO AQUÍ --- 
        Cambié 'max-w-6xl' a 'max-w-7xl' para hacer el contenedor más ancho.
      */}
      <h2 className='text-4xl text-blue-900 py-8'>Browse business topics</h2>

      <div className=" mx-auto  ">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {guidesData.map((guide) => (
            <GuideCard key={guide.title} guide={guide} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessGuides;