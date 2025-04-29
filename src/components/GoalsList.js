import React, { useState, useEffect } from 'react';

export default function GoalsList() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('personal');
  
  // Load goals from localStorage on component mount
  useEffect(() => {
    const savedGoals = localStorage.getItem('inspirational-goals');
    if (savedGoals) {
      setGoals(JSON.parse(savedGoals));
    }
  }, []);
  
  // Save goals to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('inspirational-goals', JSON.stringify(goals));
  }, [goals]);

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (newGoal.trim()) {
      const newGoalItem = {
        id: Date.now(),
        text: newGoal,
        category: selectedCategory,
        completed: false,
        createdAt: new Date().toISOString()
      };
      
      setGoals(prevGoals => [...prevGoals, newGoalItem]);
      setNewGoal('');
    }
  };

  const handleToggleGoal = (id) => {
    setGoals(prevGoals => 
      prevGoals.map(goal => 
        goal.id === id 
          ? { 
              ...goal, 
              completed: !goal.completed,
              completedAt: !goal.completed ? new Date().toISOString() : undefined
            } 
          : goal
      )
    );
  };

  const handleDeleteGoal = (id) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
  };

  const filteredGoals = activeCategory === 'all' 
    ? goals 
    : goals.filter(goal => goal.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'personal', label: 'Personal' },
    { id: 'work', label: 'Work' },
    { id: 'health', label: 'Health' },
    { id: 'learning', label: 'Learning' }
  ];

  const getCategoryColor = (category) => {
    switch(category) {
      case 'personal': return 'from-purple-500 to-indigo-500';
      case 'work': return 'from-blue-500 to-cyan-500';
      case 'health': return 'from-green-500 to-emerald-500';
      case 'learning': return 'from-amber-500 to-orange-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="relative goals-container">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600 mb-6 text-center">Goal Setting</h2>
      
      <form onSubmit={handleAddGoal} className="mb-6">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            placeholder="Add a new goal..."
            className="px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
          />
          
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
            >
              {categories.filter(cat => cat.id !== 'all').map(category => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
            
            <button
              type="submit"
              className="btn-primary"
            >
              Add Goal
            </button>
          </div>
        </div>
      </form>
      
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 flex-wrap">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md transform scale-105'
                : 'bg-white/30 backdrop-blur-sm text-gray-700 hover:bg-white/50'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      {filteredGoals.length === 0 ? (
        <div className="text-center py-10 glass-card">
          <svg className="w-16 h-16 mx-auto text-purple-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p className="text-gray-600 text-lg">
            {activeCategory === 'all' 
              ? "You haven't set any goals yet." 
              : `No goals in the ${activeCategory} category.`}
          </p>
          <p className="text-gray-500 mt-2">Add a goal to get started on your journey!</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {filteredGoals.map(goal => (
            <li 
              key={goal.id}
              className={`p-4 rounded-xl transition-all duration-300 glass-card hover:shadow-lg transform hover:translate-x-1 ${
                goal.completed 
                  ? 'bg-opacity-70 border-green-200' 
                  : 'bg-opacity-60 border-purple-100'
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => handleToggleGoal(goal.id)}
                  className={`mt-1 w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                    goal.completed 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md' 
                      : 'border-2 border-purple-400 bg-white/50'
                  }`}
                  aria-label={goal.completed ? "Mark as incomplete" : "Mark as complete"}
                >
                  {goal.completed && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                
                <div className="flex-1">
                  <p className={`${goal.completed ? 'line-through text-gray-500' : 'text-gray-800'} font-medium transition-all duration-300`}>
                    {goal.text}
                  </p>
                  <div className="flex items-center mt-2 text-xs">
                    <span className={`px-2 py-1 rounded-full text-white text-xs bg-gradient-to-r ${getCategoryColor(goal.category)}`}>
                      {goal.category}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500">{new Date(goal.createdAt).toLocaleDateString()}</span>
                    {goal.completed && goal.completedAt && (
                      <>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-green-600">Completed: {new Date(goal.completedAt).toLocaleDateString()}</span>
                      </>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={() => handleDeleteGoal(goal.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 p-1 rounded-full hover:bg-white/30"
                  aria-label="Delete goal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
