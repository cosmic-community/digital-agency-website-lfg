'use client'

import { useState } from 'react'
import { TeamMember } from '@/types'
import { Linkedin, Mail } from 'lucide-react'

interface TeamProps {
  team: TeamMember[]
}

export default function Team({ team }: TeamProps) {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)

  if (!team || team.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of designers, developers, and strategists are passionate about creating exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {member.metadata?.profile_photo && (
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={`${member.metadata.profile_photo.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                    alt={member.metadata.full_name || member.title}
                    className="w-full h-full object-cover"
                    width={300}
                    height={300}
                  />
                  
                  {/* Bio overlay on hover */}
                  {hoveredMember === member.id && member.metadata?.bio && (
                    <div className="absolute inset-0 bg-black bg-opacity-90 p-6 flex items-center justify-center">
                      <div 
                        className="text-white text-sm prose prose-sm prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: member.metadata.bio }}
                      />
                    </div>
                  )}
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.metadata?.full_name || member.title}
                </h3>
                
                {member.metadata?.job_title && (
                  <p className="text-primary-600 font-medium mb-4">
                    {member.metadata.job_title}
                  </p>
                )}
                
                <div className="flex space-x-3">
                  {member.metadata?.email && (
                    <a 
                      href={`mailto:${member.metadata.email}`}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                  
                  {member.metadata?.linkedin_url && (
                    <a 
                      href={member.metadata.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}