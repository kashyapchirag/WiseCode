import { motion } from "motion/react";

const FeatureCard = ({ icon, title, description, iconBg, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-[#111] border border-white/5 rounded-xl p-5 flex flex-col gap-3 hover:border-white/10 transition-colors"
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: iconBg }}
      >
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium text-neutral-200 mb-1.5">
          {title}
        </div>
        <div className="text-xs text-neutral-600 leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
