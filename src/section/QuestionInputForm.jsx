import { useState, useRef, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const QuestionInputForm = () => {
  const [questionText, setQuestionText] = useState('');
  const [showForm, setShowForm] = useState(false);
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Question submitted:', questionText);
    // Call your video generation API with this data
  };

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [questionText]);

  return (
    <div className="max-w-3xl mx-auto ">
      {!showForm ? (
       <button
  onClick={() => setShowForm(true)}
  className="mx-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-medium text-lg transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
>
  <Sparkles className="w-5 h-5" />
  <span>Generate DSA Explanation</span>
</button>
      ) : (
        <div className="bg-gray-800/70 p-6 rounded-xl border border-gray-700 shadow-lg backdrop-blur-sm">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label className="block text-gray-300 mb-2 text-lg">
                Paste your complete DSA question:
              </label>
              <textarea
                ref={textareaRef}
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder={`Example:\n\nProblem: Two Sum\nGiven an array of integers nums and an integer target...\n\nExample 1:\nInput: nums = [2,7,11,15], target = 9\nOutput: [0,1]\n\nConstraints:\n2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9`}
                className="w-full bg-gray-900/80 border-2 border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all resize-none overflow-hidden min-h-[300px]"
                required
              />
            </div>

            <div className="flex justify-end gap-4 pt-6">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Generate Video</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default QuestionInputForm;