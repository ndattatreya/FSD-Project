import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Components/Home';
import RecipeDetail from './Components/RecipeDetail';
import RecipeForm from './Components/RecipeForm';
import MyRecipes from './Components/MyRecipes';
import EditRecipe from './Components/EditRecipe';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleSearch = (term) => {
    setSearchTerm(term);  // Pass the search term to filter recipes
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark-theme" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);  // Store the theme preference in localStorage
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} toggleTheme={toggleTheme} theme={theme} />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/recipe-form" element={<RecipeForm />} />
          <Route path="/my-recipes" element={<MyRecipes searchTerm={searchTerm} />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/edit-recipe/:id" element={<EditRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
