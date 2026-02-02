export default function Banner() {
  return (
      <section className="pt-28 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 py-14 gap-10">

          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover Your Next  
              <span className="text-blue-600"> Adventure</span> With Us
            </h2>

            <p className="mt-4 text-gray-600">
              Best tour & travel packages with budget friendly prices.
            </p>

            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
              Explore Packages
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Travel"
            className="rounded-2xl shadow-lg w-full md:w-1/2"
          />
        </div>
      </section>
     );
}
