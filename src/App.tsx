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
import aiImage from './assets/ai.jpeg';
import resumePdf from './assets/Sneha-Gupta.pdf';
import oneImage from './assets/1.png';
import cert1 from './assets/1_certi.pdf';
import cert2 from './assets/2_certi.pdf';
import cert3 from './assets/3_certi.pdf';
import cert4 from './assets/4_certi.jpeg';
import cert5 from './assets/5_certi.jpeg';
import cert6 from './assets/6_certi.png';
import gestureImage from './assets/images.jpeg';
import caloriesImage from './assets/cal.jpeg';
import culturalImage from './assets/123.jpg';
import ProfileCard from './components/ProfileCard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showAboutCards, setShowAboutCards] = useState({ innovation: false, leadership: false, learning: false });
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  // Remove loading state and useEffect
  // const [isLoading, setIsLoading] = useState(true);

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
      title: 'Gesture Controlled Dashboard',
      description: 'Developed a gesture-controlled action dashboard using hand detection to trigger system tasks like launching Chrome, Notepad, File Explorer, Youtube, Google, Edge, and managing AWS EC2 instances.',
      tags: ['python', 'cv2', 'cvzone', 'os', 'webbrowser', 'boto3', 'streamlit'],
      image: gestureImage, // hand gesture/AI dashboard
      link: 'https://github.com/sneha543-gu/Hand_detection.git'
    },
    {
      title: 'Calories Burned Prediction',
      description: 'Built a machine learning model to predict calories burned based on users\' walking distance for personalized fitness insights.',
      tags: ['Python', 'scikit-learn', 'numpy', 'pandas'],
      image: caloriesImage, // fitness/calorie/health
      link: 'https://calories-burn-4ho9v5tv3awkzxkj5sr8kv.streamlit.app/'
    },
    {
      title: 'Send Email',
      description: 'A Python-based app to send emails easily with customizable content.',
      tags: ['python', 'streamlit', 'email'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=compress&w=400',
      link: 'https://send-email-2oktjtjcwery3tmdejnlhx.streamlit.app/'
    },
    {
      title: 'Send Instagram Post',
      description: 'A Python-based tool for scheduling and sending Instagram posts automatically.',
      tags: ['python', 'html', 'css'],
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=compress&w=400',
      link: 'https://insta-easy-poster.lovable.app/'
    },
    {
      title: 'Cultural Heritage through Folktale Generation',
      description: 'A project focused on preserving cultural heritage by automatically generating traditional folktales.',
      tags: ['python', 'openai', 'gradio'],
      image: culturalImage, // cultural/folktale/storytelling
      link: 'https://talesmith-folk-lore-forge.lovable.app'
    }
  ];

  const certificates = [
    { title: 'IBM Cognos Analytics', issuer: 'IBM', file: cert1 },
    { title: 'Data Visualization with Python', issuer: 'Cognitive Class', file: cert2 },
    { title: 'Java Training', issuer: 'Spoken Tutorial Project, IIT Bombay', file: cert3 },
    { title: 'Web Development using PHP and MySQL', issuer: 'LAPT', file: cert4 },
    { title: 'Machine Learning with Python', issuer: 'IBM', file: cert5 },
    { title: 'Participant in the HackTheBlockxCTU', issuer: 'CT University', file: cert6 }
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

  // Contact handling functions
  const handleContactClick = (contact: any) => {
    switch (contact.type) {
      case 'phone':
        // Format phone number and handle different scenarios
        const phoneNumber = contact.value.replace(/\s+/g, ''); // Remove spaces
        try {
          // Try to open phone dialer
          window.location.href = `tel:${phoneNumber}`;
        } catch (error) {
          // Fallback: copy to clipboard
          navigator.clipboard.writeText(phoneNumber).then(() => {
            alert(`Phone number "${phoneNumber}" copied to clipboard!`);
          }).catch(() => {
            // Final fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = phoneNumber;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert(`Phone number "${phoneNumber}" copied to clipboard!`);
          });
        }
        break;
      case 'email':
        window.location.href = `mailto:${contact.value}`;
        break;
      case 'link':
        if (contact.href) {
          window.open(contact.href, '_blank', 'noopener,noreferrer');
        }
        break;
      case 'discord':
        // Copy Discord username to clipboard
        navigator.clipboard.writeText(contact.value).then(() => {
          alert(`Discord username "${contact.value}" copied to clipboard!`);
        }).catch(() => {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = contact.value;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          alert(`Discord username "${contact.value}" copied to clipboard!`);
        });
        break;
      default:
        break;
    }
  };

  // Form handling functions
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Method 1: Open email client with pre-filled data
      const subject = encodeURIComponent(formData.subject || 'Message from Portfolio Website');
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}${formData.subject ? `\nSubject: ${formData.subject}` : ''}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:snehagupta1786@gmail.com?subject=${subject}&body=${body}`;
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus('idle');
      }, 2000);
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-100">
              Sneha Gupta
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 hover:text-blue-300 ${
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
      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-slate-800 to-blue-900 overflow-hidden pt-16 lg:pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-blue-400/20 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-purple-400/20 rounded-full animate-float-reverse"></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-cyan-400/20 rounded-full animate-float-diagonal"></div>
          <div className="absolute bottom-20 right-10 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-blue-300/20 rounded-full animate-float-slow"></div>
          
          {/* Additional Floating Shapes */}
          <div className="absolute top-1/4 right-1/4 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-pink-400/30 rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-yellow-400/20 rounded-full animate-float-reverse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-400/25 rounded-full animate-float-diagonal" style={{ animationDelay: '3s' }}></div>
          
          {/* Rotating Squares */}
          <div className="absolute top-1/6 right-1/6 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-500/20 rounded-lg animate-spin-slow"></div>
          <div className="absolute bottom-1/6 left-1/6 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-purple-500/20 rounded-lg animate-spin-reverse"></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}></div>
          </div>
          
          {/* Glowing Orbs */}
          {/* Removed all animated dots for cleaner design */}
          
          {/* Animated Lines */}
          <div className="absolute top-1/2 left-0 w-20 h-0.5 sm:w-24 sm:h-0.5 lg:w-32 lg:h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-slide-in-left"></div>
          <div className="absolute top-1/3 right-0 w-16 h-0.5 sm:w-20 sm:h-0.5 lg:w-24 lg:h-0.5 bg-gradient-to-l from-transparent via-purple-400 to-transparent animate-slide-in-right"></div>
          <div className="absolute bottom-1/3 left-0 w-12 h-0.5 sm:w-16 sm:h-0.5 lg:w-20 lg:h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-slide-in-left"></div>
          <div className="absolute top-1/4 right-0 w-10 h-0.5 sm:w-12 sm:h-0.5 lg:w-16 lg:h-0.5 bg-gradient-to-l from-transparent via-pink-400 to-transparent animate-slide-in-right"></div>
          <div className="absolute bottom-1/4 left-0 w-16 h-0.5 sm:w-20 sm:h-0.5 lg:w-28 lg:h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-slide-in-left"></div>
          
          {/* Animated Triangles */}
          <div className="absolute top-1/3 left-1/4 w-0 h-0 border-l-6 border-r-6 border-b-12 sm:border-l-8 sm:border-r-8 sm:border-b-16 lg:border-l-10 lg:border-r-10 lg:border-b-20 border-transparent border-b-blue-400/30 animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-0 h-0 border-l-8 border-r-8 border-b-16 sm:border-l-10 sm:border-r-10 sm:border-b-18 lg:border-l-12 lg:border-r-12 lg:border-b-24 border-transparent border-b-purple-400/30 animate-bounce" style={{ animationDelay: '2s' }}></div>
          
          {/* Data Flow Animation */}
          <div className="absolute top-1/6 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full animate-data-flow"></div>
          <div className="absolute top-1/6 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full animate-data-flow" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/6 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full animate-data-flow" style={{ animationDelay: '1s' }}></div>
          
          {/* Matrix Rain Effect */}
          <div className="absolute top-0 left-1/4 text-green-400 text-xs sm:text-sm lg:text-base animate-matrix-rain" style={{ animationDelay: '0s' }}>01</div>
          <div className="absolute top-0 left-1/3 text-green-400 text-xs sm:text-sm lg:text-base animate-matrix-rain" style={{ animationDelay: '1s' }}>10</div>
          <div className="absolute top-0 left-1/2 text-green-400 text-xs sm:text-sm lg:text-base animate-matrix-rain" style={{ animationDelay: '2s' }}>11</div>
          <div className="absolute top-0 left-2/3 text-green-400 text-xs sm:text-sm lg:text-base animate-matrix-rain" style={{ animationDelay: '3s' }}>00</div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text with slide-in animation */}
            <div className="space-y-6 sm:space-y-8 animate-slide-in-left order-1 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg animate-glow">
                  I am Sneha Gupta
                </span>
              </h1>
              
              <div className="flex items-center space-x-3 sm:space-x-4 animate-slide-up">
                <Brain className="text-blue-300 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200">
                  Machine Learning Engineer
                </h2>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 w-full max-w-xs sm:max-w-none">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-300/50 w-full sm:w-auto text-sm sm:text-base"
                >
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                  <span>View Resume</span>
                </a>
                <a
                  href={resumePdf}
                  download
                  className="group flex items-center justify-center space-x-2 bg-transparent border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-300/50 w-full sm:w-auto text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Right Side - Profile Card with slide-in animation */}
            <div className="flex justify-center animate-slide-in-right order-2 lg:order-2">
              <ProfileCard
                imageSrc={oneImage}
                name="Sneha Gupta"
                title="Machine Learning Engineer"
                description="Passionate about AI and data-driven solutions"
                className="animate-slide-in-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-slate-800/50 backdrop-blur-sm relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Particles */}
          <div className="absolute top-20 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-blue-400/60 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-purple-400/60 rounded-full animate-float-reverse"></div>
          <div className="absolute bottom-40 left-1/3 w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-cyan-400/60 rounded-full animate-float-diagonal"></div>
          <div className="absolute bottom-20 right-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-pink-400/60 rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
          
          {/* Animated Lines */}
          <div className="absolute top-1/4 left-0 w-16 h-0.5 sm:w-20 sm:h-0.5 lg:w-24 lg:h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-slide-in-left"></div>
          <div className="absolute bottom-1/4 right-0 w-12 h-0.5 sm:w-16 sm:h-0.5 lg:w-20 lg:h-0.5 bg-gradient-to-l from-transparent via-purple-400 to-transparent animate-slide-in-right"></div>
          
          {/* Glowing Orbs */}
          {/* Removed all animated dots for cleaner design */}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="relative inline-block">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-glow">
                  About Me
                </span>
                <span className="animate-blink text-blue-300">|</span>
            </h2>
              {/* Animated Underline */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in mt-4 sm:mt-6">
              I'm a passionate <span className="text-blue-300 font-semibold animate-pulse">Machine Learning Engineer</span> turning data into impactful solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Main Content Card */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-slate-600/50 animate-slide-up hover:shadow-blue-300/20 transition-all duration-500 hover:scale-105 group relative">
              <div className="relative">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed relative z-10 cursor-pointer hover:bg-slate-700/50 hover:rounded-xl hover:p-4 transition-all duration-300">
                  I am pursuing a <span className="text-blue-300 font-semibold">Bachelor of Computer Applications</span> with a specialization in <span className="text-purple-300 font-semibold">Artificial Intelligence and Data Science</span> at CT University. My goal is to become a highly skilled <span className="text-cyan-300 font-semibold animate-pulse">Machine Learning Engineer</span>. Currently, I am interning at <span className="text-green-300 font-semibold">Linux World Informatics</span>, applying machine learning theory into practical, real-world projects to deliver intelligent solutions.
                </p>
                
                {/* Hover Background Box - Fixed position */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-5 pointer-events-none"></div>
              </div>
            </div>

            {/* Education Details Section */}
            <div className="mt-12 sm:mt-16 lg:mt-20">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                My Educational Journey
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-8 max-w-2xl mx-auto">
                {/* Education Card */}
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-400/30 hover:shadow-blue-300/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-blue-400 rounded-full mr-3"></div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-200">Education</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-800/50 p-3 sm:p-4 lg:p-6 rounded-xl">
                      <h5 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-100 mb-2">Bachelor of Computer Applications</h5>
                      <p className="text-sm sm:text-base text-gray-300 mb-1">CT University</p>
                      <p className="text-xs sm:text-sm text-gray-400 mb-3">2021 - Present</p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-xs sm:text-sm text-gray-300">Specialization in AI & Data Science</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-xs sm:text-sm text-gray-300">Core Computer Science</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                          <span className="text-xs sm:text-sm text-gray-300">Mathematics & Statistics</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Values Section */}
            <div className="mt-12 sm:mt-16 lg:mt-20">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                My Core Values
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { 
                    key: 'innovation', 
                    icon: Lightbulb, 
                    title: 'Innovation', 
                    description: 'Driving innovation by turning complex ideas into intelligent solutions.',
                    color: 'from-blue-400 to-cyan-400',
                    delay: '0s'
                  },
                  { 
                    key: 'leadership', 
                    icon: Users, 
                    title: 'Leadership', 
                    description: 'Empowering teams to achieve excellence through collaborative leadership.',
                    color: 'from-purple-400 to-pink-400',
                    delay: '0.2s'
                  },
                  { 
                    key: 'learning', 
                    icon: BookOpen, 
                    title: 'Continuous Learning', 
                    description: 'Committed to lifelong learning and evolving with every challenge.',
                    color: 'from-green-400 to-emerald-400',
                    delay: '0.4s'
                  }
                ].map((item, index) => (
                  <div key={item.key} className="relative group/button animate-slide-up" style={{ animationDelay: item.delay }}>
                  <button
                      className={`w-full bg-gradient-to-r ${item.color} text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-xl font-semibold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/30 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-3 relative overflow-hidden`}
                    >
                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/button:opacity-100 transition-opacity duration-500"></div>
                      
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 relative z-10 group-hover/button:rotate-12 transition-transform duration-300" />
                      <span className="relative z-10 text-sm sm:text-base lg:text-lg text-center">{item.title}</span>
                  </button>
                  
                    {/* Hover Tooltip - Fixed position */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 sm:px-4 py-2 bg-slate-800/95 backdrop-blur-md rounded-lg border border-slate-600/50 shadow-xl opacity-0 group-hover/button:opacity-100 transition-all duration-300 pointer-events-none z-50 min-w-max max-w-xs">
                      <p className="text-xs sm:text-sm text-gray-200 text-center leading-relaxed">{item.description}</p>
                      {/* Arrow */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 sm:border-l-4 border-r-3 sm:border-r-4 border-b-3 sm:border-b-4 border-transparent border-b-slate-800/95"></div>
                    </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-typewriter">Skills</h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Leveraging advanced machine learning skills to solve real-world problems with precision and creativity.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-400/50"></div>
            {/* Glowing Orbs at each skill block - Hidden on mobile */}
            {/* Removed all animated dots for cleaner design */}

            <div className="space-y-8 sm:space-y-12 lg:space-y-16">
              {skills.map((skill, index) => (
                <div key={index} className={`flex ${skill.side === 'left' ? 'justify-start' : 'justify-end'} md:${skill.side === 'left' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${skill.side === 'left' ? 'md:pr-8' : 'md:pl-8'} animate-slide-in-${skill.side}`}>
                    <div
                      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      style={{ borderColor: skill.borderColor }}
                    >
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center">{skill.title}</h3>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {skill.items.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className="px-3 sm:px-4 py-2 bg-slate-700/50 rounded-full text-xs sm:text-sm font-medium border-2 hover:scale-110 transition-all duration-300 cursor-pointer"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-slate-600 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-medium text-blue-300 border border-blue-300/30 hover:bg-blue-300/20 hover:scale-110 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2 bg-blue-300 hover:bg-blue-400 text-slate-800 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-300/50 animate-pulse"
                    >
                      <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" /> Show Project
                    </a>
                  )}
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
              {/* Removed animated dots for cleaner design */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-600 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-300 transition-colors duration-300">{cert.title}</h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">{cert.issuer}</p>
                
                  <button className="w-full bg-blue-300 hover:bg-blue-400 text-slate-800 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-300/50 flex items-center justify-center space-x-2 group-hover:animate-pulse">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 w-full justify-center"
                  >
                      <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                    <span>View Certificate</span>
                  </a>
                </button>
                </div>
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
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-600 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up cursor-pointer relative"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleContactClick(contact)}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                
                <div className="flex flex-col items-center space-y-4 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse">
                    <contact.icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-300 transition-colors duration-300">{contact.label}</h3>
                    <p className="text-gray-300 text-sm break-all group-hover:text-gray-200 transition-colors duration-300">{contact.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Contact Form */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-600/50 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                    Get In Touch
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Ready to collaborate? Send me a message and let's create something amazing together!
                  </p>
                </div>
                
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-blue-300">Your Name *</label>
                  <input
                    type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                        required
                  />
                </div>
                
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-blue-300">Your Email *</label>
                  <input
                    type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                        required
                      />
                    </div>
                </div>
                
                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-blue-300">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject || ''}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-blue-300">Your Message *</label>
                  <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, collaboration idea, or just say hello!"
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 resize-none"
                      required
                  />
                </div>
                
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/20 border border-green-400/50 rounded-xl text-green-300 text-center animate-pulse">
                      <div className="flex items-center justify-center space-x-2">
                        <span>Message prepared! Email client should open automatically.</span>
                      </div>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-400/50 rounded-xl text-red-300 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <span>There was an error. Please try again.</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Submit Button */}
                  <div className="flex justify-center">
                <button
                  type="submit"
                      disabled={isSubmitting}
                      className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                        isSubmitting 
                          ? 'bg-gray-500 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white hover:shadow-blue-300/50'
                      }`}
                    >
                      <span className="flex items-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Preparing Email...</span>
                          </>
                        ) : (
                          <>
                            <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            <span>Send Message</span>
                          </>
                        )}
                      </span>
                </button>
                  </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;