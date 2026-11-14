/**
 * CampusConnect AI – Smart College Assistant
 * Full Interactive Functionality, NLP Knowledge Base & UI Controller
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. KNOWLEDGE BASE & NLP INTENT ENGINE
     ========================================================================== */
  
  const COLLEGE_KNOWLEDGE_BASE = [
    {
      id: 'courses_general',
      keywords: ['course', 'courses', 'program', 'programs', 'degrees', 'branch', 'branches', 'offer', 'offered', 'stream', 'curriculum', 'study'],
      title: 'Academic Programs Offered',
      answer: `🎓 <strong>CampusConnect University</strong> offers 6 premier industry-focused degree programs:
      <ul>
        <li><strong>B.Tech:</strong> Computer Science & Engineering (AI / ML / Data Science) – 4 Years</li>
        <li><strong>BCA:</strong> Bachelor of Computer Applications (Full-Stack & Cloud) – 3 Years</li>
        <li><strong>BBA:</strong> Business Administration (Digital Marketing & FinTech) – 3 Years</li>
        <li><strong>MBA:</strong> Master of Business Administration (Dual Specialization) – 2 Years</li>
        <li><strong>MCA:</strong> Master of Computer Applications (Cloud Native & DevOps) – 2 Years</li>
        <li><strong>B.Com (Hons):</strong> Accounting, Taxation & Investment Banking – 3 Years</li>
      </ul>
      💡 <em>Would you like detailed eligibility, syllabus, or fee info for any specific course?</em>`,
      quickReplies: ['B.Tech CSE Details', 'MBA Specializations', 'Check College Fees', 'Apply Now']
    },
    {
      id: 'btech',
      keywords: ['btech', 'b.tech', 'engineering', 'cse', 'computer science', 'ai', 'artificial intelligence', 'btech fee', 'btech eligibility'],
      title: 'B.Tech (Computer Science & Engineering)',
      answer: `💻 <strong>B.Tech in Computer Science & Engineering (AI & ML)</strong>
      <ul>
        <li><strong>Duration:</strong> 4 Years (8 Semesters)</li>
        <li><strong>Eligibility:</strong> 10+2 with Physics, Mathematics, and Chemistry/CS with min <strong>60% aggregate</strong>. Valid JEE Main or University CC-SAT score.</li>
        <li><strong>Annual Fee:</strong> <strong>₹1,50,000 / year</strong> (Semester installment: ₹75,000).</li>
        <li><strong>Placements:</strong> 97% placement record. Highest package <strong>₹45.5 LPA</strong>. Top recruiters: Google, Microsoft, Amazon, Adobe.</li>
        <li><strong>Key Labs:</strong> High-Performance NVIDIA AI Lab, Cloud Architecture Lab, Robotics & IoT Center.</li>
      </ul>`,
      quickReplies: ['B.Tech Scholarships', 'Admission Steps', 'Fill Enquiry Form']
    },
    {
      id: 'bba',
      keywords: ['bba', 'business administration', 'marketing', 'fintech', 'management ug', 'bba fee', 'bba eligibility'],
      title: 'BBA (Bachelor of Business Administration)',
      answer: `📈 <strong>BBA (Digital Marketing & FinTech)</strong>
      <ul>
        <li><strong>Duration:</strong> 3 Years (6 Semesters)</li>
        <li><strong>Eligibility:</strong> 10+2 in any stream (Commerce, Science, or Arts) with min <strong>50% marks</strong>.</li>
        <li><strong>Annual Fee:</strong> <strong>₹95,000 / year</strong> (EMI available at ₹7,900/mo).</li>
        <li><strong>Career Roles:</strong> Digital Growth Strategist, Financial Analyst, Brand Manager, FinTech Consultant.</li>
        <li><strong>Recruiters:</strong> Deloitte, KPMG, EY, HDFC Bank, Morgan Stanley.</li>
      </ul>`,
      quickReplies: ['BBA Syllabus', 'Hostel Facilities', 'Apply for BBA']
    },
    {
      id: 'bca',
      keywords: ['bca', 'computer applications', 'coding', 'web development', 'bca fee', 'bca eligibility'],
      title: 'BCA (Bachelor of Computer Applications)',
      answer: `🖥️ <strong>BCA (Full-Stack & Cloud Computing)</strong>
      <ul>
        <li><strong>Duration:</strong> 3 Years (6 Semesters)</li>
        <li><strong>Eligibility:</strong> 10+2 with Mathematics or Computer Science with min <strong>50% marks</strong>.</li>
        <li><strong>Annual Fee:</strong> <strong>₹85,000 / year</strong>.</li>
        <li><strong>Highlights:</strong> Hands-on coding in React, Node.js, Python, AWS Cloud, and DevOps from 1st Year.</li>
        <li><strong>Placements:</strong> Average package <strong>₹6.2 LPA</strong>. Top hiring by TCS, Wipro, Infosys, Cognizant.</li>
      </ul>`,
      quickReplies: ['MCA Program', 'Hostel Fees', 'Scholarships']
    },
    {
      id: 'mba',
      keywords: ['mba', 'master of business', 'cat', 'mat', 'marketing', 'finance', 'mba fee', 'mba eligibility'],
      title: 'MBA (Dual Specialization)',
      answer: `👔 <strong>MBA (Master of Business Administration)</strong>
      <ul>
        <li><strong>Duration:</strong> 2 Years (4 Semesters)</li>
        <li><strong>Specializations:</strong> Dual Major in Marketing, Finance, HR, Business Analytics, or Supply Chain.</li>
        <li><strong>Eligibility:</strong> Bachelor's Degree in any discipline with min <strong>50% aggregate</strong> + CAT/MAT/XAT/CC-MAT score.</li>
        <li><strong>Annual Fee:</strong> <strong>₹2,10,000 / year</strong> (includes corporate immersion and laptop kit).</li>
        <li><strong>Placements:</strong> 100% summer internships. Average package <strong>₹9.8 LPA</strong>. Top package <strong>₹28 LPA</strong>.</li>
      </ul>`,
      quickReplies: ['Admission Process', 'Placement Records', 'Enquire for MBA']
    },
    {
      id: 'mca',
      keywords: ['mca', 'master of computer applications', 'pg tech', 'software engineering', 'mca fee', 'mca eligibility'],
      title: 'MCA (Master of Computer Applications)',
      answer: `🚀 <strong>MCA (Cloud Native & DevOps Engineering)</strong>
      <ul>
        <li><strong>Duration:</strong> 2 Years (4 Semesters)</li>
        <li><strong>Eligibility:</strong> BCA / B.Sc (Computer Science / IT) or any graduate with Mathematics at 10+2 or Degree level with min <strong>50% marks</strong>.</li>
        <li><strong>Annual Fee:</strong> <strong>₹1,20,000 / year</strong>.</li>
        <li><strong>Key Highlights:</strong> Microservices, Kubernetes, Docker, Cyber Security & AI integration.</li>
        <li><strong>Recruiters:</strong> Oracle, SAP, IBM, Cisco, Accenture.</li>
      </ul>`,
      quickReplies: ['Check Fees', 'Admission Steps', 'Ask About Hostel']
    },
    {
      id: 'bcom',
      keywords: ['bcom', 'b.com', 'commerce', 'accounting', 'finance', 'taxation', 'acca', 'bcom fee'],
      title: 'B.Com (Honours - Finance & Accounting)',
      answer: `📊 <strong>B.Com (Honours – Accounting, Taxation & FinTech)</strong>
      <ul>
        <li><strong>Duration:</strong> 3 Years (6 Semesters)</li>
        <li><strong>Eligibility:</strong> 10+2 Commerce or Science with min <strong>50% aggregate</strong>.</li>
        <li><strong>Annual Fee:</strong> <strong>₹75,000 / year</strong>.</li>
        <li><strong>Certifications:</strong> Embedded ACCA / CA foundational training and NSE Capital Markets module.</li>
        <li><strong>Career Scope:</strong> Investment Banking, Corporate Tax Advisory, Financial Auditing.</li>
      </ul>`,
      quickReplies: ['College Fees', 'Scholarships', 'Contact Admissions']
    },
    {
      id: 'admission_process',
      keywords: ['admission', 'admissions', 'apply', 'procedure', 'process', 'how to apply', 'steps', 'entrance exam', 'register', 'seat', 'cut off', 'cutoff'],
      title: 'Step-by-Step Admission Process',
      answer: `📝 <strong>Admission Procedure for Academic Year 2026-27:</strong>
      <ol>
        <li><strong>Step 1: Register Online</strong> – Visit the admissions portal and create your applicant profile.</li>
        <li><strong>Step 2: Fill Application Form</strong> – Choose your course, enter marks, and upload personal details.</li>
        <li><strong>Step 3: Document Verification</strong> – Upload 10th/12th marksheets, ID proof, and photo.</li>
        <li><strong>Step 4: Fee Payment</strong> – Complete the seat acceptance fee payment via UPI/Cards/Net Banking.</li>
        <li><strong>Step 5: Confirmation</strong> – Receive your official Provisional Admission Letter & Welcome Kit!</li>
      </ol>
      🎯 <em>Cutoff for direct merit seat in B.Tech CSE is 85%+ in 10+2 PCM or 80+ percentile in JEE Main.</em>`,
      quickReplies: ['Document Checklist', 'Check Fees', 'Fill Enquiry Form']
    },
    {
      id: 'fee_structure',
      keywords: ['fee', 'fees', 'tuition', 'cost', 'charge', 'charges', 'installment', 'payment', 'emi', 'price', 'expensive', 'refund'],
      title: 'College Fee Structure',
      answer: `💳 <strong>Annual Tuition Fee Structure (2026-27):</strong>
      <ul>
        <li><strong>B.Tech (CSE / AI):</strong> ₹1,50,000 / year</li>
        <li><strong>BCA:</strong> ₹85,000 / year</li>
        <li><strong>BBA:</strong> ₹95,000 / year</li>
        <li><strong>MBA:</strong> ₹2,10,000 / year</li>
        <li><strong>MCA:</strong> ₹1,20,000 / year</li>
        <li><strong>B.Com (Hons):</strong> ₹75,000 / year</li>
      </ul>
      ✨ <strong>Payment Options:</strong> Semester installments (50% per term) or 0% interest monthly EMI via SBI/HDFC/ICICI tie-ups. One-time refundable security deposit of ₹10,000 applies.`,
      quickReplies: ['Scholarships Info', 'Hostel Fees', 'B.Tech Details']
    },
    {
      id: 'scholarships',
      keywords: ['scholarship', 'scholarships', 'financial aid', 'concession', 'waiver', 'discount', 'merit', 'free seat', 'sports quota', 'girl'],
      title: 'Scholarship Schemes & Financial Aid',
      answer: `🏆 <strong>CampusConnect Scholarship Schemes (₹2.5 Cr+ Annual Pool):</strong>
      <ul>
        <li>🥇 <strong>Super Merit Scholarship:</strong> 95%+ in 10+2 = <strong>100% Tuition Waiver</strong>!</li>
        <li>🥈 <strong>Merit Scholarship:</strong> 90% – 94.9% = <strong>50% Tuition Waiver</strong>; 80% – 89.9% = <strong>25% Tuition Waiver</strong>.</li>
        <li>⚽ <strong>Sports & Cultural Stars:</strong> Up to <strong>75% fee concession</strong> for state/national medalists.</li>
        <li>👩‍🎓 <strong>Women in Tech (STEM):</strong> Dedicated <strong>25% fee waiver</strong> for female students joining engineering & BCA.</li>
        <li>🛡️ <strong>Defense & Police Personnel Wards:</strong> Special <strong>20% concession</strong> across all years.</li>
      </ul>
      📌 <em>All scholarships are renewable based on maintaining a minimum 7.5 CGPA.</em>`,
      quickReplies: ['Admission Steps', 'What is B.Tech Fee?', 'Enquire Now']
    },
    {
      id: 'placements',
      keywords: ['placement', 'placements', 'package', 'salary', 'recruiter', 'recruiters', 'highest package', 'average package', 'job', 'jobs', 'internship', 'companies', 'google', 'amazon'],
      title: 'Placement Records & Career Cell',
      answer: `🚀 <strong>Outstanding Placement Statistics:</strong>
      <ul>
        <li>🌟 <strong>Highest International Package:</strong> <strong>₹45.5 LPA</strong> (Offered by global tech firm)</li>
        <li>🏆 <strong>Highest Domestic Package:</strong> <strong>₹32.0 LPA</strong></li>
        <li>📊 <strong>Overall Average Package:</strong> <strong>₹8.4 LPA</strong> (Tech) & <strong>₹7.6 LPA</strong> (Management)</li>
        <li>📈 <strong>Placement Rate:</strong> <strong>94.8%</strong> of eligible students placed in 2025.</li>
        <li>🏢 <strong>500+ Top Recruiters:</strong> Google, Microsoft, Amazon, Deloitte, Oracle, TCS, Infosys, Cisco, EY, KPMG.</li>
        <li>💼 <strong>Pre-Placement Training:</strong> 200+ hours of coding bootcamps, soft-skills, and mock interviews.</li>
      </ul>`,
      quickReplies: ['Explore Courses', 'Admission Process', 'Campus Life']
    },
    {
      id: 'hostel',
      keywords: ['hostel', 'hostels', 'accommodation', 'room', 'rooms', 'mess', 'food', 'stay', 'dining', 'curfew', 'living', 'wifi'],
      title: 'Hostel Accommodation & Dining',
      answer: `🏡 <strong>Campus Residential Facilities:</strong>
      <ul>
        <li><strong>Room Types:</strong> AC & Non-AC rooms in 2-sharing and 3-sharing options with attached bathrooms.</li>
        <li><strong>Hostel Fees:</strong>
          <ul>
            <li>Non-AC 3-Sharing: <strong>₹65,000 / year</strong> (includes food & laundry)</li>
            <li>AC 2-Sharing: <strong>₹95,000 / year</strong> (includes food & laundry)</li>
          </ul>
        </li>
        <li><strong>Food & Mess:</strong> 4 wholesome, hygienic meals daily (Breakfast, Lunch, Evening Snacks, Dinner). Vegetarian & Non-Vegetarian counters.</li>
        <li><strong>Amenities:</strong> 24/7 high-speed Wi-Fi, laundry service, indoor gym, reading room, and medical doctor on campus.</li>
        <li><strong>Security:</strong> Biometric gates, 120+ CCTV cameras, female wardens, campus curfew is <strong>9:30 PM</strong>.</li>
      </ul>`,
      quickReplies: ['Hostel Fees', 'Campus Life', 'Contact Hostel Office']
    },
    {
      id: 'documents',
      keywords: ['document', 'documents', 'certificate', 'certificates', 'checklist', 'marksheet', 'tc', 'transfer', 'migration', 'proof', 'photo', 'required'],
      title: 'Required Admission Documents',
      answer: `📋 <strong>Document Checklist for Verification:</strong>
      <ol>
        <li>10th Standard Marksheet & Passing Certificate (for Age Proof)</li>
        <li>12th Standard Marksheet (Original + 2 Attested Copies)</li>
        <li>Transfer Certificate (TC) & Conduct / Migration Certificate</li>
        <li>Government Photo ID Proof (Aadhaar Card, Passport, or PAN)</li>
        <li>Entrance Exam Scorecard (JEE Main, CAT, MAT, or CC-SAT)</li>
        <li>6 Recent Passport Size Photographs (White background)</li>
        <li>Category / Income Certificate (Required only for Scholarship claims)</li>
      </ol>
      💡 <em>You can also download or print the official checklist from the Admissions section!</em>`,
      quickReplies: ['View Checklist Modal', 'Admission Steps', 'Apply Online']
    },
    {
      id: 'campus_life',
      keywords: ['campus', 'life', 'club', 'clubs', 'sports', 'fest', 'festivals', 'activities', 'gym', 'library', 'canteen', 'events', 'technova'],
      title: 'Campus Life & Extracurriculars',
      answer: `🎉 <strong>Vibrant Student Life at CampusConnect:</strong>
      <ul>
        <li><strong>Student Clubs:</strong> 30+ clubs including Google Developer Student Club (GDSC), Robotics Society, Drama Club, Rotaract, and E-Cell.</li>
        <li><strong>Annual Fest:</strong> <em>'TechNova'</em> – 3-day techno-cultural fest hosting 5,000+ students with hackathons and celebrity nights!</li>
        <li><strong>Sports Complex:</strong> Olympic-standard swimming pool, basketball & tennis courts, football turf, and indoor badminton court.</li>
        <li><strong>Central Library:</strong> 24/7 open digital knowledge center with access to IEEE, Springer, ACM journals, and 60,000+ books.</li>
        <li><strong>Cafeteria Hub:</strong> Multi-cuisine cafes serving Starbucks coffee, Subway, South Indian snacks, and North Indian meals.</li>
      </ul>`,
      quickReplies: ['Hostel Facilities', 'Courses Offered', 'Placement Records']
    },
    {
      id: 'contact_info',
      keywords: ['contact', 'address', 'phone', 'number', 'helpline', 'email', 'location', 'reach', 'visiting', 'map', 'where', 'city'],
      title: 'College Contact Information',
      answer: `📍 <strong>CampusConnect University Contact Directory:</strong>
      <ul>
        <li><strong>Address:</strong> Knowledge City Express Highway, Sector 12, Bengaluru, Karnataka - 560100 (Demo).</li>
        <li><strong>Helpline Toll-Free:</strong> <strong>1800-200-CAMPUS (226787)</strong></li>
        <li><strong>Direct Admissions:</strong> +91 (080) 2345-6789 / 90</li>
        <li><strong>Admissions Email:</strong> admissions@campusconnect.edu</li>
        <li><strong>Visiting Hours:</strong> Monday – Friday: 9:00 AM to 5:30 PM | Saturday: 9:30 AM to 2:00 PM.</li>
      </ul>
      🚌 <em>Free university shuttle buses run every 15 minutes from the nearest Metro Station!</em>`,
      quickReplies: ['Fill Quick Enquiry', 'Courses Offered', 'Admission Process']
    },
    {
      id: 'about_college',
      keywords: ['about', 'history', 'ranking', 'accreditation', 'naac', 'nba', 'university', 'college', 'who are you', 'faculty', 'vision'],
      title: 'About CampusConnect University',
      answer: `🏛️ <strong>About CampusConnect University:</strong>
      <ul>
        <li><strong>Accreditation:</strong> Accredited with prestigious <strong>NAAC A++ grade (3.82 CGPA)</strong> and NBA accredited engineering branches.</li>
        <li><strong>Campus:</strong> 120-acre lush green eco-friendly smart campus powered by 100% solar energy.</li>
        <li><strong>Faculty:</strong> 250+ faculty members with PhDs from IITs, IISc, and premier global universities. 15:1 student-to-faculty ratio.</li>
        <li><strong>Research:</strong> 50+ sponsored research projects and 250+ patents filed by students and professors.</li>
        <li><strong>Global Ties:</strong> Student exchange programs with universities in the USA, UK, Germany, and Singapore.</li>
      </ul>`,
      quickReplies: ['Courses Offered', 'Placement Record', 'Admission Steps']
    },
    {
      id: 'greetings',
      keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'namaste', 'sup'],
      title: 'Greetings',
      answer: `👋 <strong>Hello there!</strong> Welcome to CampusConnect AI Assistant. How can I guide you today?
      <br><br>You can ask me about:
      <br>&bull; 📚 <strong>Course options & eligibility</strong> (B.Tech, BBA, BCA, MBA, MCA, B.Com)
      <br>&bull; 💰 <strong>Annual fee schedules & installment plans</strong>
      <br>&bull; 📝 <strong>Step-by-step admission process</strong>
      <br>&bull; 🏆 <strong>Merit scholarships up to 100%</strong>
      <br>&bull; 🚀 <strong>Placement records & highest package</strong>`,
      quickReplies: ['Explore Courses', 'Admission Process', 'College Fees', 'Scholarships']
    },
    {
      id: 'bot_identity',
      keywords: ['who are you', 'what are you', 'what can you do', 'who made you', 'how do you work', 'ai assistant'],
      title: 'Bot Identity',
      answer: `🤖 I am <strong>CampusConnect AI</strong>, your 24/7 intelligent college counsellor!
      <br><br>I am built with natural language keyword scoring to provide instant answers to college queries about admissions, courses, fees, scholarships, hostels, and placements.
      <br><br>I don't require external paid APIs and operate with a built-in comprehensive institutional knowledge base. Ask me anything!`,
      quickReplies: ['What courses are available?', 'What are the college fees?', 'Are scholarships available?']
    },
    {
      id: 'thanks',
      keywords: ['thank', 'thanks', 'thank you', 'awesome', 'great', 'helpful', 'nice', 'cool', 'perfect', 'ok thanks'],
      title: 'Gratitude',
      answer: `😊 <strong>You are very welcome!</strong> I am always here to help you achieve your academic goals.
      <br><br>Feel free to submit a Quick Enquiry if you'd like a call back from our faculty counsellors, or ask any other question!`,
      quickReplies: ['Fill Enquiry Form', 'Explore Courses', 'Download Brochure']
    }
  ];

  /* Detailed Data for Course Modals */
  const COURSE_DETAILS_DATA = {
    btech: {
      title: 'B.Tech in Computer Science & Engineering',
      tag: '4 Years &bull; 8 Semesters &bull; Bachelor of Technology',
      badgeClass: 'bg-grad-purple',
      icon: 'fa-microchip',
      overview: 'Our flagship 4-year undergraduate engineering degree designed in collaboration with Silicon Valley tech leaders. Students gain deep mastery of core computer architecture, machine learning algorithms, scalable cloud systems, and cybersecurity.',
      stats: { duration: '4 Years', fee: '₹1,50,000 / year', eligibility: '10+2 PCM (60%)', seats: '180 Seats' },
      specializations: ['Artificial Intelligence & Machine Learning', 'Cloud Computing & DevOps', 'Cyber Security & Forensics', 'Data Science & Big Data Analytics'],
      syllabusHighlights: [
        'Semester 1-2: Data Structures, C/C++, Engineering Math, Digital Electronics',
        'Semester 3-4: Object-Oriented Java, Database Systems, Computer Networks, OS',
        'Semester 5-6: AI Algorithms, Deep Learning, Cloud Architecture, Full Stack Web',
        'Semester 7-8: Capstone Industry Project, Cyber Security, 6-Month Internship'
      ],
      careers: 'Software Development Engineer (SDE), AI Engineer, Cloud Architect, Data Scientist, Cybersecurity Analyst.'
    },
    bba: {
      title: 'BBA – Bachelor of Business Administration',
      tag: '3 Years &bull; 6 Semesters &bull; Undergraduate Management',
      badgeClass: 'bg-grad-pink',
      icon: 'fa-briefcase',
      overview: 'A contemporary business program blending essential management strategy, organizational behavior, FinTech innovations, and digital brand management through real-world Harvard business case studies.',
      stats: { duration: '3 Years', fee: '₹95,000 / year', eligibility: '10+2 Any Stream (50%)', seats: '120 Seats' },
      specializations: ['Digital Marketing & Social Media Growth', 'Financial Technology (FinTech)', 'Human Resource Analytics', 'International Business'],
      syllabusHighlights: [
        'Semester 1-2: Principles of Management, Business Accounting, Microeconomics',
        'Semester 3-4: Marketing Management, Corporate Finance, Business Law, FinTech',
        'Semester 5-6: Strategic Management, Entrepreneurship Launchpad, Live Internship'
      ],
      careers: 'Marketing Strategist, Financial Risk Analyst, Business Consultant, HR Business Partner, Entrepreneur.'
    },
    bca: {
      title: 'BCA – Bachelor of Computer Applications',
      tag: '3 Years &bull; 6 Semesters &bull; Computer Applications',
      badgeClass: 'bg-grad-blue',
      icon: 'fa-laptop-code',
      overview: 'An intensive software engineering and coding-oriented degree designed for rapid entry into software, web, and mobile application engineering roles.',
      stats: { duration: '3 Years', fee: '₹85,000 / year', eligibility: '10+2 with Math/CS (50%)', seats: '120 Seats' },
      specializations: ['Full-Stack Web Development', 'Mobile App Development (React Native & Flutter)', 'Cloud Computing with AWS'],
      syllabusHighlights: [
        'Semester 1-2: Problem Solving in C & Python, Web Basics (HTML/CSS/JS), Math',
        'Semester 3-4: Data Structures, Java & Spring Boot, SQL/NoSQL Databases',
        'Semester 5-6: React.js & Node.js, Cloud Deployment, Live Industry Project'
      ],
      careers: 'Full-Stack Developer, Frontend Engineer, Backend Developer, Mobile Application Developer, Quality Assurance Lead.'
    },
    mba: {
      title: 'MBA – Master of Business Administration',
      tag: '2 Years &bull; 4 Semesters &bull; Postgraduate Master Degree',
      badgeClass: 'bg-grad-orange',
      icon: 'fa-chart-pie',
      overview: 'Our premier dual-specialization postgraduate program focused on cultivating executive leadership, analytical decision-making, and strategic foresight.',
      stats: { duration: '2 Years', fee: '₹2,10,000 / year', eligibility: 'Graduation (50%) + CAT/MAT', seats: '90 Seats' },
      specializations: ['Finance & Investment Banking', 'Marketing & Brand Strategy', 'Business Analytics & Data Insights', 'Supply Chain & Operations'],
      syllabusHighlights: [
        'Semester 1: Managerial Economics, Financial Accounting, Organizational Behavior',
        'Semester 2: Corporate Finance, Marketing Strategy, Operations Research',
        'Semester 3: Dual Specialization Electives, Advanced Business Analytics',
        'Semester 4: Global Business Immersion, Strategic Capstone Project'
      ],
      careers: 'Management Consultant, Investment Banker, Product Manager, Brand Director, Corporate Strategist.'
    },
    mca: {
      title: 'MCA – Master of Computer Applications',
      tag: '2 Years &bull; 4 Semesters &bull; Postgraduate Software Degree',
      badgeClass: 'bg-grad-cyan',
      icon: 'fa-network-wired',
      overview: 'An advanced postgraduate program tailored for software engineers seeking mastery in enterprise cloud architectures, distributed backend computing, and modern DevOps pipelines.',
      stats: { duration: '2 Years', fee: '₹1,20,000 / year', eligibility: 'BCA / B.Sc CS (50%)', seats: '60 Seats' },
      specializations: ['Cloud Native Architecture', 'DevOps & Site Reliability', 'Enterprise Backend Engineering'],
      syllabusHighlights: [
        'Semester 1: Advanced Algorithms, Distributed Systems, Python/Go Programming',
        'Semester 2: Cloud Computing (AWS/Azure), Docker & Kubernetes, Microservices',
        'Semester 3: Big Data Technologies, Enterprise Security, CI/CD Pipelines',
        'Semester 4: Full Semester Corporate Software Internship'
      ],
      careers: 'DevOps Architect, Senior Backend Engineer, Cloud Solutions Specialist, Technical Lead.'
    },
    bcom: {
      title: 'B.Com (Honours) – Accounting & Finance',
      tag: '3 Years &bull; 6 Semesters &bull; Commerce Honours',
      badgeClass: 'bg-grad-emerald',
      icon: 'fa-coins',
      overview: 'Comprehensive commercial degree integrated with global ACCA modules, preparing students for leadership in auditing, corporate taxation, and capital markets.',
      stats: { duration: '3 Years', fee: '₹75,000 / year', eligibility: '10+2 Commerce/Science (50%)', seats: '120 Seats' },
      specializations: ['Accounting & Corporate Auditing', 'Banking, Insurance & Financial Markets', 'International Taxation & GST'],
      syllabusHighlights: [
        'Semester 1-2: Financial Accounting, Business Law, Microeconomics, Banking Ops',
        'Semester 3-4: Corporate Accounting, Income Tax Law, Cost Accounting, Auditing',
        'Semester 5-6: Management Accounting, Financial Markets, Investment Analysis'
      ],
      careers: 'Chartered Accountant (via ACCA), Financial Auditor, Tax Advisor, Equity Analyst, Commercial Banker.'
    }
  };

  /* Detailed Information for College Info Cards Modal */
  const INFO_MODAL_DATA = {
    'about-modal': {
      title: 'About CampusConnect University',
      icon: 'fa-building-columns',
      bg: 'bg-grad-purple',
      content: `
        <p><strong>CampusConnect University</strong> was established as a premier autonomous institution committed to fostering academic brilliance, creative engineering, and ethical entrepreneurship.</p>
        <br>
        <h4>Key Institutional Accreditations:</h4>
        <ul style="margin: 0.5rem 0 1rem 1.5rem;">
          <li><strong>NAAC A++ Grade:</strong> Institutional CGPA of 3.82 out of 4.0.</li>
          <li><strong>NBA Accredited:</strong> All technical undergraduate engineering programs.</li>
          <li><strong>UGC & AICTE Approved:</strong> Recognized under Section 2(f) and 12(B) of UGC Act.</li>
        </ul>
        <h4>Campus Infrastructure:</h4>
        <p>Spread over 120 lush acres, our campus features fully air-conditioned smart lecture theaters, an advanced central computing cluster, an innovation incubation park, and modern sports facilities.</p>
      `,
      query: 'Tell me about the college history and accreditation'
    },
    'fees-modal': {
      title: 'Comprehensive Fee Structure & Plans',
      icon: 'fa-receipt',
      bg: 'bg-grad-orange',
      content: `
        <p>We maintain an entirely transparent fee structure with zero concealed overheads.</p>
        <br>
        <table class="styled-table" style="margin-bottom: 1rem;">
          <thead>
            <tr><th>Program</th><th>Duration</th><th>Annual Tuition</th><th>Sem Installment</th></tr>
          </thead>
          <tbody>
            <tr><td>B.Tech (CSE)</td><td>4 Years</td><td>₹1,50,000</td><td>₹75,000</td></tr>
            <tr><td>BBA</td><td>3 Years</td><td>₹95,000</td><td>₹47,500</td></tr>
            <tr><td>BCA</td><td>3 Years</td><td>₹85,000</td><td>₹42,500</td></tr>
            <tr><td>MBA</td><td>2 Years</td><td>₹2,10,000</td><td>₹1,05,000</td></tr>
            <tr><td>MCA</td><td>2 Years</td><td>₹1,20,000</td><td>₹60,000</td></tr>
            <tr><td>B.Com (Hons)</td><td>3 Years</td><td>₹75,000</td><td>₹37,500</td></tr>
          </tbody>
        </table>
        <p><small>* Refundable institutional caution deposit of ₹10,000 payable during first semester admission only.</small></p>
      `,
      query: 'What are the college fees for all courses?'
    },
    'scholarships-modal': {
      title: 'Scholarship Schemes & Financial Aid',
      icon: 'fa-award',
      bg: 'bg-grad-emerald',
      content: `
        <p>Our comprehensive scholarship matrix ensures no deserving student is hindered by economic circumstances.</p>
        <br>
        <h4>Available Scholarships for 2026-27:</h4>
        <ul style="margin: 0.5rem 0 1rem 1.5rem;">
          <li><strong>100% Tuition Waiver:</strong> Candidates securing 95%+ in 10+2 examinations or Top 1,000 ranks in JEE Main.</li>
          <li><strong>50% Tuition Waiver:</strong> Candidates securing 90% – 94.9% in 10+2 exams.</li>
          <li><strong>25% Tuition Waiver:</strong> Candidates securing 80% – 89.9% in 10+2 exams.</li>
          <li><strong>Women in STEM Grant:</strong> 25% annual fee waiver for all female applicants in B.Tech & BCA.</li>
          <li><strong>Sports Quota:</strong> Up to 75% fee concession for national/state level champions.</li>
        </ul>
      `,
      query: 'Are scholarships available and what is the eligibility?'
    },
    'placements-modal': {
      title: 'Placements & Corporate Relations',
      icon: 'fa-briefcase',
      bg: 'bg-grad-violet',
      content: `
        <p>The Corporate Resource Center (CRC) bridges classroom education and industry demands, maintaining partnerships with over 500 leading corporations.</p>
        <br>
        <h4>Placement Highlights:</h4>
        <ul style="margin: 0.5rem 0 1rem 1.5rem;">
          <li><strong>Overall Placement:</strong> 94.8% eligible students placed across technical & management batches.</li>
          <li><strong>Highest International Offer:</strong> ₹45.5 LPA (Google EMEA).</li>
          <li><strong>Highest Domestic Offer:</strong> ₹32.0 LPA (Amazon India).</li>
          <li><strong>Average Technical Salary:</strong> ₹8.4 LPA.</li>
          <li><strong>Top Hiring Partners:</strong> Google, Microsoft, Amazon, Oracle, Deloitte, Infosys, TCS, Cisco, PwC, EY.</li>
        </ul>
      `,
      query: 'What is the placement record and who are the top recruiters?'
    },
    'hostel-modal': {
      title: 'Hostel Accommodation & Amenities',
      icon: 'fa-hotel',
      bg: 'bg-grad-cyan',
      content: `
        <p>We provide modern on-campus student residences with separate multi-story hostel buildings for male and female scholars.</p>
        <br>
        <h4>Hostel Tariffs & Details:</h4>
        <ul style="margin: 0.5rem 0 1rem 1.5rem;">
          <li><strong>Triple Occupancy (Non-AC):</strong> ₹65,000 / year (includes 4-time dining & laundry).</li>
          <li><strong>Double Occupancy (AC):</strong> ₹95,000 / year (includes 4-time dining & laundry).</li>
          <li><strong>Single Occupancy (AC - Limited):</strong> ₹1,20,000 / year.</li>
        </ul>
        <p>Facilities include 24/7 power backup, Wi-Fi 6 connectivity, common reading and television rooms, round-the-clock medical infirmary with ambulance, and biometric access control.</p>
      `,
      query: 'Is hostel accommodation available and what are the fees?'
    },
    'campus-modal': {
      title: 'Campus Life & Student Organizations',
      icon: 'fa-masks-theater',
      bg: 'bg-grad-amber',
      content: `
        <p>Life at CampusConnect extends far beyond lecture halls. Experience an active community where passion meets opportunity.</p>
        <br>
        <h4>Clubs & Societies:</h4>
        <ul style="margin: 0.5rem 0 1rem 1.5rem;">
          <li><strong>Technical Societies:</strong> Google Developer Student Club (GDSC), ACM Chapter, Robotics League, Cyber Security Guild.</li>
          <li><strong>Cultural & Arts:</strong> 'Aura' Music Society, 'Natraj' Dance Guild, CineClub, Literary & Debating Society.</li>
          <li><strong>Flagship Events:</strong> 'TechNova' (Annual 3-day tech extravaganza), 'Utsav' (Cultural Carnival), 'Spartans' Inter-College Sports League.</li>
        </ul>
      `,
      query: 'What is campus life and student club activities like?'
    }
  };

  /* ==========================================================================
     2. STATE MANAGEMENT & STORAGE INITIALIZATION
     ========================================================================== */

  let voiceSynthesisEnabled = false;
  let isVoiceRecognitionActive = false;

  // Initialize or fetch saved demo enquiries from LocalStorage
  const getStoredEnquiries = () => {
    try {
      const data = localStorage.getItem('campusconnect_enquiries');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('LocalStorage error:', e);
      return [];
    }
  };

  const saveEnquiriesToStorage = (enquiries) => {
    try {
      localStorage.setItem('campusconnect_enquiries', JSON.stringify(enquiries));
      updateEnquiriesBadge();
      updateDashboardCounter();
    } catch (e) {
      console.error('LocalStorage save error:', e);
    }
  };

  // Seed initial demo enquiries if empty so evaluator sees sample data immediately!
  const seedDemoEnquiriesIfEmpty = () => {
    let enquiries = getStoredEnquiries();
    if (enquiries.length === 0) {
      const sampleSeeds = [
        {
          id: 'ENQ-' + Date.now().toString().slice(-4),
          name: 'Aarav Patel',
          email: 'aarav.patel@example.com',
          phone: '9876543210',
          course: 'B.Tech (CSE / AI & ML)',
          question: 'Inquiring about 92% 10+2 marksheet merit scholarship cutoff.',
          timestamp: new Date(Date.now() - 3600000 * 5).toLocaleString()
        },
        {
          id: 'ENQ-' + (Date.now() + 1).toString().slice(-4),
          name: 'Priya Sundaram',
          email: 'priya.s@example.com',
          phone: '9845123456',
          course: 'MBA (Dual Specialization)',
          question: 'Want to know CAT cutoff marks and installment schedule.',
          timestamp: new Date(Date.now() - 3600000 * 24).toLocaleString()
        }
      ];
      saveEnquiriesToStorage(sampleSeeds);
    }
  };
  seedDemoEnquiriesIfEmpty();

  // AI queries answered counter
  let chatQuestionsCount = parseInt(localStorage.getItem('campusconnect_chat_count') || '1420', 10);

  const incrementChatCounter = () => {
    chatQuestionsCount++;
    localStorage.setItem('campusconnect_chat_count', chatQuestionsCount.toString());
    const counterEl = document.getElementById('stat-chat-counter');
    if (counterEl) {
      counterEl.textContent = chatQuestionsCount;
    }
  };

  /* ==========================================================================
     3. DOM ELEMENTS
     ========================================================================== */

  // Chatbot Elements
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-user-input');
  const chatMessages = document.getElementById('chat-messages');
  const typingIndicator = document.getElementById('typing-indicator');
  const voiceToggleBtn = document.getElementById('chat-voice-toggle');
  const voiceInputBtn = document.getElementById('voice-input-btn');
  const chatClearBtn = document.getElementById('chat-clear-btn');
  const chatExportBtn = document.getElementById('chat-export-btn');
  const suggestedPillsContainer = document.getElementById('suggested-pills');

  // Hero search
  const heroSearchInput = document.getElementById('hero-search-input');
  const heroSearchBtn = document.getElementById('hero-search-submit');

  // Navigation & Theme
  const header = document.getElementById('header');
  const themeToggle = document.getElementById('theme-toggle');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');
  const floatingChatBtn = document.getElementById('floating-btn');

  // Forms
  const enquiryForm = document.getElementById('enquiry-form');
  const enquirySuccess = document.getElementById('enquiry-success');
  const submitAnotherBtn = document.getElementById('submit-another-btn');
  const askAiFromEnquiryBtn = document.getElementById('ask-ai-from-enquiry');
  const contactForm = document.getElementById('contact-direct-form');
  const newsletterForm = document.getElementById('newsletter-form');

  // Modals
  const courseModal = document.getElementById('course-modal');
  const courseModalClose = document.getElementById('course-modal-close');
  const infoModal = document.getElementById('info-modal');
  const infoModalClose = document.getElementById('info-modal-close');
  const infoModalDismiss = document.getElementById('info-modal-dismiss');
  const infoModalAskBtn = document.getElementById('info-modal-ask-btn');
  const docsModal = document.getElementById('docs-modal');
  const docsModalClose = document.getElementById('docs-modal-close');
  const docsChecklistBtn = document.getElementById('docs-checklist-btn');
  const docsAskAiBtn = document.getElementById('docs-ask-ai-btn');
  const printChecklistBtn = document.getElementById('print-checklist-btn');
  const enquiriesDrawer = document.getElementById('enquiries-drawer');
  const enquiriesDrawerClose = document.getElementById('enquiries-drawer-close');
  const drawerCloseBottom = document.getElementById('drawer-close-bottom');
  const viewEnquiriesBtn = document.getElementById('view-enquiries-btn');
  const clearEnquiriesBtn = document.getElementById('clear-enquiries-btn');
  const exportEnquiriesBtn = document.getElementById('export-enquiries-btn');
  const searchModal = document.getElementById('search-modal');
  const searchModalClose = document.getElementById('search-modal-close');
  const searchTrigger = document.getElementById('search-trigger');
  const globalSearchInput = document.getElementById('global-search-input');
  const searchResultsList = document.getElementById('search-results-list');
  const downloadBrochureBtn = document.getElementById('download-brochure-btn');

  // Toast Container
  const toastContainer = document.getElementById('toast-container');

  /* ==========================================================================
     4. UI TOAST NOTIFICATION UTILITY
     ========================================================================== */

  const showToast = (message, icon = 'fa-circle-check', type = 'info') => {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 3200);
  };

  /* ==========================================================================
     5. INTELLIGENT AI RESPONSE ENGINE
     ========================================================================== */

  /**
   * Evaluates query against the knowledge base using keyword scoring and regex intents
   */
  const findBestAnswer = (query) => {
    const cleaned = query.toLowerCase().trim();

    // 1. Exact phrase / key term checks
    if (cleaned.includes('document') || cleaned.includes('certificate') || cleaned.includes('checklist')) {
      return COLLEGE_KNOWLEDGE_BASE.find(item => item.id === 'documents');
    }
    if (cleaned.includes('btech') || cleaned.includes('b.tech') || (cleaned.includes('engineering') && !cleaned.includes('software'))) {
      return COLLEGE_KNOWLEDGE_BASE.find(item => item.id === 'btech');
    }
    if (cleaned.includes('bba') || cleaned.includes('business administration')) {
      return COLLEGE_KNOWLEDGE_BASE.find(item => item.id === 'bba');
    }
    if (cleaned.includes('bca') || (cleaned.includes('computer') && cleaned.includes('application') && !cleaned.includes('master'))) {
      return COLLEGE_KNOWLEDGE_BASE.find(item => item.id === 'bca');
    }
    if (cleaned.includes('mba') || cleaned.includes('master of business')) {
      return COLLEGE_KNOWLEDGE_BASE.find(item => item.id === 'mba');
    }
    if (cleaned.includes('mca')) {
      return COLLEGE_KNOWLEDGE_BASE.find(item => item.id === 'mca');
    }
    if (cleaned.includes('bcom') || cleaned.includes('b.com') || cleaned.includes('commerce') || cleaned.includes('accounting')) {
      return COLLEGE_KNOWLEDGE_BASE.find(item => item.id === 'bcom');
    }
    if (cleaned.includes('scholarship') || cleaned.includes('financial aid') || cleaned.includes('concession') || cleaned.includes('waiver')) {
      return COLLEGE_KNOWLEDGE_BASE.find(item => item.id === 'scholarships');
    }
    if (cleaned.includes('hostel') || cleaned.includes('accommodation') || cleaned.includes('mess') || cleaned.includes('curfew') || cleaned.includes('food')) {
      return COLLEGE_KNOWLEDGE_BASE.find(item => item.id === 'hostel');
    }
    if (cleaned.includes('placement') || cleaned.includes('package') || cleaned.includes('salary') || cleaned.includes('recruiter') || cleaned.includes('highest package')) {
      return COLLEGE_KNOWLEDGE_BASE.find(item => item.id === 'placements');
    }
    if (cleaned.includes('fee') || cleaned.includes('tuition') || cleaned.includes('cost') || cleaned.includes('charges') || cleaned.includes('installment')) {
      return COLLEGE_KNOWLEDGE_BASE.find(item => item.id === 'fee_structure');
    }
    if (cleaned.includes('admission') || cleaned.includes('apply') || cleaned.includes('register') || cleaned.includes('eligibility') || cleaned.includes('process') || cleaned.includes('entrance')) {
      return COLLEGE_KNOWLEDGE_BASE.find(item => item.id === 'admission_process');
    }
    if (cleaned.includes('club') || cleaned.includes('fest') || cleaned.includes('sports') || cleaned.includes('gym') || cleaned.includes('technova')) {
      return COLLEGE_KNOWLEDGE_BASE.find(item => item.id === 'campus_life');
    }
    if (cleaned.includes('contact') || cleaned.includes('phone') || cleaned.includes('number') || cleaned.includes('email') || cleaned.includes('address') || cleaned.includes('location')) {
      return COLLEGE_KNOWLEDGE_BASE.find(item => item.id === 'contact_info');
    }
    if (cleaned.includes('about') || cleaned.includes('naac') || cleaned.includes('ranking') || cleaned.includes('history')) {
      return COLLEGE_KNOWLEDGE_BASE.find(item => item.id === 'about_college');
    }

    // 2. Tokenized scoring
    const words = cleaned.split(/\s+/).filter(w => w.length > 2);
    let bestMatch = null;
    let highestScore = 0;

    COLLEGE_KNOWLEDGE_BASE.forEach(topic => {
      let score = 0;
      topic.keywords.forEach(keyword => {
        if (cleaned.includes(keyword)) {
          score += 3;
        }
        words.forEach(word => {
          if (keyword.includes(word) || word.includes(keyword)) {
            score += 1;
          }
        });
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = topic;
      }
    });

    if (highestScore >= 2 && bestMatch) {
      return bestMatch;
    }

    // Fallback response with helpful navigation options
    return {
      id: 'fallback',
      title: 'Help Assistant',
      answer: `🤔 I didn't quite catch the specific details for <em>"${query}"</em>.
      <br><br>Here are the popular topics I know best:
      <ul>
        <li>🎓 <strong>Courses & Eligibility:</strong> B.Tech, BBA, BCA, MBA, MCA, B.Com</li>
        <li>💰 <strong>Fee Structure:</strong> Tuition, semester installments & hostel charges</li>
        <li>📝 <strong>Admission:</strong> Steps, entrance exams & required documents</li>
        <li>🏆 <strong>Scholarships:</strong> Up to 100% merit waivers & sports quota</li>
        <li>🚀 <strong>Placements:</strong> Average package, ₹45.5 LPA highest offer & top firms</li>
      </ul>
      💡 <em>Try clicking one of the suggested buttons below or rephrase your question!</em>`,
      quickReplies: ['What courses are available?', 'What are the college fees?', 'What is the admission process?', 'Are scholarships available?']
    };
  };

  /* ==========================================================================
     6. CHATBOT INTERACTION CONTROLLER
     ========================================================================== */

  const appendMessage = (sender, content, quickReplies = []) => {
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const isBot = sender === 'bot';

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isBot ? 'bot-message' : 'user-message'}`;

    let quickRepliesHtml = '';
    if (isBot && quickReplies && quickReplies.length > 0) {
      quickRepliesHtml = `
        <div class="message-quick-replies">
          ${quickReplies.map(qr => `<button class="quick-reply-btn" data-query="${qr}">${qr}</button>`).join('')}
        </div>
      `;
    }

    messageDiv.innerHTML = `
      <div class="message-avatar">
        <i class="fa-solid ${isBot ? 'fa-robot' : 'fa-user'}"></i>
      </div>
      <div class="message-bubble">
        <div class="message-header-line">
          <span class="message-sender">${isBot ? 'CampusConnect AI' : 'You'}</span>
          <span class="message-time">${timeStr}</span>
        </div>
        <div class="message-text">
          ${content}
        </div>
        ${quickRepliesHtml}
      </div>
    `;

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Attach listeners to newly rendered quick reply buttons
    messageDiv.querySelectorAll('.quick-reply-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        handleUserQuery(btn.getAttribute('data-query'));
      });
    });

    // Voice Read-Aloud if enabled
    if (isBot && voiceSynthesisEnabled && 'speechSynthesis' in window) {
      // Strip HTML tags for clean speech
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;
      const plainText = tempDiv.textContent || tempDiv.innerText || '';
      speakText(plainText);
    }
  };

  const showTypingIndicator = () => {
    typingIndicator.style.display = 'flex';
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  const hideTypingIndicator = () => {
    typingIndicator.style.display = 'none';
  };

  const handleUserQuery = (userQuery) => {
    if (!userQuery || userQuery.trim() === '') return;

    // 1. Append User Message
    appendMessage('user', `<p>${escapeHTML(userQuery)}</p>`);

    // 2. Clear input
    if (chatInput) {
      chatInput.value = '';
    }

    // 3. Show typing indicator
    showTypingIndicator();

    // 4. Increment live query counter
    incrementChatCounter();

    // 5. Simulate intelligent processing delay (400 - 700ms)
    const delay = Math.floor(Math.random() * 300) + 400;
    setTimeout(() => {
      hideTypingIndicator();
      const matchedData = findBestAnswer(userQuery);
      appendMessage('bot', matchedData.answer, matchedData.quickReplies);
    }, delay);
  };

  // Chat Form Submission
  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = chatInput.value.trim();
      if (query) {
        handleUserQuery(query);
      }
    });
  }

  // Suggested Question Pills
  if (suggestedPillsContainer) {
    suggestedPillsContainer.querySelectorAll('.suggested-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const query = pill.getAttribute('data-query');
        handleUserQuery(query);
      });
    });
  }

  // Hero Pill Buttons
  document.querySelectorAll('.hero-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const query = pill.getAttribute('data-query');
      scrollToSection('chat-section');
      setTimeout(() => {
        handleUserQuery(query);
      }, 500);
    });
  });

  // Hero Search
  const handleHeroSearch = () => {
    const q = heroSearchInput.value.trim();
    if (q) {
      scrollToSection('chat-section');
      setTimeout(() => {
        handleUserQuery(q);
        heroSearchInput.value = '';
      }, 500);
    }
  };

  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', handleHeroSearch);
  }
  if (heroSearchInput) {
    heroSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleHeroSearch();
      }
    });
  }

  // Clear Chat Button
  if (chatClearBtn) {
    chatClearBtn.addEventListener('click', () => {
      chatMessages.innerHTML = `
        <div class="message bot-message">
          <div class="message-avatar"><i class="fa-solid fa-robot"></i></div>
          <div class="message-bubble">
            <div class="message-header-line">
              <span class="message-sender">CampusConnect AI</span>
              <span class="message-time">Just now</span>
            </div>
            <div class="message-text">
              <p>🧹 <em>Chat history cleared.</em></p>
              <p>👋 How may I assist you with your college admissions, courses, or hostel questions today?</p>
            </div>
            <div class="message-quick-replies">
              <button class="quick-reply-btn" data-query="What courses are available?">Explore Courses</button>
              <button class="quick-reply-btn" data-query="What are the college fees?">Fee Details</button>
              <button class="quick-reply-btn" data-query="Are scholarships available?">Scholarships</button>
            </div>
          </div>
        </div>
      `;
      // Re-attach listeners to initial quick reply buttons
      chatMessages.querySelectorAll('.quick-reply-btn').forEach(btn => {
        btn.addEventListener('click', () => handleUserQuery(btn.getAttribute('data-query')));
      });
      showToast('Chat history cleared', 'fa-trash-can');
    });
  }

  // Export Chat Transcript
  if (chatExportBtn) {
    chatExportBtn.addEventListener('click', () => {
      const messages = chatMessages.querySelectorAll('.message');
      if (messages.length === 0) {
        showToast('No messages to export', 'fa-circle-exclamation');
        return;
      }

      let transcript = `=========================================================\n`;
      transcript += `CAMPUSCONNECT AI – COLLEGE ENQUIRY CHAT TRANSCRIPT\n`;
      transcript += `Date: ${new Date().toLocaleString()}\n`;
      transcript += `=========================================================\n\n`;

      messages.forEach(msg => {
        const sender = msg.querySelector('.message-sender')?.textContent.trim() || 'Speaker';
        const time = msg.querySelector('.message-time')?.textContent.trim() || '';
        const text = msg.querySelector('.message-text')?.innerText.trim() || '';
        transcript += `[${time}] ${sender}:\n${text}\n\n`;
      });

      const blob = new Blob([transcript], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `CampusConnect_Chat_${Date.now()}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      showToast('Chat transcript downloaded!', 'fa-download');
    });
  }

  // Voice Toggle (Speech Output)
  if (voiceToggleBtn) {
    voiceToggleBtn.addEventListener('click', () => {
      voiceSynthesisEnabled = !voiceSynthesisEnabled;
      if (voiceSynthesisEnabled) {
        voiceToggleBtn.classList.add('active');
        voiceToggleBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        showToast('Voice read-aloud enabled', 'fa-volume-high');
        speakText('Voice output is now enabled. I will read out answers for you.');
      } else {
        voiceToggleBtn.classList.remove('active');
        voiceToggleBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
        }
        showToast('Voice read-aloud muted', 'fa-volume-xmark');
      }
    });
  }

  const speakText = (text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel(); // Stop current speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  // Speech Recognition (Voice Input)
  if (voiceInputBtn) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.lang = 'en-US';

      voiceInputBtn.addEventListener('click', () => {
        if (isVoiceRecognitionActive) {
          recognition.stop();
          return;
        }
        try {
          recognition.start();
          isVoiceRecognitionActive = true;
          voiceInputBtn.classList.add('listening');
          showToast('Listening... Speak your question now', 'fa-microphone');
        } catch (err) {
          console.warn('Speech recognition start error:', err);
        }
      });

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        chatInput.value = transcript;
        handleUserQuery(transcript);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        voiceInputBtn.classList.remove('listening');
        isVoiceRecognitionActive = false;
        showToast('Could not recognize voice. Please type.', 'fa-triangle-exclamation');
      };

      recognition.onend = () => {
        voiceInputBtn.classList.remove('listening');
        isVoiceRecognitionActive = false;
      };
    } else {
      voiceInputBtn.addEventListener('click', () => {
        showToast('Speech Recognition not supported in this browser.', 'fa-circle-exclamation');
      });
    }
  }

  /* ==========================================================================
     7. QUICK ENQUIRY FORM & DEMO STORAGE CONTROLLER
     ========================================================================== */

  const updateEnquiriesBadge = () => {
    const enquiries = getStoredEnquiries();
    const badge = document.getElementById('saved-enquiries-badge');
    const drawerCount = document.getElementById('drawer-total-count');
    if (badge) badge.textContent = enquiries.length;
    if (drawerCount) drawerCount.textContent = enquiries.length;
  };

  const updateDashboardCounter = () => {
    const enquiries = getStoredEnquiries();
    const totalEnquiries = 184 + enquiries.length;
    const statCounter = document.getElementById('stat-enquiries-counter');
    if (statCounter) {
      statCounter.textContent = totalEnquiries;
    }
  };

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('student-name');
      const emailInput = document.getElementById('student-email');
      const phoneInput = document.getElementById('student-phone');
      const courseSelect = document.getElementById('student-course');
      const questionInput = document.getElementById('student-question');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showFieldError(nameInput, 'name-error', 'Please enter your full name (min 2 characters).');
        isValid = false;
      } else {
        clearFieldError(nameInput);
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        showFieldError(emailInput, 'email-error', 'Please enter a valid email address.');
        isValid = false;
      } else {
        clearFieldError(emailInput);
      }

      // Validate Phone (10 digits)
      const phoneRegex = /^[0-9]{10}$/;
      const cleanedPhone = phoneInput.value.replace(/[^0-9]/g, '');
      if (!phoneRegex.test(cleanedPhone)) {
        showFieldError(phoneInput, 'phone-error', 'Please enter a valid 10-digit mobile number.');
        isValid = false;
      } else {
        clearFieldError(phoneInput);
      }

      // Validate Course
      if (!courseSelect.value) {
        showFieldError(courseSelect, 'course-error', 'Please select a program of interest.');
        isValid = false;
      } else {
        clearFieldError(courseSelect);
      }

      // Validate Question
      if (!questionInput.value.trim() || questionInput.value.trim().length < 5) {
        showFieldError(questionInput, 'question-error', 'Please write your question or enquiry.');
        isValid = false;
      } else {
        clearFieldError(questionInput);
      }

      if (!isValid) return;

      // Create new enquiry record
      const newEnquiry = {
        id: 'ENQ-' + Date.now().toString().slice(-4),
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: cleanedPhone,
        course: courseSelect.value,
        question: questionInput.value.trim(),
        timestamp: new Date().toLocaleString()
      };

      // Save to localStorage
      const enquiries = getStoredEnquiries();
      enquiries.unshift(newEnquiry);
      saveEnquiriesToStorage(enquiries);

      // Render success alert
      enquiryForm.style.display = 'none';
      enquirySuccess.style.display = 'block';

      document.getElementById('success-student-name').textContent = newEnquiry.name;
      document.getElementById('success-student-course').textContent = newEnquiry.course;

      showToast('Enquiry registered successfully!', 'fa-circle-check', 'success');

      // Setup actions on success screen
      if (askAiFromEnquiryBtn) {
        askAiFromEnquiryBtn.onclick = () => {
          scrollToSection('chat-section');
          setTimeout(() => {
            handleUserQuery(`I submitted an enquiry for ${newEnquiry.course}. Tell me more about this course!`);
          }, 500);
        };
      }
    });

    if (submitAnotherBtn) {
      submitAnotherBtn.addEventListener('click', () => {
        enquiryForm.reset();
        enquirySuccess.style.display = 'none';
        enquiryForm.style.display = 'flex';
      });
    }
  }

  const showFieldError = (inputEl, errorId, msg) => {
    const parent = inputEl.closest('.form-group');
    if (parent) {
      parent.classList.add('has-error');
      const errorEl = document.getElementById(errorId);
      if (errorEl) {
        errorEl.textContent = msg;
        errorEl.style.display = 'block';
      }
    }
  };

  const clearFieldError = (inputEl) => {
    const parent = inputEl.closest('.form-group');
    if (parent) {
      parent.classList.remove('has-error');
      const errorEl = parent.querySelector('.error-msg');
      if (errorEl) errorEl.style.display = 'none';
    }
  };

  /* ==========================================================================
     8. ADMIN / DEMO ENQUIRIES DRAWER
     ========================================================================== */

  const renderEnquiriesTable = () => {
    const enquiries = getStoredEnquiries();
    const tbody = document.getElementById('enquiries-table-body');
    const emptyState = document.getElementById('enquiries-empty-state');
    const table = document.getElementById('enquiries-table');

    updateEnquiriesBadge();

    if (!tbody) return;
    tbody.innerHTML = '';

    if (enquiries.length === 0) {
      if (table) table.style.display = 'none';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (table) table.style.display = 'table';
    if (emptyState) emptyState.style.display = 'none';

    enquiries.forEach((item, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${index + 1}</strong></td>
        <td><strong>${escapeHTML(item.name)}</strong></td>
        <td><a href="mailto:${escapeHTML(item.email)}" class="text-blue">${escapeHTML(item.email)}</a></td>
        <td>${escapeHTML(item.phone)}</td>
        <td><span class="badge-pill" style="color:#6366f1; background:rgba(99,102,241,0.1);">${escapeHTML(item.course)}</span></td>
        <td>${escapeHTML(item.question)}</td>
        <td><small class="text-muted">${escapeHTML(item.timestamp)}</small></td>
      `;
      tbody.appendChild(tr);
    });
  };

  if (viewEnquiriesBtn) {
    viewEnquiriesBtn.addEventListener('click', () => {
      renderEnquiriesTable();
      openModal(enquiriesDrawer);
    });
  }

  if (enquiriesDrawerClose) {
    enquiriesDrawerClose.addEventListener('click', () => closeModal(enquiriesDrawer));
  }
  if (drawerCloseBottom) {
    drawerCloseBottom.addEventListener('click', () => closeModal(enquiriesDrawer));
  }

  if (clearEnquiriesBtn) {
    clearEnquiriesBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear all demo enquiries from browser storage?')) {
        saveEnquiriesToStorage([]);
        renderEnquiriesTable();
        showToast('All enquiries cleared', 'fa-trash-can');
      }
    });
  }

  if (exportEnquiriesBtn) {
    exportEnquiriesBtn.addEventListener('click', () => {
      const enquiries = getStoredEnquiries();
      if (enquiries.length === 0) {
        showToast('No enquiries to export.', 'fa-circle-exclamation');
        return;
      }

      let csv = 'ID,Name,Email,Phone,Course,Question,Timestamp\n';
      enquiries.forEach(e => {
        csv += `"${e.id}","${e.name}","${e.email}","${e.phone}","${e.course}","${e.question.replace(/"/g, '""')}","${e.timestamp}"\n`;
      });

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `CampusConnect_Enquiries_${Date.now()}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Enquiries exported to CSV', 'fa-file-csv');
    });
  }

  /* ==========================================================================
     9. COURSE SECTION FILTERS & MODAL CONTROLLER
     ========================================================================== */

  // Course Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('.course-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');
      courseCards.forEach(card => {
        if (filterVal === 'all' || card.getAttribute('data-category') === filterVal) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Learn More Modal for Courses
  document.querySelectorAll('.learn-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const courseKey = btn.getAttribute('data-course');
      const data = COURSE_DETAILS_DATA[courseKey];
      if (!data) return;

      const modalHeader = document.getElementById('course-modal-header');
      const modalBody = document.getElementById('course-modal-body');
      const modalFooter = document.getElementById('course-modal-footer');

      modalHeader.className = `modal-header ${data.badgeClass}`;
      modalHeader.innerHTML = `
        <div class="modal-icon"><i class="fa-solid ${data.icon}"></i></div>
        <div>
          <h3>${data.title}</h3>
          <p>${data.tag}</p>
        </div>
      `;

      modalBody.innerHTML = `
        <p style="margin-bottom: 1.25rem;">${data.overview}</p>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; margin-bottom: 1.5rem; background: var(--bg-alt); padding: 1rem; border-radius: var(--border-radius-md);">
          <div><strong style="color:var(--text-muted); font-size:0.8rem;">DURATION:</strong><br><strong>${data.stats.duration}</strong></div>
          <div><strong style="color:var(--text-muted); font-size:0.8rem;">ANNUAL FEE:</strong><br><strong style="color:#8b5cf6;">${data.stats.fee}</strong></div>
          <div><strong style="color:var(--text-muted); font-size:0.8rem;">ELIGIBILITY:</strong><br><strong>${data.stats.eligibility}</strong></div>
          <div><strong style="color:var(--text-muted); font-size:0.8rem;">INTAKE SEATS:</strong><br><strong>${data.stats.seats}</strong></div>
        </div>

        <h4 style="margin-bottom: 0.5rem; font-family: var(--font-heading);"><i class="fa-solid fa-star text-purple"></i> Specializations:</h4>
        <ul style="margin: 0 0 1.25rem 1.5rem;">
          ${data.specializations.map(s => `<li>${s}</li>`).join('')}
        </ul>

        <h4 style="margin-bottom: 0.5rem; font-family: var(--font-heading);"><i class="fa-solid fa-book text-pink"></i> Curriculum Highlights:</h4>
        <ul style="margin: 0 0 1.25rem 1.5rem;">
          ${data.syllabusHighlights.map(sh => `<li>${sh}</li>`).join('')}
        </ul>

        <h4 style="margin-bottom: 0.5rem; font-family: var(--font-heading);"><i class="fa-solid fa-briefcase text-orange"></i> Career Paths:</h4>
        <p>${data.careers}</p>
      `;

      modalFooter.innerHTML = `
        <button class="btn btn-outline" id="modal-close-action">Close</button>
        <button class="btn btn-gradient" id="modal-ask-ai-action"><i class="fa-solid fa-robot"></i> Ask AI About This Course</button>
      `;

      openModal(courseModal);

      document.getElementById('modal-close-action').onclick = () => closeModal(courseModal);
      document.getElementById('modal-ask-ai-action').onclick = () => {
        closeModal(courseModal);
        scrollToSection('chat-section');
        setTimeout(() => {
          handleUserQuery(`Tell me about ${data.title} eligibility, syllabus and placements.`);
        }, 400);
      };
    });
  });

  if (courseModalClose) {
    courseModalClose.addEventListener('click', () => closeModal(courseModal));
  }

  // Course "Ask AI" buttons
  document.querySelectorAll('.course-ask-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-query');
      scrollToSection('chat-section');
      setTimeout(() => handleUserQuery(q), 450);
    });
  });

  /* ==========================================================================
     10. COLLEGE INFO CARDS (8 CARDS) MODALS & "ASK AI"
     ========================================================================== */

  document.querySelectorAll('.card-btn-more[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalKey = btn.getAttribute('data-modal');
      const data = INFO_MODAL_DATA[modalKey];
      if (!data) return;

      const headerEl = document.getElementById('info-modal-header');
      const bodyEl = document.getElementById('info-modal-body');

      headerEl.className = `modal-header ${data.bg}`;
      headerEl.innerHTML = `
        <div class="modal-icon"><i class="fa-solid ${data.icon}"></i></div>
        <div>
          <h3>${data.title}</h3>
          <p>Institutional Overview &bull; CampusConnect University</p>
        </div>
      `;

      bodyEl.innerHTML = data.content;

      infoModalAskBtn.onclick = () => {
        closeModal(infoModal);
        scrollToSection('chat-section');
        setTimeout(() => handleUserQuery(data.query), 400);
      };

      openModal(infoModal);
    });
  });

  if (infoModalClose) infoModalClose.addEventListener('click', () => closeModal(infoModal));
  if (infoModalDismiss) infoModalDismiss.addEventListener('click', () => closeModal(infoModal));

  // "Ask AI" on Info Cards
  document.querySelectorAll('.card-btn-ask').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-query');
      scrollToSection('chat-section');
      setTimeout(() => handleUserQuery(q), 450);
    });
  });

  /* ==========================================================================
     11. DOCUMENT CHECKLIST MODAL & FAQ ACCORDION
     ========================================================================== */

  if (docsChecklistBtn) {
    docsChecklistBtn.addEventListener('click', () => openModal(docsModal));
  }
  if (docsModalClose) {
    docsModalClose.addEventListener('click', () => closeModal(docsModal));
  }
  if (docsAskAiBtn) {
    docsAskAiBtn.addEventListener('click', () => {
      closeModal(docsModal);
      scrollToSection('chat-section');
      setTimeout(() => handleUserQuery('What documents are required for admission?'), 400);
    });
  }
  if (printChecklistBtn) {
    printChecklistBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // FAQ Accordion Toggle
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const headerBtn = item.querySelector('.accordion-header');
    headerBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      accordionItems.forEach(ai => {
        ai.classList.remove('active');
        ai.querySelector('.accordion-content').style.maxHeight = null;
        ai.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        const content = item.querySelector('.accordion-content');
        content.style.maxHeight = content.scrollHeight + 'px';
        headerBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // FAQ Live Search
  const faqSearchInput = document.getElementById('faq-search-input');
  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', () => {
      const query = faqSearchInput.value.toLowerCase().trim();
      accordionItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // "Ask AI" in FAQ items
  document.querySelectorAll('.faq-ask-ai').forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.getAttribute('data-query');
      scrollToSection('chat-section');
      setTimeout(() => handleUserQuery(query), 400);
    });
  });

  /* ==========================================================================
     12. GLOBAL SEARCH MODAL (Ctrl + K)
     ========================================================================== */

  const searchableIndex = [
    { title: 'B.Tech in Computer Science & AI', desc: '4-year program, ₹1.5L fee, 60% eligibility, 45.5 LPA top offer', link: '#courses' },
    { title: 'BBA – Business Administration', desc: '3-year program, ₹95k fee, Digital Marketing & FinTech', link: '#courses' },
    { title: 'BCA – Computer Applications', desc: '3-year program, ₹85k fee, Full-Stack & Cloud coding', link: '#courses' },
    { title: 'MBA – Master of Business Administration', desc: '2-year dual specialization, ₹2.1L fee, 100% internships', link: '#courses' },
    { title: 'MCA – Master of Computer Applications', desc: '2-year cloud & DevOps program, ₹1.2L fee', link: '#courses' },
    { title: 'B.Com Honours in Finance & Tax', desc: '3-year program, ₹75k fee, ACCA certification modules', link: '#courses' },
    { title: 'Admission Steps & Online Registration', desc: '5-step online roadmap from registration to seat confirmation', link: '#admissions' },
    { title: 'Scholarship Schemes & Merit Waivers', desc: 'Up to 100% tuition waiver for 95%+ scores; ₹2.5 Cr annual pool', link: '#about' },
    { title: 'Fee Structure & Zero Interest EMI', desc: 'Course-wise fees, semester installments and payment gateways', link: '#about' },
    { title: 'Hostel Rooms & Food Menus', desc: 'AC/Non-AC rooms, Wi-Fi, laundry, 24/7 security, ₹65k - ₹95k/yr', link: '#about' },
    { title: 'Placement Records & Top Recruiters', desc: '94.8% placements, Google, Microsoft, Amazon, ₹45.5 LPA highest', link: '#about' },
    { title: 'Campus Life & TechNova Fest', desc: '30+ clubs, annual tech fest, sports complex, Olympic pool', link: '#about' },
    { title: 'Admissions Office Contact & Location', desc: 'Bengaluru Knowledge City, toll free 1800-200-CAMPUS', link: '#contact' }
  ];

  if (searchTrigger) {
    searchTrigger.addEventListener('click', () => {
      openModal(searchModal);
      if (globalSearchInput) {
        setTimeout(() => globalSearchInput.focus(), 150);
      }
    });
  }

  // Ctrl+K shortcut
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openModal(searchModal);
      if (globalSearchInput) {
        setTimeout(() => globalSearchInput.focus(), 150);
      }
    }
  });

  if (searchModalClose) {
    searchModalClose.addEventListener('click', () => closeModal(searchModal));
  }

  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', () => {
      const q = globalSearchInput.value.toLowerCase().trim();
      if (!q) {
        searchResultsList.innerHTML = '<div class="search-hint">Type keyword to search courses, facilities, scholarships, and FAQs...</div>';
        return;
      }

      const results = searchableIndex.filter(item => 
        item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
      );

      if (results.length === 0) {
        searchResultsList.innerHTML = `
          <div class="search-hint">
            No exact matches found. 
            <br><button class="btn btn-sm btn-gradient" style="margin-top:0.75rem;" id="search-ask-ai-fallback">
              <i class="fa-solid fa-robot"></i> Ask AI about "${escapeHTML(q)}"
            </button>
          </div>
        `;
        const askBtn = document.getElementById('search-ask-ai-fallback');
        if (askBtn) {
          askBtn.onclick = () => {
            closeModal(searchModal);
            scrollToSection('chat-section');
            setTimeout(() => handleUserQuery(q), 400);
          };
        }
        return;
      }

      searchResultsList.innerHTML = results.map(item => `
        <div class="search-result-item" data-link="${item.link}">
          <div class="search-result-title"><i class="fa-solid fa-angle-right text-purple"></i> ${item.title}</div>
          <div class="search-result-desc">${item.desc}</div>
        </div>
      `).join('');

      searchResultsList.querySelectorAll('.search-result-item').forEach(el => {
        el.addEventListener('click', () => {
          const target = el.getAttribute('data-link');
          closeModal(searchModal);
          scrollToSection(target.replace('#', ''));
        });
      });
    });
  }

  /* ==========================================================================
     13. CONTACT FORM & NEWSLETTER SIMULATION
     ========================================================================== */

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.getElementById('contact-feedback');
      feedback.className = 'alert-box success';
      feedback.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <strong>Message Received!</strong> Thank you for contacting CampusConnect University Admissions. Our team has received your query and will reply to your email shortly.
      `;
      feedback.style.display = 'block';
      contactForm.reset();
      showToast('Message sent to admissions!', 'fa-paper-plane', 'success');
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      const statusEl = document.getElementById('newsletter-msg');
      if (email) {
        statusEl.className = 'newsletter-status success';
        statusEl.textContent = '✓ Subscribed for admission alerts!';
        newsletterForm.reset();
        showToast('Subscribed to admission updates', 'fa-envelope-circle-check');
      }
    });
  }

  if (downloadBrochureBtn) {
    downloadBrochureBtn.addEventListener('click', () => {
      showToast('Generating official 2026-27 Prospectus...', 'fa-file-pdf');
      setTimeout(() => {
        const prospectusSummary = `
CAMPUSCONNECT UNIVERSITY – OFFICIAL PROSPECTUS 2026-27 (DEMO)
============================================================
Accreditation: NAAC A++ (CGPA 3.82) | NBA Approved | AICTE Recognized
Address: Knowledge City Highway, Bengaluru - 560100
Toll-Free Helpline: 1800-200-CAMPUS | admissions@campusconnect.edu

PROGRAMS OFFERED:
1. B.Tech (Computer Science & AI/ML) – 4 Yrs – ₹1,50,000/yr
2. BBA (Digital Marketing & FinTech) – 3 Yrs – ₹95,000/yr
3. BCA (Full-Stack & Cloud) – 3 Yrs – ₹85,000/yr
4. MBA (Dual Major: Fin/Mktg/Analytics) – 2 Yrs – ₹2,10,000/yr
5. MCA (Cloud Native & DevOps) – 2 Yrs – ₹1,20,000/yr
6. B.Com (Honours: ACCA Accredited) – 3 Yrs – ₹75,000/yr

ADMISSION SCHOLARSHIPS:
- 100% Tuition Waiver: 95%+ marks in 10+2 / Top 1000 JEE Main
- 50% Tuition Waiver: 90% - 94.9% in 10+2
- 25% Women in STEM Grant: All female applicants in B.Tech/BCA
- 75% Sports Quota: State / National medalists

PLACEMENTS:
- Highest International Package: ₹45.5 LPA
- Highest Domestic Package: ₹32.0 LPA
- Average Technical Salary: ₹8.4 LPA
- Top Recruiters: Google, Microsoft, Amazon, Deloitte, Oracle, TCS
============================================================
        `.trim();

        const blob = new Blob([prospectusSummary], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'CampusConnect_Official_Prospectus_2026-27.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('Prospectus downloaded successfully!', 'fa-circle-check', 'success');
      }, 700);
    });
  }

  /* ==========================================================================
     14. NAVIGATION, THEME & SCROLL UTILITIES
     ========================================================================== */

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Nav link click smooth scroll & active link
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const id = href.replace('#', '');
        scrollToSection(id);
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Close mobile nav menu
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          hamburgerBtn.classList.remove('active');
        }
      }
    });
  });

  // Mobile Hamburger Toggle
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('open');
    });
  }

  // Header Scroll Effect & Back-to-Top Button
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (scrollPos > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Floating Chat Button
  if (floatingChatBtn) {
    floatingChatBtn.addEventListener('click', () => {
      scrollToSection('chat-section');
      setTimeout(() => {
        if (chatInput) chatInput.focus();
      }, 400);
    });
  }

  // Theme Toggle (Dark / Light Mode)
  const currentTheme = localStorage.getItem('campusconnect_theme') || 'light';
  document.body.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = document.body.getAttribute('data-theme');
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', nextTheme);
      localStorage.setItem('campusconnect_theme', nextTheme);
      updateThemeIcon(nextTheme);
      showToast(`Switched to ${nextTheme} theme`, nextTheme === 'dark' ? 'fa-moon' : 'fa-sun');
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    if (theme === 'dark') {
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      themeToggle.title = 'Switch to Light Mode';
    } else {
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      themeToggle.title = 'Switch to Dark Mode';
    }
  }

  // Top Announcement Close
  const closeAnnouncementBtn = document.getElementById('close-announcement');
  if (closeAnnouncementBtn) {
    closeAnnouncementBtn.addEventListener('click', () => {
      document.querySelector('.announcement-bar').style.display = 'none';
    });
  }

  /* ==========================================================================
     15. ANIMATED NUMBER COUNTERS (INTERSECTION OBSERVER)
     ========================================================================== */

  const animatedCounters = () => {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-target') || el.textContent);
          const isDecimal = target % 1 !== 0;
          let count = 0;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          const intervalTime = duration / steps;

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              el.textContent = isDecimal ? target.toFixed(1) : Math.floor(target);
              clearInterval(timer);
            } else {
              el.textContent = isDecimal ? count.toFixed(1) : Math.floor(count);
            }
          }, intervalTime);

          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(c => observer.observe(c));
  };
  animatedCounters();

  /* ==========================================================================
     16. MODAL UTILITY FUNCTIONS
     ========================================================================== */

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Close modals when clicking outside container
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Close modals on Esc key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(modal => closeModal(modal));
    }
  });

  /* Helper HTML sanitizer */
  function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  // Initialize UI counts
  updateEnquiriesBadge();
  updateDashboardCounter();

});

