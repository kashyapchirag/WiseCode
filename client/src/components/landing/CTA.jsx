import { Link } from "react-router-dom";
import { motion } from "motion/react";
const CTA = () => {
  return (
    <section className="px-8 py-16 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[75vw] mx-auto px-8 py-16 flex flex-col items-center text-center"
      >
        <h2 className="text-2xl font-medium text-white mb-3">
          Ready to level up?
        </h2>
        <p className="text-sm text-neutral-600 mb-7 max-w-xs leading-relaxed">
          Start solving today. No credit card. No account needed to browse.
        </p>
        <Link
          to="/register"
          className="text-sm px-6 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors font-medium"
        >
          Create free account
        </Link>
      </motion.div>
    </section>
  );
};

export default CTA;
