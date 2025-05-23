
import Navbar from './section/Navbar';
import HeroSection from './section/Hero';
import SearchInput from './section/SearchInput';
import QuestionInputForm from './section/QuestionInputForm';



const App = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      
      <main className="container mx-auto px-6">
        <div className="text-center py-20">
          <HeroSection />
          <SearchInput />
          <QuestionInputForm />
        
         
        </div>
      </main>

     
    </div>
  );
};

export default App;


