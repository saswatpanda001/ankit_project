import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const teamMembers = [
  { name: 'Annkit Sarkar', role: 'Project Manager & Energy Consultant', avatar: 'https://media.licdn.com/dms/image/v2/D5603AQGSyIPsjJTw9w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730098008599?e=1740009600&v=beta&t=5kyLAksPLDuWrqTzYP2HSQW5guNuSq0NYVWTFWq4UEM' },
  { name: 'Tanishqa Gupta', role: 'Project Manager', avatar: 'https://global.discourse-cdn.com/openai1/optimized/4X/d/f/7/df77e327bf0024f176e51825513a3d061739e390_2_500x500.png' },
  { name: 'Subhankar Ghosh', role: 'CTO', avatar: 'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-520-cute-groom-avatar-image_1153286.jpg' },
  { name: 'Sahul Kumar Parida', role: 'Technical Lead', avatar: 'https://tr.rbxcdn.com/180DAY-63a2b9e0f7081568dae19c0c2bd59070/420/420/Hat/Webp/noFilter' },
  { name: 'Saswat Kumar Panda', role: 'Technical Lead', avatar: 'https://media.licdn.com/dms/image/v2/D5603AQG671-c6ua-Tw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721362133891?e=1740009600&v=beta&t=OJNdTCTCdHsiyAzd7tWDkiaP2HX18tb_Y7a-E8Zi75w' },
]

const milestones = [
  { year: '2025', event: 'Formation of Akarshana' },
  { year: '2026', event: 'Trying to achieve Zeroth Principle' },
  { year: '2027', event: 'Strategic Alliances' },
  { year: '2028', event: 'Developing Strategies to reach goals' },
  { year: '2029', event: 'Integration of Technologies for providing better solutions' },
]

export default function About() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          About Akarshana
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            At Akarshana, we are committed to revolutionizing the energy sector through our innovative gravity-powered electrical energy generation system. Our mission is to provide sustainable, safe, and affordable energy solutions that contribute to a cleaner and greener future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                Innovative Technology
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Developing cutting-edge gravity-powered systems for efficient energy generation.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                Safe and Reliable
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ensuring the highest standards of safety and reliability in our energy solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                Cost-Effective
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Providing affordable energy solutions with lower lifetime costs.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md inline-block">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{milestone.year}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="mb-4">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{member.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
