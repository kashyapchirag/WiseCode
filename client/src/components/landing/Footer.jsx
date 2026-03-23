const Footer = () => {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-[75vw] mx-auto px-8 py-5 flex items-center justify-between">
        <span className="font-mono text-sm text-neutral-500">WiseCode</span>
        <span className="font-mono text-xs text-neutral-600">
          built with React · Express · MongoDB
        </span>
      </div>
    </footer>
  );
};

export default Footer;
