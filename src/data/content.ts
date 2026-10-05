import {
  BookOpen, Brain, Compass, Clock, Flame, GraduationCap, Heart, HeartHandshake,
  Lightbulb, Mountain, ShieldCheck, Sparkles, Target, Telescope, TrendingUp,
  type LucideIcon,
} from 'lucide-react'

export type NavItem = { id: string; label: string }

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'message', label: 'Message' },
  { id: 'appreciation', label: 'Thanks' },
  { id: 'impact', label: 'Impact' },
]

export const HERO_WORDS = ['Happy', 'Teacher’s', 'Day'] as const

export const ROLE_WORDS = ['Guidance', 'Patience', 'Knowledge', 'Encouragement', 'Mentorship', 'Support', 'Inspiration', 'Growth'] as const

export type Feature = { icon: LucideIcon; title: string; text: string }

export const MORE_THAN_TEACHER: Feature[] = [
  { icon: Compass, title: 'Guide', text: 'Someone who helps students find direction when the road ahead is not yet clear.' },
  { icon: GraduationCap, title: 'Mentor', text: 'Someone whose experience helps students make wiser, more confident decisions.' },
  { icon: HeartHandshake, title: 'Support', text: 'Someone who stands beside students when confidence is low and the work feels heavy.' },
  { icon: Sparkles, title: 'Inspiration', text: 'Someone whose example makes students want to keep learning for the rest of their lives.' },
]

export const GUIDANCE_POINTS = [
  'A teacher’s advice can shape a decision that changes a direction.',
  'A teacher’s encouragement can restore confidence that was almost gone.',
  'A teacher’s feedback can turn a weak effort into real improvement.',
  'A teacher’s belief can be the reason someone keeps going.',
] as const

export const SUPPORT_POINTS = [
  'Difficult subjects that finally began to make sense.',
  'Academic pressure that felt lighter because someone noticed.',
  'Mistakes that became lessons instead of failures.',
  'Uncertainty that turned into direction.',
  'Setbacks that were met with patience, not judgement.',
  'New challenges faced with steadier confidence.',
] as const

export type Appreciation = { icon: LucideIcon; text: string }

export const APPRECIATION_CARDS: Appreciation[] = [
  { icon: Heart, text: 'Thank you for believing in us.' },
  { icon: Compass, text: 'Thank you for guiding us.' },
  { icon: Clock, text: 'Thank you for being patient with us.' },
  { icon: Sparkles, text: 'Thank you for encouraging us.' },
  { icon: TrendingUp, text: 'Thank you for challenging us to grow.' },
  { icon: Lightbulb, text: 'Thank you for inspiring us.' },
]

export type Quality = { icon: LucideIcon; label: string }

export const QUALITIES: Quality[] = [
  { icon: Flame, label: 'Confidence' },
  { icon: Telescope, label: 'Curiosity' },
  { icon: Target, label: 'Discipline' },
  { icon: ShieldCheck, label: 'Responsibility' },
  { icon: Brain, label: 'Critical Thinking' },
  { icon: Mountain, label: 'Resilience' },
  { icon: Heart, label: 'Kindness' },
  { icon: BookOpen, label: 'Lifelong Learning' },
]

export const INTERACTIVE_MESSAGES = [
  'Thank you for the lessons that stayed long after the class ended.',
  'Thank you for the patience you gave without ever being asked.',
  'Thank you for seeing potential before we could see it ourselves.',
  'Thank you for making difficult things feel possible.',
  'Thank you for the encouragement that arrived at exactly the right moment.',
  'Thank you for treating every question as something worth answering.',
  'Thank you for the standards that made us better than we thought we could be.',
  'Thank you for the quiet belief that kept us going.',
  'Thank you for teaching with purpose, not just with a syllabus.',
  'Thank you for everything you carry that students never see.',
] as const

export const FINAL_AFFIRMATIONS = [
  'Your work matters.',
  'Your guidance matters.',
  'Your encouragement matters.',
  'Your impact matters.',
] as const