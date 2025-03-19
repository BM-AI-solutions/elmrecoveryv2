import Link from 'next/link'
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Map, 
  Briefcase, 
  Heart, 
  Brain, 
  Utensils 
} from 'lucide-react'

const categories = [
  {
    id: 'education',
    name: 'Educational Materials',
    description: 'Articles, guides, and videos about addiction and recovery',
    icon: BookOpen,
    color: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'support-groups',
    name: 'Support Groups',
    description: 'Information on AA, NA, SMART Recovery, and other support communities',
    icon: Users,
    color: 'bg-green-100 text-green-700',
  },
  {
    id: 'events',
    name: 'Recovery Events',
    description: 'Workshops, meetings, and social gatherings for the recovery community',
    icon: Calendar,
    color: 'bg-purple-100 text-purple-700',
  },
  {
    id: 'local-services',
    name: 'Local Services',
    description: 'Treatment centers, counselors, and other recovery services in San Diego',
    icon: Map,
    color: 'bg-red-100 text-red-700',
  },
  {
    id: 'employment',
    name: 'Employment Resources',
    description: 'Job listings, resume help, and career guidance for those in recovery',
    icon: Briefcase,
    color: 'bg-amber-100 text-amber-700',
  },
  {
    id: 'wellness',
    name: 'Wellness Tools',
    description: 'Resources for physical health, nutrition, and exercise in recovery',
    icon: Heart,
    color: 'bg-pink-100 text-pink-700',
  },
  {
    id: 'mental-health',
    name: 'Mental Health',
    description: 'Resources for managing anxiety, depression, and other mental health concerns',
    icon: Brain,
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    id: 'nutrition',
    name: 'Nutrition & Recovery',
    description: 'Guides for healthy eating and nutrition to support recovery',
    icon: Utensils,
    color: 'bg-emerald-100 text-emerald-700',
  },
]

export default function ResourceCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link 
          key={category.id}
          href={`/resources/${category.id}`}
          className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-4px] hover:shadow-lg"
        >
          <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-4`}>
            <category.icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
          <p className="text-gray-600 text-sm">{category.description}</p>
        </Link>
      ))}
    </div>
  )
}
