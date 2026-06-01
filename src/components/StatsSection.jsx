"use client";

import {
  Briefcase,
  Factory,
  Magnifier,
  Star,
} from "@gravity-ui/icons";

import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: <Briefcase className="h-5 w-5" />,
      value: "50K",
      label: "Active Jobs",
    },
    {
      id: 2,
      icon: <Factory className="h-5 w-5" />,
      value: "12K",
      label: "Companies",
    },
    {
      id: 3,
      icon: <Magnifier className="h-5 w-5" />,
      value: "2M",
      label: "Job Seekers",
    },
    {
      id: 4,
      icon: <Star className="h-5 w-5" />,
      value: "97%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">
      
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/images/globe.png')",
        }}
      />

   
      <div className="absolute inset-0 bg-black/50" />

   
      <div className="absolute left-1/2 top-[25%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-[140px]" />

    
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
     
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-relaxed text-white md:text-4xl">
            Assisting over 15,000 job seekers
            <br />
            find their dream positions.
          </h2>

      
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <motion.p
              initial={{ opacity: 0, rotate: -15, y: 20 }}
              whileInView={{ opacity: 1, rotate: 0, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300"
            >
              Remote Jobs
            </motion.p>

            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white"
            >
              On-site Jobs
            </motion.p>
          </div>
        </div>

        
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition duration-300 hover:border-violet-500/30"
            >
              
      
              <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-white/10 blur-3xl transition duration-300 group-hover:bg-violet-500/20" />

             
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                {stat.icon}
              </div>

           
              <h3 className="relative z-10 mt-10 text-5xl font-bold tracking-tight">
                {stat.value}
              </h3>

       
              <p className="relative z-10 mt-4 text-base text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}