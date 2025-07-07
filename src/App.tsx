import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  Download, 
  Brain, 
  Lightbulb, 
  Users, 
  BookOpen, 
  Phone, 
  Linkedin, 
  Mail, 
  Instagram, 
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
  Code,
  Database,
  BarChart3
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showAboutCards, setShowAboutCards] = useState({ innovation: false, leadership: false, learning: false });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAboutCard = (card: string) => {
    setShowAboutCards(prev => ({ ...prev, [card]: !prev[card as keyof typeof prev] }));
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    {
      title: 'Programming Languages',
      items: ['Python', 'C', 'HTML', 'CSS', 'C++', 'JavaScript', 'Java'],
      borderColor: '#4A90E2',
      side: 'right'
    },
    {
      title: 'Tools & Platforms',
      items: ['IBM Cognos', 'Excel'],
      borderColor: '#E74C3C',
      side: 'left'
    },
    {
      title: 'Data & Analytics',
      items: ['Numpy', 'Pandas', 'Matplotlib', 'Seaborn'],
      borderColor: '#27AE60',
      side: 'right'
    }
  ];

  const projects = [
    {
      title: 'Calories Burn Prediction',
      description: 'Built a machine learning model to predict calories burned based on users\' walking distance for personalized fitness insights.',
      tags: ['Python', 'scikit-learn', 'numpy', 'pandas'],
      image: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Guess Card Game',
      description: 'Created an interactive Guess Card Game offering a fun and engaging user experience.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/1871508/pexels-photo-1871508.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Sales & Profit Dashboard',
      description: 'Designed an intuitive dashboard to visualize and analyze sales and profit trends for data-driven business insights.',
      tags: ['IBM Cognos Tool'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Paint App',
      description: 'Created a simple paint app for drawing and sketching with an easy-to-use interface.',
      tags: ['Java', 'Swing'],
      image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Student Marks Prediction',
      description: 'Developed a model to predict student marks using multiple linear regression based on study hours, attendance, and other factors.',
      tags: ['Python', 'Pandas', 'Numpy', 'Scikit-learn'],
      image: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const certificates = [
    { title: 'IBM Cognos Analytics', issuer: 'IBM' },
    { title: 'Data Visualization with Python', issuer: 'Cognitive Class' },
    { title: 'Java Training', issuer: 'Spoken Tutorial Project, IIT Bombay' },
    { title: 'Web Development using PHP and MySQL', issuer: 'LAPT' },
    { title: 'Project Designing', issuer: 'CT University' }
  ];

  const contacts = [
    { icon: Phone, label: 'Phone', value: '7814646718', type: 'phone' },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'Sneha Gupta on LinkedIn', 
      type: 'link',
      href: 'https://www.linkedin.com/in/sneha-gupta-7947ba28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    { icon: Mail, label: 'Gmail', value: 'snehagupta1786@gmail.com', type: 'email' },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      value: '@snehagupta1796', 
      type: 'link',
      href: 'https://www.instagram.com/snehagupta1796?igsh=MXVmYXdqMmZqaGkzNA=='
    },
    { icon: MessageCircle, label: 'Discord', value: 'sneha_gupta01', type: 'discord' }
  ];

  return (
    <div className="min-h-screen bg-slate-800 text-gray-100 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Blinking Dots */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `blink ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Moving Gradient Lights */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float-slow" style={{ left: '10%', top: '20%' }} />
          <div className="absolute w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-float-reverse" style={{ right: '10%', top: '60%' }} />
          <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-float-diagonal" style={{ left: '60%', bottom: '10%' }} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-600/90 backdrop-blur-md border-b border-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-gray-100">
              Sneha Gupta
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-300 ${
                    activeSection === item.id ? 'text-blue-300' : 'text-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-slate-700 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-700/95 backdrop-blur-md border-t border-slate-500">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-300 ${
                    activeSection === item.id ? 'text-blue-300' : 'text-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-600 to-blue-300 opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg animate-glow">
                  I am Sneha Gupta
                </span>
              </h1>
              
              <div className="flex items-center space-x-4 animate-slide-up">
                <Brain className="text-blue-300 w-8 h-8" />
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200">
                  Machine Learning Engineer
                </h2>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/src/assets/resume1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-2 bg-blue-300 hover:bg-blue-400 text-slate-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-300/50"
                >
                  <Eye className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>View Resume</span>
                </a>
                <a
                  href="/src/assets/resume1.pdf"
                  download
                  className="group flex items-center justify-center space-x-2 bg-transparent border-2 border-blue-300 hover:bg-blue-300 hover:text-slate-800 text-blue-300 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-300/50"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Segmented Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(3)].map((_, ringIndex) => (
                    <div
                      key={ringIndex}
                      className="absolute rounded-full border-2 border-blue-300/30"
                      style={{
                        width: `${280 + ringIndex * 40}px`,
                        height: `${280 + ringIndex * 40}px`,
                        animation: `spin-slow ${10 + ringIndex * 2}s linear infinite ${ringIndex * 0.5}s`
                      }}
                    >
                      {[...Array(12)].map((_, segmentIndex) => (
                        <div
                          key={segmentIndex}
                          className="absolute w-3 h-3 bg-gradient-to-r from-slate-400 to-blue-300 rounded-full"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) rotate(${segmentIndex * 30}deg) translateY(-${140 + ringIndex * 20}px)`,
                            animation: `pulse ${2 + Math.random()}s ease-in-out infinite ${segmentIndex * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                
                {/* Profile Image */}
                <div className="relative w-64 h-64 mx-auto">
                  <img
                    src="/src/assets/ai.jpeg"
                    alt="Sneha Gupta"
                    className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-blue-300/50 hover:shadow-blue-300/50 transition-all duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="animate-typewriter">About Me</span>
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
              I'm a passionate Machine Learning Engineer turning data into impactful solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-600 animate-slide-up">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am pursuing a Bachelor of Computer Applications with a specialization in Artificial Intelligence and Data Science at CT University. My goal is to become a highly skilled Machine Learning Engineer. Currently, I am interning at Linux World Informatics, applying machine learning theory into practical, real-world projects to deliver intelligent solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { key: 'innovation', icon: Lightbulb, title: 'Innovation', description: 'Driving innovation by turning complex ideas into intelligent solutions.' },
                { key: 'leadership', icon: Users, title: 'Leadership', description: 'Empowering teams to achieve excellence through collaborative leadership.' },
                { key: 'learning', icon: BookOpen, title: 'Continuous Learning', description: 'Committed to lifelong learning and evolving with every challenge.' }
              ].map((item) => (
                <div key={item.key} className="space-y-4">
                  <button
                    onClick={() => toggleAboutCard(item.key)}
                    className="w-full bg-blue-300 hover:bg-blue-400 text-slate-800 px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </button>
                  
                  {showAboutCards[item.key as keyof typeof showAboutCards] && (
                    <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600 animate-slide-up">
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-typewriter">Skills</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging advanced machine learning skills to solve real-world problems with precision and creativity.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-400/50"></div>
            
            {/* Animated Particles */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                  style={{
                    left: '-4px',
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '2s',
                    top: `${i * 20}%`
                  }}
                />
              ))}
            </div>

            <div className="space-y-16">
              {skills.map((skill, index) => (
                <div key={index} className={`flex ${skill.side === 'left' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${skill.side === 'left' ? 'pr-8' : 'pl-8'} animate-slide-in-${skill.side}`}>
                    <div
                      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      style={{ borderColor: skill.borderColor }}
                    >
                      <h3 className="text-2xl font-bold mb-6 text-center">{skill.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        {skill.items.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className="px-4 py-2 bg-slate-700/50 rounded-full text-sm font-medium border-2 hover:scale-110 transition-all duration-300 cursor-pointer"
                            style={{ borderColor: skill.borderColor }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 relative">
              <span className="relative z-10">Projects</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-400/50"></div>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bringing ideas to life through data-driven, impactful machine learning projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-slate-600 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="bg-blue-300 text-slate-800 p-2 rounded-full hover:bg-blue-400 transition-colors hover:scale-110">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-medium text-blue-300 border border-blue-300/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-left animate-slide-in-left">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Certificates
              </span>
            </h2>
            
            {/* Orange Path */}
            <div className="relative mb-12">
              <div className="h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-slide-in-left"></div>
              <div className="absolute top-0 left-0 w-full h-2 flex justify-between items-center">
                {certificates.map((_, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 bg-orange-500 rounded-full border-2 border-orange-300 animate-pulse"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-600 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-4">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-400 mb-4">{cert.issuer}</p>
                
                <button className="w-full bg-blue-300 hover:bg-blue-400 text-slate-800 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>View Certificate</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 relative">
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-400/50"></div>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's connect and build something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-600 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  if (contact.type === 'link' && contact.href) {
                    window.open(contact.href, '_blank');
                  } else if (contact.type === 'email') {
                    window.location.href = `mailto:${contact.value}`;
                  } else if (contact.type === 'phone') {
                    window.location.href = `tel:${contact.value}`;
                  }
                }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">{contact.label}</h3>
                    <p className="text-gray-300 text-sm break-all">{contact.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional Contact Form */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-600">
              <h3 className="text-2xl font-bold mb-6 text-center">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-300 hover:bg-blue-400 text-slate-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-300/50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;