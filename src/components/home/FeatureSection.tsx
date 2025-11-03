import { Gamepad2, LayoutGrid, Rocket } from "lucide-react";
import cloudComputing from './../../../public/cloud-computing 1.svg'

const FeatureSection = () => {
  const services = [
    {
      icon: LayoutGrid,
      title: "Web Application",
      description: "Platform independent business solutions for maximum availability",
      color: "bg-red-50",
      iconColor: "text-red-500"
    },
    {
      icon: Rocket,
      title: "SEO",
      description: "Let the world find you on top of others",
      color: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Interactive games with perfect graphics",
      color: "bg-yellow-50",
      iconColor: "text-yellow-500"
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl text-center font-semibold">What we do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className={`${service.color} w-24 h-24 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <Icon className={`w-10 h-10 ${service.title == "Web Application" ? "border p-1 rounded-full" : ""} ${service.iconColor}`} strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-semibold text-neutral-800 mb-3">
                {service.title}
              </h3>

              <p className="text-neutral-600 text-md leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
        <div
          className="flex flex-col items-center text-center group cursor-pointer"
        >
          <div className={`bg-purple-100 w-24 h-24 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
            <img
             src={cloudComputing}
             alt="cloudComputing" />
          </div>

          <h3 className="text-xl font-semibold text-neutral-800 mb-3">
            Iot/ AI/ RObotic
          </h3>

          <p className="text-neutral-600 leading-relaxed">
            Advanced autonomous technologies to make life simple
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
