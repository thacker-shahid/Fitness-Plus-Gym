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
  // Exact coordinates for Fitness Plus Gym (from the owner's Google Maps link).
  mapLat: 19.0637532,
  mapLng: 72.8821571,
  mapLink: 'https://maps.app.goo.gl/PWJmKreFCbzT2fnQA',
}

export const social = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/fitnessplusgym_kurlaeast',
  instagramHandle: '@fitnessplusgym_kurlaeast',
  // WhatsApp click-to-chat uses the international number without symbols
  whatsapp: 'https://wa.me/917738367360',
}

// Web3Forms access key — the destination inbox is tied to THIS key.
//
// NOTE: The key below is a DEMO key linked to jobs.tauheedshahid@gmail.com,
// used only to verify the form works. To make submissions go to the gym
// inbox, generate a new key at https://web3forms.com using
// fitnessplusgym@gmail.com and replace the value below.
export const WEB3FORMS_ACCESS_KEY = 'db2f1750-8d0b-4ed6-a88d-8bdf86dfb63e'

export const developer = {
  name: 'Tauheed Shahid',
  portfolio: 'https://tauheedshahid.online/',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'Reviews', href: '#testimonials' },
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

// (Trainers section removed per client request.)

export const testimonials = [
  {
    name: 'Shruti Gharat',
    text: "I joined this gym about a week ago and my experience has been really great so far, especially because of the trainer, Shivam Jaiswal. I joined as a complete beginner and even though I'm not taking personal training, he has been guiding me every day with my workouts. He explains every exercise patiently, corrects my form and gives me different workout routines. He's very kind, friendly and genuinely interested in helping people. The gym is clean, well-maintained and all the equipment is in excellent working condition. Highly recommend this gym!",
    rating: 5,
  },
  {
    name: 'Sahil Shaikh',
    text: 'Best gym in the area! Trainers are very supportive, equipment is top quality, and the atmosphere is super motivating. Since joining Fitness Plus my fitness and confidence both improved a lot. Highly recommended for anyone serious about fitness. Special thanks to gym owner Pooja Phatak for creating such an amazing and motivating fitness environment.',
    rating: 5,
  },
  {
    name: 'Vikas Jaiswar',
    text: 'Excellent gym with a positive atmosphere! The equipment is well-maintained, and the trainer Mr Shivam Jaiswal is highly professional, knowledgeable, and very supportive. They always motivate me and ensure I perform every exercise with the correct form. Highly recommended for anyone serious about their fitness journey!',
    rating: 5,
  },
  {
    name: 'Anisha Prasad',
    text: "Honestly, joining this gym has been a really good decision for me. The trainers are helpful and approachable, the equipment is well maintained, and the overall atmosphere feels comfortable and motivating. What I like most is that it doesn't feel intimidating, even for beginners. It's a nice place to stay consistent and focus on your fitness goals.",
    rating: 5,
  },
]

export const counters = [
  { label: 'Happy Members', value: 2000, suffix: '+' },
  { label: 'Expert Trainers', value: 5, suffix: '+' },
  { label: 'Fitness Classes', value: 20, suffix: '+' },
  { label: 'Equipments', value: 50, suffix: '+' },
]

// Membership plans (from the gym poster). Prices in INR.
export const pricing = [
  {
    name: 'Monthly',
    price: 5000,
    period: 'per month',
    features: [
      'Full gym access',
      'Fully AC 5500 sqft area',
      'Locker facility',
      'Cardio & strength zones',
    ],
    popular: false,
  },
  {
    name: 'Quarterly',
    price: 10000,
    period: '3 months',
    features: [
      'Everything in Monthly',
      'Functional & CrossFit training',
      'Kickboxing access',
      'Steam room access',
    ],
    popular: true,
  },
  {
    name: 'Half Yearly',
    price: 15000,
    period: '6 months',
    features: [
      'Everything in Quarterly',
      'BMI & vibration plate machine',
      'Progress tracking',
      'Best value for regulars',
    ],
    popular: false,
  },
  {
    name: 'Annually',
    price: 25000,
    period: '12 months',
    features: [
      'Everything in Half Yearly',
      'Maximum savings',
      'Priority support',
      'All facilities included',
    ],
    popular: false,
  },
]

// Personal training packages (from the gym poster). Prices in INR.
export const personalTraining = [
  { name: 'Silver', sessions: 12, price: 6000 },
  { name: 'Golden', sessions: 16, price: 8000 },
  { name: 'Platinum', sessions: 20, price: 10000 },
  { name: 'Diamond', sessions: 24, price: 12000 },
]

// Important notes shown under pricing (empty = hidden).
export const pricingNotes = []
