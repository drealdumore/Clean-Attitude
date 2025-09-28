import Link from "next/link";
import { motion } from "framer-motion";

export default function MenuLink({
  link,
  label,
  extra,
}: {
  link: string;
  label: string;
  extra?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={link}
        className={`relative inline-flex items-center gap-2 font-medium transition-all duration-300 group ${
          extra 
            ? "bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 hover:shadow-xl" 
            : "text-gray-700 hover:text-primary px-4 py-2 rounded-lg hover:bg-primary/5"
        }`}
      >
        {label}
        {extra && (
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        {!extra && (
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        )}
      </Link>
    </motion.div>
  );
}
