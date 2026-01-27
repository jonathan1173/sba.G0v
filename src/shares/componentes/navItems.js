export const navItems = [
  {
    name: "Business Guide", // <-- Actualizado a inglés
    hasDropdown: true,
    dropdownContent: {
      columns: [
        {
          title: "Plan your business",
          links: [
            { name: "Market research and competitive analysis", href: "#" },
            { name: "Write your business plan", href: "#" },
            { name: "Calculate your startup costs", href: "#" },
            { name: "Establish business credit", href: "#" },
            { name: "Fund your business", href: "#" },
            { name: "Buy an existing business or franchise", href: "#" },
          ],
        },
        {
          title: "Launch your business",
          links: [
            { name: "Pick your business location", href: "#" },
            { name: "Choose a business structure", href: "#" },
            { name: "Choose your business name", href: "#" },
            { name: "Register your business", href: "#" },
            { name: "Get federal and state tax ID numbers", href: "#" },
            { name: "Apply for licenses and permits", href: "#" },
            { name: "Open a business bank account", href: "#" },
            { name: "Get business insurance", href: "#" },
          ],
        },
        {
          title: "Manage your business",
          links: [
            { name: "Manage your finances", href: "#" },
            { name: "Hire and manage employees", href: "#" },
            { name: "Pay taxes", href: "#" },
            { name: "Stay legally compliant", href: "#" },
            { name: "Buy assets and equipment", href: "#" },
            { name: "Marketing and sales", href: "#" },
            { name: "AI for small business", href: "#" },
            { name: "Strengthen your cybersecurity", href: "#" },
            { name: "Prepare for emergencies", href: "#" },
            { name: "Recover from disasters", href: "#" },
            { name: "Close or sell your business", href: "#" },
            { name: "Hire employees with disabilities", href: "#" },
          ],
        },
        {
          title: "Grow your business",
          links: [
            { name: "Get more funding", href: "#" },
            { name: "Expand to new locations", href: "#" },
            { name: "Merge and acquire businesses", href: "#" },
            { name: "Become a federal contractor", href: "#" },
            { name: "Export products", href: "#" },
            { name: "Women-owned businesses", href: "#" },
            { name: "Native American-owned businesses", href: "#" },
            { name: "Veteran-owned businesses", href: "#" },
            { name: "Military spouse businesses", href: "#" },
            { name: "Rural businesses", href: "#" },
            { name: "Minority-owned businesses", href: "#" },
          ],
        },
      ],
    },
  },
  {
    name: "Funding Programs", // <-- Ya estaba en inglés
    hasDropdown: true,
    dropdownContent: {
      columns: [
        {
          title: "Loans",
          links: [
            { name: "Make a payment to SBA", href: "#" },
            { name: "7(a) loans", href: "#" },
            { name: "504 loans", href: "#" },
            { name: "Microloans", href: "#" },
            { name: "Lender Match", href: "#" },
            { name: "COVID-19 relief options", href: "#" },
          ],
        },
        {
          title: "Investment capital",
          links: [{ name: "SBIC directory", href: "#" }],
        },
        {
          title: "Disaster assistance",
          links: [
            { name: "Texas floods", href: "#" },
            { name: "California wildfires", href: "#" },
            { name: "Hurricane Milton", href: "#" },
            { name: "Hurricane Helene", href: "#" },
            { name: "Physical damage loans", href: "#" },
            { name: "Mitigation assistance", href: "#" },
            { name: "Economic Injury Disaster Loans", href: "#" },
            { name: "Military reservist loan", href: "#" },
          ],
        },
        {
          title: "Surety bonds",
          links: [{ name: "Surety bond agency directory", href: "#" }],
          secondaryTitle: "Grants",
          secondaryLinks: [
            { name: "Manufacturing grants", href: "#" },
            { name: "State Trade Expansion Program (STEP)", href: "#" },
            { name: "Grants for community organizations", href: "#" },
          ],
        },
      ],
    },
  },
  {
    name: "Federal Contracting", // <-- Ya estaba en inglés
    hasDropdown: true,
    dropdownContent: {
      columns: [
        {
          title: "Contracting guide",
          links: [
            { name: "Assess your business", href: "#" },
            { name: "Basic requirements", href: "#" },
            { name: "How to win contracts", href: "#" },
            { name: "Types of contracts", href: "#" },
            { name: "Size standards", href: "#" },
            { name: "Governing rules and responsibilities", href: "#" },
            { name: "Prime and subcontracting", href: "#" },
          ],
        },
        {
          title: "Contracting assistance programs",
          links: [
            { name: "Small Disadvantaged Business", href: "#" },
            {
              name: "Women-Owned Small Business Federal Contract program",
              href: "#",
            },
            { name: "Veteran contracting assistance programs", href: "#" },
            { name: "8(a) Business Development program", href: "#" },
            { name: "SBA Mentor-Protégé program", href: "#" },
            { name: "Joint ventures", href: "#" },
            { name: "HUBZone program", href: "#" },
            { name: "Natural Resource Sales Assistance program", href: "#" },
          ],
        },
        {
          title: "Counseling and help",
          links: [
            { name: "Contracting area directors", href: "#" },
            { name: "Procurement Center Representative directory", href: "#" },
            { name: "Commercial Market Representatives", href: "#" },
          ],
          secondaryTitle: "Contracting data",
          secondaryLinks: [
            { name: "Small business procurement scorecard", href: "#" },
            { name: "Disaggregated data", href: "#" },
          ],
        },
      ],
    },
  },
  {
    name: "Learning Platform", // <-- ACTUALIZADO DE "Capacitación"
    hasDropdown: true,
    dropdownContent: {
      // <-- Contenido de la nueva imagen
      columns: [
        { title: "MySBA Learning", links: [] },
        { title: "Boots to Business", links: [] },
        { title: "SBA THRIVE", links: [] },
        { title: "Empower to Grow", links: [] },
      ],
    },
  },
  {
    name: "Local Assistance",
    hasDropdown: true,
    dropdownContent: {
      columns: [
        {
          title: "Resource Partners",
          links: [
            { name: "Small Business Development Centers (SBDC)", href: "#" },
            { name: "SCORE Business Mentoring", href: "#" },
            { name: "Veterans Business Outreach Centers (VBOC)", href: "#" },
            { name: "Women's Business Centers", href: "#" },
          ],
        },
        {
          title: "Export and trade assistance",
          links: [
            { name: "Finance Managers", href: "#" },
            { name: "U.S. Export Assistance Centers", href: "#" },
            { name: "Federal contracting assistance", href: "#" },
            { name: "Regional Innovation Clusters", href: "#" },
          ],
        },
        {
          title: "Veterans Business Development Officers",
          links: [], // No hay enlaces debajo de este título en la imagen
        },
      ],
    },
  },
  {
    name: "Priorities",
    hasDropdown: true, // <-- Actualizado
    dropdownContent: {
      columns: [
        {
          title: "Putting American manufacturers first",
          links: [
            { name: "Cutting red tape for small manufacturers", href: "#" },
            { name: "Increasing access to capital", href: "#" },
            { name: "Make Onshoring Great Again portal", href: "#" },
            { name: "Taking your manufacturing business global", href: "#" },
            { name: "Manufacturing success stories", href: "#" },
          ],
        },
        {
          title: "Small business resource hubs",
          links: [
            { name: "Child care business development support", href: "#" },
            {
              name: "Interagency capital resources for small businesses",
              href: "#",
            },
          ],
        },
        {
          title: "SBA initiatives",
          links: [
            { name: "Community Builders Network", href: "#" },
            {
              name: "Small Businesses Against Trafficking in Persons (SBATIP)",
              href: "#",
            },
          ],
        },
        {
          title: "Councils and committees",
          links: [
            {
              name: "National Small Business Development Center Advisory Board",
              href: "#",
            },
            {
              name: "Invention, Innovation, and Entrepreneurship Advisory Committee",
              href: "#",
            },
            { name: "Investment Capital Advisory Committee", href: "#" },
            { name: "Small Business Lending Advisory Council", href: "#" },
            { name: "Regional Regulatory Fairness Boards", href: "#" },
          ],
        },
      ],
    },
  },
  {
    name: "About SBA",
    hasDropdown: true,
    dropdownContent: {
      columns: [
        {
          title: "SBA locations",
          links: [
            { name: "Headquarters Offices", href: "http://localhost:5173/organization/sba-leadership#" },
            { name: "Disaster Offices", href: "https://www.sba.gov/about-sba/sba-locations/disaster-field-operations-centers" },
            { name: "District Offices", href: "https://www.sba.gov/about-sba/sba-locations/sba-district-offices" },
            { name: "Loan and Guaranty Centers", href: "https://www.sba.gov/about-sba/sba-locations/loan-guaranty-centers" },
          ],
        },
        {
          title: "Open government",
          links: [
            { name: "FOIA", href: "https://www.sba.gov/about-sba/open-government/foia" },
            { name: "Digital SBA", href: "https://www.sba.gov/about-sba/open-government/digital-sba" },
            { name: "About the SBA.gov website", href: "#" },
            { name: "SBA privacy program", href: "#" },
            { name: "Privacy Act request guide", href: "#" },
            { name: "Information quality", href: "https://www.sba.gov/about-sba/open-government/information-quality" },
            { name: "SBA guidance", href: "#" },
            { name: "AI inventory", href: "https://www.sba.gov/about-sba/open-government/ai-inventory" },
            { name: "Made in America waivers", href: "#" },
            { name: "SMS terms and conditions", href: "#" },
          ],
          secondaryTitle: "SBA Newsroom",
          secondaryLinks: [],
        },
        {
          title: "Work for SBA",
          links: [
            { name: "Employee life", href: "https://www.sba.gov/about-sba/work-sba/employee-life" },
            { name: "Jobs at SBA", href: "https://www.sba.gov/about-sba/work-sba/jobs-sba" },
            { name: "Contracting for SBA", href: "https://www.sba.gov/about-sba/work-sba/contracting-sba" },
            { name: "Disaster response jobs at SBA", href: "https://www.sba.gov/about-sba/work-sba/disaster-response-jobs-sba" },
          ],
          secondaryTitle: "Organization",
          secondaryLinks: [
            { name: "SBA leadership", href: "https://sba-gov.vercel.app/organization/sba-leadership" },
            { name: "Contact SBA", href: "https://www.sba.gov/about-sba/organization/contact-sba" },
            { name: "Forms and documents", href: "https://www.sba.gov/documents" },
            { name: "Observances", href: "https://www.sba.gov/about-sba/organization/observances" },
            { name: "Performance", href: "https://www.sba.gov/about-sba/organization/performance" },
            { name: "Federal advisory committees", href: "https://www.sba.gov/about-sba/organization/federal-advisory-committees" },
          ],
        },
        {
          title: "Oversight and advocacy",
          links: [
            { name: "Office of Hearings and Appeals", href: "https://www.sba.gov/about-sba/oversight-advocacy/office-hearings-appeals" },
            { name: "Office of Inspector General", href: "https://www.sba.gov/about-sba/oversight-advocacy/office-inspector-general" },
            { name: "Office of the National Ombudsman", href: "https://www.sba.gov/about-sba/oversight-advocacy/office-national-ombudsman" },
            { name: "Office of Advocacy", href: "https://advocacy.sba.gov/" },
          ],
          secondaryTitle: "Information in other languages",
          secondaryLinks: [],
        },
      ],
    },
  },
];