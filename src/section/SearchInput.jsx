import { useState } from 'react';
import { Sparkles, Link } from 'lucide-react';

const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleGenerate = () => {
    console.log("submitted URL:", inputValue);
  };

  return (
    <div className="max-w-3xl mx-auto mb-12">
      <div className="relative">
        <div className="flex items-center bg-code-bg/70 backdrop-blur-sm border border-gray-700 rounded-xl p-4 focus-within:ring-2 focus-within:ring-algo-blue focus-within:border-algo-blue transition-all">
          <Link className="w-5 h-5 mr-3 text-gray-400" />
          <input
            type="text"
            placeholder="Paste Leetcode/GFG question URL..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 text-lg"
          />
          <div className="flex items-center gap-3 ml-4">
            <button 
              onClick={handleGenerate}  
              className="px-4 py-2 bg-algo-blue hover:bg-algo-blue/90 rounded-lg transition-colors flex items-center gap-2"
              title="Generate Video"
            >
              <Sparkles className="w-5 h-5" />
              <span>Generate</span>
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">
          Example: https://leetcode.com/problems/two-sum/
        </p>
      </div>
      <p className="text-2xl text-white mt-2 text-center">or</p>
    </div>
  );
};

export default SearchInput;
