const FinalCTA = () => {
  return (
    <section className="bg-black py-12 md:py-16">
      <div className="container-section">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/671e421c72d463d63b638735_Calories%20Burn.svg" 
              alt="Calories Burn Icon" 
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-white text-sm md:text-base font-medium lowercase">Calorie Burn</h3>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/671e42332dcf5c41c8e2e5f4_Pain%20Relief.svg" 
              alt="Pain Relief Icon" 
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-white text-sm md:text-base font-medium lowercase">Alleviate Pain</h3>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/671e3f98cc3a4061e6aee2b4_Sleeping.svg" 
              alt="Sleeping Icon" 
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-white text-sm md:text-base font-medium lowercase">Sleep Optimization</h3>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://cdn.prod.website-files.com/66f3459edfb782f94764ae4c/671e3f713a2a930512af22ea_boosting-potential.svg" 
              alt="Boosting Potential Icon" 
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-white text-sm md:text-base font-medium lowercase">Boost Recovery</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
