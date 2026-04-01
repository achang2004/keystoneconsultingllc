/* ═══════════════════════════════════════════════════════════
   Keystone Consulting LLC — Bilingual Translations (EN / ZH)
   All visible text strings for all pages.
   China-safe: no external dependencies.
   ═══════════════════════════════════════════════════════════ */

const TRANSLATIONS = {

  /* ── ENGLISH ──────────────────────────────────────────── */
  en: {
    nav: {
      logo:    'Keystone <span>Consulting</span>',
      home:    'Home',
      services:'Services',
      about:   'About',
      success: 'Success Stories',
      blog:    'Blog',
      contact: 'Contact',
      cta:     'Free Consultation',
      lang_switch: '中文',
      lang_switch_long: '切换到中文',
      svc_admissions: 'College Admissions',
      svc_transfer:   'Transfer Strategy',
      svc_undergrad:  'Undergrad Planning',
      svc_dualtrack:  'US + UK Dual-Track',
      svc_lifeskills: 'Life Skills',
    },

    home: {
      hero_badge:   'Since 2008 · 100% Admission Success',
      hero_h1:      'Helping Students Gain Admission to <em>Top U.S. Universities</em> in the AI Era',
      hero_sub:     'GPA and test scores alone no longer set students apart. We build the human edge that AI cannot replicate: critical thinking, leadership, and compelling narratives that top universities demand.',
      hero_cta1:    'Book Free Consultation',
      hero_cta2:    'View Services',
      stat1_num:    '100%',
      stat1_label:  'Admission Success Rate',
      stat2_num:    '17+',
      stat2_label:  'Years of Experience',
      stat3_num:    '500+',
      stat3_label:  'Students Advised',
      schools_label:'Our students have been admitted to',
      industry_label:'Our Advisors Come From',
      industry_h2:   'Industry <span class="gold">Leaders</span>',
      industry_sub:  'Our advisor network includes professors, researchers, and professionals from top technology companies, aerospace agencies, global media platforms, and international financial institutions.',

      why_label:    'Why Families Choose Us',
      why_h2:       'An Advisor You Can <span class="gold">Trust</span>',
      why1_title:   'Proven Track Record',
      why1_body:    'Our 100% university admission success rate is built on over 17 years of hands-on experience helping hundreds of students gain entry to their dream schools.',
      why2_title:   'Beyond GPA & AP',
      why2_body:    'Top schools already treat high GPA as a baseline. We help students build the real-world impact and irreplaceable depth of thinking that admissions officers are actually searching for.',
      why3_title:   'Portfolio, Not Templates',
      why3_body:    'Every student builds a unique portfolio of real assets — research papers, projects, competitions — not a generic resume. These become early-career foundations, not just application checkboxes.',
      why4_title:   'Always Available',
      why4_body:    '24/7 WeChat support for mainland China families. Dr. Wu is personally involved with every student — not delegated to junior staff.',

      ai_label:     'Our Edge',
      ai_h2:        'Beyond GPA: Building <span class="gold">AI-Era Advantage</span>',
      ai_sub:       'While most consultants optimize GPAs and AP scores, Dr. Wu focuses on building skills that AI can never replace — and that top universities actually want.',
      ai1_title:    'Define the Problem',
      ai1_body:     'AI solves standardized problems efficiently — but humans define the direction. We train students to ask the right questions, identify real-world challenges, and make value judgments that no algorithm can replicate.',
      ai2_title:    'Portfolio Over Resume',
      ai2_body:     'University brand names are diluting. We help students build real assets — research papers, community projects, startup attempts. These aren\'t just application boosters; they are early-career foundations that last a lifetime.',
      ai3_title:    'The 5C Moat',
      ai3_body:     'We cultivate the five qualities AI cannot replace: <strong>Curiosity, Courage, Creativity, Compassion, and Communication</strong>. These are the human traits that elite admissions officers are genuinely looking for — and that define success after graduation.',
      ai_question:  '"In the AI era, are you still only buying real estate in good school districts, enrolling in coding bootcamps, and saving education funds — without teaching your child the skills AI can never take away?"',

      svc_label:    'What We Do',
      svc_h2:       'From First Application to <span class="gold">Career Launch</span>',
      svc_sub:      'Most consultants stop at acceptance letters. We guide students from high school through college and into their careers.',
      svc1_title:   'College Admissions Consulting',
      svc1_body:    'Dream school selection, essay coaching, interview prep, extracurricular strategy, and research placements. The complete admissions package.',
      svc2_title:   'Transfer Strategy',
      svc2_body:    'Community college to UC, lower-ranked to top 20, or any school to your dream program. We build the roadmap and execute it.',
      svc3_title:   '4-Year Undergrad Planning',
      svc3_body:    'Course planning, career roadmap, grad school prep, and AI-era skill building. A semester-by-semester plan for college success.',
      svc4_title:   'US + UK Dual-Track',
      svc4_body:    'Apply to American and British universities simultaneously. Two systems, one coherent strategy, bilingual support throughout.',
      svc5_title:   'Life Skills & Professional Development',
      svc5_body:    'Productivity, AI literacy, time management, and professional communication. The real-world skills that turn good students into successful adults.',
      svc_all:      'View All Services \u2192',

      process_label:'How It Works',
      process_h2:   'A Simple, <span class="gold">Parent-Friendly</span> Process',
      step1_eyebrow:'Step one',
      step1_title:  'Deep Assessment',
      step1_body:   'Through multi-dimensional conversations, we discover what your child truly loves — avoiding blind trend-following and uncovering their unique competitive edge.',
      step2_eyebrow:'Step two',
      step2_title:  'AI-Collaborative Projects',
      step2_body:   'We guide students to use modern tools to produce research, projects, and works with real depth — building a portfolio that goes far beyond a standard resume.',
      step3_eyebrow:'Step three',
      step3_title:  'Long-Term Coaching',
      step3_body:   'Annual deep reviews, dynamically adjusted to your child\'s growth and the latest admissions trends. Dr. Wu is personally involved at every stage.',
      step4_eyebrow:'Step four',
      step4_title:  'Narrative & Application Sprint',
      step4_body:   'In application season, we weave all accumulated work into a compelling story about future competitiveness — one that stands out to admissions committees.',

      founder_label:  'Meet Our Founder',
      founder_name:   'Dr. Jian Wu',
      founder_title:  'PhD, Michigan State University',
      founder_badge:  'Founder & Lead Advisor',
      founder_p1:     'Dr. Jian Wu brings over 20 years of experience spanning U.S. and Chinese higher education. She has personally guided hundreds of students to outstanding outcomes at the nation\'s most selective universities.',
      founder_p2:     'Her unique perspective bridges both cultures, giving families from mainland China a trusted advisor who understands both the American admissions process and the aspirations of Chinese families deeply.',
      founder_p3:     'Dr. Wu\'s approach is always personal — she treats every student as if they were her own child, investing fully in their success from first consultation to final decision day.',
      founder_link:   'Full Biography →',
      cred1: 'PhD Michigan State',
      cred2: '20+ Years Experience',
      cred3: 'U.S. Higher Education Expert',
      cred4: 'WeChat Support',
      cred5: 'Bilingual (English / 中文)',

      testi_label:  'What Families Say',
      testi_h2:     'Stories from Our <span class="gold">Families</span>',
      testi_more:   'View All Success Stories \u2192',
      t1_body:      'Keystone treated our child like their own. The step-by-step guidance and essay coaching made all the difference. We couldn\'t have navigated this process without Dr. Wu.',
      t1_author:    'Parent of a student admitted Class of 2024',
      t1_meta:      'UC Berkeley · Computer Science · China · 2024',
      t2_body:      'We came from mainland China with no knowledge of the U.S. admissions process. Dr. Wu explained everything clearly in both English and Chinese and was always available on WeChat. Absolutely invaluable.',
      t2_author:    'Parent of a student admitted Class of 2023',
      t2_meta:      'UCLA · Economics · China · 2023',
      t3_body:      'My daughter\'s essays went from average to truly remarkable after working with the Keystone team. She was accepted to her dream school and is thriving. Worth every penny.',
      t3_author:    'Parent of a student admitted Class of 2024',
      t3_meta:      'Columbia University · Premed · Taiwan · 2024',
      mentor_label:   'From Student to Mentor',
      mentor_h2:      'Aaron Chang',
      mentor_title:   'UCLA Computer Science, Class of 2026',
      mentor_p1:      'Aaron is a product of Keystone\'s system. Guided by Dr. Wu from middle school onward, he was admitted to UCLA as a Computer Science major and went on to intern at Amazon Web Services, TikTok, and Google before accepting a full-time software engineering offer.',
      mentor_p2:      'Along the way, he published machine learning research at COLM 2025 (one of the top AI conferences in the world), launched two businesses, and built the website you are reading right now. His journey is proof that the Keystone method works: not just for getting into college, but for thriving afterward.',
      mentor_p3:      'Now Aaron works directly with Keystone students as a near-peer mentor. He brings firsthand knowledge of what it takes to succeed at a top university, land competitive internships, and build a career in tech. For students, he is someone who has been exactly where they are and can show them what comes next.',
      mentor_cred1:   'UCLA CS \'26',
      mentor_cred2:   'AWS / TikTok / Google',
      mentor_cred3:   'COLM 2025 Research',
      mentor_cred4:   'Entrepreneur',
      mentor_cred5:   'Near-Peer Mentor',
      mentor_badge:   'Near-Peer Mentor & Advisor',
      mentor_link:    'Explore Life Skills Program \u2192',

      case_cta:     'Read more stories \u2192',
      case1_heading:'Student A \u00b7 UC Berkeley, Data Science \u00b7 Class of 2029',
      case1_p1:     'When Student A came to Keystone in 8th grade, their GPA was below average for competitive universities. They had no standout awards, minimal extracurriculars, and no clear narrative for admissions officers. A conventional application would have been lost in the pile.',
      case1_p2:     'Dr. Wu identified the NASA Space Apps Challenge as the right fit for the student\'s emerging interest in data science. Keystone recruited and organized a team of fellow students, then coached them through every round: project framing, presentation, technical execution. The result was a top 10% finish out of 10,000+ teams worldwide. That competition became the centerpiece of the application, demonstrating initiative, teamwork, and real-world problem-solving in a way GPA alone never could.',
      case1_p3:     'With essay and interview coaching, Student A learned to articulate their growth from a quiet student into a competition leader. That compelling arc resonated with UC Berkeley\'s admissions committee. They were admitted to the Data Science program, Class of 2029.',

      case2_heading:'Student B \u00b7 Georgia Tech, Computer Science \u00b7 Class of 2030',
      case2_p1:     'Student B arrived at Keystone with minimal extracurriculars and essays that lacked direction. There was no compelling story for admissions officers to latch onto, and the student\'s profile blended in with thousands of other applicants.',
      case2_p2:     'Dr. Wu saw potential and got to work. She identified the NASA Space Apps Challenge as a strategic fit, helped the student build a team, and coached them through every stage of the competition. Beyond competitions, Keystone restructured the student\'s entire application narrative, turning a scattered profile into a focused story of growth, initiative, and technical ambition.',
      case2_p3:     'The results spoke for themselves: admitted to Georgia Tech Computer Science, UC Berkeley (Letters & Science), University of Washington Seattle CS, UW-Madison CS, and UCSB Computer Science, among others. What started as an unremarkable application became a portfolio of genuine accomplishments that top programs could not ignore.',

      faq_label:    'Common Questions',
      faq_h2:       'Frequently Asked <span class="gold">Questions</span>',
      faq1_q:       'What grade should my child start working with Keystone?',
      faq1_a:       'The earlier the better — ideally in 9th or 10th grade. Starting early allows us to shape course selection, build extracurricular profiles, and identify research or summer opportunities that significantly strengthen applications. That said, we also work with 11th and 12th graders and have an excellent track record helping students who come to us later.',
      faq2_q:       'Do you work with students based in mainland China?',
      faq2_a:       'Absolutely. Many of our students and families are based in mainland China. We fully support WeChat communication and are available 24/7 to accommodate time zone differences. Dr. Wu is bilingual and our entire process is designed to be accessible from China.',
      faq3_q:       'What schools have your students been admitted to?',
      faq3_a:       'Our students have been admitted to top universities including Stanford, Harvard, MIT, UC Berkeley, UCLA, Columbia, and many other highly selective schools across the United States. We take pride in our 100% admission success rate since 2008.',
      faq4_q:       'What does the free consultation include?',
      faq4_a:       'The free consultation is a no-obligation, one-on-one session with Dr. Wu. We discuss your child\'s current academic standing, interests, and target universities. By the end of the call, you will have a preliminary understanding of their college readiness and a potential roadmap forward.',
      faq5_q:       'How is Keystone different from other admissions consultants?',
      faq5_a:       'Most consultants optimize GPA and AP scores — we build AI-era competitive advantage. While others use templates, Dr. Wu designs a custom portfolio strategy for every student: real research papers, competitions, and projects that demonstrate irreplaceable human skills. Our 5C framework (Curiosity, Courage, Creativity, Compassion, Communication) produces students that top universities genuinely want — not just students who look good on paper.',
      faq6_q:       'How much does your service cost?',
      faq6_a:       'Pricing is customized based on the student\'s grade level, the scope of support needed, and the timeline. We offer packages ranging from essay-only support to comprehensive multi-year programs. Please contact us for a personalized quote after your free consultation.',
      faq7_q:       'Do you help with both undergraduate and graduate admissions?',
      faq7_a:       'Our primary focus is undergraduate admissions. We guide high school students through the entire college application process. For graduate admissions inquiries, please reach out and we can discuss whether we are able to assist.',

      cta_h2:       'Let\u2019s talk about your child\u2019s future.',
      cta_p:        'Schedule a free, no-obligation consultation with Dr. Jian Wu.',
      cta_wechat:   'WeChat: janewu2237',
      cta_btn:      'Book Free Consultation',
    },

    services: {
      hero_label:   'What We Offer',
      hero_h1:      'Comprehensive Student Support',
      hero_sub:     'From first application to career launch, and everywhere in between.',

      hub_label:    'Our Services',
      hub_h2:       'Five Pathways to <span class="gold">Student Success</span>',
      hub1_title:   'College Admissions Consulting',
      hub1_body:    'Our flagship service: personalized strategy for 9th through 12th graders targeting top U.S. universities. Essays, interviews, extracurriculars, and research opportunities.',
      hub1_link:    'Learn More \u2192',
      hub2_title:   'Transfer Strategy & Placement',
      hub2_body:    'Community college to UC, lower UC to top UC, or any school to top 10. A complete roadmap for transfer students who want a second chance at their dream program.',
      hub2_link:    'Learn More \u2192',
      hub3_title:   'Undergraduate 4-Year Success Planning',
      hub3_body:    'Course strategy, major decisions, internship recruiting, and career readiness. A dynamic roadmap from freshman orientation through graduation.',
      hub3_link:    'Learn More \u2192',
      hub4_title:   'US + UK Dual-Track Application',
      hub4_body:    'For high-achieving students in mainland China targeting elite programs in both the United States and the United Kingdom simultaneously.',
      hub4_link:    'Learn More \u2192',
      hub5_title:   'Life Skills & Professional Development',
      hub5_body:    'Productivity systems, AI literacy, time management, and entrepreneurial thinking. The real-world skills that set students apart after admission.',
      hub5_link:    'Learn More \u2192',

      intro_label:  'Our Approach',
      intro_h2:     'Personalized, Expert-Led Advising',
      intro_p1:     'Every student is unique. That\'s why Keystone Consulting takes a fully personalized approach — no templates, no one-size-fits-all packages. Dr. Wu and her team of U.S. professors and former admissions officers design a custom strategy tailored to your child\'s specific strengths, interests, and goals.',
      intro_p2:     'From the moment you contact us to the day your child receives their acceptance letter, we are with you every step of the way.',

      svc_label:    'Our Services',
      svc_h2:       'Six Pillars of <span class="gold">Student Success</span>',

      svc1_title:   'Dream School Planning',
      svc1_body:    'We begin by building a deep understanding of your child — their academic strengths, personal interests, extracurricular achievements, and long-term career goals. From this foundation, we identify the optimal college list: a carefully balanced mix of reach, match, and safety schools that gives your child the best chance of attending a university they love.',
      svc1_l1:      'Personalized university list development',
      svc1_l2:      'Major and career pathway exploration',
      svc1_l3:      'School research and campus culture matching',
      svc1_l4:      'Application timeline planning',

      svc2_title:   'Standout Applications',
      svc2_body:    'A strong GPA and test scores are just the starting point. What truly differentiates successful applicants is how they tell their story. Our advisors help each student uncover their most compelling narrative and translate it into an application that stands out from tens of thousands of submissions.',
      svc2_l1:      'Common App and UC Application strategy',
      svc2_l2:      'Activities list optimization',
      svc2_l3:      'Awards and honors presentation',
      svc2_l4:      'Application review and quality control',

      svc3_title:   'Essay & Interview Coaching',
      svc3_body:    'The personal statement and supplemental essays are your child\'s single greatest opportunity to speak directly to admissions officers. Our essay coaching process helps students find their authentic voice, develop a compelling theme, and craft essays that are memorable, specific, and genuinely moving.',
      svc3_l1:      'Personal statement brainstorming and drafting',
      svc3_l2:      'Supplemental essay coaching for all schools',
      svc3_l3:      'Multiple revision rounds with expert feedback',
      svc3_l4:      'Mock interview preparation and practice',

      svc4_title:   'Academic & Activities Strategy',
      svc4_body:    'Top universities look for students who have challenged themselves academically and pursued their interests with genuine depth. We help families plan course selection, choose meaningful extracurriculars, and build a cohesive student profile starting as early as 9th grade.',
      svc4_l1:      'Course selection and AP/IB planning',
      svc4_l2:      'Extracurricular portfolio development',
      svc4_l3:      'Community service and leadership strategy',
      svc4_l4:      'SAT/ACT test prep guidance and scheduling',

      svc5_title:   'Summer & Research Programs',
      svc5_body:    'Meaningful summer experiences — research internships, university programs, and academic enrichment — can dramatically strengthen a student\'s application. Through our network of partners at UC Berkeley, UCLA, and Stanford, we provide exclusive access to opportunities that are otherwise difficult to find.',
      svc5_l1:      'UC Berkeley and UCLA program placement',
      svc5_l2:      'Stanford pre-collegiate program access',
      svc5_l3:      'Research internship connections',
      svc5_l4:      'Program application support',

      svc6_title:   'Competitions & Hackathons',
      svc6_body:    'Admissions officers are impressed by students who have tested their skills in competitive, real-world settings. We connect our students with a curated selection of academic competitions, science fairs, and technology hackathons that align with their interests and add meaningful distinction to their applications.',
      svc6_l1:      'Academic competition identification',
      svc6_l2:      'Science fair and research competition prep',
      svc6_l3:      'Technology hackathon connections',
      svc6_l4:      'Award documentation for applications',

      pkg_label:    'Our Packages',
      pkg_h2:       'Find the Right <span class="gold">Level of Support</span>',
      pkg_sub:      'Every student\'s situation is different. Contact us for a free consultation and we\'ll recommend the package that\'s right for your child.',

      pkg1_name:    'Essentials',
      pkg1_desc:    'Focused college admissions support for 11th and 12th graders.',
      pkg1_f1:      'Essay coaching (personal statement)',
      pkg1_f2:      'College list review',
      pkg1_f3:      'Application strategy session',
      pkg1_f4:      'Interview preparation',
      pkg1_f5:      'Email support',

      pkg2_name:    'Comprehensive',
      pkg2_desc:    'Full-cycle admissions, transfer strategy, and undergraduate planning. Ideal for most families.',
      pkg2_badge:   'Most Popular',
      pkg2_f1:      'Everything in Essentials',
      pkg2_f2:      'All supplemental essays',
      pkg2_f3:      'Transfer strategy consultation',
      pkg2_f4:      'Undergrad success planning',
      pkg2_f5:      'WeChat + priority support',
      pkg2_f6:      'Financial aid guidance',

      pkg3_name:    'Elite',
      pkg3_desc:    'All five services: admissions, transfer, undergrad planning, dual-track, and life skills. The complete Keystone experience.',
      pkg3_f1:      'Everything in Comprehensive',
      pkg3_f2:      'US + UK dual-track application',
      pkg3_f3:      'Life skills & professional development',
      pkg3_f4:      'Research program placement',
      pkg3_f5:      'Dedicated advisor relationship',
      pkg3_f6:      '24/7 WeChat + video support',

      pkg_cta:      'Contact for Free Consultation',

      cta_h2:       'Start with a Free Consultation',
      cta_p:        'No obligations. Just a conversation about your child\'s goals and how we can help.',
      cta_btn:      'Book Free Consultation',
    },

    about: {
      hero_label:   'Our Founder',
      hero_h1:      'Meet Dr. Jian Wu',
      hero_sub:     'Two decades of experience bridging U.S. and Chinese higher education.',

      bio_label:    'Biography',
      bio_h2:       'A Trusted Bridge Between Two Worlds',
      bio_p1:       'Dr. Jian Wu has spent more than two decades at the intersection of U.S. and Chinese higher education. Born and educated in China before completing her PhD at Michigan State University, she understands firsthand the challenges, aspirations, and questions that Chinese families face when navigating the American university admissions process.',
      bio_p2:       'After earning her master\'s degree in China, Dr. Wu spent several years as an educator before earning a full-ride scholarship to pursue her PhD in the United States, a journey that gave her 20+ years of experience navigating both education systems from the inside. That unique dual perspective revealed a critical gap: brilliant students from China were being overlooked simply because no one had taught them how to present themselves for American admissions.',
      bio_p3:       'In 2008, Dr. Wu founded Keystone Consulting LLC with a singular mission: to give every student the same guidance that students with privileged access to U.S. advisors receive. Since then, she has personally guided over 500 students to admission at top universities with a 100% success rate.',
      bio_p4:       'Dr. Wu\'s approach is deeply personal. She believes that every student has a unique story worth telling, and that the college application process, when done well, is an opportunity for self-discovery, not just a bureaucratic hurdle. She treats every student as if they were her own child.',
      bio_p5:       'Fluent in both English and Mandarin, Dr. Wu is available via WeChat for families in mainland China, ensuring that distance and time zones are never a barrier to first-class advising.',
      bio_p6:       'Perhaps the most personal testament to her methods: Dr. Wu began guiding her own son through the admissions process starting in middle school, applying the same personalized roadmap she builds for every Keystone student. In 2022, he was admitted to UCLA as a Computer Science major and has since worked at both Google and Amazon as a software engineer. He even built the website you\'re reading right now.',
      founder_badge:'Founder & Lead Advisor',

      cred_label:   'Credentials',
      cred1_num:    '20+',
      cred1_label:  'Years in U.S. Higher Education',
      cred2_num:    '500+',
      cred2_label:  'Students Personally Guided',
      cred3_num:    '100%',
      cred3_label:  'Admission Success Rate',
      cred4_num:    '50+',
      cred4_label:  'Universities Represented',

      team_label:   'Our Advisor Network',
      team_h2:      'A Team of <span class="gold">True Insiders</span>',
      team_p1:      'Dr. Wu is supported by a carefully selected network of advisors who bring firsthand knowledge of elite U.S. university admissions. Our team includes:',
      team_l1:      'Current and former U.S. university professors from top-ranked institutions',
      team_l2:      'Former admissions officers who have reviewed thousands of applications at selective universities',
      team_l3:      'Successful alumni from Stanford, Harvard, MIT, UC Berkeley, and UCLA who provide mentorship',
      team_l4:      'Academic specialists in STEM, humanities, business, pre-med, and pre-law',
      team_p2:      'This network gives Keystone students an unparalleled insider advantage — guidance grounded in real admissions experience, not guesswork.',

      mentor_label:  'Near-Peer Mentor',
      mentor_h2:     'Aaron Chang',
      mentor_title:  'UCLA Computer Science, Class of 2026',
      mentor_p1:     'Aaron is the living proof of the Keystone method. Guided by Dr. Wu from middle school, he was admitted to UCLA as a Computer Science major and went on to intern at Amazon Web Services, TikTok, and Google before accepting a full-time software engineering offer.',
      mentor_p2:     'He published machine learning research at COLM 2025, one of the top AI conferences in the world, launched two businesses, and built the website you are reading right now. His journey demonstrates that Keystone\'s impact extends far beyond college admissions.',
      mentor_p3:     'Now Aaron works directly with Keystone students as a near-peer mentor, leading the Life Skills and Professional Development program. He brings firsthand knowledge of succeeding at a top university, landing competitive internships, and building a career in tech. For students, he is someone who has been exactly where they are and can show them what comes next.',
      mentor_cred1:  'UCLA CS \'26',
      mentor_cred2:  'AWS / TikTok / Google',
      mentor_cred3:  'COLM 2025 Research',
      mentor_cred4:  'Entrepreneur',
      mentor_cred5:  'Near-Peer Mentor',
      mentor_link:   'Explore Life Skills Program \u2192',

      timeline_label:'Our Story',
      timeline_h2:  'Building a Legacy of <span class="gold">Student Success</span>',
      tl1_year:     '2008',
      tl1_title:    'Keystone Founded',
      tl1_body:     'Dr. Jian Wu establishes Keystone Consulting LLC in Los Angeles, CA, with a mission to give Chinese families access to elite U.S. admissions guidance.',
      tl2_year:     '2010',
      tl2_title:    'First Ivy League Placements',
      tl2_body:     'Keystone achieves its first admissions to Harvard and Columbia University, validating the personalized approach.',
      tl3_year:     '2013',
      tl3_title:    'UC System Specialization',
      tl3_body:     'Expanded advisor network with former UC admissions officers, achieving 100% placement rates at UC Berkeley and UCLA.',
      tl4_year:     '2016',
      tl4_title:    '100 Students Advised',
      tl4_body:     'A major milestone: 100 students successfully placed at top U.S. universities, all with first-choice or strong match results.',
      tl5_year:     '2020',
      tl5_title:    'WeChat-First Model',
      tl5_body:     'Launched dedicated WeChat support infrastructure, making Keystone fully accessible to families in mainland China.',
      tl6_year:     '2024',
      tl6_title:    '500+ Students Strong',
      tl6_body:     'Over 500 students guided, 100% admission rate maintained, with placements at 50+ universities across the United States.',

      quote_text:   '"Every student has a story worth telling. My job is to help them find the words — and the confidence — to tell it."',
      quote_cite:   'Dr. Jian Wu, Founder',

      cta_h2:       'Schedule a Conversation with Dr. Wu',
      cta_p:        'Free, no-obligation consultation. Available via email or WeChat.',
      cta_btn:      'Book Free Consultation',
    },

    success: {
      hero_label:   'Our Results',
      hero_h1:      '500+ Students. 100% Success Rate.',
      hero_sub:     'Since 2008, every student guided by Dr. Wu has been admitted to a university that matches their goals and potential.',

      stat1_num:    '100%',
      stat1_label:  'Admission Success Rate',
      stat2_num:    '500+',
      stat2_label:  'Students Guided',
      stat3_num:    '17+',
      stat3_label:  'Years of Experience',
      stat4_num:    '50+',
      stat4_label:  'Universities Represented',

      filter_all:   'All Schools',
      filter_ivy:   'Ivy League',
      filter_uc:    'UC System',
      filter_top25: 'Top 25',
      filter_stem:  'STEM Focus',

      stories_label:'Student Outcomes',
      stories_h2:   'Real Students. Real <span class="gold">Results.</span>',

      featured_label:'Featured Story',
      featured_quote: '"When we first contacted Dr. Wu, our daughter was a 10th grader with good grades but no direction. By the time she applied, she had conducted university-level research, led a school initiative that affected 200 students, and written essays that made us cry — in the best possible way. She was admitted to UC Berkeley as her first choice. Dr. Wu didn\'t just help her apply to college; she helped her discover who she is."',
      featured_cite:  'Parent of Class of 2024 · UC Berkeley, Computer Science',

      s1_field: 'Computer Science',
      s1_quote: '"Keystone treated our child like their own. The step-by-step guidance and essay coaching made all the difference. We couldn\'t have navigated this process without Dr. Wu."',
      s1_meta:  'Parent of Class of 2024 · ★★★★★',

      s2_field: 'Economics',
      s2_quote: '"We came from mainland China with no knowledge of U.S. admissions. Dr. Wu explained everything clearly in both languages and was always available on WeChat. Invaluable."',
      s2_meta:  'Parent of Class of 2023 · ★★★★★',

      s3_field: 'Pre-Medicine',
      s3_quote: '"My daughter\'s essays went from average to truly remarkable. She was accepted to her dream school and is thriving. Worth every penny."',
      s3_meta:  'Parent of Class of 2024 · ★★★★★',

      s4_field: 'Electrical Engineering',
      s4_quote: '"Dr. Wu helped my son find the research angle that made his application stand out. He was one of very few international students admitted that year."',
      s4_meta:  'Parent of Class of 2022 · ★★★★★',

      s5_field: 'Applied Mathematics',
      s5_quote: '"From the moment we started working with Keystone, we knew we were in expert hands. The personalized attention Dr. Wu gave our son was extraordinary."',
      s5_meta:  'Parent of Class of 2023 · ★★★★★',

      s6_field: 'Computer Science',
      s6_quote: '"Keystone helped us understand the U.S. college application system from the ground up. Our daughter got into her first-choice school for CS."',
      s6_meta:  'Parent of Class of 2024 · ★★★★★',

      s7_field: 'Bioengineering',
      s7_quote: '"The summer research program Dr. Wu connected us with was a game-changer for my son\'s application. He published his first paper at 17."',
      s7_meta:  'Parent of Class of 2023 · ★★★★★',

      s8_field: 'Business & Finance',
      s8_quote: '"Dr. Wu understood exactly what our daughter needed and helped her craft a story that was authentically hers. The results exceeded our expectations."',
      s8_meta:  'Parent of Class of 2024 · ★★★★★',

      s9_field: 'Environmental Science',
      s9_quote: '"As a family new to the U.S. system, we felt completely lost. Keystone gave us a clear roadmap and held our hand through every step."',
      s9_meta:  'Parent of Class of 2023 · ★★★★★',

      sb_field: 'Computer Science',
      sb_quote: '"Our daughter had no direction and minimal activities. Dr. Wu built her entire profile from scratch, including NASA Space Apps. She was admitted to Georgia Tech CS, UC Berkeley, UW Seattle CS, and more. The transformation was incredible."',
      sb_meta:  'Parent of Class of 2030 · ★★★★★',

      cta_h2:       'Your Child Could Be Our Next Success Story',
      cta_p:        'Schedule a free consultation and let\'s talk about what\'s possible.',
      cta_btn:      'Book Free Consultation',
    },

    blog: {
      hero_label:   'Resources & Insights',
      hero_h1:      'Insights for Chinese Families',
      hero_sub:     'Expert guidance on U.S. university admissions — in English and Chinese.',

      posts_label:  'Latest Articles',
      posts_h2:     'Knowledge for Every <span class="gold">Stage of the Journey</span>',

      post1_cat:    'Application Tips',
      post1_title:  'Understanding the Common App: A Complete Guide for Chinese Families',
      post1_excerpt:'The Common Application is used by over 1,000 U.S. universities. Here\'s everything you need to know to navigate it successfully.',
      post1_date:   'January 2025',
      post1_read:   '8 min read',

      post2_cat:    'Admissions Strategy',
      post2_title:  'What U.S. Admissions Officers Really Look for in International Students',
      post2_excerpt:'Beyond grades and test scores, top universities are looking for something far more nuanced. An insider\'s perspective.',
      post2_date:   'December 2024',
      post2_read:   '6 min read',

      post3_cat:    'Test Prep',
      post3_title:  'SAT vs ACT: Which Test Should Your Child Take?',
      post3_excerpt:'Both tests are accepted at all U.S. universities, but the right choice depends on your child\'s strengths. Here\'s how to decide.',
      post3_date:   'November 2024',
      post3_read:   '5 min read',

      post4_cat:    'College List',
      post4_title:  'Building a Balanced College List: Safety, Match, and Reach Schools',
      post4_excerpt:'The right college list strategy dramatically improves your child\'s chances of attending a great school. Here\'s how to build one.',
      post4_date:   'October 2024',
      post4_read:   '7 min read',

      post5_cat:    'Opportunities',
      post5_title:  'Summer Research Programs at Top U.S. Universities: What You Need to Know',
      post5_excerpt:'Summer research programs can transform a student\'s application. Here\'s a guide to the best opportunities and how to access them.',
      post5_date:   'September 2024',
      post5_read:   '9 min read',

      post6_cat:    'Essays',
      post6_title:  'The Personal Statement: How to Tell a Story That Stands Out',
      post6_excerpt:'The personal statement is your child\'s single best opportunity to speak directly to an admissions officer. Here\'s how to make it count.',
      post6_date:   'August 2024',
      post6_read:   '10 min read',

      read_more:    'Read More →',

      newsletter_label: 'Stay Informed',
      newsletter_h2:    'Get Expert Guidance in Your Inbox',
      newsletter_p:     'Subscribe for the latest insights on U.S. university admissions — in English and Chinese.',
      newsletter_cta:   'Or contact us directly for personalized advice:',
      newsletter_btn:   'Free Consultation',
    },

    contact: {
      hero_label:   'Get In Touch',
      hero_h1:      'Start with a Free Consultation',
      hero_sub:     'Dr. Wu responds to all inquiries within 24 hours — often much sooner. Available via WeChat or email worldwide.',

      method2_title:  'Email',
      method2_value:  'janewula@gmail.com',
      method2_note:   'Response within 24 hours',
      copy_email_btn: 'Copy Email',

      method3_title:  'WeChat',
      method3_value:  'janewu2237',
      method3_note:   'Copy the ID and search in WeChat → Add Contacts',
      copy_btn:       'Copy ID',

      form_h3:        'Send Us a Message',
      form_parent:    'Parent Name',
      form_student:   'Student Name',
      form_email:     'Email Address',
      form_phone:     'Phone / WeChat',
      form_grade:     'Student\'s Current Grade',
      form_grade0:    'Select grade',
      form_grade1:    '8th Grade',
      form_grade2:    '9th Grade (Freshman)',
      form_grade3:    '10th Grade (Sophomore)',
      form_grade4:    '11th Grade (Junior)',
      form_grade5:    '12th Grade (Senior)',
      form_grade6:    'Gap Year / Other',
      form_schools:   'Target Universities (optional)',
      form_msg:       'Message',
      form_submit:    'Request Free Consultation →',
      form_success:   '✓ Thank you! We\'ll be in touch within 24 hours.',
      form_wechat_note: 'Or contact us directly via WeChat:',

      wechat_label:   'WeChat QR Code',
      wechat_note:    'Open WeChat \u2192 Scan to add Dr. Wu',

      info_label:     'Availability',
      info_h3:        'What to Expect',
      info_l1:        'Free, no-obligation 30-minute consultation',
      info_l2:        'Response within 24 hours (usually same day)',
      info_l3:        'Available via email or WeChat',
      info_l4:        'Bilingual support in English and Chinese',
      info_l5:        'Based in Los Angeles, CA · Serving families worldwide',

      faq_label:      'Quick Answers',
      faq_h2:         'Common Questions',
      faq1_q:         'Is the consultation really free?',
      faq1_a:         'Yes — completely free and with no obligation. It\'s a genuine conversation about your child\'s goals and how we can help.',
      faq2_q:         'Do you work with families in China?',
      faq2_a:         'Absolutely. We support WeChat and are available 24/7 to accommodate China time zones. Dr. Wu is bilingual.',
      faq3_q:         'How soon can we get started?',
      faq3_a:         'We typically schedule initial consultations within 3–5 business days. Contact us and we\'ll find a time that works for you.',

      location:       'Based in Los Angeles, CA · Serving Families Worldwide · 24/7 WeChat Support',
    },

    footer: {
      tagline:          'Helping students from China and around the world gain admission to their dream U.S. universities since 2008. 100% success rate. Bilingual support.',
      services_heading: 'Services',
      s1: 'College Admissions',
      s2: 'Transfer Strategy',
      s3: 'Undergrad Planning',
      s4: 'US + UK Dual-Track',
      s5: 'Life Skills',
      contact_heading: 'Contact',
      copyright:    '© 2025 Keystone Consulting LLC. All rights reserved.',
      location:     'Based in Los Angeles, CA · Serving Families Worldwide',
    },

    /* ── NEW SERVICE PAGES (EN) ──────────────────────────── */
    transfer: {
      hero_label:   'Service',
      hero_h1:      'Transfer Strategy & Placement',
      hero_sub:     'Community College to UC. Lower UC to Top UC. Any School to Top 10 / Top 20.',
      intro_p1:     'Disappointed with your undergraduate admission results? A transfer is still very much on the table.',
      intro_p2:     'But without a clear understanding of how the transfer process actually works, most families end up repeating the same mistakes, just one year later. What no one tells you: IGETC eligibility, TAG application windows, and major-specific articulation requirements are often locked in during your very first semester at community college, long before most families even begin thinking seriously about transfer strategy.',
      intro_p3:     'Keystone has spent 17+ years navigating the U.S. university admissions landscape. We have seen too many hardworking students get blindsided by a process that looks straightforward on the surface but is governed by rules most families never see coming. Transfer admission is not a simplified version of freshman admission. It operates on completely different rules, timelines, and evaluation criteria. Families who treat it like a standard application almost always pay the price.',
      intro_p4:     'Dr. Wu is personally involved with every transfer student, building a 12 to 18-month complete roadmap that leaves no blind spots.',
      list_label:   'What We Do for You',
      list1:        'Match target schools and majors to your real admission probability, not wishful thinking',
      list2:        'Benchmark your GPA against actual transfer admit data for your specific major and campus',
      list3:        'Build a course plan that satisfies articulation requirements while protecting your flexibility',
      list4:        'Assess TAG/TAP eligibility and create an immediate action plan if you qualify',
      list5:        'Coach your UC Personal Insight Questions (PIQs) to authentically reflect who you are right now, not who you were in high school',
      list6:        'Manage every deadline on your behalf so you are never caught off guard by a window that quietly closed',
      who_label:    'Who This Is For',
      who_p:        'Community college students targeting UCLA, UC Berkeley, or UCSD. Students at UC Santa Cruz, UC Riverside, or UC Merced aiming to move up to a top campus. And any undergraduate at any institution who wants a genuine shot at a top-10 or top-20 program.',
      cta_h2:       'The Transfer Window Is Narrower Than Most Families Realize',
      cta_p:        'Book a free consultation with Dr. Wu to find out exactly where you stand.',
      cta_btn:      'Book Free Consultation',
    },

    undergrad: {
      hero_label:   'Service',
      hero_h1:      'Undergraduate 4-Year Success Planning',
      hero_sub:     'Course Strategy. Major Decisions. Career Readiness. AI-Era Advantage.',
      intro_p1:     'Getting into your dream university is only the beginning.',
      intro_p2:     'What happens in those four years determines everything: whether you land that internship offer, whether you get into your target company, whether you are admitted to a top Master\'s or PhD program, whether you are the kind of professional who works with AI rather than being replaced by it, or whether you walk across the graduation stage with a diploma and no clear idea of what comes next.',
      intro_p3:     'The students who truly succeed after college are not smarter than everyone else. They simply started planning earlier.',
      intro_p4:     'Recruiting cycles at top tech companies and consulting firms open before you even set foot on campus. The most valuable research opportunities fill up while you are still settling into your dorm. Most students do not discover this until junior or even senior year, by which point the best doors have already quietly closed.',
      intro_p5:     'Keystone\'s Undergraduate Planning service is built on Dr. Wu\'s 20+ years of hands-on advising experience. We give every student a career- and research-driven, AI-embracing dynamic roadmap, one that begins before freshman orientation and evolves all the way through graduation.',
      list_label:   'What\'s Included',
      list1:        '<strong>Course & major planning</strong>: A 4-year academic plan aligned with your career goals and graduate school ambitions, including smart minor selection and a GPA protection strategy',
      list2:        '<strong>Major adjustment guidance</strong>: Data-driven support for knowing when and how to switch majors, pursue a double major, or add a strategic minor without wasting time or losing momentum',
      list3:        '<strong>Graduate school planning</strong>: PhD vs. Master\'s decision framework, research experience building, faculty advisor network access, and staggered application timing so you are never scrambling at the last minute',
      list4:        '<strong>Career & internship roadmap</strong>: Recruiting timelines, resume and LinkedIn development, professional network building, and hands-on job search tool fluency',
      list5:        '<strong>AI-era competitiveness</strong>: A personalized roadmap for layering AI collaboration skills on top of domain expertise, including project portfolio development and competition strategy',
      list6:        '<strong>5C Core Competency Development</strong>: Curiosity, Courage, Creativity, Compassion, and Communication: the five human qualities AI can never replicate, woven into every semester\'s action plan',
      list7:        '<strong>Passion & purpose alignment</strong>: Frameworks to help students identify the intersection of what they love, what they are good at, and what the world needs, so their choices are driven by direction, not default',
      list8:        '<strong>Long-term career strategy</strong>: From first internship to first full-time offer, and the personal brand that carries students through every stage beyond',
      edge_label:   'Keystone\'s Edge',
      edge_p:       'Our advisor network includes industry professionals from Google, Amazon, TikTok, and NASA, giving us real-world insight into what actually matters at the undergraduate stage, far beyond what any standard academic advisor can offer.',
      who_label:    'Who This Is For',
      who_p:        'Incoming freshmen who want to start strong from Day One. Current undergraduates who feel behind or without direction. Students weighing industry careers against graduate school. And families who want a structured, accountable planning system that goes far beyond what a campus counselor can provide.',
      cta_h2:       'Most Students React. Keystone Students Plan.',
      cta_p:        'Book a free consultation to see what your child\'s 4-year roadmap looks like.',
      cta_btn:      'Book Free Consultation',
    },

    dualtrack: {
      hero_label:   'Service',
      hero_h1:      'US + UK Dual-Track Application',
      hero_sub:     'For high-achieving students in mainland China targeting two of the world\'s most prestigious education systems.',
      intro_p1:     'The U.S. and UK university admissions systems are not just geographically apart. They are philosophically opposite in what they evaluate.',
      intro_p2:     'The U.S. Common App asks: Who are you as a person? The UK UCAS personal statement asks: Why are you academically suited for this subject?',
      intro_p3:     'Submit the same essay to both, and you will almost certainly be rejected by both.',
      intro_p4:     'Most students in China end up with one of two problems: a consultant who knows the U.S. system well but has only surface-level familiarity with UK admissions, or a UK-focused agency that lacks the depth needed to compete at the top of the American market. Consultants who can genuinely command both systems, and integrate them into a single coherent strategy, are rare.',
      intro_p5:     'Keystone is US-based, with deep expertise in UK admissions built specifically for Chinese students. Dr. Wu and her advisory team run both tracks simultaneously: one unified student story, told in two completely different voices, to two completely different audiences.',
      list_label:   'What We Do for You',
      list1:        '<strong>Dual school list strategy</strong>: U.S. targets spanning Ivy League, top liberal arts colleges, and top-20 research universities; UK targets covering Oxford, Cambridge, and Russell Group programs tailored to your subject area',
      list2:        '<strong>Coordinated timeline management</strong>: Oxford/Cambridge deadline of October 15, all other UK institutions by January 31, running in parallel with U.S. EA/ED/RD cycles without conflict',
      list3:        '<strong>Full U.S. application suite</strong>: Common App personal statement, school-specific supplements (Why This School, Why This Major), and activities list optimization',
      list4:        '<strong>UK UCAS personal statement</strong>: Academically rigorous, subject-focused, and calibrated precisely to how UK admissions tutors actually read and evaluate candidates',
      list5:        '<strong>Oxford & Cambridge interview preparation</strong>: The UK admissions interview tests subject-depth reasoning, not personality; we prepare students for the exact format they will face',
      list6:        '<strong>Offer decision strategy</strong>: When letters arrive from both sides of the Atlantic, we help families evaluate program quality, career outcomes, financial considerations, and long-term fit with clarity and confidence',
      list7:        '<strong>Full bilingual support</strong>: Dr. Wu communicates fluently in both English and Chinese, with WeChat availability and time-zone-friendly scheduling designed for mainland China families',
      who_label:    'Who This Is For',
      who_p:        'High-achieving students in mainland China with a strong academic identity who want to genuinely unlock elite programs in both countries, not treating the UK as a safety net, but pursuing both tracks seriously to maximize total outcomes.',
      cta_h2:       'The October 15 Oxbridge Deadline Arrives Faster Than Families Expect',
      cta_p:        'Add Dr. Wu on WeChat now (janewu2237) to start building your dual-track strategy.',
      cta_btn:      'Book Free Consultation',
    },

    lifeskills: {
      hero_label:   'Service',
      hero_h1:      'Life Skills & Professional Development',
      hero_sub:     'Your child will learn to manage themselves. We build real habits with real systems.',
      intro_label:  'Beyond Admissions',
      intro_h2:     'The Skills That Matter <span class="gold">After</span> Acceptance',
      intro_p1:     'Getting into a great university is a milestone, not a finish line. The students who thrive in college and beyond are the ones who know how to manage their time, communicate professionally, think critically about technology, and take ownership of their own growth.',
      intro_p2:     'Keystone\'s Life Skills program is designed for students who have the talent but need the systems. Led by Aaron Chang, a UCLA Computer Science graduate who has interned at AWS, TikTok, and Google, this program delivers practical, hands-on coaching that students actually use every day.',
      mentor_label: 'Your Mentor',
      mentor_h2:    'Aaron Chang',
      mentor_title: 'UCLA Computer Science, Class of 2026',
      mentor_p1:    'Aaron learned these skills the hard way: through trial and error at one of the most competitive computer science programs in the country, through recruiting cycles at the world\'s top tech companies, and through building two businesses from scratch. Now he teaches them to your child so they do not have to figure it out alone.',
      mentor_p2:    'As a near-peer mentor, Aaron connects with students in a way that parents and traditional advisors cannot. He has been exactly where they are, and he knows what it takes to get where they want to go.',
      skill1_title: 'Productivity Systems',
      skill1_body:  'Google Calendar, Notion, task management workflows. We do not just recommend tools; we set them up together and build habits that stick.',
      skill2_title: 'AI Literacy',
      skill2_body:  'How to use Claude, ChatGPT, and other AI tools responsibly and effectively. When to lean on AI, when to think for yourself, and how to stay ahead of the curve.',
      skill3_title: 'Time Management & Self-Discipline',
      skill3_body:  'Scheduling, deadlines, prioritization, and accountability. The foundational habits that separate students who coast from students who excel.',
      skill4_title: 'Entrepreneurial Thinking',
      skill4_body:  'Business basics, initiative, creative problem-solving, and giving back to family. Skills that serve students whether they start a company or join one.',
      skill5_title: 'Communication & Professional Presence',
      skill5_body:  'Email etiquette, networking, presentations, and personal branding. The soft skills that open doors in every industry.',
      audience_label: 'Who This Is For',
      audience_h2:   'Built for Students <span class="gold">Ready for More</span>',
      audience1_title:'The High Achiever Who Needs Direction',
      audience1_body: 'Your child gets straight A\'s but freezes when asked what they want to do after graduation. They excel in the classroom but have never managed a project, sent a professional email, or built anything outside of a homework assignment. This program turns academic talent into real-world capability: productivity systems, professional communication, and the self-management skills that separate students who thrive from students who just survive.',
      audience2_title:'The Specialist Who Needs to Be Well-Rounded',
      audience2_body: 'Your child is brilliant in one area but underdeveloped in others. Maybe they can code but cannot hold a conversation in a meeting, or they write beautifully but have no sense of time management. We help students close the gaps that hold them back: AI literacy, entrepreneurial thinking, networking, and the everyday life skills that universities and employers expect but no one teaches.',
      cta_h2:       'Start Building Real-World Skills Today',
      cta_p:        'Book a free consultation to learn how Aaron and the Keystone team can prepare your child for life beyond the classroom.',
      cta_btn:      'Book Free Consultation',
    },

  },

  /* ── CHINESE ──────────────────────────────────────────── */
  zh: {
    nav: {
      logo:    'Keystone <span>咨询</span>',
      home:    '首页',
      services:'服务项目',
      about:   '关于我们',
      success: '成功案例',
      blog:    '博客资讯',
      contact: '联系我们',
      cta:     '免费咨询',
      lang_switch: 'EN',
      lang_switch_long: 'Switch to English',
      svc_admissions: '升学咨询', // TODO: Review Chinese translation
      svc_transfer:   '转学策略', // TODO: Review Chinese translation
      svc_undergrad:  '本科规划', // TODO: Review Chinese translation
      svc_dualtrack:  '美英双申', // TODO: Review Chinese translation
      svc_lifeskills: '生活技能', // TODO: Review Chinese translation
    },

    home: {
      hero_badge:   '自2008年 · 100%录取成功率',
      hero_h1:      'AI时代，助力学生<em>成功进入顶尖美国大学</em>',
      hero_sub:     '仅靠GPA和标化成绩已不足以脱颖而出。我们帮助学生打造AI无法替代的核心优势：批判性思维、领导力和有说服力的个人叙事，这正是顶尖大学所看重的。',
      hero_cta1:    '预约免费咨询',
      hero_cta2:    '了解服务',
      stat1_num:    '100%',
      stat1_label:  '录取成功率',
      stat2_num:    '17+',
      stat2_label:  '年专业经验',
      stat3_num:    '500+',
      stat3_label:  '辅导学生数',
      schools_label:'我们的学生已被以下院校录取',
      industry_label:'顾问团队背景',
      industry_h2:   '行业<span class="gold">精英</span>顾问',
      industry_sub:  '我们的顾问网络涵盖来自顶尖科技公司、航天机构、全球媒体平台及国际金融机构的教授、研究人员和专业人士。',

      why_label:    '为什么选择我们',
      why_h2:       '值得信赖的<span class="gold">升学顾问</span>',
      why1_title:   '卓越成功记录',
      why1_body:    '17年来100%录取成功率，数百名学生成功进入梦想院校，这一成绩奠定了我们在业界的权威地位。',
      why2_title:   '超越GPA与AP',
      why2_body:    '顶尖名校早已将高GPA视为"入场券"。我们帮助学生打造招生官真正渴望看到的——真实世界的影响力，以及不可复制的思维深度。',
      why3_title:   '作品集，而非模板',
      why3_body:    '每位学生都将积累真实资产——科研论文、项目、竞赛——而非套用模板简历。这些成果是未来职业发展的早期基石，而不仅仅是申请的加分项。',
      why4_title:   '随时随地支持',
      why4_body:    '全天候微信直通，专为国内家庭设计。吴博士亲自参与每位学生的指导，不外包给助理团队。',

      ai_label:     '我们的核心优势',
      ai_h2:        '超越GPA：培养<span class="gold">AI时代竞争力</span>',
      ai_sub:       '当大多数顾问还在优化GPA和刷AP时，吴博士专注于培养AI永远无法替代的能力——而这正是顶尖大学真正想要的。',
      ai1_title:    '定义问题的能力',
      ai1_body:     'AI可以高效解决标准化问题，但人类负责定义方向。我们训练学生主动提问、挖掘真实世界的痛点，并做出任何算法都无法替代的价值判断。',
      ai2_title:    '作品集胜过简历',
      ai2_body:     '名校标签正在稀释。我们协助学生积累真实资产——科研论文、社区项目、创业尝试。这些不只是申请加分项，更是未来职业的早期资产，价值贯穿一生。',
      ai3_title:    '"5C"护城河',
      ai3_body:     '我们致力于培养AI永远无法替代的五大核心特质：<strong>好奇心、勇气、创造力、同情心与沟通力</strong>。这些正是顶尖名校招生官真正渴望看到的，也是决定孩子毕业后能否脱颖而出的关键。',
      ai_question:  '"AI时代，家长还只知道买学区房、报编程班、存教育基金……却没教子女AI永远抢不走的真本事吗？"',

      svc_label:    '我们的服务',
      svc_h2:       '从升学申请到<span class="gold">职业起步</span>',
      svc_sub:      '大多数顾问止步于录取通知书。我们引导学生从高中走过大学，直到事业起步。',
      svc1_title:   '大学升学咨询',
      svc1_body:    '梦想院校定位、文书辅导、面试准备、课外活动策略和科研推荐。全套升学服务。',
      svc2_title:   '转学策略规划',
      svc2_body:    '从社区大学到UC，从普通院校到Top 20，或任何学校到梦想专业。我们制定路线图并执行到位。',
      svc3_title:   '本科四年规划',
      svc3_body:    '选课规划、职业路线图、研究生院准备和AI时代技能培养。逐学期的大学成功计划。',
      svc4_title:   '美英双轨申请',
      svc4_body:    '同时申请美国和英国大学。两个体系，一个连贯策略，全程双语支持。',
      svc5_title:   '生活技能与职业发展',
      svc5_body:    '生产力工具、AI素养、时间管理和职业沟通。将优秀学生培养成成功成年人的实用技能。',
      svc_all:      '查看全部服务 \u2192',

      process_label:'我们的方法论',
      process_h2:   '简单、<span class="gold">家长友好</span>的流程',
      step1_eyebrow:'第一步',
      step1_title:  '深度测评与潜力挖掘',
      step1_body:   '通过多维度对话，发现孩子真正热爱的领域，避免盲目跟风，挖掘专属竞争优势。',
      step2_eyebrow:'第二步',
      step2_title:  'AI协作项目启动',
      step2_body:   '指导学生利用现代工具辅助研究，产出具有时代感和专业深度的真实作品集——远超普通简历。',
      step3_eyebrow:'第三步',
      step3_title:  '长期陪跑与动态优化',
      step3_body:   '每年定期深度复盘，根据孩子成长状态和最新录取趋势实时调整路径，吴博士全程亲自参与。',
      step4_eyebrow:'第四步',
      step4_title:  '叙事重构与冲刺',
      step4_body:   '在申请季，将积累的作品串联成一个关于"未来竞争力"的精彩故事，深深打动招生委员会。',

      founder_label:  '创始人介绍',
      founder_name:   '吴健博士',
      founder_title:  'Michigan State University 博士',
      founder_badge:  '创始人兼首席顾问',
      founder_p1:     '吴健博士拥有超过20年横跨中美高等教育领域的丰富经验。她亲自指导数百名学生，帮助他们进入美国顶尖大学并取得卓越成就。',
      founder_p2:     '她独特的双文化背景，使她成为国内家庭最信赖的升学顾问——既深谙美国录取体系，又充分理解中国家庭的期望与关切。',
      founder_p3:     '吴博士始终以人为本，将每一位学生视如己出，从初次咨询到最终录取，全程投入、用心陪伴。',
      founder_link:   '查看完整简历 →',
      cred1: 'PhD · Michigan State University',
      cred2: '20+年专业经验',
      cred3: '美国高等教育专家',
      cred4: '微信全程支持',
      cred5: '中英双语服务',

      testi_label:  '家长评价',
      testi_h2:     '来自<span class="gold">家庭</span>的真实评价',
      testi_more:   '查看全部成功案例 \u2192',
      t1_body:      'Keystone把我们的孩子当成自己的孩子。一步一步的指导和文书辅导让一切都不同了。没有吴博士，我们无法完成这个过程。',
      t1_author:    '已录取学生家长（2024届）',
      t1_meta:      'UC Berkeley · 计算机科学 · 中国 · 2024',
      t2_body:      '我们从中国大陆来，对美国申请流程一无所知。吴博士用中英文清晰地解释了一切，随时可以在微信上联系到她。无可替代。',
      t2_author:    '已录取学生家长（2023届）',
      t2_meta:      'UCLA · 经济学 · 中国 · 2023',
      t3_body:      '我女儿的文书经过Keystone团队的辅导后，从普通变得真正出彩。她被梦校录取，现在非常优秀。完全值得。',
      t3_author:    '已录取学生家长（2024届）',
      t3_meta:      'Columbia University · 预医学 · 台湾 · 2024',
      mentor_label:   '从学生到导师', // TODO: Review Chinese translation
      mentor_h2:      'Aaron Chang',
      mentor_title:   'UCLA 计算机科学, 2026届', // TODO: Review Chinese translation
      mentor_p1:      'Aaron是Keystone体系培养出的学生。在吴博士从中学开始的指导下，他被UCLA计算机科学专业录取，并先后在亚马逊云科技(AWS)、TikTok和谷歌实习，随后接受了全职软件工程师的工作邀请。', // TODO: Review Chinese translation
      mentor_p2:      '在此过程中，他在COLM 2025（全球顶级AI学术会议之一）发表了机器学习研究论文，创办了两家公司，并亲手搭建了您正在浏览的这个网站。他的经历证明了Keystone方法的有效性：不仅帮助学生进入顶尖大学，更帮助他们在大学之后蓬勃发展。', // TODO: Review Chinese translation
      mentor_p3:      '如今Aaron作为近距离导师直接与Keystone学生合作。他带来了在顶尖大学学习、获得竞争激烈的实习机会以及在科技行业发展事业的第一手经验。对学生而言，他正是曾经站在他们同样位置的人，能够向他们展示未来的方向。', // TODO: Review Chinese translation
      mentor_cred1:   'UCLA CS \'26',
      mentor_cred2:   'AWS / TikTok / Google',
      mentor_cred3:   'COLM 2025 研究', // TODO: Review Chinese translation
      mentor_cred4:   '创业者', // TODO: Review Chinese translation
      mentor_cred5:   '近距离导师', // TODO: Review Chinese translation
      mentor_badge:   '近距离导师与顾问', // TODO: Review Chinese translation
      mentor_link:    '了解生活技能项目 \u2192', // TODO: Review Chinese translation

      case_cta:     '查看更多案例 \u2192',
      case1_heading:'学生A \u00b7 UC Berkeley 数据科学 \u00b7 2029届', // TODO: Review Chinese translation
      case1_p1:     '学生A在八年级时来到Keystone，当时GPA低于顶尖大学的平均水平，没有突出奖项，课外活动有限，也没有清晰的申请叙事主线。常规申请方案很可能淹没在众多申请者中。', // TODO: Review Chinese translation
      case1_p2:     '吴博士精准锁定NASA Space Apps挑战赛，与该学生对数据科学的兴趣高度契合。Keystone协助招募组建团队，并全程指导：项目立意、演示汇报、技术执行。最终成绩：全球10,000+支参赛队伍中跻身前10%。这段竞赛经历成为申请的核心亮点，充分展现了主动性、团队协作能力和解决实际问题的能力。', // TODO: Review Chinese translation
      case1_p3:     '通过文书与面试辅导，学生A学会清晰表达从普通学生成长为竞赛领队的历程。这条成长弧线深深打动了UC Berkeley招生委员会。该学生成功被数据科学专业录取，2029届。', // TODO: Review Chinese translation

      case2_heading:'学生B \u00b7 Georgia Tech 计算机科学 \u00b7 2030届', // TODO: Review Chinese translation
      case2_p1:     '学生B来到Keystone时课外活动寥寥，文书缺乏方向。没有令人信服的故事让招生官留下印象，该学生的申请档案与其他数千名申请者毫无区分度。', // TODO: Review Chinese translation
      case2_p2:     '吴博士看到了潜力并立即行动。她锁定NASA Space Apps挑战赛作为战略切入点，帮助学生组建团队，并全程指导竞赛的每个阶段。除了竞赛之外，Keystone重新梳理了该学生的整个申请叙事，将零散的档案转化为一个关于成长、主动性和技术抱负的聚焦故事。', // TODO: Review Chinese translation
      case2_p3:     '结果不言自明：被Georgia Tech计算机科学、UC Berkeley（文理学院）、华盛顿大学西雅图CS、威斯康星大学麦迪逊CS、UCSB计算机科学等多所顶尖院校录取。一份原本平淡无奇的申请，最终变成了一系列真正有说服力的成就，让顶尖项目无法忽视。', // TODO: Review Chinese translation

      faq_label:    '常见问题',
      faq_h2:       '家长最关心的<span class="gold">问题解答</span>',
      faq1_q:       '孩子几年级开始合适？',
      faq1_a:       '越早越好——理想情况是9年级或10年级。早期介入让我们有时间规划课程、建立课外活动档案，并发现大大提升申请竞争力的科研或暑期机会。当然，我们也为11、12年级学生提供服务，并有丰富的成功案例。',
      faq2_q:       '你们服务中国大陆的家庭吗？',
      faq2_a:       '当然。我们的许多学生和家庭都在中国大陆。我们全程支持微信沟通，全天候服务，跨越时差。吴博士是中英双语专家，整个服务流程专门为国内家庭设计。',
      faq3_q:       '你们的学生录取了哪些学校？',
      faq3_a:       '我们的学生已被Stanford、Harvard、MIT、UC Berkeley、UCLA、Columbia等顶尖大学录取，以及美国众多高选拔性院校。自2008年以来，我们保持100%录取成功率。',
      faq4_q:       '免费咨询包括什么？',
      faq4_a:       '免费咨询是与吴博士一对一的无义务交流，时长约30分钟。我们将讨论孩子目前的学业状况、兴趣爱好和目标院校。结束后，您将对孩子的升学准备情况有初步了解，并获得一份初步规划方向。',
      faq5_q:       'Keystone与其他升学顾问有何不同？',
      faq5_a:       '大多数顾问优化GPA和AP成绩——我们构建AI时代的竞争优势。我们通过"5C"框架（好奇心、勇气、创造力、同情心、沟通力）和真实作品集策略，帮助学生打造顶尖大学真正渴望的候选人形象——而不只是看起来不错的申请表。',
      faq6_q:       '服务费用是多少？',
      faq6_a:       '费用根据学生的年级、所需支持范围和时间周期进行定制。我们提供从单项文书辅导到多年全程服务的各类方案。请先预约免费咨询，我们将为您提供个性化报价。',
      faq7_q:       '你们提供研究生申请服务吗？',
      faq7_a:       '我们的主要专注领域是本科申请，全程指导高中生完成美国大学申请。如有研究生申请需求，欢迎联系我们，我们可以探讨是否能够提供协助。',

      cta_h2:       '让我们聊聊孩子的未来。',
      cta_p:        '预约与吴健博士的免费、无义务咨询。',
      cta_wechat:   '微信：janewu2237',
      cta_btn:      '预约免费咨询',
    },

    services: {
      hero_label:   '服务项目',
      hero_h1:      '全方位学生支持', // TODO: Review Chinese translation
      hero_sub:     '从第一次申请到职业起步，全程陪伴。', // TODO: Review Chinese translation

      hub_label:    '我们的服务', // TODO: Review Chinese translation
      hub_h2:       '五大<span class="gold">学生成功</span>路径', // TODO: Review Chinese translation
      hub1_title:   '升学申请咨询', // TODO: Review Chinese translation
      hub1_body:    '我们的核心服务：为9至12年级学生提供针对美国顶尖大学的个性化策略。文书、面试、课外活动和科研机会一站式服务。', // TODO: Review Chinese translation
      hub1_link:    '了解更多 \u2192', // TODO: Review Chinese translation
      hub2_title:   '转学策略与安置', // TODO: Review Chinese translation
      hub2_body:    '社区大学转UC、低排名UC转顶尖UC、或任何学校转Top 10。为转学生提供完整的规划路线。', // TODO: Review Chinese translation
      hub2_link:    '了解更多 \u2192',
      hub3_title:   '本科四年成功规划', // TODO: Review Chinese translation
      hub3_body:    '课程策略、专业选择、实习招聘准备和职业规划。从新生入学到毕业的动态路线图。', // TODO: Review Chinese translation
      hub3_link:    '了解更多 \u2192',
      hub4_title:   '美英双申', // TODO: Review Chinese translation
      hub4_body:    '专为中国大陆高成就学生设计，同时申请美国和英国顶尖大学。', // TODO: Review Chinese translation
      hub4_link:    '了解更多 \u2192',
      hub5_title:   '生活技能与职业发展', // TODO: Review Chinese translation
      hub5_body:    '效率工具、AI素养、时间管理和创业思维。录取之后真正让学生脱颖而出的实用技能。', // TODO: Review Chinese translation
      hub5_link:    '了解更多 \u2192',

      intro_label:  '我们的方法',
      intro_h2:     '个性化、专家级的升学顾问服务',
      intro_p1:     '每位学生都是独一无二的。Keystone咨询始终采用完全个性化的方式——没有模板，没有千篇一律的方案。吴博士和她的美国大学教授及前招生官团队，为每位学生量身设计专属策略。',
      intro_p2:     '从您与我们初次联系，到孩子收到录取通知书的那一刻，我们始终陪伴在您身边。',

      svc_label:    '六大核心服务',
      svc_h2:       '学生成功的<span class="gold">六大支柱</span>',

      svc1_title:   '梦想院校规划',
      svc1_body:    '我们首先深入了解孩子——学业优势、个人兴趣、课外成就和长远职业目标。在此基础上，我们精心筛选最优院校名单：冲刺、匹配与保底学校合理搭配，让孩子进入心仪大学的机会最大化。',
      svc1_l1:      '个性化院校名单制定',
      svc1_l2:      '专业方向与职业路径探索',
      svc1_l3:      '院校调研与校园文化匹配',
      svc1_l4:      '申请时间线规划',

      svc2_title:   '脱颖而出的申请',
      svc2_body:    '高绩点和标准化考试成绩只是起点。真正让成功申请者脱颖而出的，是他们讲述故事的方式。我们帮助每位学生发现最有力的个人叙事，并将其转化为在数万份申请中令人印象深刻的材料。',
      svc2_l1:      'Common App及UC System申请策略',
      svc2_l2:      '活动列表优化',
      svc2_l3:      '奖项与荣誉的有效呈现',
      svc2_l4:      '申请材料审核与质量把关',

      svc3_title:   '文书与面试辅导',
      svc3_body:    '个人陈述和补充文书是孩子直接与招生官"对话"的最佳机会。我们的文书辅导帮助学生找到真实的声音，发展有力的主题，写出令人难忘、真实感人的文章。',
      svc3_l1:      '个人陈述头脑风暴与初稿写作',
      svc3_l2:      '所有院校补充文书辅导',
      svc3_l3:      '多轮修改与专家反馈',
      svc3_l4:      '模拟面试训练与准备',

      svc4_title:   '学业与活动策略',
      svc4_body:    '顶尖大学青睐在学业上挑战自我、在兴趣上深入投入的学生。我们帮助家庭从9年级起规划课程选择、选择有意义的课外活动，建立有机一致的学生形象。',
      svc4_l1:      '课程选择与AP/IB规划',
      svc4_l2:      '课外活动组合开发',
      svc4_l3:      '社区服务与领导力策略',
      svc4_l4:      'SAT/ACT备考指导与时间安排',

      svc5_title:   '暑期与科研项目',
      svc5_body:    '有意义的暑期经历——科研实习、大学项目和学术拓展——可以极大地提升学生的申请竞争力。通过我们在UC Berkeley、UCLA和Stanford的合作伙伴网络，我们提供难以自行获取的独家资源。',
      svc5_l1:      'UC Berkeley和UCLA项目名额',
      svc5_l2:      'Stanford预科项目资源',
      svc5_l3:      '科研实习机会对接',
      svc5_l4:      '项目申请全程支持',

      svc6_title:   '竞赛与黑客马拉松',
      svc6_body:    '在竞争性、实战性环境中展现才能的学生会给招生官留下深刻印象。我们为学生精心挑选与其兴趣匹配的学术竞赛、科学展览和技术黑客马拉松，为申请增添独特分量。',
      svc6_l1:      '学术竞赛资源整合',
      svc6_l2:      '科学展览和科研竞赛备赛',
      svc6_l3:      '技术黑客马拉松资源对接',
      svc6_l4:      '竞赛获奖记录的申请呈现',

      pkg_label:    '服务套餐',
      pkg_h2:       '选择适合您孩子的<span class="gold">支持方案</span>',
      pkg_sub:      '每位学生的情况各不相同。请预约免费咨询，我们将为您推荐最适合的方案。',

      pkg1_name:    '精选套餐',
      pkg1_desc:    '专注于11-12年级学生的升学申请支持。', // TODO: Review Chinese translation
      pkg1_f1:      '文书辅导（个人陈述）',
      pkg1_f2:      '院校名单审核',
      pkg1_f3:      '申请策略咨询',
      pkg1_f4:      '面试准备',
      pkg1_f5:      '邮件答疑支持',

      pkg2_name:    '全程套餐',
      pkg2_desc:    '升学申请、转学策略与本科规划全覆盖，适合大多数家庭。', // TODO: Review Chinese translation
      pkg2_badge:   '最受欢迎',
      pkg2_f1:      '包含精选套餐所有内容',
      pkg2_f2:      '所有院校补充文书',
      pkg2_f3:      '转学策略咨询', // TODO: Review Chinese translation
      pkg2_f4:      '本科成功规划', // TODO: Review Chinese translation
      pkg2_f5:      '微信+优先响应支持',
      pkg2_f6:      '奖学金申请指导',

      pkg3_name:    '精英套餐',
      pkg3_desc:    '全部五项服务：升学、转学、本科规划、美英双申和生活技能。完整的Keystone体验。', // TODO: Review Chinese translation
      pkg3_f1:      '包含全程套餐所有内容',
      pkg3_f2:      '美英双申服务', // TODO: Review Chinese translation
      pkg3_f3:      '生活技能与职业发展', // TODO: Review Chinese translation
      pkg3_f4:      '科研项目名额对接',
      pkg3_f5:      '专属顾问一对一关系',
      pkg3_f6:      '全天候微信+视频支持',

      pkg_cta:      '联系我们免费咨询',

      cta_h2:       '预约免费咨询，开启您的旅程',
      cta_p:        '无义务，只是一次关于孩子目标和我们如何帮助的真诚对话。',
      cta_btn:      '预约免费咨询',
    },

    about: {
      hero_label:   '创始人',
      hero_h1:      '认识吴健博士',
      hero_sub:     '二十年沟通中美高等教育的桥梁专家。',

      bio_label:    '个人简介',
      bio_h2:       '连接两个世界的可信桥梁',
      bio_p1:       '吴健博士在中美高等教育领域工作了超过二十年。她在中国出生并接受基础教育，后赴美完成Michigan State University博士学位，亲身经历了中国家庭在面对美国大学申请时的困惑、期望与挑战。',
      bio_p2:       '在中国完成硕士学位后，吴博士从事了数年教育工作，随后凭借全额奖学金赴美攻读博士学位，深耕教育咨询领域。这段跨越中美两国的20余年亲身经历，赋予了她独特的双重视角。正是这种视角让她发现了一个关键缺口：无数优秀的中国学生之所以与梦校擦肩而过，仅仅是因为从未有人教会他们如何在美国申请体系中展现自己。',
      bio_p3:       '2008年，吴博士在洛杉矶创立了Keystone咨询，使命只有一个：让每一位学生都能获得与拥有顶级美国顾问资源的学生同等的指导。此后，她亲自指导了500多名学生进入顶尖大学，保持100%录取成功率。',
      bio_p4:       '吴博士的方式始终是人性化的。她相信每位学生都有值得讲述的独特故事，认为大学申请过程在正确引导下，是一次自我发现的旅程，而非仅仅是繁琐的行政手续。她将每一位学生视如己出。',
      bio_p5:       '流利使用中英文的吴博士，通过微信为中国大陆家庭提供服务，确保地域和时差永远不是获得一流指导的障碍。',
      bio_p6:       '最有说服力的证明，莫过于她对自己儿子的亲身培养：吴博士从初中起便为儿子规划升学路径，采用与每位Keystone学生相同的个性化成长路线图。2022年，他以计算机科学专业被UCLA录取，此后先后在Google和Amazon担任软件工程师。您正在浏览的这个网站，也是他亲手搭建的。',
      founder_badge:'创始人兼首席顾问',

      cred_label:   '专业资历',
      cred1_num:    '20+',
      cred1_label:  '年美国高等教育经验',
      cred2_num:    '500+',
      cred2_label:  '亲自指导学生数',
      cred3_num:    '100%',
      cred3_label:  '录取成功率',
      cred4_num:    '50+',
      cred4_label:  '录取院校数',

      team_label:   '顾问网络',
      team_h2:      '真正的<span class="gold">内部专家</span>团队',
      team_p1:      '吴博士的团队由精心挑选的顾问组成，他们拥有美国顶尖大学录取的第一手经验。我们的团队包括：',
      team_l1:      '顶尖院校的现任及前任美国大学教授',
      team_l2:      '曾审阅数千份申请的选拔性大学前招生官',
      team_l3:      '来自Stanford、Harvard、MIT、UC Berkeley和UCLA的优秀校友导师',
      team_l4:      'STEM、人文、商科、预医学和预法学专业方向的学术专家',
      team_p2:      '这一网络为Keystone学生带来无与伦比的内部优势——基于真实录取经验的指导，而非凭空猜测。',

      mentor_label:  '近距离导师', // TODO: Review Chinese translation
      mentor_h2:     'Aaron Chang',
      mentor_title:  'UCLA 计算机科学, 2026届', // TODO: Review Chinese translation
      mentor_p1:     'Aaron是Keystone方法的最佳证明。在吴博士从中学开始的指导下，他被UCLA计算机科学专业录取，并先后在亚马逊云科技(AWS)、TikTok和谷歌实习，随后接受了全职软件工程师的工作邀请。', // TODO: Review Chinese translation
      mentor_p2:     '他在COLM 2025（全球顶级AI学术会议之一）发表了机器学习研究论文，创办了两家公司，并亲手搭建了您正在浏览的这个网站。他的经历证明了Keystone的影响远不止大学录取。', // TODO: Review Chinese translation
      mentor_p3:     '如今Aaron作为近距离导师直接与Keystone学生合作，主导生活技能与职业发展项目。他带来了在顶尖大学学习、获得竞争激烈的实习机会以及在科技行业发展事业的第一手经验。对学生而言，他正是曾经站在他们同样位置的人，能够向他们展示未来的方向。', // TODO: Review Chinese translation
      mentor_cred1:  'UCLA CS \'26',
      mentor_cred2:  'AWS / TikTok / Google',
      mentor_cred3:  'COLM 2025 研究', // TODO: Review Chinese translation
      mentor_cred4:  '创业者', // TODO: Review Chinese translation
      mentor_cred5:  '近距离导师', // TODO: Review Chinese translation
      mentor_link:   '了解生活技能项目 \u2192', // TODO: Review Chinese translation

      timeline_label:'我们的历程',
      timeline_h2:  '铸就<span class="gold">学生成功</span>的传承',
      tl1_year:     '2008',
      tl1_title:    'Keystone成立',
      tl1_body:     '吴健博士在加州洛杉矶创立Keystone咨询，使命是让中国家庭获得精英美国升学指导。',
      tl2_year:     '2010',
      tl2_title:    '首批常春藤录取',
      tl2_body:     'Keystone学生首次被Harvard和Columbia录取，验证了个性化方法的有效性。',
      tl3_year:     '2013',
      tl3_title:    'UC系统专项深化',
      tl3_body:     '扩大顾问网络，引入前UC系统招生官，实现UC Berkeley和UCLA的100%录取率。',
      tl4_year:     '2016',
      tl4_title:    '第100位学生',
      tl4_body:     '重要里程碑：100名学生成功进入美国顶尖大学，均获第一志愿或理想录取结果。',
      tl5_year:     '2020',
      tl5_title:    '微信全面支持',
      tl5_body:     '推出专属微信支持体系，让Keystone对中国大陆家庭全面开放。',
      tl6_year:     '2024',
      tl6_title:    '突破500名学生',
      tl6_body:     '指导学生超500人，100%录取率持续保持，学生遍布全美50余所大学。',

      quote_text:   '"每个学生都有值得讲述的故事。我的使命，就是帮助他们找到语言——和信心——把这个故事说出来。"',
      quote_cite:   '吴健博士，创始人',

      cta_h2:       '预约与吴博士的一对一咨询',
      cta_p:        '免费，无义务。支持邮件或微信。',
      cta_btn:      '预约免费咨询',
    },

    success: {
      hero_label:   '成功案例',
      hero_h1:      '500+学生，100%成功率',
      hero_sub:     '自2008年起，每一位经吴博士指导的学生都被录取到符合其目标和潜力的大学。',

      stat1_num:    '100%',
      stat1_label:  '录取成功率',
      stat2_num:    '500+',
      stat2_label:  '指导学生数',
      stat3_num:    '17+',
      stat3_label:  '年专业经验',
      stat4_num:    '50+',
      stat4_label:  '录取院校数',

      filter_all:   '全部院校',
      filter_ivy:   '常春藤盟校',
      filter_uc:    'UC系统',
      filter_top25: '综合前25',
      filter_stem:  'STEM方向',

      stories_label:'学生录取结果',
      stories_h2:   '真实学生，真实<span class="gold">成果</span>',

      featured_label:'精选故事',
      featured_quote: '"当我们第一次联系吴博士时，我们的女儿是10年级学生，成绩不错，但方向不明。等到申请时，她已完成了大学水平的科研，主导了影响200名同学的校园项目，写出了让我们感动落泪——是最好那种意义上——的文章。她以第一志愿被UC Berkeley录取。吴博士不仅帮她申请了大学，更帮她发现了自己是谁。"',
      featured_cite:  '2024届学生家长 · UC Berkeley，计算机科学',

      s1_field: '计算机科学',
      s1_quote: '"Keystone把我们的孩子当成自己的孩子一样对待。一步步的指导和文书辅导起到了决定性的作用。没有吴博士，我们根本无法完成整个申请过程。"',
      s1_meta:  '2024届学生家长 · ★★★★★',

      s2_field: '经济学',
      s2_quote: '"我们从中国大陆来，对美国大学申请一无所知。吴博士用中英双语耐心讲解一切，而且随时可以通过微信联系。无价的帮助。"',
      s2_meta:  '2023届学生家长 · ★★★★★',

      s3_field: '医学预科',
      s3_quote: '"我女儿的文书从平庸变得真正出色。她被梦想中的学校录取，如今在那里茁壮成长。每一分钱都值得。"',
      s3_meta:  '2024届学生家长 · ★★★★★',

      s4_field: '电气工程',
      s4_quote: '"吴博士帮我儿子找到了让申请脱颖而出的科研方向。那一年他是为数不多被录取的国际学生之一。"',
      s4_meta:  '2022届学生家长 · ★★★★★',

      s5_field: '应用数学',
      s5_quote: '"从开始和Keystone合作的那一刻起，我们就知道自己找到了专家。吴博士给予我儿子的个性化关注令人叹服。"',
      s5_meta:  '2023届学生家长 · ★★★★★',

      s6_field: '计算机科学',
      s6_quote: '"Keystone帮助我们从零开始理解美国大学申请系统。我们的女儿如愿进入了她最心仪的CS院校。"',
      s6_meta:  '2024届学生家长 · ★★★★★',

      s7_field: '生物工程',
      s7_quote: '"吴博士为我们对接的暑期科研项目彻底改变了我儿子的申请。他17岁就发表了第一篇论文。"',
      s7_meta:  '2023届学生家长 · ★★★★★',

      s8_field: '商业与金融',
      s8_quote: '"吴博士完全理解我们女儿需要什么，帮助她打造了一个真正属于她的故事。结果超出了我们的期望。"',
      s8_meta:  '2024届学生家长 · ★★★★★',

      s9_field: '环境科学',
      s9_quote: '"作为初到美国体系的家庭，我们完全不知所措。Keystone给了我们清晰的路线图，全程陪伴我们走过每一步。"',
      s9_meta:  '2023届学生家长 · ★★★★★',

      sb_field: '计算机科学', // TODO: Review Chinese translation
      sb_quote: '"我们的女儿没有方向，课外活动也很少。吴博士从零开始为她打造整个申请档案，包括NASA Space Apps竞赛。她被Georgia Tech CS、UC Berkeley、华盛顿大学西雅图CS等多所学校录取。蜕变令人难以置信。"', // TODO: Review Chinese translation
      sb_meta:  '2030届学生家长 · ★★★★★', // TODO: Review Chinese translation

      cta_h2:       '您的孩子可以成为下一个成功故事',
      cta_p:        '预约免费咨询，让我们谈谈一切可能。',
      cta_btn:      '预约免费咨询',
    },

    blog: {
      hero_label:   '资源与洞察',
      hero_h1:      '为中国家庭提供专业资讯',
      hero_sub:     '美国大学申请专家指导——中英双语。',

      posts_label:  '精选文章',
      posts_h2:     '每个阶段的<span class="gold">升学知识</span>',

      post1_cat:    '申请技巧',
      post1_title:  '《Common App全解析》：中国家庭完全指南',
      post1_excerpt:'超过1000所美国大学使用Common Application。以下是成功驾驭它所需了解的一切。',
      post1_date:   '2025年1月',
      post1_read:   '阅读约8分钟',

      post2_cat:    '申请策略',
      post2_title:  '美国招生官究竟在看什么——国际学生申请内幕',
      post2_excerpt:'顶尖大学追求的，远不止成绩和考试分数。这是一位内部人士的真实视角。',
      post2_date:   '2024年12月',
      post2_read:   '阅读约6分钟',

      post3_cat:    '备考策略',
      post3_title:  'SAT还是ACT？如何为孩子做出正确选择',
      post3_excerpt:'两种考试都被所有美国大学接受，但正确选择取决于孩子的优势。以下是判断方法。',
      post3_date:   '2024年11月',
      post3_read:   '阅读约5分钟',

      post4_cat:    '院校选择',
      post4_title:  '构建均衡院校名单：冲刺、匹配与保底学校',
      post4_excerpt:'合理的院校名单策略能大幅提升孩子进入好学校的机会。以下是构建方法。',
      post4_date:   '2024年10月',
      post4_read:   '阅读约7分钟',

      post5_cat:    '机会资源',
      post5_title:  '顶尖美国大学暑期科研项目：您需要知道的一切',
      post5_excerpt:'暑期科研项目能彻底改变学生的申请竞争力。以下是最佳机会和获取方式的指南。',
      post5_date:   '2024年9月',
      post5_read:   '阅读约9分钟',

      post6_cat:    '文书写作',
      post6_title:  '个人陈述：如何讲述一个令人难忘的故事',
      post6_excerpt:'个人陈述是孩子直接与招生官对话的最佳机会。以下是让它发挥最大作用的方法。',
      post6_date:   '2024年8月',
      post6_read:   '阅读约10分钟',

      read_more:    '阅读全文 →',

      newsletter_label: '保持关注',
      newsletter_h2:    '获取专家指导资讯',
      newsletter_p:     '订阅最新美国大学申请洞察——中英双语。',
      newsletter_cta:   '或直接联系我们获取个性化建议：',
      newsletter_btn:   '免费咨询',
    },

    contact: {
      hero_label:   '联系我们',
      hero_h1:      '从免费咨询开始',
      hero_sub:     '吴博士对所有咨询在24小时内回复——通常更快。支持微信或邮件联系，服务全球家庭。',

      method2_title:  '电子邮件',
      method2_value:  'janewula@gmail.com',
      method2_note:   '24小时内回复',
      copy_email_btn: '复制邮箱',

      method3_title:  '微信',
      method3_value:  'janewu2237',
      method3_note:   '复制微信号，在微信中搜索 → 添加联系人',
      copy_btn:       '复制微信号',

      form_h3:        '发送咨询信息',
      form_parent:    '家长姓名',
      form_student:   '学生姓名',
      form_email:     '电子邮箱',
      form_phone:     '电话 / 微信号',
      form_grade:     '学生当前年级',
      form_grade0:    '请选择年级',
      form_grade1:    '8年级',
      form_grade2:    '9年级（高一）',
      form_grade3:    '10年级（高二）',
      form_grade4:    '11年级（高三）',
      form_grade5:    '12年级（高四）',
      form_grade6:    'Gap Year / 其他',
      form_schools:   '目标院校（可选）',
      form_msg:       '留言内容',
      form_submit:    '申请免费咨询 →',
      form_success:   '✓ 感谢您的咨询！我们将在24小时内与您联系。',
      form_wechat_note: '或直接通过微信联系我们：',

      wechat_label:   '微信二维码',
      wechat_note:    '打开微信 \u2192 扫一扫即可添加吴博士',

      info_label:     '服务说明',
      info_h3:        '您可以期待什么',
      info_l1:        '30分钟免费、无义务咨询',
      info_l2:        '24小时内回复（通常当天）',
      info_l3:        '支持邮件或微信',
      info_l4:        '中英双语服务',
      info_l5:        '总部位于洛杉矶，服务全球家庭',

      faq_label:      '快速解答',
      faq_h2:         '常见问题',
      faq1_q:         '咨询真的免费吗？',
      faq1_a:         '是的——完全免费，无任何义务。这是一次关于孩子目标和我们如何帮助的真诚对话。',
      faq2_q:         '你们服务中国国内的家庭吗？',
      faq2_a:         '当然。我们支持微信，全天候服务，跨越时差。吴博士是中英双语专家。',
      faq3_q:         '我们多快可以开始？',
      faq3_a:         '我们通常在3-5个工作日内安排初次咨询。请联系我们，我们会找到适合您的时间。',

      location:       '总部：美国加州洛杉矶 · 服务全球家庭 · 微信全天候支持',
    },

    /* ── NEW SERVICE PAGES (ZH) ──────────────────────────── */
    transfer: {
      hero_label:   '服务项目', // TODO: Review Chinese translation
      hero_h1:      '转学策略与安置', // TODO: Review Chinese translation
      hero_sub:     '社区大学转UC。低排名UC转顶尖UC。任何学校转Top 10 / Top 20。', // TODO: Review Chinese translation
      intro_p1:     '对本科录取结果感到失望？转学仍然完全有可能。', // TODO: Review Chinese translation
      intro_p2:     '但如果对转学流程没有清晰的了解，大多数家庭最终会在一年后重复同样的错误。很少有人告诉你：IGETC资格、TAG申请窗口和专业衔接课程要求，往往在社区大学的第一个学期就已锁定，远早于大多数家庭开始认真考虑转学策略的时间。', // TODO: Review Chinese translation
      intro_p3:     'Keystone拥有17年以上美国大学申请领域的经验。我们见过太多勤奋的学生被一个表面看起来简单、实际却充满隐性规则的流程打了个措手不及。转学录取并不是新生录取的简化版本，它在规则、时间线和评估标准上完全不同。把转学当作普通申请来对待的家庭，几乎总要付出代价。', // TODO: Review Chinese translation
      intro_p4:     '吴博士亲自参与每一位转学生的规划，制定12至18个月的完整路线图，不留任何盲区。', // TODO: Review Chinese translation
      list_label:   '我们为您做什么', // TODO: Review Chinese translation
      list1:        '根据您的真实录取概率匹配目标学校和专业，而非一厢情愿', // TODO: Review Chinese translation
      list2:        '将您的GPA与目标专业和校区的实际转学录取数据进行对标', // TODO: Review Chinese translation
      list3:        '制定满足衔接课程要求同时保留灵活性的选课计划', // TODO: Review Chinese translation
      list4:        '评估TAG/TAP资格，如符合条件立即制定行动计划', // TODO: Review Chinese translation
      list5:        '辅导您的UC个人陈述(PIQ)，真实反映当下的您，而非高中时期的您', // TODO: Review Chinese translation
      list6:        '代您管理每一个截止日期，确保您不会因悄然关闭的窗口而措手不及', // TODO: Review Chinese translation
      who_label:    '适合人群', // TODO: Review Chinese translation
      who_p:        '目标UCLA、UC Berkeley或UCSD的社区大学学生。在UC Santa Cruz、UC Riverside或UC Merced就读、希望转入顶尖校区的学生。以及任何院校中希望冲击Top 10或Top 20项目的本科生。', // TODO: Review Chinese translation
      cta_h2:       '转学窗口比大多数家庭想象的更窄', // TODO: Review Chinese translation
      cta_p:        '预约吴博士的免费咨询，了解您目前的真实定位。', // TODO: Review Chinese translation
      cta_btn:      '预约免费咨询', // TODO: Review Chinese translation
    },

    undergrad: {
      hero_label:   '服务项目', // TODO: Review Chinese translation
      hero_h1:      '本科四年成功规划', // TODO: Review Chinese translation
      hero_sub:     '课程策略。专业决策。职业准备。AI时代优势。', // TODO: Review Chinese translation
      intro_p1:     '进入梦想大学只是开始。', // TODO: Review Chinese translation
      intro_p2:     '大学四年里发生的一切决定了所有：能否拿到实习offer，能否进入目标公司，能否被顶尖硕士或博士项目录取，能否成为与AI协作而非被AI取代的专业人士，还是带着一张文凭却不知下一步该做什么走过毕业典礼。', // TODO: Review Chinese translation
      intro_p3:     '大学毕业后真正成功的学生并不比其他人更聪明。他们只是更早开始了规划。', // TODO: Review Chinese translation
      intro_p4:     '顶尖科技公司和咨询公司的招聘周期在你踏入校园之前就已开启。最有价值的科研机会在你还在适应宿舍生活时就已满员。大多数学生直到大三甚至大四才发现这一点，而此时最好的机会已经悄悄关闭了。', // TODO: Review Chinese translation
      intro_p5:     'Keystone的本科规划服务基于吴博士20多年的实战辅导经验。我们为每位学生提供以职业和科研为导向、拥抱AI的动态路线图，从新生入学前开始，一直延伸到毕业。', // TODO: Review Chinese translation
      list_label:   '服务内容', // TODO: Review Chinese translation
      list1:        '<strong>课程与专业规划</strong>: 与您的职业目标和研究生院志向对齐的四年学业计划，包括明智的辅修选择和GPA保护策略', // TODO: Review Chinese translation
      list2:        '<strong>专业调整指导</strong>: 数据驱动的支持，帮助您判断何时以及如何转专业、修双学位或添加战略性辅修，不浪费时间、不失去势头', // TODO: Review Chinese translation
      list3:        '<strong>研究生院规划</strong>: 博士vs硕士决策框架、科研经历积累、导师网络对接，以及错开申请时间，确保您永远不会在最后一刻手忙脚乱', // TODO: Review Chinese translation
      list4:        '<strong>职业与实习路线图</strong>: 招聘时间线、简历和LinkedIn优化、职业网络构建，以及求职工具实操能力', // TODO: Review Chinese translation
      list5:        '<strong>AI时代竞争力</strong>: 在专业知识基础上叠加AI协作技能的个性化路线图，包括项目作品集开发和竞赛策略', // TODO: Review Chinese translation
      list6:        '<strong>5C核心能力发展</strong>: 好奇心、勇气、创造力、同情心和沟通力：AI永远无法复制的五种人类品质，融入每个学期的行动计划', // TODO: Review Chinese translation
      list7:        '<strong>热情与目标对齐</strong>: 帮助学生找到热爱、擅长和世界需要之间的交汇点，让选择由方向驱动，而非随波逐流', // TODO: Review Chinese translation
      list8:        '<strong>长期职业策略</strong>: 从第一份实习到第一份全职offer，以及伴随学生每个阶段的个人品牌', // TODO: Review Chinese translation
      edge_label:   'Keystone的优势', // TODO: Review Chinese translation
      edge_p:       '我们的顾问网络包括来自Google、Amazon、TikTok和NASA的行业专业人士，让我们对本科阶段真正重要的事情有着远超普通学业顾问的实战洞察。', // TODO: Review Chinese translation
      who_label:    '适合人群', // TODO: Review Chinese translation
      who_p:        '希望从入学第一天就赢在起跑线的新生。感觉落后或缺乏方向的在读本科生。在就业与读研之间权衡的学生。以及希望获得远超校园顾问所能提供的结构化、负责任的规划体系的家庭。', // TODO: Review Chinese translation
      cta_h2:       '大多数学生被动应对。Keystone学生主动规划。', // TODO: Review Chinese translation
      cta_p:        '预约免费咨询，看看您孩子的四年路线图是什么样的。', // TODO: Review Chinese translation
      cta_btn:      '预约免费咨询', // TODO: Review Chinese translation
    },

    dualtrack: {
      hero_label:   '服务项目', // TODO: Review Chinese translation
      hero_h1:      '美英双申', // TODO: Review Chinese translation
      hero_sub:     '面向中国大陆高成就学生，同时申请两大全球最顶尖的教育体系。', // TODO: Review Chinese translation
      intro_p1:     '美国和英国的大学录取体系不仅在地理上相隔，在评估理念上也截然相反。', // TODO: Review Chinese translation
      intro_p2:     '美国Common App问的是：你是一个什么样的人？英国UCAS个人陈述问的是：你为什么在学术上适合这个专业？', // TODO: Review Chinese translation
      intro_p3:     '用同一篇文书提交给两边，几乎可以肯定两边都会被拒。', // TODO: Review Chinese translation
      intro_p4:     '中国大陆的大多数学生最终面临两个问题之一：顾问精通美国体系但对英国录取只有表面了解，或者英国留学机构在美国市场缺乏竞争力。能真正驾驭两套体系并将其整合为一个连贯策略的顾问少之又少。', // TODO: Review Chinese translation
      intro_p5:     'Keystone总部位于美国，同时拥有专门为中国学生打造的深度英国录取专业能力。吴博士和她的顾问团队同步运作两条申请线：一个统一的学生故事，用两种完全不同的声音，讲给两个完全不同的受众。', // TODO: Review Chinese translation
      list_label:   '我们为您做什么', // TODO: Review Chinese translation
      list1:        '<strong>双轨选校策略</strong>: 美国目标覆盖常春藤、顶尖文理学院和Top 20研究型大学；英国目标覆盖牛津、剑桥和Russell Group项目，按您的学科领域量身定制', // TODO: Review Chinese translation
      list2:        '<strong>协调时间线管理</strong>: 牛津/剑桥截止日期10月15日，其他英国院校1月31日，与美国EA/ED/RD周期并行且无冲突', // TODO: Review Chinese translation
      list3:        '<strong>完整美国申请套件</strong>: Common App个人陈述、学校专属补充文书（Why This School, Why This Major），以及活动列表优化', // TODO: Review Chinese translation
      list4:        '<strong>英国UCAS个人陈述</strong>: 学术严谨、学科聚焦，精确校准英国录取导师实际阅读和评估的方式', // TODO: Review Chinese translation
      list5:        '<strong>牛津与剑桥面试准备</strong>: 英国录取面试考察的是学科深度推理，而非个性；我们为学生准备他们将面对的确切形式', // TODO: Review Chinese translation
      list6:        '<strong>录取决策策略</strong>: 当两边的录取通知同时到达，我们帮助家庭从项目质量、职业前景、经济考量和长期匹配度等维度清晰评估', // TODO: Review Chinese translation
      list7:        '<strong>全程双语支持</strong>: 吴博士中英文流利沟通，支持微信联系，时区友好的安排专为中国大陆家庭设计', // TODO: Review Chinese translation
      who_label:    '适合人群', // TODO: Review Chinese translation
      who_p:        '中国大陆拥有强烈学术身份的高成就学生，真正希望解锁两国精英项目，而非将英国作为保底，而是认真追求两条申请线以最大化整体录取结果。', // TODO: Review Chinese translation
      cta_h2:       '牛津剑桥10月15日截止日期比家长预期来得更快', // TODO: Review Chinese translation
      cta_p:        '立即添加吴博士微信(janewu2237)，开始制定您的双申策略。', // TODO: Review Chinese translation
      cta_btn:      '预约免费咨询', // TODO: Review Chinese translation
    },

    lifeskills: {
      hero_label:   '服务项目', // TODO: Review Chinese translation
      hero_h1:      '生活技能与职业发展', // TODO: Review Chinese translation
      hero_sub:     '让您的孩子学会自我管理。我们用真实的系统培养真正的习惯。', // TODO: Review Chinese translation
      intro_label:  '超越录取', // TODO: Review Chinese translation
      intro_h2:     '录取<span class="gold">之后</span>真正重要的技能', // TODO: Review Chinese translation
      intro_p1:     '进入一所好大学是里程碑，不是终点线。在大学及以后真正蓬勃发展的学生，是那些知道如何管理时间、专业沟通、批判性地看待技术并对自己的成长负责的人。', // TODO: Review Chinese translation
      intro_p2:     'Keystone的生活技能项目专为有才华但需要系统方法的学生设计。由Aaron Chang主导，他是UCLA计算机科学毕业生，曾在AWS、TikTok和Google实习，这个项目提供学生每天都会实际使用的实践型教练辅导。', // TODO: Review Chinese translation
      mentor_label: '您的导师', // TODO: Review Chinese translation
      mentor_h2:    'Aaron Chang',
      mentor_title: 'UCLA 计算机科学, 2026届', // TODO: Review Chinese translation
      mentor_p1:    'Aaron通过艰难的方式学到了这些技能：在全美最具竞争力的计算机科学项目中摸索，在全球顶尖科技公司的招聘周期中历练，从零开始创办两家公司。现在他教给您的孩子，让他们不必独自摸索。', // TODO: Review Chinese translation
      mentor_p2:    '作为近距离导师，Aaron能够以父母和传统顾问无法做到的方式与学生建立联系。他曾身处学生们现在的位置，他知道到达他们想去的地方需要什么。', // TODO: Review Chinese translation
      skill1_title: '效率工具系统', // TODO: Review Chinese translation
      skill1_body:  'Google Calendar、Notion、任务管理工作流。我们不只推荐工具，还一起设置并培养持久的习惯。', // TODO: Review Chinese translation
      skill2_title: 'AI素养', // TODO: Review Chinese translation
      skill2_body:  '如何负责任且高效地使用Claude、ChatGPT和其他AI工具。何时依赖AI、何时独立思考，以及如何保持领先。', // TODO: Review Chinese translation
      skill3_title: '时间管理与自律', // TODO: Review Chinese translation
      skill3_body:  '日程安排、截止日期管理、优先级排序和自我问责。区分普通学生和优秀学生的基础习惯。', // TODO: Review Chinese translation
      skill4_title: '创业思维', // TODO: Review Chinese translation
      skill4_body:  '商业基础、主动性、创造性问题解决和回馈家庭。无论学生未来创业还是加入公司都受益的技能。', // TODO: Review Chinese translation
      skill5_title: '沟通与职业形象', // TODO: Review Chinese translation
      skill5_body:  '邮件礼仪、社交网络、演讲展示和个人品牌。在各行各业打开机会大门的软技能。', // TODO: Review Chinese translation
      audience_label: '适合人群', // TODO: Review Chinese translation
      audience_h2:   '为准备好<span class="gold">更进一步</span>的学生打造', // TODO: Review Chinese translation
      audience1_title:'成绩优异但缺乏方向的学生', // TODO: Review Chinese translation
      audience1_body: '您的孩子门门功课拿A，但被问到毕业后想做什么时却无从回答。他们在课堂上表现出色，但从未管理过项目、写过专业邮件，也没有在作业之外做出过任何成果。这个项目将学术能力转化为真实世界的竞争力：生产力系统、职业沟通和自我管理技能，让学生从"仅仅通过"变为"真正出色"。', // TODO: Review Chinese translation
      audience2_title:'单一特长但需要全面发展的学生', // TODO: Review Chinese translation
      audience2_body: '您的孩子在某一领域非常出色，但在其他方面有所欠缺。也许他们会编程但在会议中无法有效表达，或者文笔出色但毫无时间管理概念。我们帮助学生弥补制约他们发展的短板：AI素养、创业思维、社交网络和日常生活技能。这些是大学和雇主都期望具备但没有人教的能力。', // TODO: Review Chinese translation
      cta_h2:       '今天就开始培养实用技能', // TODO: Review Chinese translation
      cta_p:        '预约免费咨询，了解Aaron和Keystone团队如何为您的孩子准备课堂之外的生活。', // TODO: Review Chinese translation
      cta_btn:      '预约免费咨询', // TODO: Review Chinese translation
    },

    footer: {
      tagline:          '自2008年起，帮助中国及全球各地学生进入梦想中的美国大学。100%录取成功率。中英双语服务。',
      services_heading: '服务项目',
      s1: '升学咨询', // TODO: Review Chinese translation
      s2: '转学策略', // TODO: Review Chinese translation
      s3: '本科规划', // TODO: Review Chinese translation
      s4: '美英双申', // TODO: Review Chinese translation
      s5: '生活技能', // TODO: Review Chinese translation
      contact_heading: '联系方式',
      copyright:    '© 2025 Keystone Consulting LLC. 版权所有。',
      location:     '总部：加州洛杉矶 · 服务全球家庭',
    },
  }
};
