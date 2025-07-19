import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      {/* Banner */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        🚀 SkyntCo LLC is launching new SaaS products soon — stay tuned!
      </div>

      {/* Navigation */}
<header className="bg-blue-50">
  <div className="flex justify-between items-center w-full px-8 py-4 bg-blue-50">
  {/* Logo */}
  <Image
    src="/skyntco-logo.png"
    alt="SkyntCo LLC Logo"
    width={120}
    height={120}
    priority
  />

  {/* Tech Banner */}
  <div
    className="flex-grow h-20 bg-cover bg-center rounded-md"
    style={{ backgroundImage: "url('/tech-banner.jpg')" }}
  ></div>
  </div>
  </header>

  {/* Navigation */}
   <div className="w-full bg-blue-50 sticky top-0 z-50">
    <nav className="max-w-7xl mx-auto flex justify-start gap-6 pl-8 py-2 text-gray-700">
      <a href="#" className="hover:text-blue-600">Home</a>
      <a href="#products" className="hover:text-blue-600">Products</a>
      <a href="#about" className="hover:text-blue-600">About</a>
      <a href="#contact" className="hover:text-blue-600">Contact Us</a>
    </nav>
   </div>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to SkyntCo LLC 🚀
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          We’re building the future — one digital step at a time!
        </p>
        <a href="#products">
  <button
    style={{
      backgroundColor: "#2563eb",
      color: "#ffffff",
      border: "none",
      padding: "0.75rem 1.5rem",
      borderRadius: "0.375rem",
      fontWeight: "bold",
      fontSize: "1rem",
      cursor: "pointer",
      marginTop: "1rem",
    }}
  >
    Get Started
  </button>
</a>
      </main>

     {/* Products Section */}
<section id="products" className="p-8 bg-gray-50">
  <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
    Our Products
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
   {/* EmailResponder */}
<div
  className="bg-white rounded shadow p-6 flex flex-col items-center text-center"
  data-aos="fade-up"
  data-aos-delay="0"
>
  <Image
    src="/images/emailresponder-icon.png"
    alt="EmailResponder Icon"
    width={80}
    height={80}
  />
  <h3 className="text-xl font-semibold mt-4 text-blue-700">
    EmailResponder
  </h3>
 <p className="text-gray-600 mt-2 text-sm leading-snug tracking-tight">
    Meet EmailResponder — your smart email assistant that replies for you!
    Generate professional responses in seconds using AI. Easily change tone,
    language, or content. Includes reply history, mobile support, and a
    friendly interface. Try it free for 7 days, then just $4.99/month!
  </p>
 <a
  href="/emailresponder"
  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
>
  Start 7-Day Free Trial
</a>
</div>

    {/* LandingLens */}
  <div
    data-aos="fade-up"
    data-aos-delay="100"
    className="bg-white rounded shadow p-6 flex flex-col items-center text-center"
>
  <Image
    src="/images/landinglens-icon.png"
    alt="LandingLens Icon"
    width={80}
    height={80}
  />
  <h3 className="text-xl font-semibold mt-4 text-blue-700">
    LandingLens
  </h3>
  <p className="text-gray-600 mt-2 text-sm">
    Supercharge your marketing with LandingLens — the AI-powered landing page generator that creates high-converting pages in minutes. Whether launching a SaaS product or testing new ideas, LandingLens helps you design, write, and deploy stunning pages without a single line of code.
  </p>
  <a
    href="https://davitsprint.gumroad.com/l/pgmhp"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
  >
    View on Gumroad ($6.99)
  </a>
</div>

    {/* ResumeCrafter */}
    <div
        className="bg-white rounded shadow p-6 flex flex-col items-center text-center"
        data-aos="fade-up"
        data-aos-delay="200"
>
      <Image
        src="/images/resumecrafter-icon.png"
        alt="ResumeCrafter Icon"
        width={80}
        height={80}/>
      <h3 className="text-xl font-semibold mt-4 text-blue-700">
        ResumeCrafter
      </h3>
      <p className="text-gray-600 mt-2 text-sm">
        Say goodbye to blank-page anxiety! ResumeCrafter is your personal AI resume assistant, helping you craft tailored, professional resumes that showcase your skills and get noticed by employers. Get custom suggestions for wording, layout, and tone — all in just a few clicks.
      </p>
     <a
       href="https://davitsprint.gumroad.com/l/dxmqzw"
       target="_blank"
       rel="noopener noreferrer"
       className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-semibold"
>
       View on Gumroad ($5.99)
     </a>
    </div>
  </div>
</section>
      {/* About Section */}
<section id="about" className="py-16 px-8 bg-gray-50">
  <h2 className="text-3xl font-bold mb-4 text-center">About SkyntCo LLC</h2>
  <p className="text-center max-w-3xl mx-auto text-gray-700">
    SkyntCo LLC is dedicated to building innovative SaaS solutions that empower businesses
    to thrive in the digital age. Our mission is to drive progress through technology,
    creativity, and a relentless pursuit of excellence.
  </p>
</section>

{/* Contact Us Section */}
<section id="contact" className="pt-16 pb-4 px-8">
  <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
  <p className="text-center max-w-2xl mx-auto text-gray-700 mb-8">
    Have questions, feedback, or just want to connect? We’d love to hear from you!
  </p>
  <div className="flex justify-center">
    <a
      href="mailto:info@skyntco.com"
      className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
    >
      Email Us
    </a>
  </div>
</section>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-500">
        <div className="flex justify-center mt-4">
          <a
            href="https://www.facebook.com/profile.php?id=61577963470802"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/facebook.svg"
              alt="Facebook"
              width={48}
              height={48}
            />
          </a>
        </div>
        <div className="mt-4">
          © {new Date().getFullYear()} SkyntCo LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
