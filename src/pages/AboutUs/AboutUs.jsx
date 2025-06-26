
const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* hero section */}
      <div className="text-white py-16 px-6 rounded-lg mb-12 text-center relative overflow-hidden">
        {/* bg image */}
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZb1ObIk0VVsJnYfQKxxE_cnInV1arydx6CA&s'
          className="w-full h-full absolute inset-0 object-cover"
          alt="Newsletter image"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* text content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
            About Our Company
          </h1>
          <p className="text-xl opacity-90">
            Building digital solutions since 2010
          </p>
        </div>
      </div>

      {/* main contents */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* story */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            We started in a small garage with just three people and a big dream.
            Today, we're a team of 50+ professionals helping businesses across
            the globe.
          </p>
          <p className="text-gray-600">
            Our journey has been marked by innovation, dedication, and a
            commitment to delivering exceptional results for our clients.
          </p>
        </div>

        {/* what we do */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-green-800 mb-4">What We Do</h2>
          <p className="text-gray-600 mb-4">
            We specialize in creating custom software solutions that help
            businesses work smarter and grow faster.
          </p>
          <div className="flex items-center mt-6">
            <span className="text-4xl mr-4">⌨️</span>
            <p className="text-gray-600">
              From web applications to mobile apps, we build tools that make a
              difference.
            </p>
          </div>
        </div>

        {/* our team */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 md:col-span-2">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Our Team</h2>
          <p className="text-gray-600 mb-4">
            We're proud of our diverse team of developers, designers, and
            business experts who bring different perspectives to every project.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded text-center">
              <p className="text-green-800 font-bold text-2xl">12+</p>
              <p className="text-gray-600">Years experience</p>
            </div>
            <div className="bg-green-50 p-4 rounded text-center">
              <p className="text-green-800 font-bold text-2xl">50+</p>
              <p className="text-gray-600">Team members</p>
            </div>
            <div className="bg-green-50 p-4 rounded text-center">
              <p className="text-green-800 font-bold text-2xl">200+</p>
              <p className="text-gray-600">Projects completed</p>
            </div>
            <div className="bg-green-50 p-4 rounded text-center">
              <p className="text-green-800 font-bold text-2xl">98%</p>
              <p className="text-gray-600">Client satisfaction</p>
            </div>
          </div>
        </div>

        {/* values */}
        <div className="bg-green-50 p-8 md:col-span-2 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our work.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Client Focus</h3>
              <p className="text-gray-600">Your success is our top priority.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Continuous Learning</h3>
              <p className="text-gray-600">
                We're always improving our skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
