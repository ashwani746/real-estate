import { useState } from 'react';


export default function FabricationInquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    material: '',
    quantity: '',
    timeline: '',
    specifications: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(""); // Added for the status message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.specifications.trim()) newErrors.specifications = 'Please provide project details';
    
    return newErrors;
  };

  // Logic updated as requested
  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Check custom validation first
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setResult("Sending....");
    
    const formDataObj = new FormData(event.target);
    formDataObj.append("access_key", "11f88fb4-0ce9-4a87-b3ea-07a752b31927");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setSubmitted(true);
        alert('Form Submitted Successfully');
        
        // Reset React State (Required for controlled inputs)
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          projectType: '',
          material: '',
          quantity: '',
          timeline: '',
          specifications: '',
        });
        
        // Hide success message after 4 seconds
        setTimeout(() => setSubmitted(false), 4000);
        
      } else {
        console.log("Error", data);
        alert(data.message); // Fixed string literal to variable
        setResult("");
      }
    } catch (error) {
      console.error("Submission Error", error);
      setResult("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50 py-4 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header Card */}
        <div className="bg-white rounded-t-2xl shadow-xl overflow-hidden border-t-4 border-orange-500">
          <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white opacity-5 rounded-full -mr-16 sm:-mr-24 md:-mr-32 -mt-16 sm:-mt-24 md:-mt-32"></div>
            <div className="absolute bottom-0 left-0 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 bg-white opacity-5 rounded-full -ml-12 sm:-ml-18 md:-ml-24 -mb-12 sm:-mb-18 md:-mb-24"></div>
            <div className="relative z-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3 tracking-tight">Gyan Enterprises</h1>
              <div className="h-1 w-16 sm:w-20 md:w-24 bg-white mb-3 sm:mb-4 rounded-full"></div>
              <p className="text-base sm:text-lg md:text-xl text-orange-50 font-medium">Fabrication & Engineering Workshop</p>
              <p className="text-sm sm:text-base text-orange-100 mt-1 sm:mt-2">Get a Free Quote - Submit Your Project Requirements</p>
            </div>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mx-4 sm:mx-6 md:mx-8 mt-4 sm:mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 sm:p-5 rounded-lg shadow-sm">
              <div className="flex items-start sm:items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-green-800 font-bold text-base sm:text-lg">Inquiry Submitted Successfully!</p>
                  <p className="text-green-700 text-xs sm:text-sm mt-1">Our team will contact you within 24 hours with a detailed quote.</p>
                </div>
              </div>
            </div>
          )}

          <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            {/* Added form tag to wrap inputs */}
            <form onSubmit={onSubmit} className="space-y-6 sm:space-y-8">
              
              {/* Contact Information Section */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-4 sm:p-5 md:p-6 border border-slate-200">
                <div className="flex items-center mb-4 sm:mb-5">
                  <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-2 sm:mr-3"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Contact Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white border-2 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-200 ${
                        errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-xs sm:text-sm mt-1.5 sm:mt-2 flex items-center">
                        <span className="mr-1">⚠</span> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white border-2 border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-200 hover:border-gray-400"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white border-2 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-200 ${
                        errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs sm:text-sm mt-1.5 sm:mt-2 flex items-center">
                        <span className="mr-1">⚠</span> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white border-2 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-200 ${
                        errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-xs sm:text-sm mt-1.5 sm:mt-2 flex items-center">
                        <span className="mr-1">⚠</span> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Details Section */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 sm:p-5 md:p-6 border border-orange-200">
                <div className="flex items-center mb-4 sm:mb-5">
                  <div className="w-1.5 sm:w-2 h-6 sm:h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-2 sm:mr-3"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Project Details</h3>
                </div>
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white border-2 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-200 ${
                        errors.projectType ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <option value="">-- Select Project Type --</option>
                      <option value="metal-fabrication">⚙️ Metal Fabrication</option>
                      <option value="welding">🔥 Welding Services</option>
                      <option value="machining">🔧 CNC Machining</option>
                      <option value="structural-steel">🏗️ Structural Steel Work</option>
                      <option value="sheet-metal">📋 Sheet Metal Work</option>
                      <option value="custom-parts">🔩 Custom Parts Manufacturing</option>
                      <option value="repair">🛠️ Repair & Maintenance</option>
                      <option value="other">➕ Other</option>
                    </select>
                    {errors.projectType && (
                      <p className="text-red-600 text-xs sm:text-sm mt-1.5 sm:mt-2 flex items-center">
                        <span className="mr-1">⚠</span> {errors.projectType}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                        Material Type
                      </label>
                      <select
                        name="material"
                        value={formData.material}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white border-2 border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-200 hover:border-gray-400"
                      >
                        <option value="">-- Select Material --</option>
                        <option value="mild-steel">Mild Steel</option>
                        <option value="stainless-steel">Stainless Steel</option>
                        <option value="aluminum">Aluminum</option>
                        <option value="copper">Copper</option>
                        <option value="brass">Brass</option>
                        <option value="carbon-steel">Carbon Steel</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                        Quantity/Volume
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white border-2 border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-200 hover:border-gray-400"
                        placeholder="e.g., 50 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Required Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white border-2 border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-200 hover:border-gray-400"
                    >
                      <option value="">-- Select Timeline --</option>
                      <option value="urgent">⚡ Urgent (1-2 weeks)</option>
                      <option value="normal">📅 Normal (3-4 weeks)</option>
                      <option value="flexible">🕐 Flexible (1-2 months)</option>
                      <option value="long-term">📆 Long-term (2+ months)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Project Specifications & Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="specifications"
                      value={formData.specifications}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white border-2 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all duration-200 resize-none ${
                        errors.specifications ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="Please provide detailed specifications including:&#10;• Dimensions and tolerances&#10;• Finish requirements&#10;• Quality standards&#10;• Any special requirements&#10;• Reference drawings or standards"
                    />
                    {errors.specifications && (
                      <p className="text-red-600 text-xs sm:text-sm mt-1.5 sm:mt-2 flex items-center">
                        <span className="mr-1">⚠</span> {errors.specifications}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={result === "Sending...."}
                className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 hover:from-orange-700 hover:via-orange-600 hover:to-red-700 text-white font-bold text-base sm:text-lg py-3 sm:py-4 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center">
                  {result === "Sending...." ? (
                     "Sending..."
                  ) : (
                    <>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Submit Inquiry for Quote
                    </>
                  )}
                </span>
              </button>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 text-center">
                <p className="text-xs sm:text-sm text-blue-800">
                  <span className="font-semibold">Note:</span> All fields marked with <span className="text-red-500 font-bold">*</span> are mandatory. 
                  We typically respond within 24 hours with a detailed quotation.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-4 sm:px-6 md:px-8 py-5 sm:py-6 rounded-b-2xl shadow-xl">
          <div className="text-center">
            <p className="text-base sm:text-lg font-semibold mb-1">Gyan Enterprises</p>
            <p className="text-slate-300 text-xs sm:text-sm">Quality Fabrication & Engineering Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}