// ============================================================
// Central site content for Fitness Plus Gym.
// Edit values here to update the website without touching JSX.
// ============================================================

export const brand = {
  name: 'Fitness Plus Gym',
  tagline: 'Push Your Limits',
  location: 'Kurla East, Mumbai',
}

export const contact = {
  phone: '07738367360',
  phoneIntl: '917738367360', // used for WhatsApp / tel links
  email: 'tauheedshahid@gmail.com',
  address:
    '1st Floor, Serene Shelter, Mass Building, 103, B Wing, SG Barve Marg, Nehru Nagar, Kurla, Mumbai, Maharashtra 400024',
  mapEmbedQuery:
    'Serene Shelter, SG Barve Marg, Nehru Nagar, Kurla, Mumbai, Maharashtra 400024',
  mapLink: 'https://maps.app.goo.gl/rVVq56pnD57tayAt8',
}

export const social = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/fitnessplusgym_kurlaeast',
  instagramHandle: '@fitnessplusgym_kurlaeast',
  // WhatsApp click-to-chat uses the international number without symbols
  whatsapp: 'https://wa.me/917738367360',
}

// Paste your free access key from https://web3forms.com  (see CONTACT-FORM note)
export const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'

export const developer = {
  name: 'Tauheed Shahid',
  portfolio: 'https://tauheedshahid.online/',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export const gallery = [
  { src: './images/gym-1.jpg', alt: 'Fitness Plus Gym training area' },
  { src: './images/gym-2.jpg', alt: 'Strength training equipment' },
  { src: './images/gym-3.jpg', alt: 'Cardio zone' },
  { src: './images/gym-4.jpg', alt: 'Free weights section' },
  { src: './images/gym-5.jpg', alt: 'Members working out' },
  { src: './images/gym-6.jpg', alt: 'Functional training space' },
  { src: './images/gym-7.jpg', alt: 'Gym interior' },
  { src: './images/gym-8.jpg', alt: 'Workout equipment' },
]

export const process = [
  {
    step: '01',
    title: 'Free Consultation',
    desc: 'We assess your current fitness level, understand your goals, and answer all your questions.',
  },
  {
    step: '02',
    title: 'Custom Plan',
    desc: 'Our trainers build a personalized workout and nutrition plan tailored to your body and lifestyle.',
  },
  {
    step: '03',
    title: 'Train & Track',
    desc: 'Work out with expert guidance while we monitor your progress and adjust as you grow stronger.',
  },
  {
    step: '04',
    title: 'Transform',
    desc: 'Hit your milestones, celebrate your wins, and unlock the best version of yourself.',
  },
]

export const trainers = [
  {
    name: 'Rahul Verma',
    role: 'Head Strength Coach',
    img: './images/trainer-1.jpg',
    specialties: ['Powerlifting', 'Muscle Gain'],
  },
  {
    name: 'Sneha Kapoor',
    role: 'HIIT & Cardio Specialist',
    img: './images/trainer-2.jpg',
    specialties: ['Fat Loss', 'Endurance'],
  },
  {
    name: 'Arjun Mehta',
    role: 'Functional Training Coach',
    img: './images/trainer-3.jpg',
    specialties: ['Mobility', 'CrossFit'],
  },
]

export const testimonials = [
  {
    name: 'Amit Sharma',
    text: 'Fitness Plus Gym completely changed my routine. The trainers push you but keep it fun. Lost 12 kg in 5 months!',
    rating: 5,
  },
  {
    name: 'Fatima Sheikh',
    text: 'Clean space, modern equipment, and the most supportive community in Kurla. Highly recommend the personal training.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    text: 'The custom plans actually work. I finally hit my strength goals with their guidance. Best gym in the area.',
    rating: 5,
  },
  {
    name: 'Neha Joshi',
    text: 'Friendly staff and flexible timings that fit my work schedule. The HIIT classes are amazing.',
    rating: 5,
  },
]

export const counters = [
  { label: 'Happy Members', value: 1000, suffix: '+' },
  { label: 'Expert Trainers', value: 5, suffix: '+' },
  { label: 'Fitness Classes', value: 20, suffix: '+' },
  { label: 'Equipments', value: 50, suffix: '+' },
]

export const pricing = [
  {
    name: '3 Months',
    price: 6000,
    period: 'quarterly',
    features: [
      'Full gym access',
      'Locker facility',
      'Group fitness classes',
      'Basic diet guidance',
    ],
    popular: false,
  },
  {
    name: '6 Months',
    price: 8000,
    period: 'half-yearly',
    features: [
      'Everything in 3 Months',
      '1 personal training session/week',
      'Progress tracking',
      'Custom workout plan',
    ],
    popular: true,
  },
  {
    name: '12 Months',
    price: 12000,
    period: 'yearly',
    features: [
      'Everything in 6 Months',
      'Unlimited personal training',
      'Full nutrition plan',
      'Priority support',
    ],
    popular: false,
  },
]
