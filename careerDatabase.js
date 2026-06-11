export const careerCategories = {
  Technology: ["Cloud Architect", "Product Manager", "IT Consultant", "Systems Analyst", "DevOps Engineer", "Network Engineer", "Blockchain Developer", "Technical Writer", "QA Engineer", "AR/VR Developer"],
  AI: ["AI Engineer", "Machine Learning Engineer", "Prompt Engineer", "AI Researcher", "Computer Vision Engineer", "NLP Engineer", "AI Ethics Specialist", "Robotics AI Engineer", "Generative AI Designer", "AI Product Strategist"],
  Software: ["Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "Mobile App Developer", "Game Developer", "Embedded Software Engineer", "Software Architect", "SaaS Developer", "API Engineer", "Open Source Maintainer"],
  Cybersecurity: ["Cybersecurity Analyst", "Security Analyst", "Ethical Hacker", "SOC Analyst", "Cyber Forensics Expert", "Security Architect", "Cloud Security Engineer", "Malware Analyst", "GRC Consultant", "Penetration Tester", "Privacy Engineer"],
  "Data Science": ["Data Scientist", "Data Analyst", "Data Engineer", "Business Intelligence Analyst", "Statistician", "Analytics Consultant", "Data Visualization Designer", "Quant Analyst", "Database Administrator", "Research Analyst"],
  Medicine: ["Doctor", "Surgeon", "Pediatrician", "Psychiatrist", "Dermatologist", "Cardiologist", "Neurologist", "Radiologist", "Anesthesiologist", "Medical Researcher"],
  Healthcare: ["Nurse", "Physiotherapist", "Clinical Psychologist", "Nutritionist", "Pharmacist", "Public Health Specialist", "Occupational Therapist", "Medical Lab Technologist", "Hospital Administrator", "Genetic Counselor"],
  Engineering: ["Robotics Engineer", "Mechanical Engineer", "Civil Engineer", "Electrical Engineer", "Electronics Engineer", "Chemical Engineer", "Aerospace Engineer", "Biomedical Engineer", "Automobile Engineer", "Mechatronics Engineer", "Industrial Engineer"],
  Aviation: ["Pilot", "Aircraft Maintenance Engineer", "Air Traffic Controller", "Cabin Crew Manager", "Aviation Safety Officer", "Airport Operations Manager", "Flight Dispatcher", "Drone Pilot", "Aeronautical Engineer", "Aviation Analyst"],
  Business: ["Entrepreneur", "Business Analyst", "Operations Manager", "Strategy Consultant", "Sales Manager", "HR Manager", "Supply Chain Manager", "Project Manager", "Customer Success Manager", "Growth Manager"],
  Finance: ["Investment Banker", "Financial Analyst", "Chartered Accountant", "Actuary", "Portfolio Manager", "Risk Analyst", "Fintech Product Manager", "Tax Consultant", "Wealth Advisor", "Auditor"],
  Law: ["Lawyer", "Corporate Lawyer", "Criminal Lawyer", "Civil Rights Lawyer", "Legal Advisor", "Judge", "IP Lawyer", "Cyber Law Specialist", "Policy Analyst", "Mediator"],
  Design: ["UI/UX Designer", "Graphic Designer", "Product Designer", "Interior Designer", "Fashion Designer", "Motion Designer", "Service Designer", "Interaction Designer", "Brand Designer", "Design Researcher"],
  Architecture: ["Architect", "Urban Planner", "Landscape Architect", "Sustainable Architect", "Interior Architect", "Restoration Architect", "BIM Specialist", "Set Designer", "Real Estate Developer", "Construction Manager"],
  Marketing: ["Digital Marketer", "SEO Specialist", "Brand Manager", "Content Strategist", "Performance Marketer", "Market Researcher", "Social Media Manager", "PR Manager", "Campaign Manager", "Influencer Manager"],
  Media: ["Journalist", "Filmmaker", "Video Editor", "Animator", "Photographer", "Radio Host", "Podcast Producer", "Screenwriter", "News Anchor", "Media Planner"],
  Education: ["Teacher", "Professor", "EdTech Designer", "Career Counselor", "Special Educator", "Curriculum Designer", "Academic Researcher", "Online Course Creator", "School Principal", "Learning Experience Designer"],
  Research: ["Scientist", "Lab Researcher", "Field Researcher", "Policy Researcher", "Social Scientist", "Biotech Researcher", "Materials Scientist", "Research Coordinator", "Clinical Trial Manager", "Innovation Analyst"],
  Government: ["Civil Services Officer", "Diplomat", "Policy Maker", "Municipal Commissioner", "Public Administrator", "Election Officer", "Urban Governance Specialist", "Public Finance Officer", "Development Officer", "RTI Specialist"],
  Defence: ["Army Officer", "Navy Officer", "Air Force Officer", "Defence Analyst", "Intelligence Officer", "Cyber Defence Specialist", "Defence Engineer", "Paramilitary Officer", "Military Doctor", "Defence Lawyer"],
  Sports: ["Cricketer", "Athlete", "Sports Coach", "Sports Analyst", "Fitness Trainer", "Sports Psychologist", "Sports Physiotherapist", "Team Manager", "Referee", "Sports Journalist", "Esports Player"],
  Arts: ["Fine Artist", "Illustrator", "Sculptor", "Art Director", "Museum Curator", "Art Therapist", "Comic Artist", "Painter", "Craft Designer", "Gallery Manager"],
  Music: ["Singer", "Music Producer", "Composer", "Performer", "Voice Artist", "Sound Engineer", "Instrumentalist", "Music Teacher", "DJ", "Lyricist", "Background Score Composer", "Music Therapist"],
  Dance: ["Dancer", "Choreographer", "Dance Instructor", "Movement Therapist", "Stage Performer", "Dance Company Manager", "Classical Dancer", "Contemporary Dancer", "Dance Fitness Coach", "Performance Director"],
  "Content Creation": ["YouTuber", "Streamer", "Blogger", "Short-form Video Creator", "Content Writer", "Creator Manager", "Community Builder", "Newsletter Writer", "Educational Creator", "Travel Creator"],
  Entrepreneurship: ["Startup Founder", "Social Entrepreneur", "Small Business Owner", "Franchise Owner", "Venture Builder", "Creator Entrepreneur", "D2C Founder", "Tech Founder", "Impact Founder", "Solopreneur"],
  Agriculture: ["Agricultural Scientist", "AgriTech Founder", "Farm Manager", "Soil Scientist", "Food Technologist", "Horticulturist", "Dairy Technologist", "Agricultural Economist", "Organic Farming Consultant", "Irrigation Engineer"],
  "Environmental Science": ["Environmental Scientist", "Climate Analyst", "Sustainability Consultant", "Wildlife Conservationist", "Renewable Energy Engineer", "Marine Biologist", "Waste Management Expert", "Environmental Lawyer", "ESG Analyst", "Water Resource Specialist"],
  "Space Science": ["Astronomer", "Astrophysicist", "Space Scientist", "Satellite Engineer", "Mission Planner", "Planetary Scientist", "Rocket Engineer", "Space Data Analyst", "Remote Sensing Scientist", "Space Policy Analyst"],
};

const categoryProfiles = {
  Technology: ["technologyInterest", "problemSolving", "analyticalThinking", "learningStyle"],
  AI: ["technologyInterest", "analyticalThinking", "problemSolving", "scientificCuriosity"],
  Software: ["technologyInterest", "problemSolving", "analyticalThinking", "independence"],
  Cybersecurity: ["analyticalThinking", "technologyInterest", "problemSolving", "independence"],
  "Data Science": ["analyticalThinking", "technologyInterest", "scientificCuriosity", "problemSolving"],
  Medicine: ["scientificCuriosity", "empathy", "analyticalThinking", "careerMotivation"],
  Healthcare: ["empathy", "communication", "scientificCuriosity", "teamwork"],
  Engineering: ["problemSolving", "analyticalThinking", "technologyInterest", "scientificCuriosity"],
  Aviation: ["analyticalThinking", "careerMotivation", "problemSolving", "independence"],
  Business: ["businessOrientation", "leadership", "communication", "entrepreneurship"],
  Finance: ["analyticalThinking", "businessOrientation", "problemSolving", "careerMotivation"],
  Law: ["communication", "analyticalThinking", "leadership", "empathy"],
  Design: ["creativity", "artisticInterest", "communication", "problemSolving"],
  Architecture: ["creativity", "analyticalThinking", "artisticInterest", "problemSolving"],
  Marketing: ["communication", "creativity", "businessOrientation", "socialOrientation"],
  Media: ["communication", "creativity", "artisticInterest", "socialOrientation"],
  Education: ["communication", "empathy", "learningStyle", "leadership"],
  Research: ["scientificCuriosity", "analyticalThinking", "independence", "learningStyle"],
  Government: ["leadership", "communication", "empathy", "analyticalThinking"],
  Defence: ["leadership", "careerMotivation", "teamwork", "problemSolving"],
  Sports: ["sportsOrientation", "careerMotivation", "teamwork", "riskTaking"],
  Arts: ["artisticInterest", "creativity", "independence", "communication"],
  Music: ["artisticInterest", "creativity", "communication", "careerMotivation"],
  Dance: ["artisticInterest", "sportsOrientation", "communication", "careerMotivation"],
  "Content Creation": ["creativity", "communication", "artisticInterest", "entrepreneurship"],
  Entrepreneurship: ["entrepreneurship", "businessOrientation", "leadership", "riskTaking"],
  Agriculture: ["scientificCuriosity", "problemSolving", "businessOrientation", "empathy"],
  "Environmental Science": ["scientificCuriosity", "empathy", "problemSolving", "careerMotivation"],
  "Space Science": ["scientificCuriosity", "technologyInterest", "analyticalThinking", "innovation"],
};

const variants = ["", "Junior ", "Senior ", "Lead ", "", "", "Future ", "Strategic "];

export const careerCatalog = Object.entries(careerCategories).flatMap(([category, careers]) =>
  careers.flatMap((career, careerIndex) =>
    variants.map((prefix, variantIndex) => {
      const title = prefix ? `${prefix}${career}` : career;
      return {
        id: `${category}-${careerIndex}-${variantIndex}-${title}`,
        category,
        title,
        description: `${title} blends ${category.toLowerCase()} expertise with strengths that Nexora can simulate and compare.`,
        requirements: buildRequirements(category, title, variantIndex),
      };
    })
  )
);

function buildRequirements(category, title, variantIndex) {
  const baseTraits = categoryProfiles[category] || ["careerMotivation", "learningStyle", "problemSolving", "communication"];
  const requirements = {};
  baseTraits.forEach((trait, index) => {
    requirements[trait] = Math.max(5.8, 8.8 - index * 0.7 + (variantIndex % 3) * 0.15);
  });
  if (title.includes("Senior") || title.includes("Lead") || title.includes("Strategic")) {
    requirements.leadership = Math.max(requirements.leadership || 0, 7.6);
    requirements.communication = Math.max(requirements.communication || 0, 7.2);
  }
  if (title.includes("AI") || title.includes("Data") || title.includes("Software")) {
    requirements.technologyInterest = Math.max(requirements.technologyInterest || 0, 8.4);
  }
  if (title.includes("Singer") || title.includes("Music") || title.includes("Artist") || title.includes("Dancer")) {
    requirements.artisticInterest = Math.max(requirements.artisticInterest || 0, 8.4);
  }
  return requirements;
}
