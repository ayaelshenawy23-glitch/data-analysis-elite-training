export interface MonthData {
  id: number;
  title: string;
  subtitle: string;
  topics: string[];
  project: string;
  source: string;
  description: string;
}

export const syllabus: MonthData[] = [
  {
    id: 1,
    title: 'Month 1',
    subtitle: 'Data Foundations & Excel Mastery',
    topics: [
      'Data Cleaning',
      'Pivot Tables',
      'Advanced Formulas (VLOOKUP, INDEX MATCH)',
      'Power Query',
    ],
    project: '"Sales Performance Dashboard" for a retail company.',
    source: 'Microsoft Excel Data Analysis standards.',
    description:
      'Master the foundation of data analysis using Excel. Learn to clean messy data, summarize it with Pivot Tables, and automate workflows with Power Query.',
  },
  {
    id: 2,
    title: 'Month 2',
    subtitle: 'SQL - The Language of Data',
    topics: [
      'Basic Queries',
      'Joins',
      'Subqueries',
      'CTEs',
      'Window Functions',
      'Database Schema Design',
    ],
    project:
      'Building and querying a "Library Management System" or "Music Store Database" (Chinook DB).',
    source: 'SQL for Data Science (UC Davis).',
    description:
      'Learn to communicate with databases. SQL is the most requested skill for Data Analysts. You will learn to extract, manipulate, and analyze data directly from relational databases.',
  },
  {
    id: 3,
    title: 'Month 3',
    subtitle: 'Python for Data Analysis',
    topics: ['Python Basics', 'NumPy for math', 'Pandas for data manipulation'],
    project: '"Automating Financial Reports" using Pandas.',
    source: 'IBM Data Science Professional Certificate.',
    description:
      'Transition to programming with Python. Use Pandas and NumPy to handle massive datasets that Excel cannot process, and automate your data cleaning and transformation tasks.',
  },
  {
    id: 4,
    title: 'Month 4',
    subtitle: 'Data Visualization & Storytelling',
    topics: [
      'Power BI or Tableau',
      'DAX functions',
      'Creating interactive Dashboards',
      'UI/UX for reports',
    ],
    project: '"Global COVID-19 Tracking Dashboard" or "E-commerce CEO Report".',
    source: 'Google Data Analytics Certificate.',
    description:
      'Learn to tell stories with data. Build interactive, professional dashboards that executives can use to make business decisions.',
  },
  {
    id: 5,
    title: 'Month 5',
    subtitle: 'Applied Statistics & EDA',
    topics: [
      'Descriptive & Inferential Statistics',
      'Hypothesis Testing',
      'Exploratory Data Analysis (EDA) using Seaborn & Matplotlib',
    ],
    project: '"Exploratory Analysis on Netflix Dataset" (Kaggle).',
    source: 'Kaggle & Academic Statistics.',
    description:
      'Understand the "why" behind the numbers. Learn statistical concepts to validate your findings and perform deep exploratory data analysis.',
  },
  {
    id: 6,
    title: 'Month 6',
    subtitle: 'Portfolio, Freelancing & Job Hunting',
    topics: [
      'GitHub for Data Science',
      'LinkedIn Optimization',
      'Upwork profile setup',
      'Interview Prep (Technical & Behavioral)',
    ],
    project:
      'A "Cap-Stone Project" using a real-world dataset from Kaggle to solve a business problem.',
    source: 'Industry Best Practices.',
    description:
      'Prepare for the job market. Build a strong portfolio, optimize your professional profiles, and practice for technical interviews to land your first role.',
  },
];
